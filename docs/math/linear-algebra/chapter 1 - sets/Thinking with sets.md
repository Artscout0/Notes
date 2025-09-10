## What are sets?

Sets are a collection of things.
It can be a collection of many things, typically similar in a way or another.

A classic example is $\mathbb{N}$, the set of natural numbers. But another good example is the set of points whose $x = y$, which can be represented as a line.

>[!info]- 
>A set doesn't have to be math related, you can have the set of all students in a class, but as we're using it for math, that is largely irrelevant.

## Simple set notation

To write a set in math, we write it $E = \{a,b,x,y,z,...\}$, where E is the name of the set, the braces delimit the set, and x,y,z are contained by the set.

We can say $x \in E$, that is to say x is in the set E.

Now, say we have a set A that only contains x and y, $A = \{x, y\}$.

We can then say, $A\subset E$, that is to say A is a subset of E, all it's elements are also in E, but not all of E is necessarily in A.

But, by defining that A contains part of E, we automatically define the set of all things in E that aren't in A, its complement.

In any case, let's define another subset of E: $B = \{b,x\}$

Now, we can see that A and B have some elements in common, and some elements not.

We can then find:

The items of E not in A: $C_EA=\{x\in E | x\notin A\}$
>[!info]-
>The '|' symbol means that everything that fits the formula in the first part, limited by the second part.

The union of both sets: $A \bigcup B = \{x\in E | x \in A \text{ or } x\in B \}= \{b,x,y\}$
Their elements in common: $A \bigcap B=\{x\in E|x\in A \text{ and } x\in B\}=\{x\}$
> [!info]-
> Yes, this is a 1 item set, this is common. No, it would not be correct to write $x$ instead of $\{x\}$


To display sets, we also can use Venn Diagrams.

A very important set is $\emptyset$, which is $\{\}$.
Anything $\bigcup\emptyset$ will always result in the given anything,
Anything $\bigcap\emptyset$ will always result in $\emptyset$.

## Finite and infinite sets

There are two sets: finite and infinite ones.

Finite sets are quite nice, as they aren't very abstract. You can count the number of elements in the set, and use the set easily.

Infinite sets are where the wacky stuff mathematicians are known for starts.

The simplest infinite set is $\mathbb{N}$, which is the set of all natural numbers.
$\mathbb{N} = \{0,1,2,3,\dots\}$

There are some additional ones, but it gets interesting at $\mathbb{Q}$.

Specifically, because due to it's definition, which is everything that can be represented as a fraction:
$\mathbb{Q}=\{\cfrac{p}{q}|p,q\in\mathbb{Z},q\ne0\}$
(so p and q are all positive or negative integers, and q isn't 0.)

We can also say
$\mathbb{N\subset Z\subset Q\subset R}$

## Characteristic properties

Many sets are going to be presented under the following form:

$\mathbb{A}=\{x \in E \mid x \text{ fills some condition } P\}$

P would then be a characteristic property.

Some examples include:

$A = ]\frac{1}{3};+\infty[ = \{x\in \mathbb{R} \mid x \gt \frac{1}{3}\}$ (in interval is basically a continuous set from a starting point to an ending point.)

$B = \{-\sqrt{2};\sqrt{2}\}=\{x\in \mathbb{R}\mid x^2 = 2\}$

$C_EA=\{x \in \mathbb{E}\mid x \le \frac{1}{3}\}$

$A\bigcap B = \{\sqrt{2}\}=\{x \in \mathbb{R}\mid x\gt\frac{1}{3} \text{ and } x^2 = 2\}$

$A\bigcup B=\{x\in\mathbb{R}\mid\\{\sqrt{2}\}=\{x \in \mathbb{R}\mid x\gt\frac{1}{3} \text{ or } x^2 = 2\}}=\{-\sqrt{2}\}\bigcup ]1/3;!\infty[$


From these examples we learn the following:

Where A is a subset of E that fills condition P and B is a subset of E that fills condition M:

$C_EA=\{x\in E\mid x \text{ fullfils condition not } P\}$

$A\bigcap B=\{x\in E\mid x \text{ fulfills condition P and M}\}$

$A\bigcup B=\{x\in E\mid x \text{ fulfills condition P or M}\}$

## Complex set notation

The important symbol in this section is $\exists$, which means exists.

$P: \exists k \in \mathbb{N}, n=k^2$

This is a condition that means:

There exists a number k, so that n is it's square.

If we try to find A, which is a subset of E, based on P:

$E=\{1,2,3,4,5,6,7,8,9\}$

$A=\{n\in E\mid \exists k \in \mathbb{N}, n=k^2\}$

The resulting set A would only contain perfect squares.

$A = \{4,9\}$

If we try to find B, which is A's complement:

$B=C_EA=\{n\in E\mid\forall k \in \mathbb{N},n\ne k^2\}$