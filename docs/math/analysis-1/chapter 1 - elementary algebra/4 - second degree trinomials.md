
The definition of a trinomial is:

For $a,b,c\in\mathbb{R}$ and $a\ne0$, we call a 2nd degree trinomial is the number
$P(x)=ax^2+bx+c\in\mathbb{R}$

So, let's factorize this. 
It's more difficult, as we don't know a, b, and c. 

Let's do it as follows:

$$
\begin{equation}
\begin{split}
P(x)=a[x^2+\frac{bx}{a}+\frac{c}{a}]\\
=a[x^2+2\frac{b}{2a}x+\frac{c}{a}]\\
=a[x^2+2\frac{b}{2a}+\frac{b}{2a}^2-\frac{b}{2a}^2+\frac{c}{a}]\\
=a[x+\frac{b}{2a}]-\frac{b^2-4ac}{4a^2}\\
*\Delta=b^2-4ac\\
=a[(x+\frac{b}{2a})^2-\frac{\Delta}{4a^2}]\\
\end{split}
\end{equation}
$$

This allows for some cases:

case 1: $\Delta\lt0$

We can not factorize further, and $(x+\frac{b}{2a})^2-\frac{\Delta}{4a^2}>0$
so $sign(P(x))=sign(a), \forall x$


Case 2: $\Delta=0$
$P(x)=a(x+\frac{b}{2a})^2\iff x=\frac{-b}{2a}$
and the sign is $sign(P(x)=sign(a)\forall x\ne \frac{-b}{2a}$

Case 3: $Delta\gt 0$

$$
\begin{equation}
\begin{split}
P(x)=a(x+\frac{b}{2a}-\frac{\sqrt{\Delta}}{2a})((x+\frac{b}{2a}+\frac{\sqrt{\Delta}}{2a}))\\
=a(x-\frac{-b+\sqrt{\Delta}}{2a})(x+\frac{-b+\sqrt{\Delta}}{2a})\\
\implies P(x)=0 \iff \frac{b^2\pm4ac}{2a}
\end{split}
\end{equation}
$$

This can be turned into a sign table that results in:

sign(a) => $]-\infty;x_1[\bigcup]x_2;+\infty[$
-sign(a) => $]x_1;x_2[$
0 =>{$x_1$, $x_2$}


If we do some geometry, we'll notice that in the first case, we have a parabola that doesn't touch the y=0 line. If a>0, it'll be above the line. If a<0, it'll be under it.

In the second case, it'll touch the line at exactly one point. a > 0 => above, a < 0, below.

In the 3rd case, it touches it in 2 points ($x_1$ an $x_2$). a > 0 => above, a < 0, below.


Some notes:

1. the highest point of the parabola is always $\frac{-b}{2a}$, and it's height is $\frac{-\Delta}{4a}$
2. If $\Delta\gt0$, then we formulas of Viete, which are $x_1+x_2=\frac{-b}{a}$ and $x_1*x_2=\frac{c}{a}$

## Example 1

solve for x according to m

$x^2-2x-m^2+m\le0$

Step 1:
$D_{def}=\mathbb{R}$ 

Step 2:

Find $\Delta$:
$\Delta=b^2-4ac=4+4m^2-8m=4(m-1)^2$

$4(m-1)^2$ is always $\ge0$.

$x_{1,2}=\cfrac{2+\sqrt{4(m-1)^2}}{2}$

so $x_1=m$, $x_2=2-m$.

as a = 1 > 0, the trinomial is is negative only between the roots.

Anyhow,

if $m \gt-2-m\iff m>1$ so, $\forall x \in[2-m;m]$

if $m < 2-m \iff m < 1$, so the trinomial is $\le 0$ $\forall x \in [m; 2-m]$

If $m = 2 - m \iff m=1$, and $x=m=1$. 

Therefore:

If $m < 1 \implies S=[m;2-m]$
If $m=1\implies S={1}$
If $m > 1 \implies S=[2-m; m]$


## Example 2

For which values of $m\in\mathbb{R}$ do we have 

$P(x)=(2m+1)x^2+2(m-1)x+m-3>0, \forall x \in R$

> [!note]-
> This is a slightly different type of exercise, it's technically an inverse exercise, as we have the solution we need.


We want a parabola which is in it's entirety greater than 0, so it's above y=0, and doesn't intersect it anywhere.


There are 2 conditions:

1. $a > 0\iff2m+1>0$
2. $\Delta=b^2-4ac < 0 \iff (2(m-1))^2-4(2m+1)(m-3)$

1 can be turned into $S_1=]-\frac{1}{2};+\infty[$

2 needs some work:

$$
\begin{equation}
\begin{split}
4(m-1)^2-4(2m^2-5m-3)^2<0\\
4m^2-8m+4-8m^2+20m+12<0\\
-4m^2+12m+16<0\\
4m^2-12m-16>0\\
4(m^2-3m-4)>0\\
4(m-4)(m+1)>0
\end{split}
\end{equation}
$$

This results in $S_2=]-10;-1[\bigcup]4;+\infty[$

So, to finally find S, we need what satisfies both conditions, so $S=S_1\bigcap S_2=]4;+\infty[$


## Example 3

We have $P(x)=mx^2-mx-m-1, m\in\mathbb{R*}$

For which values of m does P(x) admit 2 distinct roots $x_1$ and $x_2$ so that $-2\le x_1 \lt 1 \lt x_2$?


Let's do some geometry. 

We need a parabola, either a "normal" or "upside down" one, that crosses the y=0 line at two points so that they satisfy the previously stated condition. 

In one case, we have $P(-2)>0$ and $P(1)<0$, in the other $P(-2)<0$ and $P(1)>0$.

So we need:
1.  a parabola, so that $a\ne0$ so $m\ne0$
2. $\Delta>0\iff(-m)^2-4m(-m-1)>0$
3. $x_1<1<x_2$: P(1) and m have opposite signs
4. $2\le x_1$: P(-2) and m have the same sign


1: $S_1 = R$\*

2: 
...
$m(5m+4) > 0$
$\iff m\in]-\infty;\frac{4}{5}[\bigcup]0;+\infty[$

3:

$m(m-m-m-1)<0\iff m(-m-1)=<0$
$\iff -m(m+1)<0\iff m(m+1)>0$
$\iff S=]-\infty;-1[\bigcup]0;+\infty[$

4:

...
$\iff m(5m-1)\ge0$
$\iff m\in]-\infty;0[\bigcup[\frac{1}{5};+\infty[$

So, we need $S_1\bigcap S_2\bigcap S_3 \bigcap S_4$

$S = ]-10;-1[\bigcup[\frac{1}{5};+\infty[$

[[3 - Absolute value|Previous]]
[[5 - Powers and roots|Next]]

