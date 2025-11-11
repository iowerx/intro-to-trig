# Chapter 5: The Unit Circle and Trigonometric Functions

## Introduction

So far, we've studied trigonometric ratios only in the context of right triangles with acute angles. But what about angles greater than 90°? What about negative angles? To answer these questions, we need a more powerful tool: the **unit circle**.

The unit circle is a circle with radius 1 centered at the origin of a coordinate plane. It provides a elegant way to extend trigonometric functions to any angle and reveals beautiful patterns in how these functions behave. The unit circle is also the key to understanding the graphs of trigonometric functions, which describe wave patterns found throughout nature—from sound waves to ocean tides to the motion of planets.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall the definition of the unit circle and key angle positions
- **Understand**: Explain how trigonometric functions extend beyond acute angles
- **Apply**: Find trigonometric values using the unit circle
- **Analyze**: Identify patterns in the behavior of trigonometric functions
- **Evaluate**: Determine domains, ranges, and key features of trig function graphs
- **Create**: Sketch graphs of sine, cosine, and tangent functions

---

## Section 5.1: Unit Circle Foundation

### What Is the Unit Circle?

The **unit circle** is a circle with:
- Center at the origin (0, 0) of a coordinate plane
- Radius of exactly 1 unit

**Equation**: x² + y² = 1

This equation comes directly from the Pythagorean theorem: the distance from the origin to any point (x, y) on the circle is 1.

### Angles in Standard Position

An angle is in **standard position** when:
- Its vertex is at the origin
- Its initial side lies along the positive x-axis
- It opens counterclockwise (for positive angles) or clockwise (for negative angles)

**Measuring Angles**:
- Start at the positive x-axis (the "3 o'clock" position)
- Rotate counterclockwise for positive angles
- Rotate clockwise for negative angles
- One complete rotation = 360°

### Quadrants

The coordinate plane is divided into four quadrants:
- **Quadrant I**: Both x and y are positive (0° to 90°)
- **Quadrant II**: x is negative, y is positive (90° to 180°)
- **Quadrant III**: Both x and y are negative (180° to 270°)
- **Quadrant IV**: x is positive, y is negative (270° to 360°)

### Reference Angles

A **reference angle** is the acute angle formed between the terminal side of an angle and the x-axis.

**Finding Reference Angles**:
- **Quadrant I**: reference angle = the angle itself
- **Quadrant II**: reference angle = 180° - angle
- **Quadrant III**: reference angle = angle - 180°
- **Quadrant IV**: reference angle = 360° - angle

Reference angles are always between 0° and 90° and help us find trigonometric values for any angle.

### Coordinates on the Unit Circle

For any angle θ in standard position, the point where the terminal side intersects the unit circle has coordinates:

**(x, y) = (cos θ, sin θ)**

This is the fundamental connection between the unit circle and trigonometric functions!

**Why this works**:
- The radius of the unit circle is 1
- cos θ = adjacent/hypotenuse = x/1 = x
- sin θ = opposite/hypotenuse = y/1 = y

---

### Worked Examples

#### Example 5.1: Identifying Quadrants

**Problem**: In which quadrant does each angle terminate?
a) 135°
b) 250°
c) -45°
d) 400°

**Solution**:

a) **135°**: Between 90° and 180° → **Quadrant II**

b) **250°**: Between 180° and 270° → **Quadrant III**

c) **-45°**: Negative, so rotate clockwise 45° from positive x-axis → **Quadrant IV**

d) **400°**: More than 360°, so subtract 360°: 400° - 360° = 40° → **Quadrant I**

---

#### Example 5.2: Finding Reference Angles

**Problem**: Find the reference angle for each:
a) 150°
b) 225°
c) 310°

**Solution**:

a) **150°** is in Quadrant II
   Reference angle = 180° - 150° = **30°**

b) **225°** is in Quadrant III
   Reference angle = 225° - 180° = **45°**

c) **310°** is in Quadrant IV
   Reference angle = 360° - 310° = **50°**

---

#### Example 5.3: Using Coordinates to Find Trig Values

**Problem**: A point on the unit circle at angle θ has coordinates (3/5, 4/5). Find sin θ, cos θ, and tan θ.

**Solution**:

On the unit circle, (x, y) = (cos θ, sin θ)

Therefore:
- cos θ = 3/5
- sin θ = 4/5
- tan θ = sin θ / cos θ = (4/5) / (3/5) = 4/3

**Answer**:
- sin θ = **4/5**
- cos θ = **3/5**
- tan θ = **4/3**

**Verification**: x² + y² = (3/5)² + (4/5)² = 9/25 + 16/25 = 25/25 = 1 ✓

---

#### Example 5.4: Special Angles on the Unit Circle

**Problem**: Find the coordinates on the unit circle for angles 0°, 90°, 180°, and 270°.

**Solution**:

These are the **quadrantal angles** (on the axes):

- **0°**: Point (1, 0) → cos 0° = 1, sin 0° = 0
- **90°**: Point (0, 1) → cos 90° = 0, sin 90° = 1
- **180°**: Point (-1, 0) → cos 180° = -1, sin 180° = 0
- **270°**: Point (0, -1) → cos 270° = 0, sin 270° = -1

**Note**: At these angles, one coordinate is always 0 and the other is ±1.

---

### Practice Problems

**Problem 5.1**: In which quadrant does each angle terminate?
1. 75°
2. 195°
3. 315°
4. -120°
5. 450°

**Problem 5.2**: Find the reference angle for each:
1. 120°
2. 200°
3. 330°
4. 145°

**Problem 5.3**: A point on the unit circle has coordinates (-1/2, √3/2). Find sin θ, cos θ, and tan θ.

**Problem 5.4**: What are the coordinates on the unit circle for 360°?

**Problem 5.5**: If cos θ = -0.6 and sin θ = 0.8, in which quadrant is θ?

**Problem 5.6**: True or false: A reference angle can be 95°. Explain.

**Problem 5.7**: An angle in standard position has its terminal side in Quadrant III. If its reference angle is 40°, what is the angle?

**Problem 5.8**: Verify that the point (√2/2, √2/2) lies on the unit circle.

---

## Section 5.2: Trigonometric Functions

### Extending Beyond Right Triangles

The unit circle allows us to define trigonometric functions for any angle, not just acute angles in right triangles.

**Definitions for Any Angle θ**:

If (x, y) is the point where the terminal side of θ intersects the unit circle:

$$\sin \theta = y$$
$$\cos \theta = x$$
$$\tan \theta = \frac{y}{x} \text{ (when } x \neq 0\text{)}$$

**Reciprocal Functions**:
$$\csc \theta = \frac{1}{y} \text{ (when } y \neq 0\text{)}$$
$$\sec \theta = \frac{1}{x} \text{ (when } x \neq 0\text{)}$$
$$\cot \theta = \frac{x}{y} \text{ (when } y \neq 0\text{)}$$

### Signs of Trigonometric Functions by Quadrant

The sign (positive or negative) of trig functions depends on which quadrant the angle is in:

**Quadrant I**: All functions positive
**Quadrant II**: Only sine (and csc) positive
**Quadrant III**: Only tangent (and cot) positive
**Quadrant IV**: Only cosine (and sec) positive

**Memory device**: "**All Students Take Calculus**"
- **A**ll (Quadrant I)
- **S**ine (Quadrant II)
- **T**angent (Quadrant III)
- **C**osine (Quadrant IV)

### Domain and Range

**Sine and Cosine**:
- Domain: All real numbers (any angle)
- Range: [-1, 1] (values on the unit circle never exceed 1 in magnitude)

**Tangent**:
- Domain: All real numbers except 90° + 180°k (where k is any integer)
- Range: All real numbers (tangent can be any value)

**Cotangent**:
- Domain: All real numbers except 180°k
- Range: All real numbers

**Secant**:
- Domain: All real numbers except 90° + 180°k
- Range: (-∞, -1] ∪ [1, ∞)

**Cosecant**:
- Domain: All real numbers except 180°k
- Range: (-∞, -1] ∪ [1, ∞)

### Using Reference Angles to Find Values

**Strategy**:
1. Find the reference angle
2. Determine the trig function value for the reference angle
3. Adjust the sign based on the quadrant

---

### Worked Examples

#### Example 5.5: Finding Trig Values for Angles Greater than 90°

**Problem**: Find sin 150°, cos 150°, and tan 150°.

**Solution**:

**Step 1**: 150° is in Quadrant II
Reference angle = 180° - 150° = 30°

**Step 2**: Find values for 30°:
- sin 30° = 1/2
- cos 30° = √3/2
- tan 30° = √3/3

**Step 3**: Apply signs for Quadrant II (only sine positive):
- sin 150° = +1/2 = **1/2**
- cos 150° = -√3/2 = **-√3/2**
- tan 150° = -√3/3 = **-√3/3**

**Answer**:
- sin 150° = 1/2
- cos 150° = -√3/2
- tan 150° = -√3/3

---

#### Example 5.6: Working with Negative Angles

**Problem**: Find sin(-60°), cos(-60°), and tan(-60°).

**Solution**:

-60° rotates 60° clockwise, ending in Quadrant IV.

Reference angle = 60°

Values for 60°:
- sin 60° = √3/2
- cos 60° = 1/2
- tan 60° = √3

In Quadrant IV (only cosine positive):
- sin(-60°) = -√3/2
- cos(-60°) = 1/2
- tan(-60°) = -√3

**Answer**:
- sin(-60°) = **-√3/2**
- cos(-60°) = **1/2**
- tan(-60°) = **-√3**

---

#### Example 5.7: Finding Trig Values for Angles Greater than 360°

**Problem**: Find sin 495°.

**Solution**:

**Step 1**: Reduce to an equivalent angle between 0° and 360°:
495° - 360° = 135°

**Step 2**: 135° is in Quadrant II
Reference angle = 180° - 135° = 45°

**Step 3**: sin 45° = √2/2

**Step 4**: In Quadrant II, sine is positive:
sin 135° = √2/2

**Answer**: sin 495° = **√2/2**

---

#### Example 5.8: Using the "All Students Take Calculus" Rule

**Problem**: In which quadrant is θ if sin θ > 0 and cos θ < 0?

**Solution**:

Sine positive: Quadrants I or II
Cosine negative: Quadrants II or III

The quadrant where both conditions are met: **Quadrant II**

**Alternative reasoning**: Using "All Students Take Calculus":
- Only sine is positive in Quadrant II ✓

---

### Practice Problems

**Problem 5.9**: Find sin 120°, cos 120°, and tan 120°.

**Problem 5.10**: Find sin 225°, cos 225°, and tan 225°.

**Problem 5.11**: Find sin(-45°), cos(-45°), and tan(-45°).

**Problem 5.12**: Find cos 390°.

**Problem 5.13**: In which quadrant is θ if tan θ > 0 and sin θ < 0?

**Problem 5.14**: In which quadrant is θ if cos θ < 0 and tan θ < 0?

**Problem 5.15**: If sin θ = 3/5 and θ is in Quadrant II, find cos θ and tan θ.

**Problem 5.16**: Evaluate: sin 180° + cos 270°

---

## Section 5.3: Graphing Trigonometric Functions

### The Sine Function Graph

The graph of y = sin θ is a wave that:
- Oscillates between -1 and 1
- Has a period of 360° (repeats every 360°)
- Passes through the origin (0, 0)
- Reaches maximum (1) at 90°
- Reaches minimum (-1) at 270°

**Key Points** (one period):
- (0°, 0)
- (90°, 1)
- (180°, 0)
- (270°, -1)
- (360°, 0)

**Shape**: Smooth, continuous wave called a **sinusoid** or **sine wave**

### The Cosine Function Graph

The graph of y = cos θ is a wave that:
- Oscillates between -1 and 1
- Has a period of 360° (repeats every 360°)
- Starts at maximum (1) when θ = 0°
- Crosses zero at 90° and 270°
- Reaches minimum (-1) at 180°

**Key Points** (one period):
- (0°, 1)
- (90°, 0)
- (180°, -1)
- (270°, 0)
- (360°, 1)

**Relationship to Sine**: The cosine graph is the sine graph shifted left by 90°.

### The Tangent Function Graph

The graph of y = tan θ:
- Has a period of 180° (repeats every 180°)
- Has vertical asymptotes at 90°, 270°, etc. (where cosine = 0)
- Passes through the origin
- Increases from -∞ to +∞ within each period
- Has no maximum or minimum values

**Key Points**:
- (0°, 0)
- (45°, 1)
- (135°, -1)
- Undefined at 90°, 270°, etc.

**Shape**: Repeating curves separated by vertical asymptotes

### Properties of Trig Function Graphs

**Amplitude**: The height from the center line to the maximum (for sine and cosine: amplitude = 1)

**Period**: The horizontal length of one complete cycle
- Sine and cosine: 360°
- Tangent: 180°

**Midline**: The horizontal center line (for basic functions: y = 0)

**Phase shift**: Horizontal shift left or right (basic functions: no shift)

**Vertical shift**: Shift up or down (basic functions: no shift)

---

### Worked Examples

#### Example 5.9: Reading Values from a Sine Graph

**Problem**: Using the graph of y = sin θ, estimate sin 45° and sin 225°.

**Solution**:

**sin 45°**:
- 45° is halfway between 0° and 90°
- The sine graph rises from 0 at 0° to 1 at 90°
- At 45°, it's approximately **0.707** (which equals √2/2)

**sin 225°**:
- 225° is in Quadrant III (between 180° and 270°)
- The sine graph goes from 0 at 180° to -1 at 270°
- At 225° (halfway), it's approximately **-0.707** (which equals -√2/2)

---

#### Example 5.10: Identifying Key Features

**Problem**: For the function y = cos θ:
a) What is the amplitude?
b) What is the period?
c) What is the range?
d) At what angles between 0° and 360° does cos θ = 0?

**Solution**:

a) **Amplitude** = 1 (distance from midline to maximum)

b) **Period** = 360° (one complete cycle)

c) **Range** = [-1, 1] (oscillates between -1 and 1)

d) **cos θ = 0** at the quarter and three-quarter marks:
   - θ = **90° and 270°**

---

#### Example 5.11: Comparing Sine and Cosine Graphs

**Problem**: How is the graph of y = cos θ related to y = sin θ?

**Solution**:

The cosine graph is the sine graph **shifted left by 90°**.

Mathematically: cos θ = sin(θ + 90°)

**Key differences**:
- Sine starts at 0; cosine starts at 1
- Sine reaches maximum at 90°; cosine reaches maximum at 0°
- Both have the same amplitude, period, and range

**Answer**: y = cos θ is a horizontal shift of y = sin θ by 90° to the left.

---

#### Example 5.12: Understanding Tangent Asymptotes

**Problem**: Why does the tangent function have vertical asymptotes at 90° and 270°?

**Solution**:

Tangent is defined as:
$$\tan \theta = \frac{\sin \theta}{\cos \theta}$$

At 90° and 270°, cos θ = 0, which makes the denominator zero.

Division by zero is undefined, so tan θ has **vertical asymptotes** at these angles.

As θ approaches 90° from the left, tan θ → +∞
As θ approaches 90° from the right, tan θ → -∞

**Answer**: Vertical asymptotes occur wherever the denominator (cos θ) equals zero.

---

### Practice Problems

**Problem 5.17**: Sketch one period of y = sin θ, labeling key points.

**Problem 5.18**: Sketch one period of y = cos θ, labeling key points.

**Problem 5.19**: What is the period of y = tan θ?

**Problem 5.20**: For y = sin θ, at what angles between 0° and 360° does the function equal:
1. 0
2. 1
3. -1

**Problem 5.21**: Between 0° and 360°, how many times does the sine function cross the x-axis?

**Problem 5.22**: What is the maximum value of y = cos θ, and at what angles does it occur?

**Problem 5.23**: Compare the periods of sine, cosine, and tangent functions.

**Problem 5.24**: At what angle between 0° and 180° is tan θ = 1?

---

## Section 5.4: Chapter Summary

### Key Concepts Reviewed

**Unit Circle**:
- Circle with radius 1 centered at origin
- Equation: x² + y² = 1
- Point coordinates: (cos θ, sin θ)

**Angles in Standard Position**:
- Vertex at origin, initial side on positive x-axis
- Positive angles: counterclockwise
- Negative angles: clockwise
- Reference angles help find trig values

**Extended Trig Functions**:
- Defined for any angle using the unit circle
- Signs depend on quadrant: "All Students Take Calculus"
- Use reference angles to find values

**Domains and Ranges**:
- Sine and cosine: domain all reals, range [-1, 1]
- Tangent: domain excludes 90° + 180°k, range all reals

### Important Formulas and Relationships

**Unit Circle Coordinates**:
$$(x, y) = (\cos \theta, \sin \theta)$$

**Pythagorean Identity** (from unit circle):
$$\sin^2 \theta + \cos^2 \theta = 1$$

**Tangent Definition**:
$$\tan \theta = \frac{\sin \theta}{\cos \theta}$$

**Reference Angle Formulas**:
- Quad II: 180° - θ
- Quad III: θ - 180°
- Quad IV: 360° - θ

### Graph Characteristics

**Sine and Cosine**:
- Amplitude: 1
- Period: 360°
- Range: [-1, 1]
- Continuous, smooth waves

**Tangent**:
- Period: 180°
- Vertical asymptotes at 90° + 180°k
- Range: all real numbers
- Discontinuous

### Why This Matters for Trigonometry

The unit circle and trigonometric graphs are essential because:

1. **Universal applicability** - Extends trig functions to any angle
2. **Wave phenomena** - Sine and cosine graphs model real waves in nature
3. **Periodic behavior** - Repeating patterns appear throughout science
4. **Foundation for calculus** - These graphs are studied extensively in calculus
5. **Engineering applications** - AC circuits, signal processing, vibrations all use these functions

### Looking Ahead

In **Chapter 6**, we'll explore **trigonometric identities**—equations that are true for all angle values. These identities include the Pythagorean identity (which comes from the unit circle), quotient identities, and angle formulas that let us find exact values for more angles. These identities are powerful tools for simplifying expressions and solving equations.

---

### Chapter Review Questions

**Short Answer**:

1. What is the equation of the unit circle?
2. How are sine and cosine related to coordinates on the unit circle?
3. In which quadrants is sine positive?
4. In which quadrants is cosine positive?
5. What is the period of the sine function?
6. Why does tangent have vertical asymptotes?

**Problem Solving**:

7. Find the reference angle for 210°.

8. Find sin 135°, cos 135°, and tan 135°.

9. If sin θ = -1/2 and cos θ = √3/2, in which quadrant is θ?

10. Find cos 300°.

11. What are the coordinates on the unit circle for 45°?

12. Evaluate: sin 90° - cos 180° + tan 0°

13. For what values of θ between 0° and 360° is sin θ = 1?

14. Sketch one complete period of y = sin θ and y = cos θ on the same axes.

15. What is the range of y = tan θ?

---

**Chapter 5 Complete!** Move on to Chapter 6: Trigonometric Identities
