# A small reminder

To start with analysis, it's important to remember some fairly simple algebra. This is a reminder of the basics.
## Simple sets
There are a lot of simple sets:

All natural numbers
$\mathbb{N}=\{1,2,3,4,5,...\}$
All whole numbers
$\mathbb{Z}=\{...,-3,-2,-1,0,1,2,3,...\}$
All numbers representable as a fraction
$\mathbb{Q}=\{\frac{p}{q} | p \in \mathbb{Z},q \in \mathbb{Z*} \}$
And finally, all real numbers, that have a development with an infinite and non-periodic length (as opposed to Q, which has either a finite, or a periodic development. Development being the decimal notation.)
$\mathbb{R}=\{\text{It's a bit hard to define...}\}$

In analysis, we'll mostly focus and work with Real numbers.

## Inequalities on reals

### Some rules
The rules are as follows:

$a,b,x,y,... \in \mathbb{R}$

$a \le b \text{ and } x \le y \therefore a+x\le b+y$ 

$a\ge0 \text{ and } x \le y \therefore ax\le ay$

$a\le0 \text{ and } x \le y \therefore ax\ge ay$

> "I'm a bit like the Gauls"
> <cite>- Mr. Dubuis</cite>

### Some tools

#### Determining a sign
To determine the sign of a function, it's much easier to do as a multiplication than as an addition.

So, if we take as an example $P(x)=x+1+3x^2+3x|x\in\mathbb{R}$
It can be somewhat easily turned into $P(x)=(x+1)(1+3x)$

Which can be turned into a table:


|      |     | -1  |     | -1/3 |     |
| ---- | --- | --- | --- | ---- | --- |
| x+1  | -   | 0   | +   | +    | +   |
| 1+3x | -   | -   | -   | 0    | +   |
|      | +   | 0   | -   | 0    | +   |

which allows us to determine the sign depending on x.

#### Comparison

To compare P(x) and Q(x) is to determine at which x P(x) > Q(x), P(x) = Q(x),P(x) < Q(x)

To do that, we subtract Q(x) from P(x), and make the same table out of the result.

It's the same steps, except you take Q, and add it's negative into P.

So, we take $P(x) = \cfrac{1}{x}$ , $Q(x)=\cfrac{2}{x+1}$

P(x) - Q(x) = $\cfrac{1}{x}-\cfrac{2}{x+1}$
Which we turn into
$\cfrac{-x+1}{x(x+1)}$, and we also have to say that $x\ne0,x\ne-1$

A table for this is

|      |     | -1  |     | 0   |     | 1   |     |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| -x+1 | +   | +   | +   | +   | +   | 0   | -   |
| x    | -   | -   | -   | 0   | +   | +   | +   |
| x+1  | -   | 0   | +   | +   | +   | +   | +   |
|      | +   | //  | -   | //  | +   | 0   | -   |

With -1 and 0 being undefined.

#### Important identities

$(a+b)^2=a^2+2ab+b^2$
$(a-b)^2=a^2-2ab+b^2$
$a^2-b^2=(a-b)(a+b)$

This also causes ✨fun✨ interactions with square roots, allowing us to 'conjugate' them.

Specifically, if you see $\sqrt{x}-\sqrt{y}$, you can try to multiply them by $\sqrt{x}+\sqrt{y}$, making it into $x-y$

An example is:

$$
\begin{aligned}
\frac{7}{3+\sqrt{2}}+\frac{2}{\sqrt{3}}
\newline
\newline
=\frac{7}{3+\sqrt{2}}*\frac{3+\sqrt{2}}{3+\sqrt{2}}+\frac{2}{\sqrt{3}}*\frac{\sqrt{3}}{\sqrt{3}}
\newline
\newline
= \frac{7(3-\sqrt{2})}{(3-\sqrt{2})^2}+\frac{2(\sqrt{3})}{3}
\newline
\newline
= \frac{7(3-\sqrt{2})}{7}+\frac{2(\sqrt{3})}{3}
\end{aligned}
$$

This also works with cubes, but I don't want to deal with writing all of that.