
First, a small reminder of newton's binomial:

$$
(a+b)^{n}=\sum\limits_{k=0}^{n}\binom{n}{k}a^{m-k}b^{k}
$$

Now, back to our regularly scheduled programming:

Say $q\in\mathbb{R}\backslash\{-1, 1\}$. The geometric series of reason q is the series $(a_{n})_{n\in\mathbb{N}}$ defined by $a_{n}=q^{n}$.

The definition by recursion, is $a_{1}=q,a_{n+1}=q\cdot a_{n},n>1$

Some good examples include:

$(a_{n}):2,4,8,16,32,64,128,\dots \implies a_{n}=2^{n}$
$(b_{n}): \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \frac{1}{32}\dots\implies b_{n}= \frac{1}{2^{n}}=(\frac{1}{2})^{n}$
$(c_{n})=-2,4,-8,16,-32,64,-128\implies c_{n}=(-2)^{n}$

The following theorem can be found:

Be there a series $(a_{n})$ with reason $q\in\mathbb{R}\backslash\{-1;1\}$. If |q| < 1, this series converges to 0.
If |q| however is > 1, it diverges.

The proof is as follows:

case 1: |q| < 1

Using the corollary of the 2 policemen, which feels like a wild thing to write btw, we only need to prove that $\lim\limits_{n\to\infty}|a_{n}|=\lim\limits_{n\to\infty}|q^{n}|=\lim\limits_{n\to\infty}|q|^{n}=0$

As |q| < 1, $\exists p>0, |q|= \frac{1}{1+p}$

As well as: $(1+p)^{n}=\sum\limits_{k=0}^{n}\binom{n}{k}1^{n-p}p^{k}\implies p^{k}=1+np+\dots \ge0$
If we combine the both, we get that:

$$
\lim\limits_{n\to\infty}|a_{n}|=\lim\limits_{n\to\infty}|q^{n}|=\lim\limits_{n\to\infty} \frac{1}{(1+p)^{n}}\le \lim\limits_{n\to\infty} \frac{1}{1+np}=0
$$
Which means this converges to 0.

case 2: |q| > 1

$\lim\limits_{n\to\infty}|a_{n}|=\lim\limits_{n\to\infty}|q^n|=\lim\limits_{n\to\infty}|q|^{n}=\lim\limits_{n\to\infty}(1+n)^{n}\ge\lim\limits_{n\to\infty}=+\infty$

So $\lim\limits_{n\to\infty}|a_{n}|=+\infty$, which means $\lim\limits_{n\to\infty}a_{n}$ diverges.

An example usage would be $\lim\limits_{n\to\infty} \frac{2^{n+1}-1}{2^{n}-1}$

$$
\begin{align}
\lim\limits_{n\to\infty} \frac{2^{n+1}-1}{2^{n}-1}=\lim\limits_{n\to\infty} \frac{2^{n}2-\frac{1}{2^{n}}}{2^{n}(1- \frac{1}{2^{n}})}\\
=\lim\limits_{n\to\infty} \frac{2-(\frac{1}{2})^{n}}{1-(\frac{1}{2})^{n}}=\frac{2}{1}=2\\
\end{align}
$$

## Summing the series

the series $(A_{n})$, defined by $A_{n}=1+q+q^{2}+q^{3}+q^{4}...=\sum\limits_{k=0}^{n-1}q^{k}$
Observation:
If we have $(1-q)(1+q+q^{2}+q^{3}+\dots+q^{n-1})=1-q^{n}$
Therefore, $1+q+q^{2}+\dots+q^{n-1}=\frac{1-q^{n}}{1-q}$

This means, if we have q less than 1, it's limit is $\frac{1}{1-q}$.

This is constantly used in science, so it's a neat tool to have.

The summary, is that if |q|<1, the series converges to $\frac{1}{1-q}$, and if |q| > 1, the series diverges.


## Couple of examples

Now, why do we call these a geometric series?

Say we have a square, and we need to color it, and we can only color half of what's not colored at a time.

So, first you color half of it, then another, then another... and like that to infinity, as you won't color the entire thing, as it's impossible.

Now, id we were to model how much of the square is colored at any given step, you'd find the following series:

$a_{n}=\frac{1}{2},\frac{1}{2}\cdot \frac{1}{2},\frac{1}{2}\cdot \frac{1}{2}\cdot \frac{1}{2}, \frac{1}{2}\cdot \frac{1}{2}\cdot\frac{1}{2}\cdot \frac{1}{2},\dots,\frac{1}{2}^{n}$


Infinite sum of on the term constant a:

$S = a + aq + aq^{2}+ ... + aq^{n}$
This is just $a(1+q+q^2\dots)$ which is $a * \frac{1}{1-q}$ so $\frac{a}{1-q}$.

Infinite sum of even powers:

$S = 1+q^{2}+q^{4}+q^{6}...$

Well, this is just $1+ (q^{2})^{1}+(q^{2})^{2} + (q^{2})^{3} + (q^{2})^{2}+(q^{2})^{4}$
so it's $\frac{1}{1-q^{2}}$

Infinite sum of odd powers

$S = q+q^3+q^5+q^7=q(1+q^2+q^3+q^4)$
in other terms: $\frac{q}{1-q}$

Alternating sum

$S=1-q+q^{2}-q^{3}+q^{4}-q^{5}= 1+(-q)^{1}+(-q)^{2}+(-q)^{3}+\dots= \frac{1}{1-(-q)}=\frac{1}{1+q}$

truncated sum:

$S=q+q^{2}+q^{3}+q^{5}\dots$
$=(1+q+q^{2}+q^{3}+q^{4}+q^{5}+q^{6})-1-q^{4}$
$=\frac{1}{1-q}-1-q^{4}$


You also have plenty of examples that stem from geometry.

A simple one is:

You have a circle, of radius R. With each step, you 'invert' 2/3rds is of of the circle that was last inverted.
So, at first you have a full circle, then you have a ring with an inner radius of $\frac{2}{3} R$, then you have a circle within a circle, with the inner circle's radius being $\frac{2}{3}* \frac{2}{3}*R$, and repeat.

So, question: what's the area of the surface after N steps?
question 2: What's the area after an infinite number of steps.

q1:

well, is we find the first couple of areas:

$A_{1}=\pi*R^{2}$
$A_{2}=\pi*R_{1}^{2}-\pi*R_{2}^{2}=\pi R^{2}-\pi(\frac{2}{3}{R_{1})^2}=\pi*R_{1}^{2}(1-(\frac{2}{3})^{2})=\pi*R_{1}^{2}(1-\frac{4}{9})$
$A_{3}=\pi*R_{1}^{2}-\pi*R_{2}^{2}+\pi*R^{2}_{4}=\dots=\pi*R*(1+ (\frac{-4}{9})+(\frac{-4}{9})^{2})$


This implies that we have:
$\pi*R*(1+ (\frac{-4}{9})+(\frac{-4}{9})^{2}+\dots+ (\frac{-4}{n})^{n-1})$

This means we have, after n steps:
$\pi R^{2} \frac{1-(\frac{-4}{9})^{n}}{1-(\frac{-4}{9})}=\frac{9}{13}*\pi*R^{2}(1-(\frac{-4}{9})^{n})$


As for q2:

$\lim\limits_{n\to\infty}\frac{9}{13}*\pi*R^{2}(1-(\frac{-4}{9})^{n})=\frac{9}{13}\pi R^{2}$

[[2 - limits|Previous]]
[[1 - reminders and definitions|Next Chapter]]
