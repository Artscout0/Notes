
## What is a real function?

A real function is a thing that maps one set of values to another.

$f:A\subset\mathbb{R}\to B\subset\mathbb{R}$

Where any $x\in A$ has at most one image by $f$

We also can define:

$D_{f}$ the domain of definition of $f$, in other terms the set of all $x\in A$ and have an image through $f$.

The image of $f$ is $Im_{f}=\{y\in\mathbb{R}|\exists x\in D_{f}, y=f(x)\}$

The graph of $f$, noted $G_{f}$ is $\{(x,y)\in\mathbb{R}|x\in D_{f}, y=f(x)\}$

Ex 1:
$f:\mathbb{R}\to\mathbb{R}$
$x\to\sqrt{x+1}$
which has
$D_{f}=[-1;+\infty[$
and
$Im_{f}=\mathbb{R_+}$

As for it's graphic, remind me later cause I can't draw.

```canvasjs
{
  "animationEnabled": true,
  "title": {
    "text": "Graph of y = sqrt(x)"
  },
  "axisX": {
    "title": "X"
  },
  "axisY": {
    "title": "Y",
    "includeZero": false
  },
  "data": [
    {
      "type": "line",
      "markerSize": 0,
      "dataPoints": [
        { "x": 0, "y": 0 },
        { "x": 0.1, "y": 0.31622776601683794 },
        { "x": 0.2, "y": 0.4472135954999579 },
        { "x": 0.30000000000000004, "y": 0.5477225575051662 },
        { "x": 0.4, "y": 0.6324555320336759 },
        { "x": 0.5, "y": 0.7071067811865476 },
        { "x": 0.6, "y": 0.7745966692414834 },
        { "x": 0.7, "y": 0.8366600265340756 },
        { "x": 0.7999999999999999, "y": 0.8944271909999159 },
        { "x": 0.8999999999999999, "y": 0.9486832980505138 },
        { "x": 0.9999999999999999, "y": 0.9999999999999999 },
        { "x": 1.0999999999999999, "y": 1.0488088481701514 },
        { "x": 1.2, "y": 1.0954451150103321 },
        { "x": 1.3, "y": 1.140175425099138 },
        { "x": 1.4000000000000001, "y": 1.1832159566199232 },
        { "x": 1.5000000000000002, "y": 1.2247448713915892 },
        { "x": 1.6000000000000003, "y": 1.2649110640673518 },
        { "x": 1.7000000000000004, "y": 1.30384048104053 },
        { "x": 1.8000000000000005, "y": 1.341640786499874 },
        { "x": 1.9000000000000006, "y": 1.3784048752090223 },
        { "x": 2.0000000000000004, "y": 1.4142135623730951 },
        { "x": 2.1000000000000005, "y": 1.449137674618944 },
        { "x": 2.2000000000000006, "y": 1.4832396974191329 },
        { "x": 2.3000000000000007, "y": 1.5165750888103104 },
        { "x": 2.400000000000001, "y": 1.549193338482967 },
        { "x": 2.500000000000001, "y": 1.58113883008419 },
        { "x": 2.600000000000001, "y": 1.6124515496597103 },
        { "x": 2.700000000000001, "y": 1.6431676725154987 },
        { "x": 2.800000000000001, "y": 1.6733200530681513 },
        { "x": 2.9000000000000012, "y": 1.7029386365926404 },
        { "x": 3.0000000000000013, "y": 1.7320508075688776 },
        { "x": 3.1000000000000014, "y": 1.7606816861659014 },
        { "x": 3.2000000000000015, "y": 1.7888543819998322 },
        { "x": 3.3000000000000016, "y": 1.8165902124584954 },
        { "x": 3.4000000000000017, "y": 1.843908891458578 },
        { "x": 3.5000000000000018, "y": 1.870828693386971 },
        { "x": 3.600000000000002, "y": 1.897366596101028 },
        { "x": 3.700000000000002, "y": 1.923538406167135 },
        { "x": 3.800000000000002, "y": 1.9493588689617933 },
        { "x": 3.900000000000002, "y": 1.9748417658131505 },
        { "x": 4.000000000000002, "y": 2.0000000000000004 },
        { "x": 4.100000000000001, "y": 2.024845673131659 },
        { "x": 4.200000000000001, "y": 2.04939015319192 },
        { "x": 4.300000000000001, "y": 2.0736441353327724 },
        { "x": 4.4, "y": 2.0976176963403033 },
        { "x": 4.5, "y": 2.1213203435596424 },
        { "x": 4.6, "y": 2.1447610589527217 },
        { "x": 4.699999999999999, "y": 2.16794833886788 },
        { "x": 4.799999999999999, "y": 2.1908902300206643 },
        { "x": 4.899999999999999, "y": 2.213594362117865 },
        { "x": 4.999999999999998, "y": 2.2360679774997894 }
      ]
    }
  ]
}
```


There are a couple functions that are fun:

First, you can make functions that have:

$\begin{cases}x\le-1, y=x \\ x\gt1, y=\sqrt{x} \end{cases}$

which also has a fun graph

You can also have asymptotic ones like with $y=\frac{1}{x}$

And more fun ones, like:

$E:\mathbb{R}\to\mathbb{R}, x\to E(x)$
$E(x) = \text{ The greatest integer that is greater or equal to x }$


We have also some extra vocab:

Even functions have a vertical axial symmetry. A prominent example would be $\mathbb{R}\to\mathbb{R}, x\to x^{2}$.

Odd functions have a point/rotation symmetry. A decent example is $\mathbb{R}\to\mathbb{R}, x\to x^{3}$

Periodic functions (not to be confused with the table) are functions that repeat. The most known example are sine and cosine, as well as tan and other trigonometric functions.
Mathwise the definition is $\forall x \in D_{f}, \exists T, x+T\in D_{f}, f(x)=f(x+T)$

We call T>0 the period of f if T is the smallest possible number strictly positive so that T is the period of f.

Example of a periodic function:

$f:\mathbb{R}\to\mathbb{R}$
$x\to f(x)=\sin(x)\cos(x)$

What is the smallest T?

Well, we don't really like when there's a lot of trig, we try reducing it to one.
This is similar to $sin(2x)$, so we turn it into:
$\frac{1}{2}sin(2x)=\frac{1}{2}sin(2(x+T))$
$\frac{1}{2}sin(2x)=\frac{1}{2}sin(2x+2T))$
$2T = 2\pi$

This tells us that the lowest possible period is $\pi$

```canvasjs
{

"animationEnabled": true,

"title": {

"text": "Graph of y = sin(x)cos(x)"

},

"axisX": {

"title": "X"

},

"axisY": {

"title": "Y",

"includeZero": false

},

"data": [{

"type": "line",

"dataPoints": [

{"x": -5,"y": 0.2720105554446849 },

{"x": -4.9,"y": 0.18323956462596422 },

{"x": -4.8,"y": 0.08716339061149068 },

{"x": -4.7,"y": -0.012387712726677996 },

{"x": -4.6,"y": -0.1114449570501221 },

{"x": -4.5,"y": -0.2060592426208767 },

{"x": -4.4,"y": -0.29245859644587935 },

{"x": -4.3,"y": -0.3671985489370549 },

{"x": -4.2,"y": -0.4272994540441388 },

{"x": -4.1,"y": -0.4703652783398854 },

{"x": -4.0,"y": -0.49467912331169045 },

{"x": -3.9,"y": -0.49927167268730266 },

{"x": -3.8,"y": -0.483959836015744 },

{"x": -3.7,"y": -0.44935404790581474 },

{"x": -3.6,"y": -0.39683393192457844 },

{"x": -3.5,"y": -0.3284932993593969 },

{"x": -3.4,"y": -0.24705667556930677 },

{"x": -3.3,"y": -0.15577068175669187 },

{"x": -3.2,"y": -0.05827460242524946 },

{"x": -3.1,"y": 0.04154470140874554 },

{"x": -3.0,"y": 0.13970774909946038 },

{"x": -2.9,"y": 0.2323010897068763 },

{"x": -2.8,"y": 0.3156333189361587 },

{"x": -2.7,"y": 0.3863822437779922 },

{"x": -2.6,"y": 0.44172732786007557 },

{"x": -2.5,"y": 0.47946213733156856 },

{"x": -2.4,"y": 0.49808230441792006 },

{"x": -2.3,"y": 0.4968455018167325 },

{"x": -2.2,"y": 0.4758010369447585 },

{"x": -2.1,"y": 0.43578788620679487 },

{"x": -2.0,"y": 0.37840124765396527 },

{"x": -1.9,"y": 0.30592894547136085 },

{"x": -1.8,"y": 0.22126022164742762 },

{"x": -1.7,"y": 0.12777055101341714 },

{"x": -1.6,"y": 0.029187071713791375 },

{"x": -1.5,"y": -0.0705600040299323 },

{"x": -1.4,"y": -0.16749407507795128 },

{"x": -1.3,"y": -0.25775068591073114 },

{"x": -1.2,"y": -0.33773159027557464 },

{"x": -1.1,"y": -0.40424820190979455 },

{"x": -1.0,"y": -0.45464871341284047 },

{"x": -0.9,"y": -0.4869238154390974 },

{"x": -0.8,"y": -0.49978680152075255 },

{"x": -0.7,"y": -0.4927248649942303 },

{"x": -0.6,"y": -0.46601954298361353 },

{"x": -0.5,"y": -0.4207354924039488 },

{"x": -0.4,"y": -0.35867804544976206 },

{"x": -0.3,"y": -0.2823212366975185 },

{"x": -0.2,"y": -0.1947091711543262 },

{"x": -0.1,"y": -0.09933466539753162 },

{"x": 0,"y": 0 },

{"x": 0.1,"y": 0.09933466539752961 },

{"x": 0.2,"y": 0.19470917115432432 },

{"x": 0.3,"y": 0.28232123669751685 },

{"x": 0.4,"y": 0.3586780454497607 },

{"x": 0.5,"y": 0.4207354924039477 },

{"x": 0.6,"y": 0.4660195429836128 },

{"x": 0.7,"y": 0.49272486499422985 },

{"x": 0.8,"y": 0.4997868015207526 },

{"x": 0.9,"y": 0.48692381543909785 },

{"x": 1.0,"y": 0.45464871341284135 },

{"x": 1.1,"y": 0.4042482019097957 },

{"x": 1.2,"y": 0.3377315902755762 },

{"x": 1.3,"y": 0.25775068591073286 },

{"x": 1.4,"y": 0.16749407507795316 },

{"x": 1.5,"y": 0.07056000402993426 },

{"x": 1.6,"y": -0.02918707171378938 },

{"x": 1.7,"y": -0.12777055101341517 },

{"x": 1.8,"y": -0.22126022164742581 },

{"x": 1.9,"y": -0.3059289454713593 },

{"x": 2.0,"y": -0.378401247653964 },

{"x": 2.1,"y": -0.4357878862067938 },

{"x": 2.2,"y": -0.4758010369447579 },

{"x": 2.3,"y": -0.49684550181673215 },

{"x": 2.4,"y": -0.49808230441792034 },

{"x": 2.5,"y": -0.47946213733156917 },

{"x": 2.6,"y": -0.4417273278600766 },

{"x": 2.7,"y": -0.3863822437779936 },

{"x": 2.8,"y": -0.3156333189361605 },

{"x": 2.9,"y": -0.2323010897068783 },

{"x": 3.0,"y": -0.13970774909946249 },

{"x": 3.1,"y": -0.04154470140874776 },

{"x": 3.2,"y": 0.05827460242524726 },

{"x": 3.3,"y": 0.15577068175668976 },

{"x": 3.4,"y": 0.24705667556930488 },

{"x": 3.5,"y": 0.3284932993593952 },

{"x": 3.6,"y": 0.3968339319245771 },

{"x": 3.7,"y": 0.4493540479058138 },

{"x": 3.8,"y": 0.4839598360157435 },

{"x": 3.9,"y": 0.49927167268730255 },

{"x": 4.0,"y": 0.4946791233116907 },

{"x": 4.1,"y": 0.4703652783398863 },

{"x": 4.2,"y": 0.42729945404414027 },

{"x": 4.3,"y": 0.36719854893705667 },

{"x": 4.4,"y": 0.29245859644588157 },

{"x": 4.5,"y": 0.2060592426208791 },

{"x": 4.6,"y": 0.1114449570501247 },

{"x": 4.7,"y": 0.012387712726680657 },

{"x": 4.8,"y": -0.08716339061148806 },

{"x": 4.9,"y": -0.18323956462596172 },

{"x": 5.0,"y": -0.27201055544468267 }

]

}]

}
```


We have also some more definitions:

Functions can be increasing, in which case they're always increasing in value with x, or decreasing as opposed to x.

A monotonous one is either always increasing or always decreasing.
If a function is strictly monotonous, it's automatically injective. It's worth noting that if it's injective it doesn't always mean it's monotonous.

A function can be composed of two (or more) others:
$h(x)=f(g(x))=f\circ g(x)$

You can use absolute values in functions with evident effects.


Lastly, functions can also be majored and minored, as in they can have a value greater than every one of their values, and/or a value lower than every one of their values.

If it's both majored and minored, it's bordered.
It's also possible to say: $\exists B \ge0, |f(x)|\le B,\forall x \in A$

A decent example is $\frac{1}{x}$, which is bordered on $[1,+\infty[$

On $]0;+\infty[$ however, it's only minored.

On $]-\infty;+\infty[$, it's neither majored nor minored.


[[3 - geometric series|Previous Chapter]]
[[2 - function limits|Next]]
