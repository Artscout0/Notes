
This is for the most part a recap, and an additional way to understand first two parts of derivatives ([[1 - Derived number|First part]], [[2 - Derivative function and calculation rules|Second part]]), maybe a bit of stuff from [[9. Derivatives of trigonometric functions|analysis 2's chapter on them]].


## A reminder on calculation rules

1. $(f+g)'(x)=f'(x)+g'(x)$
2. $(\lambda f)'(x)=\lambda f'(x)$
3. $(fg)'(x)=f'(x)g(x)+f(x)g'(x)$
4. $(\frac{f}{g})'= \frac{f'(x)g(x)+f(x)g'(x)}{g^{2}(x)}$
5. $f\circ g(x)= f'(g(x)) g'(x)$

## Derivatives of the usual functions

### Constant

$$(c)'=0, ~\forall c \in \mathbb{R}$$

### Exponents

$$x^{p} = px^{p-1}, ~\forall p \in \mathbb{R}$$

This also works for $p= \frac{1}{2}$, which is equivalent to the root.

$$(\sqrt{x})'= (x^{\frac{1}{2}})'= \frac{1}{2}x^{-\frac{1}{2}}= \frac{1}{2\sqrt{x}}$$

And also any other roots:

$$(\sqrt[n]{x})'= (x^{\frac{1}{n}})'=\frac{1}{n}x^{\frac{1}{n}-1}=\frac{1}{nx^{\frac{n-1}{n}}}= \frac{1}{n\sqrt[n]{x^{n-1}}}$$
And also stuff like this:

$$(\frac{1}{x})'=(x^{-1})'=-1x^{-2}=\frac{-1}{x^{2}}$$

### Trigonometry

$$\sin'(x)= \cos(x)$$

$$\cos'(x)=-\sin(x)$$

From these, you can find (not always easily) the following:

$$\tan'(x)=1+\tan^{2}(x)= \frac{1}{cos^{2}(x)}$$

$$\arcsin'(x)= \frac{1}{\sqrt{1-x^{2}}}$$

$$\arccos'(x)= \frac{1}{\sqrt{1-x^{2}}}$$

$$\arctan'(x)= \frac{1}{1+x^{2}}$$

## A couple of examples of composition

Let's start with:

$$(\frac{1}{g(x)})'$$

We can rewrite this as:

$$(f(g(x)))'$$

With having:

$$\begin{split}f(x)= \frac{1}{x}\\ g(x)=g(x)\end{split}$$

We know $f'(g(x))g(x)$

So we get, using stuff written previously, specifically the last part of exponents:

$$- \frac{1}{g^{2}(x)}\cdot g'(x)$$

Another example includes

$$(\sqrt{g(x)})'$$

This is $f(g(x))$, with $f(x)=\sqrt{x}$.

This allows us to write

$$f'(g(x))g'(x)$$

which is 

$$\frac{1}{2\sqrt{g(x)}}\cdot g'(x)$$

Another example would be:

$$(\sin(\sqrt{f(x)}))'= \sin'(\sqrt{f(x)})\cdot (\sqrt{x})'$$

This is  $\cos(\sqrt{f(x)})\cdot \frac{1}{2\sqrt{f(x)}} \cdot f'(x)$

## More examples, this time from the 100 something one


$$y= 6x^{\frac{7}{2}}+ 4x^{\frac{5}{2}}+2x$$

It's derivative is:

$$
\begin{split}
y'= (6x^{\frac{7}{2}}+ 4x^{\frac{5}{2}}+2x)'\\
= (6x^\frac{7}{2})'+(4x^{\frac{5}{2}})'+(2x)'\\
= 6(x^\frac{7}{2})'+4(x^\frac{5}{2})'+2(x)'\\
= 6* \frac{7}{2}x^{\frac{5}{2}}+ 4*\frac{5}{2}x^{\frac{3}{2}} +2\cdot1\\
= 21x^{\frac{5}{2}}+10x^{\frac{3}{2}}+2
\end{split}
$$

Next up is:
$$y=\frac{ax^{2}}{\sqrt[3]{x}}+ \frac{b}{x\sqrt{x}}- \frac{3\sqrt{x}}{\sqrt{x}}$$

Now, we can immediately try applying the derivative rules, but first let's mess with the values a bit, see if we can make it simpler:

$$
\begin{equation}
\begin{split}
y=ax^{2}x^{\frac{-1}{3}}+bx^{\frac{-3}{2}}-x^\frac{1}{3}x^\frac{-1}{2}\\
=ax^{\frac{5}{3}}+bx^{\frac{-3}{2}}-x^{\frac{-1}{6}}\\
\text{finding this derivative is a bit easier: }\\
y'=(ax^{\frac{5}{3}}+bx^{\frac{-3}{2}}+x^{\frac{-1}{6}})'\\
=a \frac{5}{3}x^{\frac{2}{3}}+b\left(- \frac{3}{2}\right)x^{\frac{-5}{2}}- \frac{1}{6}x^\frac{-7}{2}
\end{split}
\end{equation}
$$


And another one:

$$y=\sin(2x)\cos(3x)$$

Let's temporarily turn sin(2x) and cos(3x) into f(x) and g(x).

We get:

$$
\begin{split}
y'=(f(x)g(x))'\\
=f'(x)g(x)+f(x)g'(x)\\
\end{split}
$$

Now, the derivative of f(x) and of g(x) is a bit more complex, as they have stuff in their sin and cos.

$$
\begin{split}
\sin'(2x)(2x)'\cos(3x)+\cos'(3x)(3x)\sin(2x)\\
=\cos(2x)*2*1*\cos(3x) -\sin(3x)*3*1\sin(2x)\\
=2\cos(2x)\cos(3x)-3\sin(3x)\sin(2x)\\
\end{split}
$$

## Even more examples

$$
\sqrt{x+\sqrt{x+\sqrt{x}}}
$$

This looks scary, but, let's first replace stuff with more stuff:

$(f\circ g)(x)$, with $f(x)=\sqrt{x}$, and $g(x)=\sqrt{x+\sqrt{x}}$

And g can be broken down further, into $g(x)=x+(f\circ h)(x)$, with h being $x+\sqrt{x}$

So, $f'(x)=\frac{1}{s\sqrt{x}}$, $h(x)=1+ 1/\sqrt{x}$, and $g(x)=x'+f'(h(x))h'(x)= 1+ \frac{1}{2\sqrt{x+\sqrt{x}}}(1+ \frac{1}{\sqrt{x}})$

And from there, we can find that $y' = f'(g(x))g'(x)$

Which is:

$$
\begin{split}
\frac{1}{2\sqrt{x+\sqrt{x+\sqrt{x}}}}(1+\frac{1}{\sqrt{x+\sqrt{x}}}(1+ \frac{1}{2\sqrt{x}})
\end{split}
$$

Which we're not simplifying because I refuse to write that much $\TeX$.


Another example:

$$y=\arcsin(\frac{x+1}{\sqrt{x}})$$

We can replace this as $(f\circ g)(x)$, with f being arcsine, and g being $\frac{x+1}{\sqrt{x}}$.

$$
\begin{split}
y'=f'(g(x))g'(x)\\
= \frac{1}{\sqrt{1-g^{2}(x)}} \frac{1}{\sqrt{2}}\\
= \frac{1}{\sqrt{1- \frac{x^{2}-2x+1}{2}}}\cdot \frac{1}{\sqrt{2}}\\
= \frac{1}{\sqrt{\frac{1-x^{2}-2x}{2}}} \frac{1}{\sqrt{2}}\\
= \frac{1}{\sqrt{1-x^{2}-2x}}
\end{split}
$$

Yet another example

$$y=\arctan( \frac{4\sin(x)}{3+5\cos(x)})$$

This can be turned into many things really, but the ones that matter to us are:

$f(x)=\arctan(x)$
$g(x)= \frac{4\sin(x)}{3+5\cos(x)}$

So we get the following barely readable thing:

$$
\begin{split}
y'=f'(g(x))\cdot g'(x)\\\\
= \frac{1}{1+g^{2}(x)}\cdot \frac{(4\sin(x))'\cdot(3+5\cos(x))-(3+5\cos(x))'(4\sin(x))}{(3+5\cos(x))^{2}}\\\\
= \frac{1}{1+(\frac{4\sin(x)}{3+5\cos(x)})^{2}\cdot}\cdot \frac{4\cos(x)(3+5\cos(x))-(-5\sin(x))(4\sin(x))}{(3+5\cos(x))^{2}}\\\\
= \frac{12\cos(x)+20\cos^{2}(x)+20\sin^{2}(x)}{(3+5\cos(x)^{2})+16\sin^{2}(x)}\\\\
= \frac{12\cos(x)+20}{9+30\cos(x)+16+9\cos^{2}(x)}\\\\
= \frac{12\cos(x)+20}{25+30\cos(x)+9\cos^{2}(x)}\\\\
= \frac{4(3\cos(x)+5)}{(3\cos(x)+5)^{2}}= \frac{4}{3\cos(x)+5}
\end{split}
$$




...$\TeX$ is ruining my life...

Anyhow, my life doesn't matter, my grades do, so one last example, this time to show the importance of thinking ahead.

$$y=\arctan(\sqrt{\frac{1-\cos(x)}{1+\cos(x)}})$$

At first, let's not think ahead, and do the usual thing:

$f(x)=\arctan(x)$
$g(x)=\sqrt{\frac{1-\cos(x)}{1+\cos(x)}}$

So, g' is, and I don't have the time to type all of this, just believe me it's annoying to get here

$$\frac{2\sin(x)}{(1+\cos(x))^{2}}$$

And therefore y' is:

$$
\begin{split}
y'= \frac{1}{1+(\sqrt{(g(x)})^{2}}(\sqrt{g(x)})'\\\\
= \frac{1}{1+g(x)} \frac{1}{2\sqrt{g(x)}} g'(x)\\\\
= \frac{1}{1+ \frac{1-\cos(x)}{1+\cos(x)}}\frac{1}{2\sqrt{\frac{1-\cos(x)}{1+\cos(x)}}}\frac{2\sin(x)}{(1+\cos(x))^{2}}\\\\
=\frac{1+\cos(x)}{2} \frac{1}{2\sqrt{1-\cos(x)}} \frac{2\sqrt{1-\cos^{2}(x)}}{(1+\cos(x))^2}\\
= \frac{1}{2}
\end{split}
$$

Weird.

Could we perhaps seen it sooner that it's going to be a constant? Without having to do... All this?

Well, you might remember from trig that $\frac{1-\cos(x)}{1+\cos(x)}=\tan^{2}(x)$

which means y is $\frac{1}{2}x+C$.