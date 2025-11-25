
Some functions aren't defined at a specific value. That can be annoying. We need a couple of things to work with that.

Let's start with the pointed neighborhood of $x_{0}$.
It is defined as follows: $V=\{x\in\mathbb{R}\mid0<|x-x_{0}|<\delta, \delta>0\}$

If you try to draw this, on the reals line, you'll notice it's just the range between $x_0-\delta$ and $x_{0}+\delta$, from which we remove $x_{0}$ itself.

In other terms, you can get as close as possible to $x_{0}$, but never reach it.


We can have functions, that are defined on that interval. 
That's fairly easy to guess, they're simply functions that are defined on that interval, they work as long as $\exists \delta>0$. This also means that the value the neighborhood we're looking at may or may not be defined, we don't really care.

So, let's finally define limits at $x_{0}$.

Say there's f a function defined on the pointed neighborhood of $x_{0}$,, and $L\in\mathbb{R}$. We can say f converges to L when $x\to x_{0}$, noted $\lim\limits_{x\to x_{0}}f(x)=L$
if and only if:
$$\forall\epsilon>0,\exists\delta=\delta(\epsilon)\gt0,\text{ s.t. }0\lt|x-x_{0}|\lt\delta\implies|f(x)-L|<\delta$$

In human readable terms, this means that as we get closer and closer to $x_{0}$, the value gets closer and closer to some value L. 

For any continuous function, L is obviously just $f(x_{0})$.

Let's test that theory, using $f:x\to x^{2}$ and finding $\lim_{x\to1}x^{2}$, which is 1.

If we look at this, we find that if $x\in]\sqrt{1-\epsilon},\sqrt{1+\epsilon}[$ we have $|x^{2}-1|\lt\epsilon$.

If we use $\delta=\sqrt{1+\epsilon}-1>0$, we have $0\lt|x-1|\lt\delta$

This works well for functions we know well, however if we don't know the graph of a function and don't have access to graphing software (aka you find yourself at the siege of Vienna in 1683), you'll need to find a mathematical approach to use instead of this geometry based one.

Let's do that with a very complicated function... sin(x).
We'll need to find $\lim_{x\to0}\sin(x)=0$

### Method 1:

we need to show for $\epsilon\gt0$ that there exists $\delta\gt0$ so that
$0\lt|x-0|\lt\delta\implies|sin(x)-0|\lt\epsilon$

We can just solve $|\sin(x)|\lt-\epsilon$.

$$\begin{equation}\begin{split}-\epsilon\lt sin(x)\lt\epsilon\\\iff-\arcsin(\epsilon)\lt x\lt\arcsin(\epsilon)\text{ and } x\ne0\\\iff x\in]-\arcsin(\epsilon),\arcsin(\epsilon)[\backslash\{0\}\end{split}\end{equation}$$
which means we can choose $0\lt\delta\le\arcsin(\epsilon)$.

Using this, we can find the largest possible delta.

This is nice, however it has a problem: we need to know the inverse method, arcsine here. We don't always know it.

### Method 2:

Instead of solving $|\sin(x)|<\epsilon$, we can just look for g(x), so that $|sin(x)|\le g(x)$, and solve $g(x)\lt\epsilon$.

Now, for sine, the value of x, which is also the value of the arc of the unit circle whose angle it is. This means $|\sin(x)|\le|x|$.
Which means we just need to solve $|x|\lt\epsilon$

We have $|x|\lt\epsilon\iff x\in]-\epsilon,\epsilon[$
and thus $\delta\le\epsilon$
We thus do have $0\lt|x|\lt\delta\iff0\lt|x|\lt\epsilon$
and as we have sin(x) that is smaller than |x|, we have $0<|\sin(x)|\lt\epsilon$

## Example 3

prove $\lim_{x\to0}\cos(x)=1$

through the by now usual steps, we find $|\cos(x)-1|\lt\epsilon$.

Using arccosine would be annoying because of how it's defined, so let's use the g(x) method.

$$|\cos(x)-1|=1-\cos(x)=2\sin^{2}(\frac{x}{2})=2\sin(\frac{x}{2})=2\sin(\frac{x}{2})\sin(\frac{x}{2})\le2|\sin(\frac{x}{2})||\sin(\frac{x}{2})|\le2| \frac{x}{2} || \frac{x}{2}|=\frac{x^{2}}{2}$$

We can now solve $\frac{x^{2}}{2}\lt \epsilon\iff x^{2}=\lt2\epsilon\iff|x|\lt\sqrt{2\epsilon}$

Knowing that, we know $0\lt\delta\le\sqrt{2\epsilon}$

And we have $0\lt|x|\lt\delta\implies0\lt|x|\lt\sqrt{2e}\implies \frac{x^{2}}{2}\lt\epsilon$

and this means $|\cos(x)-1|\lt\epsilon$


## Notice

all the rules we've learned before to work with limits that go towards infinity work with this as well, with some minor caveats.

### Example 4

Find $\lim_{x\to2} \frac{x^{3}-2x^{2}}{x-2}$

$$
\lim_{x\to2} \frac{x^{3}-2x^{2}}{x-2}=\lim_{x\to2} \frac{x^{2}(x-2)}{(x-2)}=\lim_{x\to2} x^{2}=4
$$
### Example 5

find $\lim_{x\to0} \frac{2x+x^{3}}{x+x^{2}}$

$$\lim_{x\to0} \frac{2x+x^{3}}{x+x^{2}}=\lim_{x\to0} \frac{x(2+x^2)}{x(1+x)}=\lim_{x\to0} \frac{x+x^{2}}{1+x}=\frac{2+0}{1+0}=2$$

### Why?

Simply because there's another theorem specifying that you can characterize a limit by using series.

It's written roughly as follows:

$$
\lim_{x\to x_{0}}f(x)=L\iff\forall(x_n)s.t.\lim_{x\to+\infty}x_n=x_{0}, \text{ we have } \lim_{n\to\infty}f(x_{n})=L
$$

This can be used in cases like:

$$f(x)=\begin{cases}x\le1\implies x \\ x>1 \implies x^2+1\end{cases}$$

To solve this, we use 2 series, ($a_n$) and ($b_{n}$), so that $\lim_{n\to\infty}a_{n}=\lim_{n\to\infty} b_{n}=1$, but $\lim_{n\to\infty}f(a_{n})\ne\lim_{n\to\infty}f(b_{n})$
We can use $a_{n}= 1- \frac{1}{n}$ and $b_{n}= 1+ \frac{1}{n}$.

The limit of f(a) is 1, and f(b) is 2.

## Left and right limits

In the last part of the previous section, we mentioned weird disjointed and inaccessible functions that operate differently depending on where you are.

Well, this requires defining 2 new things we didn't need before: left and right limits. Their name is fairly intuitive, they're limits at some value $x_0$, when approaching either from the right or the left.


## A nice little theorem

say there is $f$ defined on a neighborhood of $x_{0}$, and there is $L\in\mathbb{R}$. 

$$\lim_{x\to x_{0}}f(x)=L\iff\lim_{x\to x_{0}^{-}}f(x)=\lim_{x\to x_{0}^{+}}f(x)=L$$

In human readable terms, if we approach L from both right and left, that means L is the limit.

It's also important to note, that the same calculations that are available for $x\to x_{0}$ are available to $x\to x_{0}^{+}$ and $x\to x_{0}^{-}$.


## What do we do when $x_{0}$ approaches infinity

Say we have $\frac{1}{x^{2}}$ and $\frac{1}{x}$ as functions. How do we define:
- $\lim_{x\to x_{0}}=\pm\infty$
- $\lim_{x\to x_{0}^{-}}=\pm\infty$
- $\lim_{x\to x_{0}^{-}}=\pm\infty$

Which is a total of 6 definitions, so strap in.

$\lim_{x\to x_{0}^{-}}=-\infty\iff \forall B \lt 0, \exists \delta, \delta(B)\gt0, s.t. x\in ]x_{0}-\delta,x_0[\implies f(x)\lt B$
Which means, for any number you can find, there is a value of x for which f(x) will be smaller.

The logic for all the others is the same, with a bit of the previous section mixed in.


[[2 - function limits|Previous]]
