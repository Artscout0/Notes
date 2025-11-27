
For now, we have indeterminate cases we don't exactly know how to solve. An example would be $\frac{\sin(x)}{x}$

Let's use some very smart policemen for this. 
Let's go with $\lim_{x\to0} \frac{\sin(x)}{x}$, and for that let's limit[^1] ourselves to $0\lt x\lt \frac{pi}{2}$

If we were to draw this in a unit circle, specifically it's quarter, you'd notice there are 3 small areas, and they are somewhat interesting. You can find that:

$\frac{1*sin(x)}{2}\le \frac{x}{2}1^{2}\le \frac{1\cdot\tan(x)}{2}$

This can be turned into:

$$
\begin{equation}
\begin{split}
\sin(x)\le \frac{x}{\sin(x)}\le \frac{1}{\cos(x)}\\
\implies \cos(x)\le \frac{\sin(x) }{x}\le 1
\end{split}
\end{equation}
$$

We know the limit at 0 of cosine of 1 to be 1, so by the two policemen we have 1.

Using that same construction, we can show $\lim_{x\to x_{0}^{-}}=1$, and thus $\lim_{x\to x_{0}}=1$.

Luckily, this means we can use this to find many other limits.

Some examples:

$\lim_{x\to0} \frac{\sin(x^{2})}{x^{2}}$
we define $y=x^{2}$
$\lim_{y\to0} \frac{\sin(y)}{y}=0$
and this means $\frac{\sin(x^{2})}{x^{2}}=1$.

Through a similar procedure, you can solve a lot of limits.

## Why infinitely small equivalents

Well, infinitely small is roughly self explanatory. Why are they equivalent though? 

Well, essentially, we look at the idea, if a  couple of functions go towards a specific value, and go there roughly at the same speed, are a couple.


## Infinitely small equivalents - definition

ISE for short from now on.

say there are f and g, functions on a pointed neighborhood of $x_{0}$. 

We define f and g to be ISE in the neighborhood of $x_{0}$, noted f~g

if $\lim_{x\to x_{0}}f(x)=\lim_{x\to x_0}g(x)=0$
and $\lim_{x\to x_{0}} \frac{f(x)}{g(x)}=1$

An example is sin(x) ~ x in the neighborhood of $x_{0}$.

Another example would be $1- \cos(x) \sim \frac{x^{2}}{2}$ in the neighborhood of $x_{0}=0$

1. check the limits, both are 0.

2. $\lim_{x\to x_{0}} \frac{1-\cos(x)}{\frac{x^{2}}{2}}=\lim_{x\to x_{0}} \frac{2\sin^{2}(x)}{2}=\lim_{x\to x_{0}}= \frac{\sin(\frac{x}{2})}{x}\cdot\frac{\sin(\frac{x}{2})}{x}=4 \lim_{x\to x_{0}} \frac{\sin(\frac{x}{2})}{2}\cdot \frac{\sin(\frac{x}{2})}{2\frac{x}{2}}=1\cdot1=1$

Another one I won't prove is $\tan(x)\sim x$ in the neighborhood of $x_{0}=0$.

Another quick ISE rule:

If $f_{1}\sim g_{1}$ and $f_{2}\sim g_{2}$ in the neighborhood of $x_{0}$. then $f_{1}\cdot f_{2}\sim g_{1}\cdot g_{2}$ in the neighborhood of $x_{0}$.

This only works with products, not addition. 

In any case, you can use this inside a limit calculation, by replacing some parts with their ISEs.

An example would be solving $\lim_{x\to0} \frac{\sin(2x)-2\sin(x)}{x^{3}}$

There are 2 ways to solve this: 'normally', and by factorizing and replacing this. 


[[3 - limits at specific values of x|Previous]]
[[5 - continuity|Next]]

[^1]:pun intended
