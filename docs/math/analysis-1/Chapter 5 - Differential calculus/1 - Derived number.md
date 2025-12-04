
>[!note]+ A historical and mountaineering tangent
> So, derivatives, eh?
> Well, derivatives were something we were looking for for quite a while, until Newton and Leibniz, Lagrange, and some other guys, independently decided "yeah, we kinda need this" and all independently invented them.
> They're important, because they give us a simple answer to two different questions:
> - What's the tangent to any curve
> - How does a function's input impact it's output.
> It isn't at first obvious, and it wasn't obvious at first to the people that invented this, but it just so happens that these two questions are the same one in reality. Think of it as mountaineering, to blatantly steal an example, when the slope is positive, the input goes up. Otherwise, it's going down.


## Mission: find the equation of the tangent to the graph of a function f

Well, let's start with geometry.
I still haven't found a good way to draw this, I'm really procrastinating working on that, sorry.

However, I can explain the geometry using text.

So, you have a curve. It doesn't matter which curve.
We want to find the tangent of that curve, at some point x. It's a bit difficult, so let's do something similar, until it gets close enough to what we want.

Well, we could get another point nearby. Finding the slope of the line that goes between these two points is trivial:

$$
\frac{f(x)-f(x_{0})}{x-x_{0}}
$$

This called by many names, some of which include:
Newton's quotient, the rate of difference, or differential quotient.

Now, what's nice is that as $x_0$ approaches $x$[^1], the line going through these two points gets closer and closer to the tangent, which begs the question:

$$
\lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}
$$

And this gives us the slope of the tangent.

And therefore, we can define a function to be differentiable at $x_{0}$, and the differentiated number as follows:

Say there's f defined in the neighborhood of $x_{0}$, We say f is differentiable at $x_{0}$ if:

$$
\lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}} ~~\text{ exists}
$$

(that is to say, is a real number.)

We write said limit as:

$$
f'(x_{0})=\lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}
$$

and we call $f'(x)\in\mathbb{R}$ the derived number of f at $x_{0}$

## What does that mean graphically?

f'(x) is (if it exists) the slope of the tangent at x.

From there, finding the tangent is easy: $\frac{f'(x_{0})}{1}=\frac{y-f(x_{0})}{x-x_{0}}\iff f'(x_{0})(x-x_{0})+f(x_{0})=y$

The equation of the tangent t is therefore given using: $t\cdot y=f'(x_{0})(x-x_{0})$


## Another notation thing

There are many ways to write things like derivatives, so instead of writing the full $\lim_{x\to x_{0}}\frac{f(x)-f(x_{0})}{x-x_{0}}$, they decide to use delta, which you might remember from physics means difference.

$\lim_{\Delta x\to0} \frac{f(x_{0}+\Delta x)-f(x)}{\Delta x}$

And then we decided eh, let's define some stuff, and this became equivalent to:

$$
\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}\text{ or } \lim_{\Delta x\to0} \frac{\Delta f}{\Delta x}
$$

Which is where we get that notation from.

## Examples

### Example 1 - $x^2$ and $x_{0}= \frac{1}{2}$

Well:

$$
\lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}=\lim_{x\to \frac{1}{2}} \frac{x^{2}- \frac{1}{4}}{x- \frac{1}{2}}= \lim_{x\to \frac{1}{2}} \frac{(x- \frac{1}{2})(x + \frac{1}{2})}{x- \frac{1}{2}}=\lim_{x\to \frac{1}{2}}x+ \frac{1}{2}=1\in\mathbb{R}
$$

Cool, it's deriveable at 1/2, and $f(1/2)=1$. 

The equation of the tangent t at ($\frac{1}{2}, \frac{1}{4}$) is 
$t: f(x_{0})+f'(x_{0})(x-x_{0})\iff y=\frac{1}{4} + 1(x- \frac{1}{2})=x- \frac{1}{4}$

### Example 2 - $\sqrt[3]{x}$ and $x_{0}=0$

I'll cut the chase short, we dint the limit to be $\frac{\sqrt[3]{x}}{x}$, which turns into $\frac{1}{0}$.

However, we have a particular case, as the tangent here is $x=0$

### Example 3 - weird sine thing

Not going into detail, because am a bit behind in notes, but essentially we learn that the limit of the sine of 1/x doesn't exist.

### Example 4 - absolute value

Well, let's find $\lim_{x\to0} \frac{|x|-0}{x-0}$

This turns into $\lim_{x\to0} \frac{|x|}{x}$, which doesn't exist, as it's right and left limits differ.

As it's limits are different, we don't have a tangent, however we get semi-tangents.

## More theory

If f is derivable at $x_{0}$, f is continuous at $x_{0}$.

To prove this we need to show $\lim_{x\to x_{0}} f(x)=f(x_{0})$

To do that, we need to show $\lim_{x\to x_{0}} [f(x)-f(x_{0})]=0$

$$
\lim_{x\to x_{0}}[f(x)-f(x_{0})]= \lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}\cdot (x-x_{0})=\lim_{x\to x_{0}} \frac{f(x)-f(x_{0})}{x-x_{0}}\lim_{x\to x_{0}}(x-x_{0})= f(x_{0})\cdot0=0
$$

>[!warning]
>THE REVERSE ISN'T THE CASE!!!!
>All derivable functions are continuous, but not all continuous functions are derivable.


Now, let's define some more ~~random bullshit~~ important stuff:

The derived function:

Say there's I, an open interval, we say f is derivable on I $\iff$ f is derivable on every element of I.

Say a function f derivable on I, an open interval. We call the function derived from f, g.

We say that $g(x)=f'(x)$ (f'(x) being the derived number).

Now, old mathematicians not really giving a fuck, decided to abuse mathematical notation, and defined that $f'$ can be used as a function.

## Part 2

If we look back at $f(x)=|x|$ at $x_{0}=0$, we'll notice that it still isn't derivable.

But it might inspire us to do the following:

Let f a function defined to the left of $x_{0}$.
We say f is derivable to the right of $x_{0}$ if:

$\lim_{x\to x_{0}^{-}} \frac{f(x)-f(x_{0})}{x-x_{0}}$ exists. We note this limit $f'^{-}(x)$.

The exact same works on the right, with - swapped to +.

An example would be as mentioned before is $f(x)=|x|$, as mentioned before.

$f'(0^{+})=1$
$f'(0^{0})=-1$

This also works for complicated functions that include cases and stuff.

This is called the semi-tangent, as it's only tangent on one side of the point.


Next, we have a consequence of the theorem of limits, that states f is derivable at $x_{0}$ if and only if $f'(x^{+})=f'(x^{-1})$

[[5 - continuity|Previous Chapter]]


[^1]: Sounds familiar, no?
