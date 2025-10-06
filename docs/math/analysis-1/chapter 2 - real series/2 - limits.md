
If we think of the previous examples, we might notice for ($b_n$):$1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, ...$
If we look at it, we might notice that, as it extends to infinity, it gets as close as we want to, but never quite gets to 0. If we were to reach infinity, it would be 0, but infinity isn't a number, so it never gets there.

Welp, this has some pretty complex language, so, erm, here we go:

## Convergent series

> It's $\epsilon$, that one weird upside down 3 that the Greeks used to... Oh yeah, by now you need to know the Geek alphabet. Like it's mandatory. 
> *- take a wild guess*


Take $f: a_{n}= \frac{n}{n+1}=1-\frac{1}{n+1}$

This is $\frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{5}{6}...$


If we look at $a_{99}$, it'd be 99/100, for 999, it'd be 999/1000. So, it gets as close as we want to, but never reach it.

If we were to draw this, to graph this, well, it'd work. [Here](https://www.desmos.com/calculator/sitvm944fr)'s what it would look like. We're talking only about positive numbers. 

Anyhow, if we were to look at it, we'd find:

$$
\forall n\ge 10, a_{n} \lt a_{n} \lt 1\iff a_{9}\lt a_{n} \lt 1\iff a_{n}\in]a_{n};1[\iff a_{n}\in]1- \frac{1}{10}; 1[ \implies |a_{n}-1| \lt \frac{1}{10}
$$

So, the error if we were to approximate 1, as an element of it, would be roughly 1/10th.

However, if we take an element that's after 100? 1000? 10000?

By 10000, it's less than 1/10000. 

Well, that's nice. However, let's now go the opposite way. Say we get $\epsilon$. It's a tiny number, say 0.000000....01, and say that's our margin of error.

For us to fit in the margin, we'd need $|a_{n}-1|\lt\epsilon$.

So, now we need to solve it.

We'll find, after a long series of unfortunate events, we'll find:

$$
a_{n}\in ]1-\epsilon; 1[\iff \dots\iff n \ge \frac{\epsilon-1}{-\epsilon}= \frac{1-\epsilon}{\epsilon}= \frac{1}{\epsilon-1}-1
$$

So, if we take $N(\epsilon)\in\mathbb{N}^{*}$, the first positive natural number that is larger than $\frac{1}{\epsilon}-1$, we get $\forall n\ge N{\epsilon}, a_{n}\in]1-\epsilon; 1[$

As we lower the value of epsilon, we get closer and closer to 1. But we never reach it.

This, all this, together, means that $a_{n}$ converges to 1, and we say the limit of $a_{n}$ is 1. 

This means the definition for convergent series and limit is that there is $a_{n}$, a series, and there is  $L\in\mathbb{R}$. We say that $a_{n}$ converges to L, noted $\lim\limits_{n\to\infty}a_{n}=1$, if and only if:

$$
\forall\epsilon>0, \exists N(\epsilon)\in\mathbb{N}^{*} \text{  so that  } n\ge N(\epsilon)\implies|a_{n}-L|\lt \epsilon
$$

In other terms "Whichever may the margin of error $\epsilon$ be, there exists a range N($\epsilon$) so that from inside that range, the distance between $a_{n}$ and $L$ is lower than the margin of error"

Saying that L is the limit of ($a_{n}$) means that for any $\epsilon\gt0$, there exists a range N($\epsilon$), so that for any n in that range we have $|a_{n}-L|\iff -\epsilon \lt a_{n}-L\lt\epsilon\iff L-\epsilon\lt a_{n}< L+\epsilon$.

Basically, in words that are understandable for our tiny merely human brain, if we take L, and add or subtract epsilon from it, there will be values between L and the two results whatever the value of epsilon.

In more philosophical[^1] terms, that is to say according to topology (aka the branch of maths we don't speak of), if a series converges to L, we have the epsilon neighborhood $]L-\epsilon, L+\epsilon[$, which contains all elements of the series, except maybe all the ones that came before. 

Truly, topologists are mythical beasts. Or Prof. Dubuis is trying his best to convince us to not go into topology. Both are equally as likely.


AAANYHOW, here are some examples:

### Example 1:

We need to verify that $\lim\limits_{n\to\infty} \frac{1}{n}=0$.

That means $\forall\epsilon\gt0,\exists N(\epsilon)\in\mathbb{N}^{*}$ to that $n\gt N(\epsilon)$ then $|\frac{1}{n}-0|\lt\epsilon$

This means:

$$
\begin{align}
|\frac{1}{n}|\lt\epsilon\\
\frac{1}{n}\lt\epsilon\\
n>\frac{1}{\epsilon}
\end{align}
$$
Aaand we win.

If we choose that N($\epsilon$) as the first number after $\frac{1}{\epsilon}$, that if $n\ge N(\epsilon)$, then n > 1/epsilon, which means we've succeeded.


### Example 2

Say $(a_n)=\sqrt{2},\sqrt{2},\sqrt{2}...$

Well, say that for $\epsilon>0$, there must be a number n in the series that's closer to $\sqrt{2}$ then by $\epsilon$. Here, every element is $\sqrt{2}$, which means we have nothing to prove.

Constants are their own limits.

### Example 3 (the complicated one)

Check if $\lim\limits_{n\to\infty}( \frac{2n+1}{n})^2=4$

As usual:

$$
\begin{align}
|(\frac{2n+1}{n})^2|\le\epsilon\\
|\frac{(2n+1)^{2}}{n^2}-4|\lt\epsilon\\
\dots\\
\frac{4n+1}{n^{2}}\lt\epsilon\\
0\lt\epsilon n^2-4n-1\\
\Delta=16+4\epsilon\gt0\\
\text{ which means the roots are } \frac{4\pm\sqrt{16+4}}{2\epsilon}= \frac{2\pm\sqrt{4+\epsilon}}{\epsilon}
\end{align}
$$

Which means as long as out n is between these two roots for any given epsilon, we're in the clear.

### Example 4 : limitless (literally)

$a_n=(-1)^n$

We need to check that it doesn't have a limit.

Well, what we have here is something that varies widely between 1 and -1. 
Unfortunately, at any given range, it can be either 1 or -1. And the further we get, it's still one or the other.

This allows us to say it doesn't have a limit, as for any given epsilon, if it's smaller than 2, it doesn't work.

This also allows us to find another rule of limits: there can only be one in a series.


[^1]:I'm lost
