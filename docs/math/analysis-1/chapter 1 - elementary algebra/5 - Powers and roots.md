
First a reminder of what powers can do and how they work:

1) $a^{n}= a\cdot a\cdot a\cdot a\cdot a$; $a^0=1$
2) $(ab)^n=a^n\cdot b^n$
3) $(a^n)^m=n^{nm}$
4) $a^{-n}=\cfrac{1}{a^{n}}(a\ne0)$


Let's define a function for the nth root

For $n\in\mathbb{R}^*$ and $a\in\mathbb{R}$ , we say $x\in\mathbb{R}$ est the nth root of a, written $\sqrt[n]{a}=x$ if and only if $x^{n}=a$ and (sign(x) = sign(a) or x=a=0).

This will have it's own properties:

1) $(\sqrt[n]{a})^n=a$
2) $\sqrt[n]{ab}=\sqrt[n]{a}\sqrt[n]{b}$
3) $\sqrt[n]{\sqrt[n]{a}}=\sqrt[nm]{a}$
4) $\sqrt[m]{a^n}=(\sqrt[m]{a})^n$

With some additional spicier properties:

5) $\sqrt[n]{a}=\begin{cases}a \text{ if n even}\\ |a| \text{ if n odd}\end{cases}$
6) $a\gt0; \sqrt[m]{a^n}=a^{\frac{m}{n}}$
7) $a\gt0;\frac{1}{\sqrt[m]{a^{n}}}=a^{-\frac{n}{m}}$ 


## Equations with known roots

We need to solve $\sqrt{f(x)}=g(x)$.

To solve this, we can say that

$a=m\iff a^{2}=b^{2}$ if and only if sign(a)=sign(b)

The solution:

$\forall x \in D_{def}$ we have the following equivalence:

$\sqrt{f(x)}=g(x)\iff f(x)=g^{2}(x)$ and $g(x)\ge 0$

That means that $D_{pos}=\{x\in\mathbb{R} | f(x)\text{ defined }, g(x)\text{ defined and } f(x) > 0\}$.

### Example

Solve 

$$
\sqrt{x^2-3x+6}=4x-6
$$

Step 1:

$D_{def}=\{x\in \mathbb{R}|x^2-3x+6\ge0\}=\mathbb{R}$

Step 2:

$D_{pos}=\{x\in\mathbb{R}|4x-6\ge0\}=[\frac{2}{3};+\infty[$

Step 3: solve:

first, square both sides:

$\sqrt{x^{2}-3x+6}=4x-6\iff x^{2}-3x+6 = (4x-6)^{2}$  and $x\ge \frac{3}{2}$

Then, you can solve this into (I don't want to write all that)

$0=(x-1)(x-2)$ and $x\ge \frac{3}{2}$

So, solutions are 1 and 2, but they must be greater or equal to $\frac{3}{2}$, so $S=\{2\}$


### Example 2 (parameters)

> Don't start a parametric solutions startup
> *-Prof. Samuel Dubuis*

Solve

$$
\sqrt{x^{2}+1}=x+m
$$

Step 1:

$D_{def}=\mathbb{R}$

Step 2:

$D_{pos}=[-m;\infty[$

Step 3:

square both sides, and solve, while remembering $x\ge-m$

We can solve this into

$1-m^{2} =2mx$ and $x\ge-m$


case 1: $m = 0$

$1=0 \implies S=\emptyset$

case 2: $m\ne0$

we have $\frac{1-m^{2}}{2m}$, and we must check if $\frac{1-m^{2}}{2m}\ge-m$

This can be turned into m > 0.

Step 4: summary

If m < 0, S=$\emptyset$

If m = 0, S=$\emptyset$

If m > 0, $S=\{\frac{1-m^{2}}{2m}\}$

## Less than with square roots

Solve:

$$
\sqrt{f(x)}\le g(x) \text{ and } \sqrt{f(x)}\ge g(x)
$$


The way to solve it is similar

$a\le b\iff a^{2}\le b^{2}$ if and only if $a,b\ge0$


So, solution would be $\forall x\in D_{def}$, we have the equivalent of

$\sqrt{f(x)}\le g(x) \iff f(x) \le g^2(x)$ and $g(x) \ge 0$

### Example 3

Solve:

$$
\sqrt{6-x}\le3+2x
$$

Step 1:

$D_{def} = \{x\in\mathbb{R}|6-x\ge0\}= ]-\infty;6]$

Step 2:

$D_{pos}=\{x\in\mathbb{R}|3+2x\ge0\}=[\frac{-3}{2};+\infty[$

Step 3: Square both sides, then solve.

You can fairly easily solve up to:

$4x^{2}+13x+3=0$ and $x\in [ \frac{-3}{2},6]$

Here, we used an advanced technique called 'trying to use trivial solutions on complex stuff'

$\iff 4(x^{2}+ \frac{13}{4}x+ \frac{3}{4})$ and $x\in [ \frac{-3}{2},6]$

Which boils down to making stuff solvable using the Viete method, without passing by the discriminant.

$\iff 4(x+3)(x+ \frac{1}{4})$ and $x\in [ \frac{-3}{2},6]$

This allows us to get to a solution:

$x\in[ \frac{1}{4}; 6]$ which means $S=[ \frac{1}{4};6]$


## Greater than with square roots

$\forall x\in D_{def}$, we have the equivalence:

$\sqrt{f(x)}\ge g(x)\iff \begin{cases}g(x)\le0\\\text{or}\\ g(x) \text{ and } g^2(x)\end{cases}$

Which wile annoying, is still easy to solve.

### Example 4

Solve: $\sqrt{-x^{2}-x+6}\ge x+1$

Step 1: $D_{def}=\dots=[-3;2]$

Step 2: $D_{pos}$ isn't exactly useful here, we need $D_{neg}$, that'll work better for us. It is just $\mathbb{R}\backslash D_{pos}$

Here, it's $]-\infty;-1[$, with $D_{pos}=[-1;+\infty[$

So, step 3, decompose into cases:

Case 1: x in $D_{def}\bigcap D_{neg}$, so always true.

Case 2: x in $D_{def}\bigcap D_{pos}$, which depends.


Step 3.5: solve cases

$\sqrt{-x^{2}-x+6}\ge x+1$ and $x\in D_def$

From here, we can go to

$0\ge 2(x^{2} +\frac{2}{3}- \frac{5}{2})$ and $x \in [-1;2]$
$\iff 0\ge2(x-1)(x+ \frac{5}{2})$ and $x\in[-1;2]$
$\iff x\in[- \frac{5}{2}, 1]$ and we already know $x\in[-1;2]$.

Because it's an and, 

$x\in[-1;1]=S_2$

This allows us to go for the solution:

$S=S_{1}\bigcup S_{2}$
$S=[-3;-1[\bigcup[-1;1]=[-3;1]$

[[4 - second degree trinomials|Previous]]
