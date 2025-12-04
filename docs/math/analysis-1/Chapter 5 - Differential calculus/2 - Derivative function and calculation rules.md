
Well, any derivative could be found using the limit and Newton's formula[^1]. Unfortunately derivatives come up a lot. A lot a lot. And because of that, we'd like fast consistent useful rules for them. 

## Calculation rules

### Addition

$f+g$ is derivable as $(f+g)'(x)=f'(x)\pm g'(x)$.

The proof is findable by solving:

$$
\begin{split}
\lim_{h\to0} \frac{(f+g)(x+h)-(f\pm g)(x)}{h}\\
=\lim_{h\to0} \frac{f(x+h)\pm(g(x+h)-g(x))}{h}\\
=\lim_{x\to0} [\frac{f(x+h)-f(x)}{h}\pm \frac{g(x+h)-g(x)}{h}]=f'(x)+g'(x)
\end{split}
$$

### Scalar multiplication

for f a function, $x,y\in\mathbb{R}$

$(\lambda f)(x)'=\lambda f'(x)$

This works because it works that way with limits.

$$
\begin{split}
\lim_{x\to x_{0}} \frac{\lambda f(x+h)-\lambda f(x_{0})}{h}\\
=\lim_{x\to x_{0}} \frac{\lambda(f(x)-f(x_{0}))}{h}\\
=\lim_{x\to x_{0}} \lambda \frac{f(x)-f(x_{0})}{x-x_{0}}
\end{split}
$$

### Derivative of a product

This is called the Leibniz[^2] rule:

$$(f\cdot g)'(x)=f'(x)g(x)+f(x)g'(x)$$

In other terms, you distribute the derivative.

Proof:

$$
\begin{split}
(f\cdot g)'(x)= \lim_{h\to0} \frac{(f\cdot g)(x+h)-(f\cdot g)(x)}{h}\\
=\lim_{h\to0} \frac{f(x+h)g(x+h)-f(x)g(x)}{h}\\
=\lim_{h\to0} \frac{f(x+h)g(x+h)-f(x)g(x+h)+f(x)g(x+h)-f(x)g(x)}{h}\\
=\lim_{h\to0} [\frac{f(x+h)-f(x)}{h}\cdot g(x+h)+ \frac{g(x+h)-g(x)}{h}\cdot  f(x)]\\
=f'(x)g(x)+f(x)g'(x)
\end{split}
$$

### Derivative of a quotient

$$(\frac{f}{g})'(x)=\frac{f'(x)g(x)+f(x)g'(x)}{g^{2}(x)}$$

I'm not proving that.

### Derivative of a composition

f needs to be derivable on x, and g needs to be derivable on f(x).

$$
(g\circ f)(x_{0})= g'(f(x_{0}))\cdot f'(x_{0})
$$

The proof of this is a bit complex, so we're going to add a hypothesis that'll make our life a bit easier, which is $f(x)-f(x_{0})\ne0$

$$
\begin{split}
(g\circ f)'(x_{0})=\lim_{x\to x_{0}}\frac{(g\circ f)(x)-g\circ f)(x_{0})}{x-x_{0}}\\
= \lim_{x\to x_{0}} \frac{g(f(x))-g(f(x_{0}))}{x-x_{0}}\\
= \lim_{x\to x_{0}} \frac{g(f(x))-g(f(x_{0}))}{f(x)-f(x_{0})}\cdot\frac{f(x)-f(x_{0})}{x-x_{0}} \\
* y = f(x), ~ y_{0}= f(x_{0})\\
=\lim_{y\to y_{0}} \frac{g(y)-g(y_{0})}{y-y_{0}}\cdot \lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}\\
=g'(y_{0})\cdot f'(x_{0})= g'(f(x))\cdot f'(x_{0})
\end{split}
$$


## Derivatives of a couple of functions

### Derivatives of constants

If $\forall x\in\mathbb{R}, f(x)=c$, with c a constant, we get that:

$$\lim_{h\to0} \frac{f(x+h)-f(x)}{h}=\lim_{h\to0} \frac{c-c}{h}=\lim_{h\to0} \frac{0}{h}=0$$

### Derivative of $f(x)=x$

$f'(x)=\lim_{h\to0} \frac{f(x+h)-f(x)}{h}=\lim_{h\to0} \frac{x+h-x}{h}=\lim_{h\to0} \frac{h}{h}=1$

x'=1

### Derivatives of power

Let's generalize for n.

By the rules of calculation previously established:

$$(x^{2})'=(x\cdot x)'=x'\cdot x' + x\cdot x'= 1x+1x=2x$$

If we have an n in N, we can simply do the same for more x times x'.

Which means $(x^{n})'=nx^{n-1}$.

This has a simple proof by recursion.

1) n = 0 => $(x^{0})'=1'=0=0x^{0-1}$
2) If we suppose the formula is true for n, and it's true for n+1: $(x^{n+1})'=(x^{n}x)'=(x^{n})'-\cdot x + x^{n}\cdot x' = nx^{n-1}\cdot n+ x^{n}\cdot1=(n+1)x^{n}$

For reasons, this is true for all of $\mathbb{Q}$.

### Some derivatives of compositions

#### Find the derivative of $\sqrt{1-x^{2}}$

We can find that $\sqrt{1-x^{2}}$ can be turned into: $g(y)=\sqrt{y}$ and $f(x)=1-x^{2}$. Their derivatives are easy: $g'(y)= \frac{1}{2\sqrt{y}}$, $f'(x)=-2x$

If we plug that in:

$(\sqrt{1-x^{2}})'= (g\circ f)(x)= g'(f(X))\cdot f'(x)= \frac{1}{2\sqrt{f(x)}}(-2x)=\frac{-x}{\sqrt{1-x^{2}}}$

### A small general formula

$\sqrt{f(x)}= \frac{1}{2\sqrt{f(x)}\cdot}f'(x)$

### Example 2

Find $\frac{1}{f(x)}$
Well, $g(x)= \frac{1}{x}$, and $f(x)=f(x)$

This means we get:

$g'(f(x))f'(x)= \frac{-1}{f^{2}(x)}f'(x)$

### A quick note on sin/cos

It's worth noting that the notation  $\sin'(2x)$ is not the same as $[\sin(2x)]'$.

The first $[\sin(2x)]'$ is $\sin'\circ2x$
The second $\sin'(2x)$ is $(\sin\circ2x)'$

It's mildly annoying, and an easy to make mistake


[[1 - Derived number|Previous]]


[^1]:You know which formula and Newton.

[^2]:Another math guy
