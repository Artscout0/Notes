The idea for series comes from philosophy, when some guy in ancient Greece suggested that Achilles [^1] couldn't outrun a turtle, as in order to reach it, he first needs to reach half the distance, and then half the remaining distance, and then half the remaining distance after that, etc...

This concluded in everyone saying "but he could though" and not really giving a toss about it anymore, until Archimedes, who decided to use something series adjacent to to calculate an approximation of $\pi$.

Then a couple of centuries later some European guys[^2] thought "oh that's actually pretty neat", and deciding to use them for their not-exactly-nefarious purposes like inventing calculus.

## So, what is a series?

> "Math is like lego, you get tiny little bricks you want to combine into something better"
> *- Prof. Samuel Dubuis*

Well, a series is $a_{1}, a_{2}, a_{3}, a_{4},...$

so literally a series of numbers.

the term $a_n$ is called the general term of the series.
we can note the series in many ways:
- $(a_{n})^{\infty}_{n+1}$
- $(a_{n})_{n\in\mathbb{R}}$
- $(a_n)$
- $(a_n):a_{1},a_{2},a_{2}...$

The nth element of a series is just n.

Some series are just numbers, and some series can be constructed.

And much how we do with, well, a lot of things in math, we can add series together.

$(a_n)+(b_n)$ is $(a_n+b_n)$
so:
$(a_n+b_n)=a_1+b_1,a_2+b_2,...$

ex:
$(a_n)=1,1,1,1,1,...$
$(b_n)=-1,-1,-1,-1,...$
so
$(a_n+b_n)=0,0,0,0,0,...$

The product of a series is as simple as:
$(a_n)*(b_n)=(a_n*b_n)$

And the quotient is:
$(a_n)/(b_n)=(a_n/b_n)$

>[!warning]-
>If $b_n$ contains 0, this doesn't work.

Basically, business as usual.

## Some properties

Let's start with some series types:
### Increasing series

we call a series increasing if every following element of the series is greater than the previous one.

So $a_{n}\le a_{n+1}$

Ex: $(a_n)=1,2,4,8,16,32,64,...$
### Decreasing series

Take a wild guess

So $a_{n}\ge a_{n+1}$

Ex: $(a_{n})=1,\frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, \frac{1}{6}, ...$

### Monotonous series

We call a series is monotonous if it's increasing or[^3] decreasing. 

### Strictly increasing, decreasing, and monotonous

Same things as the 3 previous ones, except instead of $\le$ and $\ge$, it's $\lt$ an $\gt$.

### Majored series

If there is a number that is greater than every number in the series, that it will never reach, M=1.

$\exists m\in\mathbb{R}, m > a_n$

### Non majored series

Any series that isn't majored.

### Minored series

$\exists m\in\mathbb{R}, \forall n\in\mathbb{N^*}, m < a_n$

### Non minored series

You can guess.

### Bordered series

If a series is both majored and minored, it's bordered.

Ex: $(a_{n})=1,\frac{1}{2}, \frac{1}{3},...,\frac{1}{n},...$

Also, to determine if a series if bordered, you can simply determine if the absolute value of the series is majored.

## Determining a series' general term

### Example 1

$(a_n)=1,6,11,16,21,26,...$

We can determine that from a number to the next we notice that the difference is constant - 5.

This means the general term can be formulated as $a_{n} = 5n+c$ (where 5 is the 'step', n the iteration, and c some constant).

Here, with the values we have, we get $5n-6$.

### Example 2

$(a_{n})= \frac{2}{3}, \frac{5}{6}, \frac{10}{9}, \frac{17}{13}, \frac{26}{15},...$

Here, we see that it's got a top part, and a bottom part, so if we figure out both of them as individual series, we can combine them.

the bottom part is obviously the multiples of 3, so it's $3n$.

The top part is a bit more complex, but we can notice that it - 1 is a perfect square, so it's $n^2+1$.

This allows us to combine that into:

$a_n=\frac{n^2+1}{3n}$



### Example 3

$(c_n)=1,0,1,0,1,0,1,0$

This can be found as a combination of two series again.

We split it into:

$(C_{n1})=1,1,1,1,1,1,...$ so $C_n1=1$

$(C_{n2})=1,-1,1,-1,1,-1,...$ which is more complex, but can be found as $-1(-1)^{n}$.

If we add them, we get $2, 0, 2, 0,...$, which we can simply divide by 2, leaving us with $\cfrac{1-1(-1)^{n}}{2}$.

### Example 4

$d_{1}=\frac{3}{2}$ and $d_{n}= 2- \frac{1}{d_{n}}$

How to construct this series?

Well, as we can see, the series is recursive (any comp-sci people know - this is often not good)

If we construct the start...

$(d_{n})=\frac{3}{2}, \frac{4}{3}, \frac{5}{4},...$

So, to find a formula:
#### Step 1

We guess the formula

This seems like $\frac{2+n}{1+n}$

#### Step 2:

We prove this using recursion proofs, and here's how do so:

To show this, we need essentially to get on an infinite staircase.

To do so, we need 2 things:
- Start on a step
- Walk a step up

#### Step 3.1

We need to start on a step, and the easiest is to start on the 1st step.

#### Step 3.2

Induction:

That is, we suppose that the formula is true for n, and we show that it works for n+1.

To do so in this case, we check if the formula $d_{n}= \frac{n+2}{n+1}$

Does it work for step 1: $d_1=\frac{3}{2}= \frac{1+2}{1+1}$ - ✅

To do it for step 2:

To show it for $d_2$, we need to show $d_{n+1}= \frac{(n+1)+2}{(n+1)+1}=\frac{n+3}{n+2}$

The only info we haven't used yet is $d_{n+1}=2- \frac{1}{d_{n}}$

We need to show that this is equivalent to $\frac{n+3}{n+2}$.

If we replace $d_n$ in the formula with it, we can do so fairly easily (I'm leaving this as an exercise to the reader, definitely because typing it all is a bit too difficult).

If we're able to have a starting point and a step that works consistently according to available data, we've proved it. 

### Example 5

$(a_n)$ is defined as follows:
- $a_1$ = 1 = 1
- $a_2$ = 1 + 2 = 3
- $a_3$ = 1 + 2 + 3 = 6
- $a_4$ = 1 + 2 + 3 + 4 = 10
- $a_5$ = 1 + 2 + 3 + 4 + 5 = 15
- $a_6$ = 1 + 2 + 3 + 4 + 5 + 6 = 21
...

So for any number n, it's the sum of all natural numbers $\le$ to it.

Another definition is 

$a_{n}=a_{n-1}+n$

Step 1:

find a formula:

remembering a story from Gauss' childhood, we can get a stroke of inspiration and come up with $\frac{n(n+1)}{2}$.

Step 2:

$a_{n}+n=a_{n+1}$

If we take our hypothesis to be correct, it's

$\frac{n(n+1)}{2}+n=a_{n+1}$

This can be turned into 

$$\frac{(n+1)(n+2)}{2}$$

which is (n+1)(n+1+1), which is what it should be for the next number, proving it correct.

[[5 - Powers and roots|Previous chapter]]


[^1]:Some Greek hero guy

[^2]:Yes of course Newton was among them, see my other notes about my frustrations with him

[^3]:Exclusive or, only one or the other. It's always the same behavior.