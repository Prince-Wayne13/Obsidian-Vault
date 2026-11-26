# Numerical Methods (MTS-NUM-321) exam study outline

The final exam is 60% of your mark. This outline covers the whole syllabus topic by topic and adds the direct linear-system methods (Gauss, Gauss-Jordan, LU). Check your timetable for your exam date; finals start 9 Nov.

## Study plan

|Session|Topics|Produce on paper|
|---|---|---|
|1|Error analysis, roots of equations|4 iterations each of bisection, Newton, secant and fixed point on one equation; the iteration count for bisection|
|2|Interpolation|Lagrange and Newton polynomials through the same 3 points, plus an error bound|
|3|Differentiation, integration|A difference table, a Richardson step, a composite Simpson sum, a 3-row Romberg table|
|4|Direct linear systems|One 3x3 solved by Gauss, by Gauss-Jordan and by LU, with the inverse from Gauss-Jordan|
|5|Iterative methods, ODEs|3 sweeps of Jacobi and of Gauss-Seidel; 3 steps of Euler and of RK4|
|6|Past papers and weak spots|One full paper in the exam time limit, then redo every lost mark|

The slow, mark-heavy question types are the table-building ones: root iterations, divided differences, Romberg, elimination and RK4. Practise those most.

## Error analysis

- Absolute error is $|p - p^_|$, where $p^_$ is the approximation. Relative error is $\dfrac{|p - p^*|}{|p|}$, for $p \neq 0$.
- Truncation error comes from cutting off an infinite process, such as stopping a Taylor series. Rounding error comes from storing numbers with finitely many digits.
- Finite-digit arithmetic: chopping drops digits after the $k$-th; rounding adjusts the last kept digit. Do every single operation in $k$ digits, not only the final answer.
- Loss of significance: subtracting two nearly equal numbers wipes out leading digits. Fix it by rewriting the expression, for example:

$$ \sqrt{x+1} - \sqrt{x} = \frac{1}{\sqrt{x+1} + \sqrt{x}} $$

- Propagation: the output error is about $|f'(x)|$ times the input error. In sums the absolute errors add; in products the relative errors add.
- Convergence: a sequence has order $p$ if

$$ e_{k+1} \approx C, e_k^{,p} $$

Order 1 is linear, 2 is quadratic.

Typical questions: find absolute and relative error; compute a sum in 4-digit chopping and in 4-digit rounding and compare; explain why a given formula loses accuracy and rewrite it.

## Roots of equations

Goal: find $x$ with $f(x) = 0$ by repeated guessing. Know the formula, one worked iteration table, the order of convergence, and when each method fails.

- IVT: if $f$ is continuous on $[a,b]$ and $f(a)$, $f(b)$ have opposite signs, there is a root inside. The MVT is used in the convergence proofs.
- **Bisection:** take the midpoint $c$, keep the half where the sign changes. After $n$ steps the root is within $\dfrac{b-a}{2^n}$, so you need

$$ n \ge \log_2!\left(\frac{b-a}{\text{tol}}\right) $$

Always converges, but linearly (ratio $1/2$).

- **Newton:** quadratic for a simple root. Fails if $f'(x) = 0$ or the start is poor, and drops to linear for a repeated root.

$$ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} $$

- **Secant:** replace $f'$ with the slope through the last two guesses. Order about $1.618$, no derivative needed.

$$ x_{n+1} = x_n - f(x_n),\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})} $$

- **Regula falsi:** the secant formula, but it always keeps a bracket around the root. Usually linear, and one end can get stuck.
- **Fixed point:** rewrite as $x = g(x)$ and iterate $x_{n+1} = g(x_n)$. It converges if $g$ maps $[a,b]$ into itself and $|g'| \le k < 1$ there. The rate is linear with ratio $|g'(\text{root})|$.

Bisection stopping criteria: half the interval width below the tolerance, $|f(c)|$ below the tolerance, or the relative change between guesses below the tolerance. Say which one you use.

Typical questions: do four iterations in a table; find how many bisection steps give 3 decimal places; show a given $g$ converges by checking $|g'| < 1$; compare Newton and secant for the same equation; explain why a method fails. Keep the calculator in radians for trig equations.

## Polynomial interpolation

Goal: build a polynomial through given data points and use it to estimate values in between.

- **Lagrange form:**

$$ P(x) = \sum_{k=0}^{n} f(x_k), L_k(x), \qquad L_k(x) = \prod_{j \ne k} \frac{x - x_j}{x_k - x_j} $$

Each $L_k$ is $1$ at $x_k$ and $0$ at the other nodes.

- **Uniqueness:** $n+1$ distinct points give exactly one polynomial of degree at most $n$. Proof idea: two such polynomials differ by a polynomial of degree at most $n$ with $n+1$ roots, so the difference is zero.
- **Newton form with divided differences:** build the table column by column, then read the top diagonal as coefficients. Adding a new point only adds one new term.

$$ f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i} $$

$$ P(x) = f[x_0] + f[x_0,x_1](https://claude.ai/chat/x-x_0) + f[x_0,x_1,x_2](https://claude.ai/chat/x-x_0)(x-x_1) + \cdots $$

- **Error:** for some $c$ in the interval,

$$ f(x) - P_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}\prod_{i=0}^{n}(x - x_i) $$

This gives an error bound.

- **Hermite:** the polynomial matches both the values and the first derivatives at the nodes (degree up to $2n+1$). Build it with divided differences, repeating each node twice and using $f'(x_i)$ for the first-order entry.

Typical questions: construct the Lagrange polynomial for 3 or 4 points and estimate $f$ at a given $x$; build a divided-difference table and write the Newton polynomial; show the Lagrange and Newton answers are the same polynomial; bound the error; build a Hermite polynomial for 2 points with derivatives. Check your polynomial by plugging in each node.

## Numerical differentiation

Goal: estimate $f'(x)$ or $f''(x)$ from function values a step $h$ apart. Every formula comes from a Taylor series, and you may be asked to derive one and name its order.

|Formula|Estimate|Error order|
|---|---|---|
|Forward difference|$\dfrac{f(x+h) - f(x)}{h}$|$O(h)$|
|Backward difference|$\dfrac{f(x) - f(x-h)}{h}$|$O(h)$|
|Central difference|$\dfrac{f(x+h) - f(x-h)}{2h}$|$O(h^2)$|
|Central, second derivative|$\dfrac{f(x+h) - 2f(x) + f(x-h)}{h^2}$|$O(h^2)$|

- **Richardson:** combine an estimate $D(h)$ with $D(h/2)$ to cancel the leading error term. For an $O(h^2)$ formula the improved value is $\dfrac{4D(h/2) - D(h)}{3}$, which is $O(h^4)$. In general, for leading order $p$:

$$ \frac{2^p, D(h/2) - D(h)}{2^p - 1} $$

- **Trade-off:** a smaller $h$ cuts truncation error but magnifies rounding error, so shrinking $h$ forever does not help.
- **Derivation:** expand $f(x+h)$ and $f(x-h)$ as Taylor series; for the central formula the $h^2$ terms cancel in the subtraction and the first leftover has $h^2$ after dividing by $2h$.

Typical questions: estimate a derivative from a table with each formula and compare with the exact value; derive the central formula; do one or two Richardson steps; say which of two formulas is more accurate and why.

## Numerical integration

Goal: estimate the area under a curve by cutting $[a,b]$ into $n$ strips of width $h = \dfrac{b-a}{n}$.

- **Composite trapezoidal rule:**

$$ T = \frac{h}{2}\Big[f_0 + 2(f_1 + \cdots + f_{n-1}) + f_n\Big] $$

Error is $-\dfrac{(b-a),h^2 f''(c)}{12}$, so $O(h^2)$; halving $h$ cuts the error to a quarter.

- **Composite Simpson's rule** (even number of strips): odd-numbered points get weight 4, even-numbered interior points get weight 2.

$$ S = \frac{h}{3}\Big[f_0 + 4(f_1 + f_3 + \cdots) + 2(f_2 + f_4 + \cdots) + f_n\Big] $$

Error is $-\dfrac{(b-a),h^4 f^{(4)}(c)}{180}$, so $O(h^4)$; halving $h$ cuts the error to a sixteenth.

- **Romberg:** start with trapezoid estimates $R(k,1)$ using 1, 2, 4, 8 strips, then improve each column with the formula below. Column 2 equals Simpson's rule, and each new column raises the order by 2 ($O(h^2)$, $O(h^4)$, $O(h^6)$).

$$ R(k,j) = \frac{4^{,j-1},R(k,j-1) - R(k-1,j-1)}{4^{,j-1} - 1} $$

Typical questions: compute $T$ and $S$ for a given $n$ and compare with the exact integral; use the error formula to choose $n$ for a given tolerance; fill a 3 or 4 row Romberg table; explain why Simpson needs an even number of strips. Reuse function values between rows of the Romberg table to save time.

## Direct methods for linear systems

Goal: solve $A\mathbf{x} = \mathbf{b}$ for $n$ unknowns in a fixed number of steps. Write the system as the augmented matrix $[A \mid \mathbf{b}]$ and work on its rows.

**Row operations** (none of them change the solution):

1. Swap two rows.
2. Multiply a row by a nonzero number.
3. Add a multiple of one row to another row.

**Gaussian elimination**

1. Forward elimination: for each column, use the pivot to zero out every entry below it. The multiplier is $m = \dfrac{\text{entry to remove}}{\text{pivot}}$, and you subtract $m$ times the pivot row. The result is an upper triangular matrix $U$.
2. Back substitution: solve the last equation first, then work upward.
3. Pivoting: if a pivot is zero or very small, swap in the row with the largest absolute entry in that column (partial pivoting). Tiny pivots magnify rounding error.

**Gauss-Jordan elimination**

- Zero out entries above and below each pivot and scale every pivot to 1, until $[A \mid \mathbf{b}]$ becomes $[I \mid \mathbf{x}]$. No back substitution is needed.
- To find an inverse, start from $[A \mid I]$ and reduce to $[I \mid A^{-1}]$.
- It costs about $n^3/2$ multiplications against about $n^3/3$ for Gaussian elimination, so use plain Gauss for a single solve.

**LU decomposition (lower and upper triangular matrices)**

- $A = LU$, where $U$ is the upper triangular matrix from forward elimination and $L$ is lower triangular with 1s on the diagonal and the multipliers $m$ below it (Doolittle form). With row swaps, $PA = LU$.
- To solve $A\mathbf{x} = \mathbf{b}$: solve $L\mathbf{y} = \mathbf{b}$ by forward substitution, then $U\mathbf{x} = \mathbf{y}$ by back substitution.
- Why it matters: factoring costs $O(n^3)$ once, then each new right-hand side costs only $O(n^2)$. The determinant of $A$ is the product of the diagonal of $U$, with a sign change for each row swap.

**Example to reproduce.** Take

$$ A = \begin{pmatrix} 2 & 1 & 1 \ 4 & 3 & 3 \ 8 & 7 & 9 \end{pmatrix} $$

The multipliers are 2, 4 and 3, giving

$$ L = \begin{pmatrix} 1 & 0 & 0 \ 2 & 1 & 0 \ 4 & 3 & 1 \end{pmatrix}, \qquad U = \begin{pmatrix} 2 & 1 & 1 \ 0 & 1 & 1 \ 0 & 0 & 2 \end{pmatrix} $$

Multiply $L$ by $U$ to check you get $A$; $\det A = 2 \times 1 \times 2 = 4$.

**Outcomes to recognise**

- A row of zeros with a nonzero right-hand side: no solution.
- A row of all zeros: infinitely many solutions (a free variable).
- Every pivot nonzero after swaps: one unique solution.

Typical questions: solve a 3x3 by Gaussian elimination with back substitution; solve it again by Gauss-Jordan and find the inverse; factor into $L$ and $U$ and solve for two different right-hand sides; count the operations; explain when pivoting is needed.

## Iterative methods for linear systems

Goal: start from a guess and refine it until it stops changing, which suits large systems. Solve equation $i$ for its own unknown $x_i$, then keep substituting.

**Jacobi:**

$$ x_i^{(k+1)} = \frac{b_i - \sum_{j \ne i} a_{ij}, x_j^{(k)}}{a_{ii}} $$

**Gauss-Seidel:**

$$ x_i^{(k+1)} = \frac{b_i - \sum_{j<i} a_{ij}, x_j^{(k+1)} - \sum_{j>i} a_{ij}, x_j^{(k)}}{a_{ii}} $$

- Jacobi uses only values from the previous sweep, so all unknowns in a sweep can be computed at once.
- Gauss-Seidel uses each new value immediately in the same sweep, and usually converges faster.
- Convergence is guaranteed if $A$ is strictly diagonally dominant: $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$ in every row. Reorder the equations first to try to achieve this. The exact condition is that the iteration matrix has spectral radius below 1.
- Convergence is linear. Stop when the largest change between successive guesses is below the tolerance.
- Cost: one sweep is $O(n^2)$ for a dense matrix against $O(n^3)$ for direct elimination, so iteration wins for big sparse systems. Finite difference approximations, listed in your course outline for this topic, turn a differential equation into such a large sparse system.

**Example to reproduce.** Solve $4x - y = 3$ and $-x + 4y = 3$ (exact answer $x = y = 1$) starting from $(0, 0)$:

|Sweep|Jacobi $(x, y)$|Gauss-Seidel $(x, y)$|
|---|---|---|
|1|$(0.75,\ 0.75)$|$(0.75,\ 0.9375)$|
|2|$(0.9375,\ 0.9375)$|$(0.984375,\ 0.99609375)$|

Gauss-Seidel is already closer after two sweeps because it reuses the fresh $x$ when computing $y$.

Typical questions: do 2 or 3 sweeps of each method and compare; check diagonal dominance and reorder the equations if it fails; say which converges faster and why; give a stopping criterion.

## Ordinary differential equations

Goal: find $y(t)$ when you know $y' = f(t, y)$ and a starting value $y(t_0) = y_0$, by stepping forward in increments of $h$ with $t_{n+1} = t_n + h$.

**Euler:**

$$ y_{n+1} = y_n + h, f(t_n, y_n) $$

**RK4:**

$$ \begin{aligned} k_1 &= f(t_n,\ y_n) \ k_2 &= f!\left(t_n + \tfrac{h}{2},\ y_n + \tfrac{h}{2}k_1\right) \ k_3 &= f!\left(t_n + \tfrac{h}{2},\ y_n + \tfrac{h}{2}k_2\right) \ k_4 &= f(t_n + h,\ y_n + h,k_3) \ y_{n+1} &= y_n + \frac{h}{6},(k_1 + 2k_2 + 2k_3 + k_4) \end{aligned} $$

- Euler's method comes from the first two Taylor terms. The error per step is $O(h^2)$ but the errors add up over about $1/h$ steps, so the global error is $O(h)$.
- Backward (implicit) Euler, if your notes cover it: $y_{n+1} = y_n + h, f(t_{n+1}, y_{n+1})$. It is more stable but each step needs an equation solved for $y_{n+1}$.
- Runge-Kutta methods take a weighted average of slopes inside each step. RK4 has global error $O(h^4)$, so halving $h$ cuts the error to a sixteenth.
- Keep every $k$ in the same step in order: $k_1$ first, then $k_2$, $k_3$, $k_4$, then update $y$.

**Check value to reproduce.** For $y' = y$ with $y(0) = 1$ and $h = 0.1$: Euler gives $y_1 = 1.1$; RK4 gives $1.1051708$ against the exact $e^{0.1} = 1.1051709$.

Typical questions: do 2 or 3 steps of Euler and RK4 and compare with the exact solution; state the local and global orders; explain how the error changes when $h$ is halved; say why RK4 needs fewer steps for the same accuracy.

## Big O and convergence cheat sheet

The power on $h$ tells you how much the error shrinks when $h$ is halved (power 1 halves it, 2 quarters it, 4 divides it by 16). The order $p$ of an iteration tells you how fast the digits grow.

|Topic|Method|Order or cost|
|---|---|---|
|Roots|Bisection|Linear, ratio $1/2$|
|Roots|Fixed point|Linear, ratio $\lvert g'(\text{root}) \rvert$|
|Roots|Regula falsi|Usually linear|
|Roots|Secant|$p \approx 1.618$|
|Roots|Newton|$p = 2$ for a simple root|
|Interpolation|Degree $n$ polynomial|Error $O(h^{n+1})$|
|Differentiation|Forward, backward|$O(h)$|
|Differentiation|Central|$O(h^2)$|
|Integration|Trapezoid|$O(h^2)$|
|Integration|Simpson|$O(h^4)$|
|Integration|Romberg, column $j$|$O(h^{2j})$|
|ODEs|Euler|Global $O(h)$|
|ODEs|RK4|Global $O(h^4)$|
|Linear systems|Gauss elimination, Gauss-Jordan|Cost $O(n^3)$|
|Linear systems|LU: factor once, then solve each right-hand side|$O(n^3)$ once, then $O(n^2)$ each|
|Linear systems|Jacobi, Gauss-Seidel|$O(n^2)$ per sweep, linear convergence|

How to measure an order from numbers.

For iterations, using three successive errors:

$$ p \approx \frac{\ln(e_{k+1}/e_k)}{\ln(e_k/e_{k-1})} $$

For step-size methods, where $E(h)$ is the error with step $h$:

$$ p = \log_2 \frac{E(h)}{E(h/2)} $$

Cost Big O comes from counting loops: one loop is $O(n)$, two nested loops $O(n^2)$, three $O(n^3)$, and you keep only the biggest power.

## Last-day checklist

Tick each one only when you can do it without notes.

- [ ] State and use absolute and relative error; do 4-digit chopping and rounding arithmetic
- [ ] Run bisection, Newton, secant, fixed point and regula falsi tables; find the bisection step count
- [ ] Build Lagrange and Newton polynomials and a Hermite polynomial; bound the interpolation error
- [ ] Write forward, backward and central differences and one Richardson step
- [ ] Compute composite trapezoid and Simpson sums; fill a Romberg table
- [ ] Solve a 3x3 by Gauss with back substitution, by Gauss-Jordan, and by LU; find an inverse
- [ ] Do Jacobi and Gauss-Seidel sweeps; test diagonal dominance
- [ ] Take Euler and RK4 steps; state the global orders
- [ ] Name the order or Big O of every method in the cheat sheet without looking
- [ ] Calculator in radians, spare batteries, and enough decimals carried through every table


---
## Subtopics Covered So Far

### Direct methods

1. Direct vs iterative methods (why Gauss-Jordan and LU exist alongside Jacobi/Seidel)
2. Gauss-Jordan elimination and RREF (market receipts)
3. Finding a matrix inverse with $[A\mid I]$
4. LU decomposition ($L$ as the “diary” of multipliers)
5. Forward and back substitution
6. Reusing LU for new right-hand sides
7. Newton-Raphson for systems, with LU as the inner linear solve

### Iterative methods

8. Jacobi method
9. Gauss-Seidel method
10. Diagonal dominance (definition, reordering equations, why it matters)
11. Three worked examples (easy, reordered with negatives, chained with numerical integration)
12. Burden’s sum-notation formulas for Jacobi and Seidel
13. Splitting $A=D-L-U$
14. Matrix form: $T_J$, $T_G$, $\mathbf{c}$
15. Spectral radius and the exact convergence condition
16. Proof that strict diagonal dominance guarantees convergence
17. Burden’s classic $4\times4$ example
18. Comparing convergence speed ($\rho(T_G)=\rho(T_J)^2$)

### Numerical integration (used inside the chained example)

19. Composite trapezoidal rule (both forms of the formula)
20. Composite Simpson’s 1/3 rule (weights 1, 4, 2, 4, 1)

### ODEs

21. General theory (Lipschitz condition, existence and uniqueness)
22. Euler’s method (local error $O(h^2)$, global error $O(h)$)
23. Cooling coffee example
24. Burden’s $y'=y-t^2+1$ with Euler
25. Midpoint method and Heun’s method (RK2)
26. Runge-Kutta 4
27. Backward (implicit) Euler, solved with Newton-Raphson
28. Higher-order ODEs as systems
29. Choosing a step size
30. Method comparison table (evaluations per step vs global error)