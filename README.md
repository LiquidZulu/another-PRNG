# another-PRNG
another-PRNG is a seeded pseudorandom number generator with a uniform distribution based on taking the arccos(cos(x)) leaving a zig-zag graph.
Pseudorandom numbers could be generated by passing in the current unix timestamp as the seed

**I cannot guarantee security if used for cryptographic purposes, that will depend on how it's implemented.**

# License
https://creativecommons.org/licenses/by-sa/4.0/


# How it works

The following is an explanation behind the mathematics behind this generator, you do not need to know this to use the function.

The following is a graph of f(x) = cos(x):
![Graphical representation of the locus of f(x) = cos(x)](/graphs/cos(x).png)

This [function](https://en.wikipedia.org/wiki/Function_(mathematics)) comes from a field of mathematics called [trigonometry](https://en.wikipedia.org/wiki/Trigonometry). Understanding how this works on its own is not relevant to this program.

The second, and more important graph is the graph of f(x) = arccos(cos(x)), sometimes written cos^-1(cos(x)):
![Graphical representation of the locus of f(x) = arccos(cos(x))](/graphs/arccos(cos(x)).png)

The arccos() function is the [inverse function](https://en.wikipedia.org/wiki/Function_(mathematics)#Inverse_and_implicit_functions) of cos() which *should* return any and all possible input values for a given output from cos(). Normally f^-1(f(x)) = x which would give f(x) = x or just a straight line with gradient of 1. This doesn't occur with arccos(cos(x)) because there are infinite input values for cos(x) which could output a number between -1 and 1 which is why the graph repeats every 2pi radians much like how a circle repeats every 2pi radians.

Its easier to see how these functions interact here:
![Graphical representation of the loci of f(x) = arccos(cos(x)) and f(x) = cos(x)](/graphs/both.png)

As x -> infinity the amount of times the function has output that same falue for cos(x) grows as it loops back to the same value over and over so to save on having to calculate those infinite values the computer simply returns the smallest value, at least for JavaScript and Python it does I can't speak to the efficacy of this technique in other languages.
