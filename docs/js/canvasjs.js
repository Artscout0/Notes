function renderCanvasJsCharts(root = document) {
  const codeBlocks = root.querySelectorAll("pre.canvasjs code");

  codeBlocks.forEach((codeBlock, index) => {
    const rawJson = codeBlock.textContent.trim();
    
    let chartData;

    try {
      chartData = JSON.parse(rawJson);
    } catch (e) {
      console.warn("CanvasJS: Invalid JSON", rawJson);
      return;
    }

    const chartId = `canvasjs-chart-${Date.now()}-${index}`;
    const chartDiv = document.createElement("div");
    chartDiv.id = chartId;
    chartDiv.style.width = "100%";
    chartDiv.style.height = (chartData.height ?? 400) + "px";

    // Replace the outer container
    const container = codeBlock.closest("pre.canvasjs");
    if (container) {
      container.replaceWith(chartDiv);
    } else {
      console.warn("CanvasJS: No .canvasjs container found");
      return;
    }

    // Optional: inject user functions
    if (chartData.inject && typeof chartData.inject === "object") {
      for (const [name, fnBody] of Object.entries(chartData.inject)) {
        try {
          window[name] = new Function("event", fnBody);
        } catch (e) {
          console.warn(`CanvasJS: Failed to inject function '${name}'`, e);
        }
      }
    }

    

    try {
      const chart = new CanvasJS.Chart(chartId, {
        animationEnabled: true,
        zoomEnabled: true,
        theme: chartData.theme || "light2",
        ...chartData,
      });
      chart.render();
    } catch (e) {
      console.error("CanvasJS: Render failed", e);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.CanvasJS) renderCanvasJsCharts();
});
document.addEventListener("pjax:complete", () => {
  if (window.CanvasJS) renderCanvasJsCharts();
});
