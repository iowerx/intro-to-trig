# Chapter 7: Solving Right Triangles and Finding Angles

## Introduction

So far, you've learned to find trigonometric ratios when you know the angle. But what if you know the ratio and need to find the angle? Or what if you know only some sides and need to find all the angles? This chapter introduces **inverse trigonometric functions**, which allow us to work backwards from ratios to angles.

We'll also put together everything we've learned to **solve right triangles**—finding all unknown sides and angles when given partial information. This skill is fundamental to surveying, navigation, engineering, and architecture. Finally, we'll learn to solve trigonometric equations, finding all angles that satisfy a given condition.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall definitions of inverse trigonometric functions
- **Understand**: Explain the relationship between trig functions and their inverses
- **Apply**: Solve right triangles completely given partial information
- **Analyze**: Determine which methods and formulas to use for different problems
- **Evaluate**: Find all solutions to trigonometric equations
- **Create**: Set up and solve multi-step real-world problems

---

## Section 7.1: Right Triangle Solutions

### What Does It Mean to "Solve" a Triangle?

To **solve a triangle** means to find all unknown sides and angles. For a right triangle:
- One angle is always 90°
- The other two angles sum to 90° (complementary)
- If you know two sides, you can find the third (Pythagorean theorem)
- If you know one angle and one side, you can find everything else (trig ratios)

### Minimum Information Needed

To solve a right triangle, you need:
- **One side and one acute angle**, OR
- **Two sides** (any two of the three)

The right angle (90°) is usually given.

### General Strategy for Solving Right Triangles

**Given one side and one angle**:
1. Find the third angle (subtract from 90°)
2. Use trig ratios to find the other sides
3. Verify using the Pythagorean theorem

**Given two sides**:
1. Find the third side (Pythagorean theorem)
2. Use trig ratios to find one angle
3. Find the other angle (subtract from 90°)

### Choosing the Right Ratio

**Decision guide**:
- If you know hypotenuse and need opposite/adjacent → use sine/cosine
- If you know both legs → use tangent to find angles
- If you know one leg and hypotenuse → use sine or cosine
- If you know both legs and need hypotenuse → use Pythagorean theorem

---

### Worked Examples

#### Example 7.1: Solving Given One Side and One Angle

**Problem**: In right triangle ABC with right angle at C, angle A = 35° and side AC (adjacent to angle A) = 12 cm. Find all other sides and angles.

**Solution**:

**Given**:
- Right angle at C (90°)
- Angle A = 35°
- Adjacent side (AC) = 12 cm

**Step 1**: Find angle B
$$B = 90° - 35° = 55°$$

**Step 2**: Find opposite side (BC) using tangent
$$\tan 35° = \frac{BC}{12}$$
$$BC = 12 \tan 35°$$
$$BC = 12(0.700) \approx 8.40 \text{ cm}$$

**Step 3**: Find hypotenuse (AB) using cosine
$$\cos 35° = \frac{12}{AB}$$
$$AB = \frac{12}{\cos 35°}$$
$$AB = \frac{12}{0.819} \approx 14.65 \text{ cm}$$

**Verification**: Check with Pythagorean theorem
$$12^2 + 8.40^2 = 144 + 70.56 = 214.56$$
$$14.65^2 = 214.62$$ ✓ (slight difference due to rounding)

**Answer**:
- Angle B = 55°
- Side BC ≈ 8.40 cm
- Side AB ≈ 14.65 cm

---

#### Example 7.2: Solving Given Two Sides (Both Legs)

**Problem**: A right triangle has legs of 9 inches and 12 inches. Find the hypotenuse and both acute angles.

**Solution**:

**Given**:
- Leg a = 9 inches
- Leg b = 12 inches

**Step 1**: Find hypotenuse using Pythagorean theorem
$$c^2 = 9^2 + 12^2 = 81 + 144 = 225$$
$$c = 15 \text{ inches}$$

**Step 2**: Find one angle using tangent (we'll find angle A opposite the 9-inch side)
$$\tan A = \frac{9}{12} = 0.75$$

To find A, we need the inverse tangent (covered in next section):
$$A = \arctan(0.75) \approx 36.87°$$

**Step 3**: Find the other angle
$$B = 90° - 36.87° = 53.13°$$

**Answer**:
- Hypotenuse = 15 inches
- Angle A ≈ 36.87°
- Angle B ≈ 53.13°

---

#### Example 7.3: Solving Given Hypotenuse and One Leg

**Problem**: A right triangle has a hypotenuse of 25 feet and one leg of 15 feet. Find the other leg and both acute angles.

**Solution**:

**Given**:
- Hypotenuse c = 25 feet
- Leg a = 15 feet

**Step 1**: Find other leg using Pythagorean theorem
$$15^2 + b^2 = 25^2$$
$$225 + b^2 = 625$$
$$b^2 = 400$$
$$b = 20 \text{ feet}$$

**Step 2**: Find angle A (opposite 15-foot side) using sine
$$\sin A = \frac{15}{25} = 0.6$$
$$A = \arcsin(0.6) \approx 36.87°$$

**Step 3**: Find angle B
$$B = 90° - 36.87° = 53.13°$$

**Answer**:
- Other leg = 20 feet
- Angle A ≈ 36.87°
- Angle B ≈ 53.13°

---

#### Example 7.4: Application Problem

**Problem**: A 20-foot ladder leans against a building. The base of the ladder is 8 feet from the building. How high up the building does the ladder reach, and what angle does it make with the ground?

**Solution**:

This forms a right triangle:
- Hypotenuse (ladder) = 20 feet
- Base (adjacent to ground angle) = 8 feet

**Find height** (opposite side):
$$8^2 + h^2 = 20^2$$
$$64 + h^2 = 400$$
$$h^2 = 336$$
$$h = \sqrt{336} \approx 18.33 \text{ feet}$$

**Find angle with ground**:
$$\cos \theta = \frac{8}{20} = 0.4$$
$$\theta = \arccos(0.4) \approx 66.42°$$

**Answer**:
- The ladder reaches approximately **18.33 feet** up the building
- The ladder makes an angle of approximately **66.42°** with the ground

---

### Practice Problems

**Problem 7.1**: In a right triangle, one acute angle is 28° and the hypotenuse is 15 cm. Find all other sides and angles.

**Problem 7.2**: A right triangle has legs of 5 meters and 12 meters. Find the hypotenuse and both acute angles.

**Problem 7.3**: A right triangle has a hypotenuse of 30 inches and one leg of 18 inches. Find the other leg and both acute angles.

**Problem 7.4**: The two acute angles of a right triangle are in the ratio 2:3. Find both angles.

**Problem 7.5**: A guy wire is attached to the top of a 40-foot pole and anchored 30 feet from the base. How long is the wire, and what angle does it make with the ground?

---

## Section 7.2: Inverse Trigonometric Functions

### What Are Inverse Functions?

An **inverse function** reverses the operation of a function. If f(x) = y, then f⁻¹(y) = x.

For trigonometry:
- If sin θ = 0.5, then arcsin(0.5) = θ
- The inverse function takes us from the ratio back to the angle

### Notation for Inverse Trig Functions

**Two equivalent notations**:

$$\arcsin x = \sin^{-1} x$$
$$\arccos x = \cos^{-1} x$$
$$\arctan x = \tan^{-1} x$$

**Important**: sin⁻¹ x does NOT mean 1/sin x. It means the inverse sine function (arcsin).

### Domains and Ranges of Inverse Functions

For inverse functions to work properly, we restrict their ranges:

**Arcsine**:
- Domain: [-1, 1]
- Range: [-90°, 90°] (or [-π/2, π/2] in radians)
- Returns angles in Quadrants I and IV

**Arccosine**:
- Domain: [-1, 1]
- Range: [0°, 180°] (or [0, π] in radians)
- Returns angles in Quadrants I and II

**Arctangent**:
- Domain: All real numbers
- Range: (-90°, 90°) (or (-π/2, π/2) in radians)
- Returns angles in Quadrants I and IV

### Calculator Considerations

When using a calculator:
- Make sure it's in degree mode (or radian mode, depending on context)
- The inverse functions return the **principal value** (one specific angle in the range)
- There may be other angles with the same trig value

---

### Worked Examples

#### Example 7.5: Basic Inverse Function Evaluation

**Problem**: Find each angle (in degrees):
a) arcsin(1/2)
b) arccos(√2/2)
c) arctan(1)

**Solution**:

a) **arcsin(1/2)**: What angle has sine = 1/2?
   From special angles: sin 30° = 1/2
   **Answer**: 30°

b) **arccos(√2/2)**: What angle has cosine = √2/2?
   From special angles: cos 45° = √2/2
   **Answer**: 45°

c) **arctan(1)**: What angle has tangent = 1?
   From special angles: tan 45° = 1
   **Answer**: 45°

---

#### Example 7.6: Using Calculator for Inverse Functions

**Problem**: Find the angle θ (in degrees, to two decimal places):
a) sin θ = 0.75
b) cos θ = 0.4
c) tan θ = 2.5

**Solution**:

Using a calculator in degree mode:

a) θ = arcsin(0.75) = **48.59°**

b) θ = arccos(0.4) = **66.42°**

c) θ = arctan(2.5) = **68.20°**

---

#### Example 7.7: Finding All Solutions in [0°, 360°)

**Problem**: Find all angles θ in [0°, 360°) where sin θ = 0.5.

**Solution**:

**Step 1**: Find the principal value
$$\theta_1 = \arcsin(0.5) = 30°$$

This is in Quadrant I.

**Step 2**: Sine is also positive in Quadrant II
The second solution is:
$$\theta_2 = 180° - 30° = 150°$$

**Verification**:
- sin 30° = 0.5 ✓
- sin 150° = 0.5 ✓

**Answer**: θ = **30° or 150°**

---

#### Example 7.8: Inverse Functions with Negative Values

**Problem**: Find arccos(-0.5).

**Solution**:

We need an angle whose cosine is -0.5.

Cosine is negative in Quadrants II and III, but arccos returns values in [0°, 180°], so it will be in Quadrant II.

The reference angle satisfies cos(ref) = 0.5, so ref = 60°.

In Quadrant II:
$$\theta = 180° - 60° = 120°$$

**Answer**: arccos(-0.5) = **120°**

**Verification**: cos 120° = -1/2 = -0.5 ✓

---

### Practice Problems

**Problem 7.6**: Evaluate without a calculator:
1. arcsin(√3/2)
2. arccos(1/2)
3. arctan(√3)

**Problem 7.7**: Use a calculator to find (in degrees):
1. arcsin(0.85)
2. arccos(0.3)
3. arctan(4)

**Problem 7.8**: Find all angles θ in [0°, 360°) where:
1. cos θ = 0.6
2. tan θ = -1
3. sin θ = -0.8

**Problem 7.9**: Evaluate: arcsin(-√2/2)

**Problem 7.10**: If arctan x = 30°, what is x?

---

## Section 7.3: Finding Angles from Ratios

### The Process

When you know the ratio of sides in a right triangle:
1. Identify which trig function relates the known sides
2. Use the appropriate inverse function
3. Consider whether other angles also satisfy the condition
4. Check that angles are in the appropriate range for the problem

### Common Scenarios

**Given opposite and hypotenuse** → use arcsin
**Given adjacent and hypotenuse** → use arccos
**Given opposite and adjacent** → use arctan

### Multiple Solutions

Remember that:
- Sine is positive in Quadrants I and II
- Cosine is positive in Quadrants I and IV
- Tangent is positive in Quadrants I and III

If a problem asks for all solutions in [0°, 360°), you may need to find two angles.

---

### Worked Examples

#### Example 7.9: Finding an Angle Given Two Sides

**Problem**: In a right triangle, the opposite side is 7 cm and the adjacent side is 10 cm. Find the angle.

**Solution**:

The ratio of opposite to adjacent suggests using tangent:
$$\tan \theta = \frac{7}{10} = 0.7$$

$$\theta = \arctan(0.7) \approx 34.99°$$

**Answer**: θ ≈ **35.0°**

---

#### Example 7.10: Using Inverse Functions in Applications

**Problem**: A person stands 50 meters from a building and looks up at a 65° angle to see the top. How tall is the building?

**Solution**:

This is actually a forward problem (given angle, find side), but let's solve it:

$$\tan 65° = \frac{h}{50}$$
$$h = 50 \tan 65° \approx 50(2.145) = 107.25 \text{ meters}$$

**Reverse question**: If the building is 107.25 m tall and you're 50 m away, what's the angle?

$$\tan \theta = \frac{107.25}{50} = 2.145$$
$$\theta = \arctan(2.145) \approx 65°$$ ✓

---

#### Example 7.11: Finding Angles When Given Special Ratios

**Problem**: In a right triangle, the ratio of the opposite side to the hypotenuse is 3:5. Find the angle.

**Solution**:

$$\sin \theta = \frac{3}{5} = 0.6$$

$$\theta = \arcsin(0.6) \approx 36.87°$$

**Answer**: θ ≈ **36.87°**

**Note**: This is the same as the 3-4-5 triangle (scaled), which we could verify:
- If opposite = 3 and hypotenuse = 5, then adjacent = 4 (by Pythagorean theorem)
- tan θ = 3/4 = 0.75
- arctan(0.75) ≈ 36.87° ✓

---

### Practice Problems

**Problem 7.11**: Find the angle θ in a right triangle where:
1. Opposite = 8, adjacent = 15
2. Opposite = 12, hypotenuse = 13
3. Adjacent = 20, hypotenuse = 29

**Problem 7.12**: A kite string is 80 meters long and reaches a height of 60 meters. What angle does the string make with the ground?

**Problem 7.13**: From a point 100 feet from the base of a building, the angle of elevation to the top is measured. If the building is 150 feet tall, what is the angle of elevation?

**Problem 7.14**: In a right triangle, the two legs are in the ratio 5:12. What are the two acute angles?

---

## Section 7.4: Advanced Equation Solving

### Types of Trigonometric Equations

**Linear equations**: sin θ = 0.5
**Quadratic equations**: 2sin² θ - sin θ = 0
**Multiple angle equations**: sin 2θ = 0.5
**Mixed function equations**: sin θ = cos θ

### General Strategy

1. **Isolate the trig function** (if possible)
2. **Use identities** to simplify (if needed)
3. **Solve for the angle** using inverse functions
4. **Find all solutions** in the specified range
5. **Check solutions** in the original equation

### Using Identities to Solve Equations

Sometimes you need to use identities like:
- Pythagorean identities
- Double angle formulas
- Factoring

---

### Worked Examples

#### Example 7.12: Solving a Quadratic Trigonometric Equation

**Problem**: Solve 2sin² θ - sin θ = 0 for θ in [0°, 360°).

**Solution**:

Factor out sin θ:
$$\sin \theta(2\sin \theta - 1) = 0$$

This gives two equations:
$$\sin \theta = 0 \quad \text{or} \quad 2\sin \theta - 1 = 0$$

**From sin θ = 0**:
θ = 0°, 180°, 360°

**From 2sin θ - 1 = 0**:
$$\sin \theta = \frac{1}{2}$$
θ = 30°, 150°

**Answer**: θ = **0°, 30°, 150°, 180°, 360°**

(Note: Depending on convention, 360° might be excluded since it's the same as 0°)

---

#### Example 7.13: Solving Equations with Multiple Angles

**Problem**: Solve sin 2θ = 1/2 for θ in [0°, 180°).

**Solution**:

Let u = 2θ, then we need sin u = 1/2

From the unit circle: u = 30° or u = 150° (in [0°, 360°))

Since u can range from 0° to 360° when θ ranges from 0° to 180°:

$$2\theta = 30° \Rightarrow \theta = 15°$$
$$2\theta = 150° \Rightarrow \theta = 75°$$

But 2θ could also equal 390° (which is 30° + 360°):
$$2\theta = 390° \Rightarrow \theta = 195°$$

This is outside [0°, 180°), so we don't include it.

**Answer**: θ = **15° or 75°**

---

#### Example 7.14: Solving Mixed Function Equations

**Problem**: Solve sin θ = cos θ for θ in [0°, 360°).

**Solution**:

**Method 1**: Divide both sides by cos θ:
$$\frac{\sin \theta}{\cos \theta} = 1$$
$$\tan \theta = 1$$
θ = 45°, 225°

**Method 2**: Use the fact that sin θ = cos θ when θ = 45° + 180°k

**Answer**: θ = **45° or 225°**

---

#### Example 7.15: Using Pythagorean Identity

**Problem**: Solve 2cos² θ + sin θ = 2 for θ in [0°, 360°).

**Solution**:

Use the identity cos² θ = 1 - sin² θ:
$$2(1 - \sin^2 \theta) + \sin \theta = 2$$
$$2 - 2\sin^2 \theta + \sin \theta = 2$$
$$-2\sin^2 \theta + \sin \theta = 0$$
$$\sin \theta(-2\sin \theta + 1) = 0$$

**From sin θ = 0**:
θ = 0°, 180°, 360°

**From -2sin θ + 1 = 0**:
$$\sin \theta = \frac{1}{2}$$
θ = 30°, 150°

**Answer**: θ = **0°, 30°, 150°, 180°, 360°**

---

### Practice Problems

**Problem 7.15**: Solve for θ in [0°, 360°):
1. 2sin θ - 1 = 0
2. cos² θ = 1/4
3. tan² θ = 3

**Problem 7.16**: Solve cos 2θ = 0 for θ in [0°, 180°).

**Problem 7.17**: Solve 2sin² θ + 3sin θ + 1 = 0 for θ in [0°, 360°).

**Problem 7.18**: Solve sin θ + cos θ = 1 for θ in [0°, 360°). (Hint: Square both sides)

---

## Section 7.5: Solution Sets and Representation

### General Solutions

For many trigonometric equations, there are infinitely many solutions because trig functions are periodic.

**General solution notation**:
- If sin θ = 1/2, then θ = 30° + 360°k or θ = 150° + 360°k, where k is any integer
- If tan θ = 1, then θ = 45° + 180°k, where k is any integer

### Interval Notation

Solutions are often requested for a specific interval:
- [0°, 360°): angles from 0° up to (but not including) 360°
- [0°, 2π): same interval in radians
- [0°, 180°): restricted to half the circle

### Verifying Solutions

Always check solutions by substituting back into the original equation.

---

### Worked Examples

#### Example 7.16: Finding General Solutions

**Problem**: Find the general solution to cos θ = 1/2.

**Solution**:

First find solutions in [0°, 360°):
$$\theta = 60° \text{ or } \theta = 300°$$

The general solution adds multiples of the period (360°):
$$\theta = 60° + 360°k \text{ or } \theta = 300° + 360°k$$

where k is any integer.

**Answer**: θ = **60° + 360°k** or θ = **300° + 360°k**, k ∈ ℤ

---

### Practice Problems

**Problem 7.19**: Find the general solution to sin θ = √3/2.

**Problem 7.20**: Find all solutions to tan θ = -1 in [0°, 720°).

---

## Section 7.6: Chapter Summary

### Key Concepts Reviewed

**Solving Right Triangles**:
- Need at least one side and one angle (besides the right angle), or two sides
- Use trig ratios to find unknown sides
- Use Pythagorean theorem to find the third side
- Angles sum to 180° (with one being 90°)

**Inverse Trigonometric Functions**:
- arcsin, arccos, arctan (or sin⁻¹, cos⁻¹, tan⁻¹)
- Return angles given ratios
- Have restricted ranges to be true functions

**Finding All Solutions**:
- Use reference angles and quadrant analysis
- Consider the period of the function
- Check all solutions in the specified interval

### Important Ranges

**Inverse Function Ranges**:
- arcsin: [-90°, 90°]
- arccos: [0°, 180°]
- arctan: (-90°, 90°)

### Problem-Solving Strategies

**For solving triangles**:
1. Draw and label a diagram
2. Identify what you know and what you need
3. Choose appropriate trig ratios or theorems
4. Solve step by step
5. Verify using another method

**For trigonometric equations**:
1. Isolate the trig function
2. Use identities to simplify if needed
3. Find principal value(s)
4. Find all values in the specified range
5. Check solutions

### Why This Matters for Trigonometry

These skills are essential because:

1. **Real-world applications** - Surveying, navigation, engineering all require solving triangles
2. **Inverse thinking** - Moving from effect to cause (ratio to angle)
3. **Complete solutions** - Finding all possible answers, not just one
4. **Foundation for advanced topics** - Calculus, differential equations, complex numbers
5. **Practical problem-solving** - Combining multiple concepts to solve complex problems

### Looking Ahead

In **Chapter 8**, we'll extend triangle-solving beyond right triangles using the **Law of Sines** and **Law of Cosines**. These powerful tools work for any triangle, not just right triangles, opening up a whole new world of applications. We'll also learn special formulas for triangle areas and how to choose the best method for each problem.

---

### Chapter Review Questions

**Short Answer**:

1. What information do you need to solve a right triangle?
2. What is the range of the arcsine function?
3. What does arctan(1) equal?
4. In which quadrants is sine positive?
5. Why might a trigonometric equation have multiple solutions in [0°, 360°)?

**Problem Solving**:

6. In a right triangle, one acute angle is 40° and the adjacent side is 10 cm. Find all other sides and angles.

7. A right triangle has legs of 6 m and 8 m. Find the hypotenuse and both acute angles.

8. Evaluate without a calculator: arccos(√3/2)

9. Find all θ in [0°, 360°) where sin θ = -1/2.

10. Solve for θ in [0°, 360°): 2cos² θ - cos θ = 0

11. A person stands 80 feet from a building and measures the angle of elevation to the top as 58°. How tall is the building?

12. Find the general solution to tan θ = √3.

13. Solve sin 2θ = √2/2 for θ in [0°, 180°).

14. If arcsin x = 30°, what is x?

15. In a right triangle, the hypotenuse is 17 inches and one leg is 8 inches. Find the other leg and both acute angles.

---

**Chapter 7 Complete!** Move on to Chapter 8: Advanced Triangle Solutions
