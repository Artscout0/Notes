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

$A\bigcup B = \{x \in \mathbb{R}\mid x\gt\frac{1}{3} \text{ or } x^2 = 2\}=\{-\sqrt{2}\}\bigcup ]1/3;!\infty[$


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


### A small example

We have a set A, which is a subset of E, defined by property P.

We also have a set B, which is also a subset of E, defined by property Q.

We also happen to know that B is the complement of A.


Now, how do we prove that $B\bigcup A$ is $E$ ?

Well, we can say the following:

$C_E(A\bigcup B)=C_EA\bigcap C_EB$

And as the complement of A is B, and complement of B is A...

$C_E(A\bigcup B)=C_EA\bigcap C_EB = A\bigcap B$

And as they are complements, $A\bigcap B = \emptyset$


The thing to remember here is: $C_E(A\bigcup B)=C_EA\bigcap C_EB$.


## Implication

The implication symbol ($\implies$) is very useful.

It's main job is saying that for a subset, if a condition is met, then another condition is also met.

It works as follows:

$\forall x \in E, \set{x \text{ fulfills } P} \implies \set{x \text{ fulfill } Q}$

>[!warning]- Beware!
>P isn't necessarily true, there can be x that doesn't fulfill P.

So, how do we negate it?

To negate it, we must say that there exists an element that verifies P, but doesn't verify Q.

The negation would therefore be:

$\exists x \in E, (x \text{ fulfills } P) \text{ and } (x \text{ fulfills not }Q)$


We can say that what interests us is $A\bigcap \complement_E B$, if it's empty, then we can say that A's condition implies B's condition.

If it's not, so we have something that fulfills A's condition, but not B's, then we have a counterexample. 

### Some examples


a) $\forall x \in \mathbb{R}, x>1 \implies x^2 > 1$

Is we think about this as intervals:

$A = ]1;+\infty[$

$B = ]-\infty;-1[\bigcup]]1;+\infty[$

As A is part of B (well, the same as in this case), this is correct / true.


B) $\forall n \in \mathbb{N}, n \text{ even} \implies m^2 \text{ even}$

Is also true, for much the same reason.

C) $\forall x \in \mathbb{R}, x^2-5x+6=0 \implies x=2$

This is not true, if we solve this, we get 
S={2, 3}

So, as 3 is a solution:

$\exists x\in \mathbb{R}, x^2-5x+6=0\text{ and }x\ne 2$

## Implication tips

The reciprocal of an implication is where instead of $P \implies Q$, $Q \implies P$. There is no logical reason for it to be true, but it sometimes is.

The contraposed is to $P\implies Q$,  $not Q \implies not P$ 

The contraposed is equivalent to the causality.

### Examples

a) $\forall x \in \mathbb{R}, x^2>1\implies x > 1$

$A = ]-\infty;-1[\bigcup]]1;+\infty[$

$B = ]1;+\infty[$

A is not fully included in B, and all of $]-\infty;-1[$ is a counterexample.

b) $\forall n \in \mathbb{N}, n^2 \text{ is even}\implies n \text{ is even}$

It's a bit difficult to prove.

There are a couple of ways to do this:

b.1) direct way

Because of the square, it's a bit difficult to work with.

We can theoretically do this by decomposing it into prime numbers, but it's easier to use the indirect method

b.2) indirect way

We can define, by using the contraposed:

$\forall n \in \mathbb{N}, n \text{ not even} \implies n^2 \text{ not even}$

b.3) method by the absurd

Avoid this.

$\exists n\in N, n \text{ is even and } n^2 \text{ not even}$

Assume there is a counterexample.

$n^2=2k$
$n=2l+1$

$n^2=4l^2+4l+1$

These together imply
$2k=4l^2+4l+1$
$1=2k-4l^2-4l$

$1=2(k-2l^2-2l)$
which is absurd, as it'd imply 1 is even.

## Equivalence

If set A = set B

$\forall x\in E, (x \text{ fulfills } P) \iff (x \text{ fulfills } Q)$

This means that the implication also implies the original.

Basically:

$\forall x\in E, (x \text{ fulfills } P) \implies (x \text{ fulfills } Q)$
and
$\forall x\in E, (x \text{ fulfills } Q) \implies (x \text{ fulfills } P)$

then $\forall x\in E, (x \text{ fulfills } P) \iff (x \text{ fulfills } Q)$

This also means $A\subset B$ and $B\subset A$. 
