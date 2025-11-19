Math analysis is funadmentally about inequalities between numbers, so we're going to learn how to properly do it.

> [!tip]- Remember!
> for $a,b,c\in\mathbb{R}$ and $a\le b$ and $c \le 0$ means that $ac \ge bc$, however if$c\ge 0$ then $ac\le bc$

To do that, we do as things in much the same way as equalities, for which we need a couple of steps:

Step 1 - domain definition

The definition domain ($D_{def}$) is the set of x for which both sides of the equality are defined.

Step 2 - we isolate x

We try to simplify the equation to be so trivial it is the answer itself.

Step 3 - Summarize

We write down the set of solutions: $S=\{values...\}$

## Example 1:

Solve:

$$5x+1 = \frac{1}{2}x-3$$

Step 1: 
$D_{def}=\mathbb{R}$

Step 2:
$$
\begin{aligned}
5x+1 = \frac{1}{2}x-3
\newline
\frac{9}{2}x=-4
\newline
x=-\frac{8}{9}
\end{aligned}
$$


Step 3:

$S=\{-\cfrac{8}{9}\}$


## Example 2:

$$x(x+1)\ge x-1$$

$D_{def}=\mathbb{R}$

$$
\begin{aligned}
(x-1)(x-1)\ge0
\newline
(x-1)^2\ge0
\newline
x\in\mathbb{R}
\end{aligned}
$$

$S=\mathbb{R}$

## Example 3:

$$\frac{x+2}{x+1}\le\frac{x-2}{x-1}$$

Step 1:
$D_{def}=\mathbb{R} \backslash \{-1, 1\}$

Step 2:
$$
\begin{aligned}
\frac{x+2}{x+1}\le\frac{x-2}{x-1}
\newline
\frac{x+2}{x+1}-\frac{x-2}{x-1}\le 0
\newline
\frac{(x+2)(x-1)-(x-2)(x+1)}{(x+1)(x+1)}\le 0
\newline
\frac{2x}{(x+1)(x+1)}\le 0
\end{aligned}
$$

Step 3:
We can't directly determine the solutions, so we do a sign table first

| .   | .   | -1  | .   | 0   | .   | 1   | .   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2x  | -   | -   | -   | 0   | +   | +   | +   |
| x+1 | -   | 0   | +   | +   | +   | +   | +   |
| x-1 | -   | -   | -   | -   | -   | 0   | +   |
|     | -   | //  | +   | 0   | -   | //  | +   |

We can from there find what is less than or equal to 0

S = $]-\infty;-1[\bigcup[0;1[$

Example 4:

$x\in\mathbb{R}$
$m\in\mathbb{R}$
$mx=1$

$D_{def}=\mathbb{R}$

To find x, we need to simply do $x=\cfrac{1}{m}$, however, we might notice that 0 is a problem.

Therefore, we have two cases:

case 1: $m\ne0 \Rightarrow x=\frac{1}{m}$ 
case 2: $m=0 \Rightarrow x\in\emptyset$

S = $1/m\text{ if }m \ne 0\text{, otherwise }S = \emptyset$

Example 5:

$x,m\in\mathbb{R}$

$mx+1 = \frac{1}{2}x-3$

Step 1:

$D_{def}=\mathbb{R}$

Step 2:

$mx+1 = \frac{1}{2}x-3$
$mx-\frac{1}{2}x=-4$
$x(m-\frac{1}{2})=-4$
$x = \cfrac{-4}{m-\frac{1}{2}}$

Once again, it depends on m:


if $m \ne \frac{1}{2}$, then $x=\frac{-4}{m-\frac{1}{2}}$
otherwise $x\notin\mathbb R$


Example 6:

$x, m \in \mathbb R$

$(m-1)x-1+m=0$

$D_{def}=\mathbb R$

$$
\begin{aligned}
(m-1)x-1+m=0
\newline
(m-1)x=1-m
\newline
x=\frac{1-m}{m-1}
\end{aligned}
$$


case 1: $m-1 \ne0$, so $m\ne1$ then $\frac{1-m}{m-1}$ = -1
case 2: $m=1$, then $0x = 0$, so $x\in\mathbb R$

So, if $m\ne 1$, S = {-1}
If m = 1, S = $\mathbb R$

Example 7:

$x,m \in \mathbb R$
$mx\le1$

Step 1:
$D_{def}=\mathbb R$

Step 2:

case 1: $m = 0$, $x\notin \mathbb R$
case 2: $m > 0$, $x \le \frac{1}{m}$
case 3: $m < 0$, $x\ge\frac{1}{m}$

So:
Case 1: S = $\emptyset$
Case 2: S = $\mathbb R$
Case 3: S = $]-\infty; \frac{1}{m}]$

Example 8:

$x, m \in \mathbb R$

$m \ne -1$

$$\frac{m}{m+1}x \le 2 + \frac{3x}{m+1}$$

$D_{def} = \mathbb R$

$$
\begin{aligned}
\frac{m}{m+1}x \le 2 + \frac{3x}{m+1}
\newline
\newline
\frac{m}{m+1}x - \frac{3x}{m+1}\le 2
\newline
\newline
\frac{mx - 3x}{m+1} \le 2
\newline
\newline
\frac{m-3}{m-1}x \le 2
\end{aligned}
$$

Time to make a sign table:

| .   | .   | -1  | .   | 3   | .   |
| --- | --- | --- | --- | --- | --- |
| m-3 | -   | -   | -   | 0   | +   |
| m+1 | -   | //  | +   | +   | +   |
|     | +   | //  | -   | 0   | +   |

Case 1:
$\frac{m-3}{m+1}\lt0 \Rightarrow m\in]-1;3[$, then $x \ge \frac{2m+1}{m-3}$

Case 2:
$\frac{m-3}{m+1}=0\rightarrow m = 3$, then $0x \le 2$, so $x\in\mathbb R$

Case 3:
$\frac{m-3}{m+1}\gt0\Rightarrow m \in ]-\infty;-1[\bigcup]3;+\infty[$, which means $x \le 2\frac{m+1}{m-3}$

Example 9:

$x, m \in R$

$$
\frac{x}{x+m}\le\frac{m}{x+m}
$$
Step 1:

$D_{def}=\mathbb{R}\backslash\{-m\}$

Step 2:

$$
\begin{aligned}
\frac{x}{x+m}\le\frac{m}{x+m}
\newline
\newline
\frac{x}{x+m}-\frac{m}{x+m}\le0
\newline
\newline
\frac{x-m}{x+m}\le0
\end{aligned}
$$

We need to make a sign table here, but it's not exactly possible as we don't know whether m or -m is bigger.

Case 1:

$m\gt0$
$-m\lt m$

| .   | .   | -m  | .   | m   | .   |
| --- | --- | --- | --- | --- | --- |
| x-m | -   | -   | -   | 0   | +   |
| x+m | -   | 0   | +   | +   | +   |
|     | +   | //  | -   | 0   | +   |

Case 2:

$m=0$
problem becomes:
$\cfrac{x}{x}\le0, x\ne0$


Case 3:
$-m \gt 0$
$-m \gt m$


| .   | .   | m   | .   | -m  | .   |
| --- | --- | --- | --- | --- | --- |
| x-m | -   | 0   | +   | +   | +   |
| x+m | -   | -   | -   | 0   | +   |
|     | +   | 0   | -   | //  | +   |


Step 3:

If $m \lt 0$, $S = [m, -m[$
If $m = 0$, $S = \emptyset$
If $m\gt0$, $S = ]-m;m]$

[[1 - Reminder|Previous]]
[[3 - Absolute value|Next]]