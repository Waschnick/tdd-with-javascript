# TDD with JS

Roman Numbers: 

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets)


```
I     --> 1
X     --> 10
VII   --> 7
IIX   --> 8
```

```
I = 1 
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
```

Rules:
* Symbols are additive by default (II = 1 + 1)
* If a symbol is followed by an equal or bigger number, it is substracted (IX = -1 + 10)

## Ideas

* Can you make the code really beautiful and highly readable?
* Does it help to break out lots of small named functions from the main function, or is it better to keep it all in one function?
* If you don’t know an algorithm to do this already, can you derive one using strict TDD?
* Does the order you take the tests in affect the final design of your algorithm?
* Would it be better to work out an algorithm first before starting with TDD?
* If you do know an algorithm already, can you implement it using strict TDD?
* Can you think of another algorithm?
* What are the best data structures for storing all the numeral letters? (I, V, D, M etc)