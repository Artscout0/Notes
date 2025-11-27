Say we have 2 functions, like $x^2$ and $\frac{x^{3}-2x^{2}}{x-2}$. Both look fairly similar, the major difference is: the second function is undefined at $x=2$.

## Continuity

First, let's define functions defined in the neighborhood[^1]. It is defined if $\exists\delta\gt0, s.t. ]x_{0}-\delta;x_{0}+\delta[\subset D_{f}$.

The definition of a function continuous in $x_{0}$ is:

Say f is a function defined in the neighborhood of $x_{0}$. We say that f is continuous at $x_{0}\in D_{f}$ if:

$$
\lim_{x\to x_{0}}f(x)=f(x_{0})
$$

In human terms, even though this one is kind of obvious, it means that the limit of the function at $x_{0}$ is $f(x_{0})$.

### Quick important notes
to be continuous in $x_{0}$, it needs to satisfy 3 conditions:
- f is defined at $x_{0}$
- $\lim_{x\to x_{0}}=L\in\mathbb{R}$ (so the limit exists)
- $L=f(x_{0})$

If any of those things isn't the case, the function isn't continuous.

### Examples

So, let's break these conditions, shall we?

Let's start with the good old $\frac{\sin(x)}{x}$. f(x) isn't defined at x=0, while the limit there is 1. This means it isn't continuous.

Another example would be something like:

$$
f: x\to f(x)=\begin{cases}x=2\implies6\\ x\ne2\implies\frac{x^{3}-2x^{2}}{x-2}\end{cases}
$$

so, f(2) is 6, while the limit there is 4. This isn't continuous.


Then, in we can have limits simply not exist, in cases like 
$f(x)=\begin{cases}x\le1\implies x\\x\gt1\implies x^{2}+1\end{cases}$

This doesn't have a limit at x=1, but is defined there. Meaning this isn't continuous.


Another really cool example is $\sin(\frac{1}{x})$
It's defined on $\mathbb{R}^{*}$. It's undefined at 0. 
This means it isn't continuous. 

It's a really cool function, find it [here](https://www.desmos.com/calculator/73hjbuwvyb).

A last example would be $\begin{cases}x=0\implies 0\\ x\ne0\implies x\sin(\frac{1}{x})\end{cases}$

It's also a really cool function to look at, and because of our cases, it's actually defined at 0, which makes it continuous.

### More notes

if f is continuous at $x_{0}$, as $\lim_{x\to x_{0}}f(x)=f(x_{0})$
which means:

$\forall \epsilon\gt0,\exists\delta\gt0,\text{so that } |x-x_{0}|\lt\delta\implies|f(x)-f(x_{0})|\lt\epsilon$


Say I is an interval. We say f is continuous on I $\iff$ f is continuous on every $x_{0}\in I$.

We note $C^{0}I=\{f:T\to\mathbb{R}|f \text{ is continuous on } I\}$.

## Why continuous

How many functions are continuous? Well, an infinite amount really. Most functions we know are close enough to continuous. Otherwise, this wouldn't really matter.

Let's do some examples first, like let's check if $\sqrt{x}\in C^{o}(\mathbb{R}_{+}^{*})=C^{o}(]0;+\infty[)$.
Let's check using $\epsilon,\delta$. We need to show $\lim_{x\to x_{0}}\sqrt{x}=\sqrt{x_{0}}$

Say there is $x_{0}\in\mathbb{R}_{+}^{*}$ so that $|x-x_{0}|\lt\delta\implies|\sqrt{x}-\sqrt{x_{0}}|\lt\epsilon$

We solve by stronger constraint.

$|\sqrt{x}-\sqrt{x_{0}}|=| \frac{x-x_{0}}{\sqrt{x}\cdot\sqrt{x_{0}}}|\le| \frac{x-x_{0}}{\sqrt{x_{0}}}|$
So if $| \frac{x-x_{0}}{\sqrt{x_{0}}}|\le\epsilon\iff|x-x_{0}|\lt\epsilon\sqrt{x_{0}}$ we win by putting $\delta=\epsilon\sqrt{x_{0}}$.

>[!note]-
>This also nicely justifies our often used yet unexplained idea that $\lim\sqrt{x}=\sqrt{\lim x}$


Another interesting example would be to check $\sin\in C^{o}(\mathbb{R})$.
We need to prove, again, that $x_{0}\in\mathbb{R}, \lim_{x\to x_{0}}\sin(x)=\sin(x_{0})$

We remember form a bit earlier that $\lim_{x\to0}\sin(x)=0=\sin(0)$

$$
\lim_{x\to x_{0}}\sin(x)=\lim_{y\to0}\sin((y+x_{0}))=\lim_{y\to x_{0}}[\sin(y)\cos(x_{0})+\cos(y)\sin(x_{0})]=0\cos(x_{0})_1\sin(x_{0})=\sin(x_{0})
$$

Which isn't exactly the simplest proof, but it works.

## Rules of calculation

We have $f(x)$ and $g(x)$. Both are defined to be continuous.

$f\pm g$, and $f\cdot g$ are both continuous.
$\frac{f}{g}$ is continuous if g is never equal to 0. 

If f is continuous at $x_{0}$ and g is continuous at $f(x_{0})$:
then $(f\circ g)(x)$ is continuous at $x_{0}$

To summarize: for continuous function, the limit of the function is the function of the limit.

So, what are the continuous functions?

1) constants
2) polynomials
3) square roots of absolute values
4) trigonometric functions and their reciprocals
5) anything made of a combination of all that.

As an example, $\sin(\sqrt{x^{2}+1})\in C^{o}(\mathbb{R})$

## Continuity to the right and the left

> math may not repeat, but it sure does rime
> \- *idk some guy probably*

We say f is continuous to the left if $\lim_{x\to x_{0}^-}=f(x)$.
To the right if $\lim_{x\to x_{0}^{+}}=f(x)$.

An example would be 

$$f(x)=\begin{cases}x\le1\implies x\\x\gt1\implies x^{2}+1\end{cases}$$

at $1^-$, it's 1, which is f(x).
at $1+$, it's 2, which is not f(x).

So at 1, it's continuous from the left, but not the right.

Another example is

$$
f(x)=\begin{cases}x\lt1\implies x\\x\ge1\implies x^{2}+1\end{cases}
$$

same thing as before, except now it's continuous from the right, and not the left, because the value has switched.

Yet another example is $E(x)$,
which is continuous from the right for any $x\in\mathbb{Z}$.

$\sqrt{x}$ is also continuous from the right at 0. For obvious reasons, it isn't from the left.

Let's show this using ($\epsilon,\delta$), because Canada exists[^2] and that's reason enough.

we must show that for $\epsilon>0$ and $\exists\delta>0$, so that
$0\le x\lt\delta\implies|\sqrt{x}|\lt\epsilon$

We write down $\sqrt{x}\lt\epsilon\implies\sqrt{x}\lt\epsilon\iff x\lt\epsilon^{2}$
so if $\delta=\epsilon^{2}$, we have $0\le x\le \delta\implies -\le x\lt x^{2}\implies |\sqrt{x}|\lt\epsilon$.


## Continuity on an internal interval

say I is a closed interval $[a,b]$
To be continuous, it must be:

1. continuous on $]a,b[$
2. continuous on a from the right
3. continuous on b from the left.

## Lengthening by continuity

Say f is a function. defined on a pointed neighborhood of $x_{0}$ ($x_{0}\notin D_{f}$)

If there exists $L\in\mathbb{R}$ so that $\lim_{x\to x_{0}}f(x)=L$, we define the function $\tilde{f}$ named the lengthening by continuity of f, defined as $\tilde{f}=\begin{cases}x\in D_{f}\implies f(x)\\ x=x_{0}\implies L\end{cases}$

The function $\tilde{f}$ is continuous, because obviously.
We say $f$ is lengthenable at $x_{0}$ if we can build $\tilde{f}$.



[[4 - infinitely small equivalents|Previous]]

[^1]:Not the pointed, just regular neighborhood. As a reminder, pointed means without the actual point, regular includes the point itself as well.

[^2]:I hope this ages well
