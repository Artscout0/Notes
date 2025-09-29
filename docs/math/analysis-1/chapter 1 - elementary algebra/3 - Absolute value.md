
The absolute value of a number is it's 'distance to 0'.

In other terms, the absolute value of 10, written down $|10|$, is 10
The absolute value  $|-10|$, is also 10.

It has some fun properties:

1. $|x| \ge 0$, and $|x|=0 \rightarrow x = 0$ 
2. $|-x|=x$
3. $|x*4|=|4|*|x|$
4. $|x+4|\le |x+4|$
5. $|x|=sgn(x)$ assuming $(x\ne0)$ where sgn is 1 if > 0, and -1 if x < 0.
6. $x=|x|sgn(x)$ assuming $(x\ne 0)$


Using all of that, we will solve some stuff

## $|f(x)|=g(x)$


So, this is  bit complex.

Let's for now assume g(x) is constant.

For any a:

if $a \gt 0, |x|=a \Leftrightarrow x=a \text{ or } x=-a$

if $a \lt 0, |x|=a \Leftrightarrow x \in \emptyset$

If $a=0, |x|=a \Leftrightarrow x = a = 0 \Leftrightarrow x = 0$

$$
|x| = a \Leftrightarrow a \ge 0 \text{ and } 
\begin{cases}
   a \\ 
   -a  
\end{cases}
$$


As a generalisation:

$\forall x \in D_{def}$

$$|f(x)|=g(x)\Leftrightarrow g(x) \ge 0 \text{ and } \begin{cases} g(x) \\\\ -g(x) \end{cases}$$

### Example 1 - Solve $|x^2+2x-5|=x+1$

Step 1:

$D_{def}=\mathbb{R}$

Step 2:
we apply $|f(x)|=g(x)\Leftrightarrow g(x) \ge 0 \text{ and } \begin{cases} g(x) \\ or \\ -g(x) \end{cases}$

Because of this, we can say that $x+ 1\ge0 \Rightarrow x\ge -1$

$D_{pos}=\{x\in\mathbb{R}\mid x+1\ge0\}$


So, the full equivalence is written:

$$
|x^2+2x-5|=x+1\Leftrightarrow x\in D_{def}\bigcap D_{pos} = [-1;+\infty[ and \begin{cases}x^2+2x-5=x+1\\x^2+2x-5=-x-1\end{cases}
$$

Step 3:

a)

$x^2+2x-5=x+1$ and $x\ge-1$
$x^2+x-6=0$
$(x+3)(x-2)=0$

$S_1$ = {-3, 2}, -3 doesn't work, so $S_a$={2}

b)

$x^2+2x-5=-x-1$ and $x\ge-1$
$x^2+3x-4=0$
$(x+4)(x-1)=0$

$S_b$={1}

So, 
S = $S_a\bigcup S_b$ = {1,2}

### Example 2 - $|x-3m+4|=x+m$

Step 1:

$D_{def}=\mathbb{R}$

Step 2:

$D_{pos}={x\in \mathbb{R}\mid x+m\ge0}=[-m;+\infty[$

$$
|x-3m+4|=x+m\Leftrightarrow x\in[-m;+\infty[ \text{ and } \begin{cases} x-3m+4=x+m\\\\ x-3m+4=-(x+m)
\end{cases}
$$


Step 3:

a)

$x-3m+4=x+m$
$0x=4m-4$

a.1)

if m = 1
$0x = 0$

$S_a=[-1;+\infty[$

a.2)

if m $\ne$ 1

therefore $S_a=\emptyset$


b)

$x-3m+4=-(x+m)$
$x-3m+4=-x-m$
$2x-2m+4=0$
$2x=2m-4$
$x=m-2$

So, $m\in D_{pos}$ ?

if $m \ge 1$, x = m-2 $\in D_{pos}, S_b=${m-2}
if $m\le1, S_b=${}

Therefore:

If $m\lt1, S=S_a\bigcup S_b=\emptyset\bigcup\emptyset=\emptyset$
If $m = 1, S=S_a\bigcup S_b=[-1, +\infty[$
If $m \gt 1, S=S_a\bigcup S_b = \emptyset \bigcup \{m-2\}=${m-2}

## Inequalities
Let's take $|f(x)|\le g(x)$.

Take a simpler thing: $|x|\le a$

If $a \ge 0, x \in[-a,a]$
If $a \lt 0, x\in\emptyset$

To summarize:

$$
|x|\le a \Leftrightarrow \begin{cases}x\le a\\\\ x \gt -a\end{cases}
$$

Notice, there's no $D_{pos}$ condition, as it's impossible. 

Generalisation:

$\forall x \in D_{def}$

$|f(x)|\le g(x) \leftrightarrow \begin{cases}f(x)\le g(x) \\ f(x)\ge -g(x)\end{cases}$


### Example $|x-\frac{1}{x-1} |\le-\frac{1}{x-1}$

Step 1: 

$D_{def}=\mathbb{R}\backslash \{1\}$

Step 2:

$$
|x-\frac{1}{x-1} |\le-\frac{1}{x-1} \Leftrightarrow \begin{cases}x - \frac{1}{x-1}\le \frac{-1}{x-1} \\\\ x-\frac{1}{x-1} \gt -\frac{1}{x-1}\end{cases}
$$

Step 3:

a)
TODO: solve this until

$S_a=]-\infty;0]$

b)

TODO: same

$S_b=[-1;1[\bigcup[2;+\infty[$

Step 4:

S = $S_a\bigcap S_b$

S=$[-1, 0]$


## Inequalities p2

Let's take $|f(x)|\ge g(x)$.

Let's simplify the problem:

$|x|\ge a$

From this, we can find:

If $a\ge0$, $|x|\ge a \leftrightarrow x \in ]-\infty;-a]\bigcup[a;+\infty[$
If $a \lt 0$, $|x|\ge a \leftrightarrow x\in\mathbb{R}$

Summary:

$$
|x|\ge a \leftrightarrow \begin{cases}x\ge a\\x\le -a\end{cases}
$$



### Example $|x^2+3x-1|\gt x^2+x+1$

Step 1:

$D_{def}=\mathbb{R}$

Step 2:

$$
\begin{cases}
x^2+3x-1\gt x^2+x+1
\\
x^2+3x-1\lt -(x^2+x+1)
\end{cases}
$$

Step 3: 

a)

$x^2+3x-1\gt x^2+x+1$

$x^2+3x-1\gt x^2+x+1$
$2x\gt2$
$x\gt1$
$S_a=]1;+\infty[$

b)

$x^2+3x-1\lt -(x^2+x+1)$

$x^2+3x-1\lt -x^2-x-1$
$2x^2+4x\le0$
$x^2+2x\le0$
$x(x+2)\le0$

$S_b=]-2;0[$


Step 4:

S = $S_a\bigcup S_b$ = $]-2;0[\bigcup]1;+\infty[$



[[2 - Inequality on Reals|Previous]]
[[4 - second degree trinomials|Next]]
