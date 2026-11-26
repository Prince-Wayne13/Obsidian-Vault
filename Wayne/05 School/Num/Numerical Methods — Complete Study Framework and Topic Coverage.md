# Numerical Methods — Complete Study Framework and Topic Coverage

**Module:** MTS-NUM-321\
**Programme:** BECE 3, BEEE 3, BETE 3 & BBME 3\
**Basis:** MUBAS Numerical Methods module outline, with the additional concepts specifically requested integrated into the relevant topics.

**How to use this guide.** Study each topic in the same order: definition → purpose and conditions → formulas and notation → derivation → proof/validity → worked method → error and convergence → interpretation → comparison → examination cues. Not every topic has a separate proof; where a proof is not normally required, the validity argument is explained instead.

## 1. The Standard Mathematics Study Approach

Apply this framework to every subtopic in the module.

| Step | Key question | What to do |
| --- | --- | --- |
| **Definition** | What is it? | State the mathematical meaning in clear language. |
| **Purpose** | What problem does it solve? | Identify why the method is needed. |
| **Conditions** | When can it be used? | Identify assumptions, data requirements and restrictions. |
| **Formula** | What is the rule? | Write the formula and define every symbol. |
| **Derivation** | Where does the formula come from? | Start from the underlying principle and show the algebraic steps. |
| **Proof or validity** | Why does it work? | Establish the result or explain why the method is valid. |
| **Application** | How is it used? | Work a basic example, then a more demanding examination-style example. |
| **Error and convergence** | How accurate is it? | Identify the error, its order, the stopping rule and the convergence behaviour. |
| **Interpretation** | What does the answer mean? | Explain what the numerical result tells us, including units. |
| **Comparison** | What alternatives exist? | Compare methods that solve the same problem. |
| **Examination technique** | How do I recognise it? | Identify question wording, clues and common traps. |

**Important distinctions**

- A **derivation** shows how a formula is obtained.
- A **proof** establishes that a statement is mathematically true.
- Sometimes a derivation also establishes the required result; sometimes the proof is separate.
- A numerical method can be useful even when it gives an approximation rather than an exact answer.

## 2. Module Map

The official module outline identifies these main areas:

1. Error analysis
2. Roots of equations
3. Polynomial interpolation and approximation
4. Numerical differentiation
5. Numerical integration
6. Iterative methods for systems of linear equations
7. Numerical methods for ordinary differential equations (ODEs)

The learning outcomes are to recognise when numerical methods are appropriate; approximate linear and nonlinear equation solutions; interpolate data with polynomials; estimate derivatives and integrals; and solve ODEs numerically.

**Additional requested coverage, integrated below**

- Gaussian quadrature
- Error of iterations and stopping criteria
- Deriving Hermite interpolation from Lagrange interpolation
- The role of Taylor series across numerical methods
- Fixed-point iteration when an initial approximation is supplied
- How to identify equally spaced and unequally spaced data
- What to do when interpolation data are not equally spaced
- Trapezoidal and Simpson formula derivations and error terms

## 3. Error Analysis

### 3.1 Definition and purpose

Numerical methods replace an exact mathematical process or value with a finite calculation. **Numerical error** is the difference between the exact value and the computed approximation.

Let x = exact value and x̄ = computed approximation.

### 3.2 Absolute error

> Eₐ = | x − x̄ |

Absolute error measures the size of the difference, in the same units as the quantity.

### 3.3 Relative error

For x ≠ 0:

> Eᵣ = | x − x̄ | / | x |

> Percentage relative error = Eᵣ × 100 %

Relative error compares the error with the size of the exact value, so it is useful when comparing errors in quantities of different sizes.

### 3.4 True value, approximate value and error

If the exact value is unavailable, a problem may use:

- the difference between successive approximations;
- a theoretical error bound;
- a known reference value supplied in the question.

Do not call the difference between successive approximations the *true* error unless the exact value is known. It is an **error estimate**, not necessarily the actual error.

### 3.5 Sources of numerical error

**(a) Truncation error.** Occurs when an infinite process or exact expression is cut off after a finite number of terms or steps.

Example (Taylor expansion): if we use only

> eˣ ≈ 1 + x + x²/2!

the omitted terms create truncation error.

**(b) Rounding error.** Occurs because a calculation stores only a limited number of digits.

Example, to four significant digits: 3.141592 ≈ 3.142. The stored value differs from the original value.

**(c) Finite-digit arithmetic.** A finite-digit system keeps a limited number of significant digits, and rounding may occur after *each* operation, not just at the end.

**Exam method:** follow the stated digit limit and round at every required operation. Do not keep hidden extra digits if the question explicitly requires finite-digit arithmetic.

### 3.6 Error propagation

An input error can affect a later calculated result. Suppose x̄ = x + Δx and ȳ = y + Δy.

**Sum**

> x̄ + ȳ = (x + y) + (Δx + Δy)

**Product**

> x̄ȳ = xy + xΔy + yΔx + ΔxΔy

Define the signed relative errors R(x) = Δx / x and R(y) = Δy / y. Then the exact relative error in the product is

> R(xy) = R(x) + R(y) + R(x)R(y)

For small relative errors the product term is neglected:

> R(xy) ≈ R(x) + R(y)

**Quotient** (provided y + Δy ≠ 0)

> (x̄ / ȳ) / (x / y) = (1 + R(x)) / (1 + R(y))

For small errors:

> R(x/y) ≈ R(x) − R(y)

These are first-order approximations; they are not exact identities in general.

### 3.7 Catastrophic cancellation

Cancellation occurs when two nearly equal numbers are subtracted. The leading digits cancel, leaving a small result whose remaining digits may be badly affected by rounding.

**Example.** x₁ = 0.100134826 and x₂ = 0.100121111.

Exact subtraction: x₁ − x₂ = 0.000013715.

If both values are first rounded to four significant digits, x₁ ≈ 0.1001 and x₂ ≈ 0.1001, so the computed difference is **zero**. The small result has been destroyed by rounding.

**Recognition clue:** subtracting two close numbers, especially when the answer is much smaller than either input.

### 3.8 Error bounds and stopping criteria

A stopping criterion tells us when to stop iterating or refining an answer. Common tests:

- **Absolute successive-iteration test:** | xₙ₊₁ − xₙ | < ε
- **Relative successive-iteration test:** | xₙ₊₁ − xₙ | / | xₙ₊₁ | < ε, with xₙ₊₁ ≠ 0
- **Residual test** for solving f(x) = 0: | f(xₙ) | < ε

A small residual does not always guarantee a small root error, especially if the function is flat near the root. Use the stopping rule specified by the question.

### 3.9 Convergence

A sequence (xₙ) converges to L if

> lim (n → ∞) xₙ = L

The error at iteration n is eₙ = | xₙ − L |. A common model for the order of convergence is

> eₙ₊₁ ≈ C · eₙᵖ

where p = order of convergence and C = asymptotic error constant.

- p = 1: linear convergence (strictly, 0 < C < 1)
- p = 2: quadratic convergence
- p = 3: cubic convergence

An estimate of the order is

> p ≈ log( eₙ₊₁ / eₙ ) / log( eₙ / eₙ₋₁ )

This requires nonzero errors and is meaningful only once the sequence is in its asymptotic range.

**Do not confuse:**

- *convergence* — whether the sequence approaches the answer;
- *order* — how quickly the error decreases;
- *stopping criterion* — the rule used to decide the approximation is good enough.

### 3.10 Taylor series connection

Taylor series are a major source of truncation-error formulas throughout numerical analysis. About x = a:

> f(a + h) = f(a) + h f′(a) + (h²/2!) f″(a) + (h³/3!) f‴(a) + …

Taylor's theorem with remainder:

> f(a + h) = ∑ₖ₌₀ⁿ (hᵏ/k!) f⁽ᵏ⁾(a) + (hⁿ⁺¹/(n+1)!) f⁽ⁿ⁺¹⁾(ξ)

for some ξ between a and a + h, under the required differentiability conditions.

Taylor series are used to derive numerical differentiation formulas, local error terms for numerical integration, Euler and Runge–Kutta methods, orders of accuracy, and Richardson extrapolation.

**Key idea:** Taylor expansion is a common derivation tool, but not every topic is simply a “Taylor method.” Interpolation, root-finding and linear-system iteration have their own underlying principles.

## 4. Roots of Equations

A root of f(x) = 0 is a value r for which f(r) = 0. The goal is usually to find a numerical approximation to r.

### 4.1 Intermediate Value Theorem (IVT)

If f is continuous on \[a, b\] and f(a)·f(b) < 0, then there is **at least one** root in (a, b).

*Meaning:* a continuous graph that changes sign must cross the horizontal axis. A sign change guarantees at least one root, not exactly one.

### 4.2 Mean Value Theorem (MVT)

If f is continuous on \[a, b\] and differentiable on (a, b), then there is some c ∈ (a, b) such that

> f′(c) = ( f(b) − f(a) ) / ( b − a )

MVT helps establish bounds and convergence results for root-finding methods, and explains why derivative size affects how a function changes near a root.

### 4.3 Bisection method

**Definition and purpose.** Bisection repeatedly halves an interval containing a root. It is a *bracketing* method: the root stays trapped between two endpoints.

**Conditions.** f continuous on \[a, b\], and f(a)·f(b) < 0.

**Formula**

> cₙ = ( aₙ + bₙ ) / 2

Evaluate f(cₙ):

- if f(aₙ)·f(cₙ) < 0, set aₙ₊₁ = aₙ and bₙ₊₁ = cₙ;
- otherwise, if f(cₙ)·f(bₙ) < 0, set aₙ₊₁ = cₙ and bₙ₊₁ = bₙ;
- if f(cₙ) = 0, the root has been found exactly.

**Validity.** The midpoint splits the interval into two equal halves. Since the endpoint signs are opposite, the sign change remains in one half. Continuity and the IVT therefore preserve a root bracket.

**Error bound.** After n halvings, with initial length b₀ − a₀:

> bₙ − aₙ = ( b₀ − a₀ ) / 2ⁿ

> | r − cₙ | ≤ ( b₀ − a₀ ) / 2ⁿ⁺¹

To guarantee midpoint error no greater than ε, it suffices that ( b₀ − a₀ ) / 2ⁿ⁺¹ ≤ ε, i.e.

> n ≥ log₂( ( b₀ − a₀ ) / ( 2ε ) )

Use the next integer above this value.

**Worked procedure.**

1. Calculate f(a) and f(b).
2. Check the sign change.
3. Calculate the midpoint.
4. Evaluate the function at the midpoint.
5. Select the half-interval containing the sign change.
6. Repeat until the required accuracy or stopping condition is met.

**Strength and limitation.** Bisection is reliable when its conditions hold, but converges relatively slowly. It can miss a root if the starting interval has no sign change, e.g. when a graph touches the axis without crossing it.

### 4.4 Newton–Raphson method

**Definition and purpose.** Uses the tangent to the curve to estimate where the graph crosses the x-axis.

**Formula**

> xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)

**Derivation from a tangent.** The tangent at (xₙ, f(xₙ)) is

> y − f(xₙ) = f′(xₙ)( x − xₙ )

At its x-axis intercept set y = 0 and x = xₙ₊₁:

> −f(xₙ) = f′(xₙ)( xₙ₊₁ − xₙ )

Rearranging gives xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ).

**Conditions and cautions**

- A starting estimate x₀ is needed.
- The derivative must be available and nonzero at the iterates.
- A poor starting value can cause divergence or convergence to an unintended root.
- If f′(xₙ) is very small, the step can become very large.

**Convergence.** Near a simple root, with sufficient smoothness and a good starting value, the method is usually quadratically convergent:

> eₙ₊₁ ≈ C · eₙ²

Once close to the root, the number of correct digits can increase rapidly.

**Exam procedure.**

1. Identify f(x) and calculate f′(x).
2. Write the iteration formula.
3. Substitute the supplied x₀.
4. Calculate x₁, x₂, … retaining suitable precision.
5. Stop using the stated tolerance or number of iterations.
6. State the approximate root.

### 4.5 Secant method

**Definition and purpose.** Estimates the derivative using two recent points instead of calculating it exactly.

**Formula**

> xₙ₊₁ = xₙ − f(xₙ) · ( xₙ − xₙ₋₁ ) / ( f(xₙ) − f(xₙ₋₁) )

**Derivation.** The slope of the line through the two points is

> m = ( f(xₙ) − f(xₙ₋₁) ) / ( xₙ − xₙ₋₁ )

Use this slope in place of the tangent slope in the Newton step: 0 − f(xₙ) = m( xₙ₊₁ − xₙ ). Rearranging gives the secant formula.

**Conditions and cautions**

- Two starting values are required.
- The denominator must not be zero.
- No explicit derivative is needed.
- Convergence is not guaranteed for every pair of starting values.

**Convergence.** For a simple root under suitable conditions the order is p = (1 + √5)/2 ≈ 1.618 — faster than linear, but generally slower than Newton–Raphson.

### 4.6 Fixed-point iteration

**Definition.** A fixed point is a value r satisfying g(r) = r. To solve f(x) = 0, rearrange it into x = g(x) and iterate:

> xₙ₊₁ = g(xₙ)

**What if the question simply gives a number to “approximate”?** A supplied number may be the *initial approximation*, not the actual root. If the question says “take x₀ = …” or “starting with …”, use that value:

> x₁ = g(x₀),  x₂ = g(x₁),  …

If the question gives an interval or an initial guess, it is not automatically a root. The root is the unknown value satisfying f(r) = 0.

**How to rearrange.** Suppose x² + x − 2 = 0. Possible rearrangements include

> x = 2 − x²  or  x = 2 / (x + 1)

Both have the same roots where defined, but their iteration behaviour can differ. A rearrangement is not automatically convergent.

**Convergence condition.** A useful local condition: g maps a suitable interval I containing the fixed point into itself, and | g′(x) | ≤ q < 1 throughout I. Then g is a contraction on I, and the iteration converges to the unique fixed point in I for any starting value in I.

- If | g′(r) | > 1, the fixed point is generally repelling.
- If | g′(r) | = 1, this simple test is inconclusive.

**Error of iterations.** If | g′(x) | ≤ q < 1, then

> | xₙ − r | ≤ ( q / (1 − q) ) · | xₙ − xₙ₋₁ |

This is an *a posteriori* error bound.

**Exam procedure.**

1. Rearrange f(x) = 0 into x = g(x).
2. Check or discuss the convergence condition using g′(x).
3. Identify the supplied initial estimate x₀.
4. Calculate x₁ = g(x₀), then use each new value for the next.
5. Apply the required stopping criterion.

**Key warning:** different rearrangements can behave differently. If several are possible, examine | g′(x) | and choose a convergent form.

### 4.7 Regula Falsi (False Position)

**Definition and purpose.** A bracketing method that, like bisection, keeps an interval with opposite endpoint signs, but estimates the root using a straight line rather than the midpoint.

**Formula**

> c = ( a·f(b) − b·f(a) ) / ( f(b) − f(a) )

Equivalent form:

> c = a − f(a)( b − a ) / ( f(b) − f(a) )

**Derivation.** The line through (a, f(a)) and (b, f(b)) has slope m = ( f(b) − f(a) ) / ( b − a ). Set its value to zero and solve for the x-intercept.

**Procedure.** Require f continuous and f(a)·f(b) < 0. Calculate c, evaluate f(c), and replace the endpoint whose function value has the **same sign** as f(c). Repeat, preserving the bracket.

**Comparison with bisection**

- Bisection always uses the midpoint; Regula Falsi uses a line’s intercept.
- Both preserve a sign-changing interval.
- Regula Falsi can be faster, but one endpoint can stay fixed for many iterations, causing slow progress.

## 5. Polynomial Interpolation and Approximation

### 5.1 Definition and purpose

Interpolation constructs a polynomial passing through given data points, to estimate values between them. Given distinct nodes (x₀, y₀), (x₁, y₁), …, (xₙ, yₙ), we seek a polynomial Pₙ(x) such that

> Pₙ(xᵢ) = yᵢ,  i = 0, 1, …, n

With n + 1 distinct nodes there is exactly one polynomial of degree at most n satisfying these conditions.

**Interpolation vs extrapolation.** Interpolation estimates *inside* the data range; extrapolation estimates *outside* it and is usually riskier because nearby data do not constrain it.

### 5.2 How to identify equally spaced data

Calculate consecutive differences of the x-values: hᵢ = xᵢ₊₁ − xᵢ. The data are equally spaced if h₀ = h₁ = … = hₙ₋₁ = h.

- 2, 4, 6, 8 has spacing 2, so it is equally spaced.
- 2, 4, 7, 8 has spacings 2, 3, 1, so it is **not** equally spaced.

**Do not judge spacing from the y-values.** Equal spacing is a property of the independent variable xᵢ. If spacing is unequal, the ordinary forward/backward finite-difference interpolation formulas are not directly applicable. Use **Lagrange interpolation** or **Newton divided differences**.

### 5.3 Lagrange interpolation

**Formula**

> Pₙ(x) = ∑ᵢ₌₀ⁿ yᵢ Lᵢ(x)

> Lᵢ(x) = ∏ⱼ₌₀, ⱼ≠ᵢⁿ ( x − xⱼ ) / ( xᵢ − xⱼ )

Each Lᵢ(x) is a basis polynomial.

**Why it works.** At x = xᵢ, Lᵢ(xᵢ) = 1 and every other basis polynomial Lⱼ(xᵢ) = 0 (j ≠ i). Therefore Pₙ(xᵢ) = yᵢ, so the polynomial passes through every data point.

**Worked example.** Points (0, 1), (1, 2), (2, 5).

> L₀(x) = (x − 1)(x − 2) / \[(0 − 1)(0 − 2)\] = (x − 1)(x − 2) / 2

> L₁(x) = x(x − 2) / \[(1 − 0)(1 − 2)\] = −x(x − 2)

> L₂(x) = x(x − 1) / \[(2 − 0)(2 − 1)\] = x(x − 1) / 2

Thus P₂(x) = 1·L₀ + 2·L₁ + 5·L₂, which simplifies to

> P₂(x) = x² + 1

At x = 1.5: P₂(1.5) = 1.5² + 1 = **3.25**.

**Interpolation error.** If f has n + 1 continuous derivatives on the interval, then

> f(x) − Pₙ(x) = ( f⁽ⁿ⁺¹⁾(ξ) / (n + 1)! ) · ∏ᵢ₌₀ⁿ ( x − xᵢ )

for some ξ in the interval containing the nodes and x. The error depends on the (n+1)-st derivative, the node locations, and the location of x.

### 5.4 Uniqueness of the interpolating polynomial

**Statement.** Only one polynomial of degree at most n passes through n + 1 distinct data points.

**Proof.** Suppose Pₙ(x) and Qₙ(x) both interpolate the same n + 1 points. Define R(x) = Pₙ(x) − Qₙ(x). At every node, R(xᵢ) = Pₙ(xᵢ) − Qₙ(xᵢ) = 0, so R has n + 1 distinct roots. But R has degree at most n, and a nonzero polynomial of degree at most n has at most n distinct roots. Hence R is the zero polynomial, and Pₙ(x) = Qₙ(x). ∎

### 5.5 Newton divided differences (NDD)

Newton divided differences construct an interpolating polynomial and work for **equally or unequally spaced nodes**.

**First divided difference**

> f\[xᵢ, xᵢ₊₁\] = ( f(xᵢ₊₁) − f(xᵢ) ) / ( xᵢ₊₁ − xᵢ )

**Higher divided differences**

> f\[xᵢ, …, xᵢ₊ₖ\] = ( f\[xᵢ₊₁, …, xᵢ₊ₖ\] − f\[xᵢ, …, xᵢ₊ₖ₋₁\] ) / ( xᵢ₊ₖ − xᵢ )

**Newton polynomial**

> Pₙ(x) = f\[x₀\] + ∑ᵢ₌₁ⁿ f\[x₀, …, xᵢ\] ∏ⱼ₌₀ⁱ⁻¹ ( x − xⱼ )

Expanded:

> Pₙ(x) = f\[x₀\] + f\[x₀, x₁\](x − x₀) + f\[x₀, x₁, x₂\](x − x₀)(x − x₁) + …

**How the sum and product work.** For i = 1 multiply only by (x − x₀); for i = 2 by (x − x₀)(x − x₁); for i = 3 by (x − x₀)(x − x₁)(x − x₂). The summation adds the terms; the product builds the factors within each term.

**Divided-difference table.** Build first, second, third and higher divided differences with the recurrence. Read the Newton coefficients from the leading diagonal for the chosen node order.

**Forward vs backward node order.** Forward Newton form starts with x₀, then x₁, x₂, …; backward starts with xₙ, then xₙ₋₁, xₙ₋₂, …. With the same complete data and exact arithmetic both give the **same unique polynomial**; node order changes only the form and coefficients.

**Unequally spaced data.** For x = 0, 1, 3, 6 the spacings are 1, 2, 3. Divided differences still work because the recurrence divides by the actual node separation. Do **not** use the equal-step forward-difference formula with a single constant h for such data.

### 5.6 Newton forward finite-difference interpolation

**When to use.** Equally spaced x-values, with the required x near the **beginning** of the table.

**Step size and scaled position**

> h = xᵢ₊₁ − xᵢ,  s = ( x − x₀ ) / h

**Formula**

> P(x) = f₀ + s Δf₀ + \[s(s − 1)/2!\] Δ²f₀ + \[s(s − 1)(s − 2)/3!\] Δ³f₀ + …

Forward differences: Δfᵢ = fᵢ₊₁ − fᵢ, Δ²fᵢ = Δfᵢ₊₁ − Δfᵢ, and so on.

**Derivation idea.** For equally spaced nodes, write the polynomial in the basis 1, s, s(s − 1), s(s − 1)(s − 2), …. The finite differences at the first node supply the coefficients.

**Example.** Data: (0, 1), (1, 2), (2, 5), (3, 10).

| x | f | Δf | Δ²f | Δ³f |
| --- | --- | --- | --- | --- |
| 0 | 1 | 1 | 2 | 0 |
| 1 | 2 | 3 | 2 |  |
| 2 | 5 | 5 |  |  |
| 3 | 10 |  |  |  |

Estimate f(1.5): h = 1, s = (1.5 − 0)/1 = 1.5.

> P(1.5) = 1 + 1.5(1) + 1.5(0.5)/2 + 1.5(0.5)(−0.5)/6 = **3.25**

### 5.7 Newton backward finite-difference interpolation

**When to use.** Equally spaced data, with the required x near the **end** of the table. Define s = ( x − xₙ ) / h.

> P(x) = fₙ + s ∇fₙ + \[s(s + 1)/2!\] ∇²fₙ + \[s(s + 1)(s + 2)/3!\] ∇³fₙ + …

where ∇fᵢ = fᵢ − fᵢ₋₁. Backward differences are read from the bottom of the difference table.

**Difference from forward:** forward uses the first row and factors s(s − 1)…; backward uses the last row and factors s(s + 1)….

### 5.8 Central interpolation and central divided differences

A central method places the node nearest the required x near the centre of the data — useful when the target lies near the middle of equally spaced data. Be precise about terminology:

1. A **divided-difference table with central node labels** is still built with the ordinary divided-difference recurrence.
2. **Gauss central interpolation formulas** are special finite-difference formulas for equally spaced data, arranged around a central node.
3. They are not the same as simply reordering an ordinary Newton polynomial.

Common central formulas include the Gauss forward and Gauss backward forms; the exact form depends on whether x lies just above or below the chosen central node. Use the exact version prescribed in your lecture notes. Ordinary divided differences remain valid for unequal spacing; Gauss central finite-difference formulas **require** equal spacing.

### 5.9 Hermite interpolation

**Definition and purpose.** Hermite interpolation matches both function values **and derivative values** at specified nodes x₀, …, xₙ:

> H(xᵢ) = f(xᵢ),  H′(xᵢ) = f′(xᵢ)

With one value and one first derivative at each of n + 1 distinct nodes there are 2n + 2 conditions, so the Hermite polynomial has degree at most 2n + 1.

**Deriving Hermite from Lagrange.** Start with the Lagrange basis Lᵢ(x) = ∏ⱼ≠ᵢ (x − xⱼ)/(xᵢ − xⱼ), which satisfies Lᵢ(xⱼ) = 1 if i = j and 0 if i ≠ j.

To satisfy both value and derivative conditions, construct two basis functions per node:

> hᵢ(x) = \[ 1 − 2(x − xᵢ) Lᵢ′(xᵢ) \] · Lᵢ(x)²

> ĥᵢ(x) = (x − xᵢ) · Lᵢ(x)²

Required properties (δᵢⱼ = 1 if i = j, else 0):

> hᵢ(xⱼ) = δᵢⱼ,  hᵢ′(xⱼ) = 0

> ĥᵢ(xⱼ) = 0,  ĥᵢ′(xⱼ) = δᵢⱼ

Therefore the Hermite polynomial is

> H₂ₙ₊₁(x) = ∑ᵢ₌₀ⁿ f(xᵢ) hᵢ(x) + ∑ᵢ₌₀ⁿ f′(xᵢ) ĥᵢ(x)

or, expanded,

> H₂ₙ₊₁(x) = ∑ᵢ₌₀ⁿ \[ 1 − 2(x − xᵢ) Lᵢ′(xᵢ) \] Lᵢ(x)² f(xᵢ) + ∑ᵢ₌₀ⁿ (x − xᵢ) Lᵢ(x)² f′(xᵢ)

**Why the squared Lagrange basis appears.** At every other node Lᵢ(xⱼ) = 0. Squaring makes both the value *and* the first-derivative contributions vanish at those nodes. The correction factor in hᵢ makes the derivative zero at its own node, while ĥᵢ supplies the required derivative value.

**Newton divided-difference construction.** Repeat each node when its derivative is known. If f(x₀), f′(x₀), f(x₁), f′(x₁) are known, use

> z₀ = x₀, z₁ = x₀, z₂ = x₁, z₃ = x₁

For a repeated node, f\[xᵢ, xᵢ\] = f′(xᵢ). Then build the divided-difference table and use the Newton polynomial; the repeated-node entries encode the derivative information.

**Error term.** If each node has a value and first-derivative condition, the remainder has the form

> f(x) − H₂ₙ₊₁(x) = ( f⁽²ⁿ⁺²⁾(ξ) / (2n + 2)! ) · ∏ᵢ₌₀ⁿ ( x − xᵢ )²

under the required smoothness conditions.

**Lagrange vs Hermite**

| Lagrange | Hermite |
| --- | --- |
| Uses function values | Uses function values and derivative values |
| Distinct nodes | Derivative conditions added at the nodes |
| Degree at most n for n + 1 nodes | Degree at most 2n + 1 with one derivative per node |
| Matches data values | Matches values and slopes |

## 6. Numerical Differentiation

### 6.1 Definition and purpose

Numerical differentiation estimates derivatives from function values, especially when the function is known only through a table or direct differentiation is inconvenient. The exact derivative is a limit:

> f′(x) = lim (h → 0) ( f(x + h) − f(x) ) / h

A numerical formula uses a small but finite h.

### 6.2 Taylor expansions used for derivation

> f(x + h) = f(x) + h f′(x) + (h²/2!) f″(x) + (h³/3!) f‴(x) + …

> f(x − h) = f(x) − h f′(x) + (h²/2!) f″(x) − (h³/3!) f‴(x) + …

These are the foundation of the standard finite-difference formulas.

### 6.3 Forward difference

Subtract f(x) from the first expansion: f(x + h) − f(x) = h f′(x) + (h²/2) f″(x) + …. Divide by h:

> f′(x) ≈ ( f(x + h) − f(x) ) / h

The leading truncation error is proportional to h, so the method is first-order: f′(x) = \[f(x + h) − f(x)\]/h + O(h).

### 6.4 Backward difference

> f′(x) ≈ ( f(x) − f(x − h) ) / h,  error O(h)

### 6.5 Central difference

Subtract the two expansions: f(x + h) − f(x − h) = 2h f′(x) + (2h³/3!) f‴(x) + …. Divide by 2h:

> f′(x) ≈ ( f(x + h) − f(x − h) ) / ( 2h )

The leading error is proportional to h²: error O(h²). For a smooth function and comparable step size, central difference is generally more accurate than the one-sided first-order formulas.

### 6.6 Three-point and four-point formulas

| Formula | Expression | Error |
| --- | --- | --- |
| Three-point forward | f′(x) ≈ \[ −3f(x) + 4f(x + h) − f(x + 2h) \] / (2h) | O(h²) |
| Three-point backward | f′(x) ≈ \[ 3f(x) − 4f(x − h) + f(x − 2h) \] / (2h) | O(h²) |
| Three-point central | f′(x) ≈ \[ f(x + h) − f(x − h) \] / (2h) | O(h²) |
| Four-point forward | f′(x) ≈ \[ −11f(x) + 18f(x + h) − 9f(x + 2h) + 2f(x + 3h) \] / (6h) | O(h³) |
| Four-point backward | f′(x) ≈ \[ 11f(x) − 18f(x − h) + 9f(x − 2h) − 2f(x − 3h) \] / (6h) | O(h³) |

**Derivation approach.** Assume a weighted combination of Taylor expansions, choose the coefficients so that the constant and unwanted derivative terms cancel, and make the coefficient of f′(x) equal to 1. The first term that does not cancel determines the error order.

### 6.7 Higher-order central derivatives

**Second derivative.** Add the expansions for x + h and x − h: f(x + h) + f(x − h) = 2f(x) + h² f″(x) + (h⁴/12) f⁽⁴⁾(x) + …. Rearranging:

> f″(x) ≈ \[ f(x + h) − 2f(x) + f(x − h) \] / h²,  error O(h²)

**Third derivative** (five-point central):

> f‴(x) ≈ \[ f(x + 2h) − 2f(x + h) + 2f(x − h) − f(x − 2h) \] / (2h³),  error O(h²)

**Fourth derivative** (five-point central):

> f⁽⁴⁾(x) ≈ \[ f(x − 2h) − 4f(x − h) + 6f(x) − 4f(x + h) + f(x + 2h) \] / h⁴,  error O(h²)

### 6.8 Richardson’s extrapolation for derivatives

**Purpose.** Improve an approximation by combining results from different step sizes. Suppose

> D(h) = D + C hᵖ + O(hᵖ⁺¹)

where D is the exact derivative and p is the leading error order. With step h/2:

> D(h/2) = D + C (h/2)ᵖ + …

Multiply the second expression by 2ᵖ and subtract the first to eliminate the leading error term:

> D\_improved = ( 2ᵖ D(h/2) − D(h) ) / ( 2ᵖ − 1 )

- Second-order approximation (p = 2): D\_improved = \[ 4D(h/2) − D(h) \] / 3
- First-order approximation (p = 1): D\_improved = 2D(h/2) − D(h)

**Important:** use the correct p, based on the leading error term of the original approximation. The Richardson formula is not always the same; the power changes with the method’s error order.
