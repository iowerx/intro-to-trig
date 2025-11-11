# Chapter 6: Trigonometric Identities

## Introduction

A **trigonometric identity** is an equation involving trigonometric functions that is true for all values of the variable (where both sides are defined). These identities are not just mathematical curiosities—they're essential tools for simplifying expressions, solving equations, and proving other mathematical relationships.

Think of identities as the "algebra" of trigonometry. Just as you use algebraic rules like the distributive property to simplify expressions, you'll use trigonometric identities to transform complex trig expressions into simpler forms. Engineers use these identities to analyze alternating current circuits, physicists use them to describe wave interference, and mathematicians use them to solve otherwise intractable equations.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall fundamental trigonometric identities
- **Understand**: Explain why identities are true using the unit circle and algebra
- **Apply**: Use identities to simplify trigonometric expressions
- **Analyze**: Determine which identities to apply in different situations
- **Evaluate**: Verify trigonometric identities through algebraic manipulation
- **Create**: Derive new relationships using fundamental identities

---

## Section 6.1: Basic Identities

### The Pythagorean Identity

The most fundamental trigonometric identity comes directly from the unit circle equation x² + y² = 1:

$$\sin^2 \theta + \cos^2 \theta = 1$$

This is called the **Pythagorean identity** because it's based on the Pythagorean theorem.

**Alternative forms** (by algebraic rearrangement):
$$\sin^2 \theta = 1 - \cos^2 \theta$$
$$\cos^2 \theta = 1 - \sin^2 \theta$$

**Extended Pythagorean Identities**:

Dividing the basic identity by cos² θ:
$$\tan^2 \theta + 1 = \sec^2 \theta$$

Dividing the basic identity by sin² θ:
$$1 + \cot^2 \theta = \csc^2 \theta$$

### Quotient Identities

These define tangent and cotangent in terms of sine and cosine:

$$\tan \theta = \frac{\sin \theta}{\cos \theta}$$

$$\cot \theta = \frac{\cos \theta}{\sin \theta}$$

### Reciprocal Identities

These relate the three primary functions to their reciprocals:

$$\csc \theta = \frac{1}{\sin \theta}, \quad \sin \theta = \frac{1}{\csc \theta}$$

$$\sec \theta = \frac{1}{\cos \theta}, \quad \cos \theta = \frac{1}{\sec \theta}$$

$$\cot \theta = \frac{1}{\tan \theta}, \quad \tan \theta = \frac{1}{\cot \theta}$$

### Even-Odd Identities

These describe the symmetry of trig functions:

**Odd functions** (symmetric about the origin):
$$\sin(-\theta) = -\sin \theta$$
$$\tan(-\theta) = -\tan \theta$$
$$\cot(-\theta) = -\cot \theta$$
$$\csc(-\theta) = -\csc \theta$$

**Even function** (symmetric about the y-axis):
$$\cos(-\theta) = \cos \theta$$
$$\sec(-\theta) = \sec \theta$$

**Why these matter**: They tell us how trig functions behave with negative angles.

### Cofunction Identities

These relate complementary angles (angles that sum to 90°):

$$\sin \theta = \cos(90° - \theta)$$
$$\cos \theta = \sin(90° - \theta)$$
$$\tan \theta = \cot(90° - \theta)$$
$$\cot \theta = \tan(90° - \theta)$$
$$\sec \theta = \csc(90° - \theta)$$
$$\csc \theta = \sec(90° - \theta)$$

**Meaning**: The sine of an angle equals the cosine of its complement.

---

### Worked Examples

#### Example 6.1: Using the Pythagorean Identity

**Problem**: If sin θ = 3/5 and θ is in Quadrant I, find cos θ.

**Solution**:

Using the Pythagorean identity:
$$\sin^2 \theta + \cos^2 \theta = 1$$

$$\left(\frac{3}{5}\right)^2 + \cos^2 \theta = 1$$

$$\frac{9}{25} + \cos^2 \theta = 1$$

$$\cos^2 \theta = 1 - \frac{9}{25} = \frac{16}{25}$$

$$\cos \theta = \pm\frac{4}{5}$$

Since θ is in Quadrant I (where cosine is positive):
$$\cos \theta = \frac{4}{5}$$

**Answer**: cos θ = **4/5**

---

#### Example 6.2: Simplifying Using Quotient Identity

**Problem**: Simplify: $\frac{\sin \theta}{\cos \theta} + \frac{\cos \theta}{\sin \theta}$

**Solution**:

Recognize the quotient identities:
$$\frac{\sin \theta}{\cos \theta} = \tan \theta$$

$$\frac{\cos \theta}{\sin \theta} = \cot \theta$$

So the expression becomes:
$$\tan \theta + \cot \theta$$

We can also find a common denominator:
$$\frac{\sin \theta}{\cos \theta} + \frac{\cos \theta}{\sin \theta} = \frac{\sin^2 \theta + \cos^2 \theta}{\sin \theta \cos \theta}$$

Using the Pythagorean identity (sin² θ + cos² θ = 1):
$$= \frac{1}{\sin \theta \cos \theta}$$

**Answer**: $\tan \theta + \cot \theta = \frac{1}{\sin \theta \cos \theta}$

---

#### Example 6.3: Using Even-Odd Identities

**Problem**: Simplify: sin(-30°) + cos(-30°)

**Solution**:

Using even-odd identities:
- sin(-30°) = -sin 30° = -1/2
- cos(-30°) = cos 30° = √3/2

$$\sin(-30°) + \cos(-30°) = -\frac{1}{2} + \frac{\sqrt{3}}{2} = \frac{\sqrt{3} - 1}{2}$$

**Answer**: $\frac{\sqrt{3} - 1}{2}$ ≈ 0.366

---

#### Example 6.4: Verifying an Identity

**Problem**: Verify the identity: $\sin \theta \tan \theta = \sec \theta - \cos \theta$

**Solution**:

Work with the left side, converting to sine and cosine:
$$\sin \theta \tan \theta = \sin \theta \cdot \frac{\sin \theta}{\cos \theta} = \frac{\sin^2 \theta}{\cos \theta}$$

Use the Pythagorean identity: sin² θ = 1 - cos² θ
$$= \frac{1 - \cos^2 \theta}{\cos \theta}$$

Separate the fraction:
$$= \frac{1}{\cos \theta} - \frac{\cos^2 \theta}{\cos \theta} = \sec \theta - \cos \theta$$

This matches the right side, so the identity is verified! ✓

---

### Practice Problems

**Problem 6.1**: If cos θ = 5/13 and θ is in Quadrant I, find sin θ and tan θ.

**Problem 6.2**: Simplify using identities:
1. sin θ · csc θ
2. cos θ · sec θ
3. tan θ · cos θ

**Problem 6.3**: Evaluate without a calculator:
1. sin(-45°)
2. cos(-60°)
3. tan(-30°)

**Problem 6.4**: Use cofunction identities to write each as a function of the complement:
1. sin 25°
2. tan 40°
3. sec 15°

**Problem 6.5**: If tan θ = 4/3 and θ is in Quadrant III, find sin θ and cos θ.

**Problem 6.6**: Simplify: $\frac{\tan \theta}{\sec \theta}$

**Problem 6.7**: Verify the identity: $\tan^2 \theta - \sin^2 \theta = \tan^2 \theta \sin^2 \theta$

**Problem 6.8**: Simplify: $(sin \theta + \cos \theta)^2 + (\sin \theta - \cos \theta)^2$

---

## Section 6.2: Angle Formulas

### Sum and Difference Formulas

These formulas allow us to find exact trig values for sums and differences of angles:

**Sine Sum and Difference**:
$$\sin(A + B) = \sin A \cos B + \cos A \sin B$$
$$\sin(A - B) = \sin A \cos B - \cos A \sin B$$

**Cosine Sum and Difference**:
$$\cos(A + B) = \cos A \cos B - \sin A \sin B$$
$$\cos(A - B) = \cos A \cos B + \sin A \sin B$$

**Tangent Sum and Difference**:
$$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$$
$$\tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A \tan B}$$

**Important**: Note that sin(A + B) ≠ sin A + sin B. You must use the formula!

### Double Angle Formulas

These are special cases of the sum formulas where B = A:

**Sine Double Angle**:
$$\sin 2\theta = 2\sin \theta \cos \theta$$

**Cosine Double Angle** (three equivalent forms):
$$\cos 2\theta = \cos^2 \theta - \sin^2 \theta$$
$$\cos 2\theta = 2\cos^2 \theta - 1$$
$$\cos 2\theta = 1 - 2\sin^2 \theta$$

**Tangent Double Angle**:
$$\tan 2\theta = \frac{2\tan \theta}{1 - \tan^2 \theta}$$

### Half Angle Formulas

These formulas find trig values of half an angle:

$$\sin \frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos \theta}{2}}$$

$$\cos \frac{\theta}{2} = \pm\sqrt{\frac{1 + \cos \theta}{2}}$$

$$\tan \frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos \theta}{1 + \cos \theta}} = \frac{\sin \theta}{1 + \cos \theta} = \frac{1 - \cos \theta}{\sin \theta}$$

The ± sign is determined by the quadrant of θ/2.

### Product-to-Sum Formulas

These convert products of trig functions to sums:

$$\sin A \cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$$

$$\cos A \sin B = \frac{1}{2}[\sin(A+B) - \sin(A-B)]$$

$$\cos A \cos B = \frac{1}{2}[\cos(A+B) + \cos(A-B)]$$

$$\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$$

---

### Worked Examples

#### Example 6.5: Using Sum Formula to Find Exact Value

**Problem**: Find the exact value of sin 75° without a calculator.

**Solution**:

Write 75° as a sum of special angles: 75° = 45° + 30°

Using the sine sum formula:
$$\sin(A + B) = \sin A \cos B + \cos A \sin B$$

$$\sin 75° = \sin(45° + 30°)$$
$$= \sin 45° \cos 30° + \cos 45° \sin 30°$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$
$$= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}$$
$$= \frac{\sqrt{6} + \sqrt{2}}{4}$$

**Answer**: $\sin 75° = \frac{\sqrt{6} + \sqrt{2}}{4}$ ≈ 0.966

---

#### Example 6.6: Using Difference Formula

**Problem**: Find the exact value of cos 15°.

**Solution**:

Write 15° as a difference: 15° = 45° - 30°

Using the cosine difference formula:
$$\cos(A - B) = \cos A \cos B + \sin A \sin B$$

$$\cos 15° = \cos(45° - 30°)$$
$$= \cos 45° \cos 30° + \sin 45° \sin 30°$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$
$$= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}$$
$$= \frac{\sqrt{6} + \sqrt{2}}{4}$$

**Answer**: $\cos 15° = \frac{\sqrt{6} + \sqrt{2}}{4}$ ≈ 0.966

---

#### Example 6.7: Using Double Angle Formula

**Problem**: If sin θ = 3/5 and θ is in Quadrant II, find sin 2θ.

**Solution**:

First, find cos θ using the Pythagorean identity:
$$\cos^2 \theta = 1 - \sin^2 \theta = 1 - \frac{9}{25} = \frac{16}{25}$$

In Quadrant II, cosine is negative:
$$\cos \theta = -\frac{4}{5}$$

Now use the double angle formula:
$$\sin 2\theta = 2\sin \theta \cos \theta$$
$$= 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right)$$
$$= -\frac{24}{25}$$

**Answer**: sin 2θ = **-24/25**

---

#### Example 6.8: Using Half Angle Formula

**Problem**: Find sin 15° using a half angle formula.

**Solution**:

Note that 15° = 30°/2

Using the half angle formula:
$$\sin \frac{\theta}{2} = \sqrt{\frac{1 - \cos \theta}{2}}$$

$$\sin 15° = \sin \frac{30°}{2} = \sqrt{\frac{1 - \cos 30°}{2}}$$

$$= \sqrt{\frac{1 - \frac{\sqrt{3}}{2}}{2}} = \sqrt{\frac{2 - \sqrt{3}}{4}}$$

$$= \frac{\sqrt{2 - \sqrt{3}}}{2}$$

**Answer**: $\sin 15° = \frac{\sqrt{2 - \sqrt{3}}}{2}$ ≈ 0.259

**Note**: This is a different form than we got in Example 6.6 for cos 15°, but both are correct!

---

#### Example 6.9: Simplifying Using Double Angle Formula

**Problem**: Simplify: $\frac{\sin 2\theta}{2\sin \theta}$

**Solution**:

Use the double angle formula for sine:
$$\sin 2\theta = 2\sin \theta \cos \theta$$

Substitute:
$$\frac{\sin 2\theta}{2\sin \theta} = \frac{2\sin \theta \cos \theta}{2\sin \theta}$$

Cancel common factors:
$$= \cos \theta$$

**Answer**: $\frac{\sin 2\theta}{2\sin \theta} = \cos \theta$

---

### Practice Problems

**Problem 6.9**: Find exact values using sum or difference formulas:
1. sin 105° (Hint: 105° = 60° + 45°)
2. cos 75°
3. tan 15°

**Problem 6.10**: If cos θ = 12/13 and θ is in Quadrant I, find:
1. sin 2θ
2. cos 2θ
3. tan 2θ

**Problem 6.11**: Use a half angle formula to find cos 22.5° (note: 22.5° = 45°/2).

**Problem 6.12**: Simplify using double angle formulas:
1. $\frac{\cos 2\theta}{\cos \theta}$
2. $2\sin 3\theta \cos 3\theta$

**Problem 6.13**: Verify the identity: $\sin 2\theta = \frac{2\tan \theta}{1 + \tan^2 \theta}$

**Problem 6.14**: If tan θ = 2 and θ is in Quadrant I, find tan 2θ.

**Problem 6.15**: Express sin 5x cos 3x as a sum.

**Problem 6.16**: Verify: $\cos 2\theta = \frac{1 - \tan^2 \theta}{1 + \tan^2 \theta}$

---

## Section 6.3: Chapter Summary

### Key Identities to Memorize

**Pythagorean Identities**:
- $\sin^2 \theta + \cos^2 \theta = 1$
- $\tan^2 \theta + 1 = \sec^2 \theta$
- $1 + \cot^2 \theta = \csc^2 \theta$

**Quotient Identities**:
- $\tan \theta = \frac{\sin \theta}{\cos \theta}$
- $\cot \theta = \frac{\cos \theta}{\sin \theta}$

**Reciprocal Identities**:
- $\csc \theta = \frac{1}{\sin \theta}$, $\sec \theta = \frac{1}{\cos \theta}$, $\cot \theta = \frac{1}{\tan \theta}$

**Even-Odd Identities**:
- $\sin(-\theta) = -\sin \theta$ (odd)
- $\cos(-\theta) = \cos \theta$ (even)
- $\tan(-\theta) = -\tan \theta$ (odd)

**Sum and Difference**:
- $\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$
- $\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$

**Double Angle**:
- $\sin 2\theta = 2\sin \theta \cos \theta$
- $\cos 2\theta = \cos^2 \theta - \sin^2 \theta = 2\cos^2 \theta - 1 = 1 - 2\sin^2 \theta$

### Strategies for Using Identities

**Simplification**:
1. Convert everything to sine and cosine
2. Look for Pythagorean identity opportunities
3. Factor when possible
4. Find common denominators for fractions

**Verification**:
1. Work with one side (usually the more complex side)
2. Transform it step-by-step
3. Each step should use a valid identity or algebraic operation
4. Stop when you reach the other side

**Finding Exact Values**:
1. Express the angle as a sum, difference, or multiple of special angles
2. Apply the appropriate formula
3. Use known values for 30°, 45°, 60°

### Common Mistakes to Avoid

1. **Don't distribute incorrectly**: sin(A + B) ≠ sin A + sin B
2. **Watch signs**: Negative angles and different quadrants affect signs
3. **Verify domain restrictions**: Some identities require certain conditions
4. **Don't skip steps**: Show each transformation clearly
5. **Check your algebra**: Factor correctly, combine fractions properly

### Why This Matters for Trigonometry

Trigonometric identities are essential because:

1. **Simplification** - Complex expressions become manageable
2. **Equation solving** - Many trig equations can only be solved using identities
3. **Integration and differentiation** - Calculus relies heavily on these identities
4. **Engineering applications** - Signal processing, wave analysis, and AC circuits
5. **Exact values** - Find precise values for any angle built from special angles
6. **Proof and derivation** - Establish new mathematical relationships

### Looking Ahead

In **Chapter 7**, we'll put these identities to work solving **trigonometric equations**. You'll learn how to find angles when you know the value of a trig function, solve equations involving multiple angles, and work with inverse trigonometric functions. The identities from this chapter will be essential tools for solving these problems!

---

### Chapter Review Questions

**Short Answer**:

1. State the Pythagorean identity.
2. What is the quotient identity for tangent?
3. Is sine an even or odd function? What does this mean?
4. State the double angle formula for sin 2θ.
5. Why is sin(A + B) not equal to sin A + sin B?

**Problem Solving**:

6. If sin θ = 7/25 and θ is in Quadrant II, find cos θ and tan θ.

7. Simplify: $\frac{\tan \theta \cos \theta}{\sin \theta}$

8. Evaluate: sin(-45°) + cos(-30°)

9. Find the exact value of sin 15° using a difference formula.

10. Verify the identity: $\frac{1 - \sin^2 \theta}{\cos \theta} = \cos \theta$

11. If cos θ = 3/5 and θ is in Quadrant IV, find sin 2θ and cos 2θ.

12. Simplify: $(\sin \theta + \cos \theta)^2$

13. Use a cofunction identity to write tan 35° in terms of another function.

14. Find tan 75° using a sum formula.

15. Verify: $\sec^2 \theta - \tan^2 \theta = 1$

---

**Chapter 6 Complete!** Move on to Chapter 7: Solving Right Triangles and Finding Angles
