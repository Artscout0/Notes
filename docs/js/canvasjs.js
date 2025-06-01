// TODO: clean this up
function replaceChartBlocks(node) {
  const regex = /££([\s\S]*?)££/g;

  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
  const textNodes = [];

  while (walker.nextNode()) {
    const currentNode = walker.currentNode;
    if (regex.test(currentNode.textContent)) {
      textNodes.push(currentNode);
    }
  }

  textNodes.forEach((textNode, index) => {
    const matches = [...textNode.textContent.matchAll(regex)];

    matches.forEach((match, matchIndex) => {
      const chartDataRaw = match[1];
      let chartData;
      try {
        chartData = JSON.parse(chartDataRaw);
      } catch (e) {
        console.warn("Skipping invalid JSON chart data:", chartDataRaw);
        return;
      }

      // Create chart container
      const chartId = `canvasjs-chart-${index}-${matchIndex}`;
      const chartDiv = document.createElement("div");
      chartDiv.id = chartId;
      chartDiv.style.height = "300px";
      chartDiv.style.width = "100%";

      // Replace ££...££ with chart div
      const beforeText = textNode.textContent.slice(0, match.index);
      const afterText = textNode.textContent.slice(match.index + match[0].length);

      const parent = textNode.parentNode;
      if (beforeText) parent.insertBefore(document.createTextNode(beforeText), textNode);
      parent.insertBefore(chartDiv, textNode);
      if (afterText) parent.insertBefore(document.createTextNode(afterText), textNode);

      parent.removeChild(textNode);

      // Render the chart after insertion
      setTimeout(() => {
        new CanvasJS.Chart(chartId, {
          animationEnabled: true,
          theme: "light2",
          title: { text: chartData.title || "Chart" },
          data: [{
            type: chartData.type || "column",
            dataPoints: chartData.dataPoints || []
          }]
        }).render();
      }, 0);
    });
  });
}

document$.subscribe(() => {
  replaceChartBlocks(document.body);
});
