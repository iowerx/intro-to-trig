# Chapter 10: Tools, Reference, and Integration

## Introduction

As we conclude our journey through trigonometric functions, it's time to step back and look at the bigger picture. This final chapter focuses on the practical tools and skills you'll need to apply trigonometry effectively: using calculators properly, understanding precision and accuracy, organizing reference materials, and seeing how all the concepts fit together.

Trigonometry isn't just a collection of isolated techniques—it's a unified system of ideas that connects geometry, algebra, and analysis. The skills you've developed in this course form a foundation for advanced mathematics, science, and engineering. In this chapter, we'll synthesize what you've learned and explore where these ideas lead.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall proper calculator settings and common reference values
- **Understand**: Explain the relationships between different trigonometric concepts
- **Apply**: Use computational tools effectively and appropriately
- **Analyze**: Assess accuracy, precision, and reasonableness of results
- **Evaluate**: Judge when to use different tools and methods
- **Create**: Synthesize multiple concepts to solve complex problems

---

## Section 10.1: Computational Tools

### Calculator Modes and Settings

**Degree vs. Radian Mode**:

Your calculator must be in the correct angle mode:
- **Degree mode** (DEG): For angles measured in degrees (°)
- **Radian mode** (RAD): For angles measured in radians
- **Gradian mode** (GRAD): Rarely used, 400 gradians = 360°

**How to check**: Calculate sin 30
- In degree mode: sin 30° = 0.5 ✓
- In radian mode: sin 30 ≈ -0.988 (wrong!)

**How to change mode**: Look for a MODE button on your calculator and select DEG or RAD.

### Using Inverse Functions

**Common calculator notations**:
- sin⁻¹ (usually accessed by pressing 2nd or SHIFT, then SIN)
- arcsin (same as sin⁻¹)
- Some calculators use SIN⁻¹ button label

**Important**: sin⁻¹ means inverse sine, NOT 1/sin x!

**Order of operations**:
- Most calculators: Press function button FIRST, then enter value
- Some calculators: Enter value FIRST, then press function
- Example: To find sin 45°, you might press: SIN, 45, ENTER or 45, SIN

### Calculator Limitations

**Restricted ranges**:
- Calculators return principal values only
- sin⁻¹ returns values in [-90°, 90°]
- cos⁻¹ returns values in [0°, 180°]
- tan⁻¹ returns values in (-90°, 90°)
- You must find other solutions manually

**Rounding errors**:
- Calculators use finite precision
- Repeated calculations can accumulate errors
- Store intermediate values rather than retyping

**Domain errors**:
- sin⁻¹(2) = ERROR (sine can't exceed 1)
- tan 90° = ERROR (tangent undefined at 90°)

### Scientific Notation and Display

**Understanding calculator output**:
- 1.5E3 means 1.5 × 10³ = 1500
- 2.5E-2 means 2.5 × 10⁻² = 0.025

**Setting decimal places**:
- FIX mode: Fixed number of decimal places
- Float mode: Automatic, shows as many as needed
- Scientific mode: Scientific notation

### Using Trigonometric Tables

Before calculators, people used printed tables of trig values:
- Values listed for every degree (or every minute)
- Linear interpolation for values between table entries
- Still useful for understanding and checking

---

### Worked Examples

#### Example 10.1: Checking Calculator Mode

**Problem**: You enter sin 90 on your calculator and get 0.894. What's wrong, and what should you get?

**Solution**:

**What's wrong**: The calculator is in radian mode, computing sin(90 radians) instead of sin(90°).

**Correct answer**: sin 90° = 1

**Fix**: Switch calculator to degree mode, then recalculate.

**Verification**: In radian mode, 90 radians ≈ 14.3 full rotations (90/(2π)), which would give approximately sin(0.894) ✓

---

#### Example 10.2: Finding All Solutions

**Problem**: Use a calculator to find all solutions to sin θ = 0.6 in [0°, 360°).

**Solution**:

**Step 1**: Find principal value
$$\theta_1 = \sin^{-1}(0.6) \approx 36.87°$$

This is in Quadrant I.

**Step 2**: Sine is also positive in Quadrant II
$$\theta_2 = 180° - 36.87° = 143.13°$$

**Step 3**: Check both solutions
- sin 36.87° ≈ 0.6 ✓
- sin 143.13° ≈ 0.6 ✓

**Answer**: θ ≈ **36.87° or 143.13°**

**Note**: The calculator only gave us the first solution; we found the second using our understanding of the unit circle.

---

#### Example 10.3: Handling Precision

**Problem**: Calculate the area of a triangle with sides 12.5 cm, 15.3 cm, and included angle 48.7°.

**Solution**:

Using the formula: $A = \frac{1}{2}ab \sin C$

$$A = \frac{1}{2}(12.5)(15.3) \sin 48.7°$$

**Step 1**: Calculate sin 48.7°
$$\sin 48.7° \approx 0.751544$$

**Step 2**: Calculate area
$$A = \frac{1}{2}(12.5)(15.3)(0.751544)$$
$$A = 0.5(191.25)(0.751544)$$
$$A = 0.5(143.732)$$
$$A = 71.866 \text{ cm}^2$$

**Rounding**: Since our measurements have 3 significant figures, round to 3 significant figures:
$$A \approx 71.9 \text{ cm}^2$$

**Answer**: Area ≈ **71.9 cm²**

---

#### Example 10.4: Error from Wrong Mode

**Problem**: A student calculates cos 60° and gets 0.999. Identify and correct the error.

**Solution**:

**Correct answer**: cos 60° = 0.5

**The error**: The calculator was in radian mode, calculating cos(60 radians).

**Check**: cos(60 radians) ≈ 0.999 (60 radians ≈ 9.55 full rotations)

**Correction**: Switch to degree mode, recalculate to get 0.5.

**Lesson**: Always verify with known values (like special angles) before trusting calculator results.

---

### Practice Problems

**Problem 10.1**: Your calculator gives tan 45° = 1.619. What mode is it in, and what's the correct answer?

**Problem 10.2**: Find all solutions to cos θ = -0.5 in [0°, 360°) using a calculator.

**Problem 10.3**: Calculate sin⁻¹(0.8) and explain what this result means.

**Problem 10.4**: If sin⁻¹(0.5) = 30°, why doesn't sin⁻¹(0.5) = 150° also?

**Problem 10.5**: Calculate the area of a triangle with sides 8.25 m and 10.6 m, forming a 67.3° angle. Round appropriately.

**Problem 10.6**: Use a calculator to verify that sin² 35° + cos² 35° = 1.

**Problem 10.7**: What error message would you get trying to compute sin⁻¹(1.5)? Why?

**Problem 10.8**: If your calculator displays 3.14159E-1, what number is this?

---

## Section 10.2: Reference Materials

### Essential Formulas

**Right Triangle Definitions**:
$$\sin \theta = \frac{\text{opp}}{\text{hyp}}, \quad \cos \theta = \frac{\text{adj}}{\text{hyp}}, \quad \tan \theta = \frac{\text{opp}}{\text{adj}}$$

**Pythagorean Identities**:
$$\sin^2 \theta + \cos^2 \theta = 1$$
$$1 + \tan^2 \theta = \sec^2 \theta$$
$$1 + \cot^2 \theta = \csc^2 \theta$$

**Reciprocal Identities**:
$$\csc \theta = \frac{1}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \cot \theta = \frac{1}{\tan \theta}$$

**Quotient Identities**:
$$\tan \theta = \frac{\sin \theta}{\cos \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta}$$

**Sum and Difference Formulas**:
$$\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$$
$$\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$$

**Double Angle Formulas**:
$$\sin 2\theta = 2\sin \theta \cos \theta$$
$$\cos 2\theta = \cos^2 \theta - \sin^2 \theta = 2\cos^2 \theta - 1 = 1 - 2\sin^2 \theta$$

**Law of Sines**:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

**Law of Cosines**:
$$c^2 = a^2 + b^2 - 2ab \cos C$$

**Area Formulas**:
$$A = \frac{1}{2}bh = \frac{1}{2}ab \sin C = \sqrt{s(s-a)(s-b)(s-c)}$$

where $s = \frac{a+b+c}{2}$

### Special Angle Values

| θ | sin θ | cos θ | tan θ |
|---|-------|-------|-------|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | undefined |

### Special Triangle Ratios

**45-45-90 Triangle**: 1 : 1 : √2 (leg : leg : hypotenuse)

**30-60-90 Triangle**: 1 : √3 : 2 (short leg : long leg : hypotenuse)

### Unit Circle Key Points

- (1, 0): 0°
- (0, 1): 90°
- (-1, 0): 180°
- (0, -1): 270°
- (√2/2, √2/2): 45°
- (1/2, √3/2): 60°
- (√3/2, 1/2): 30°

### Radian-Degree Conversions

$$\text{radians} = \text{degrees} \times \frac{\pi}{180}$$
$$\text{degrees} = \text{radians} \times \frac{180}{\pi}$$

**Common conversions**:
- 30° = π/6
- 45° = π/4
- 60° = π/3
- 90° = π/2
- 180° = π
- 360° = 2π

### Quadrant Signs

**"All Students Take Calculus"**:
- Quadrant I: All positive
- Quadrant II: Sine positive
- Quadrant III: Tangent positive
- Quadrant IV: Cosine positive

---

### Worked Examples

#### Example 10.5: Creating a Quick Reference Card

**Problem**: You're allowed one 3×5 card for a test. What are the most essential items to include?

**Solution**:

**Side 1**:
- SOHCAHTOA
- Special angle values (30°, 45°, 60°)
- Pythagorean identity: sin² θ + cos² θ = 1
- Special triangle ratios: 1:1:√2 and 1:√3:2
- Law of Sines: a/sin A = b/sin B = c/sin C

**Side 2**:
- Law of Cosines: c² = a² + b² - 2ab cos C
- Double angle: sin 2θ = 2sin θ cos θ
- Area: (1/2)ab sin C, Heron's formula
- Quadrant signs: "All Students Take Calculus"
- Unit circle: (cos θ, sin θ)

**Rationale**: Include formulas you might forget under pressure, but not basic definitions you thoroughly understand.

---

#### Example 10.6: Organizing Problem-Solving Strategies

**Problem**: Create a decision tree for "Which method should I use to solve this triangle?"

**Solution**:

```
START: Is it a right triangle?
├─ YES → Use right triangle trig (SOHCAHTOA)
└─ NO → What do you know?
   ├─ ASA or AAS → Law of Sines
   ├─ SSA → Check ambiguous case, then Law of Sines
   ├─ SAS → Law of Cosines (find third side)
   │         then Law of Sines (find angles)
   └─ SSS → Law of Cosines (find angles)
```

**Additional considerations**:
- For area: Use (1/2)ab sin C if you know SAS
- For area: Use Heron's if you know SSS
- Always verify: angles sum to 180°

---

### Practice Problems

**Problem 10.9**: Create a table showing sin θ, cos θ, and tan θ for θ = 0°, 30°, 45°, 60°, 90°.

**Problem 10.10**: Without looking at the text, write down:
1. The Pythagorean identity
2. The Law of Sines
3. The double angle formula for sine

**Problem 10.11**: Convert to radians: 30°, 90°, 180°, 270°

**Problem 10.12**: In which quadrant(s) is:
1. sin θ > 0 and cos θ < 0?
2. tan θ < 0?

---

## Section 10.3: Course Synthesis

### The Big Picture: How Concepts Connect

**Foundation: Right Triangles**
- Pythagorean theorem connects the three sides
- Trigonometric ratios connect sides to angles
- SOHCAHTOA provides the basic definitions

**Extension: Unit Circle**
- Extends trig functions to all angles
- Provides geometric interpretation of sine and cosine
- Reveals periodicity and symmetry

**Generalization: Identities**
- Pythagorean identities from unit circle
- Sum/difference formulas allow new calculations
- Double angle formulas are special cases

**Application: Solving Triangles**
- Right triangles: basic trig ratios
- Oblique triangles: Law of Sines and Cosines
- Real-world problems: navigation, surveying, physics

**Tool Development: Inverse Functions**
- Allow us to find angles from ratios
- Have restricted ranges to be proper functions
- Essential for solving triangles

### Progression of Complexity

**Level 1**: Right triangle with one angle and one side
- Use basic trig ratios
- Most straightforward applications

**Level 2**: Right triangle with two sides
- Use Pythagorean theorem
- Then basic trig ratios

**Level 3**: Oblique triangle with sufficient information
- Choose between Law of Sines and Law of Cosines
- Watch for ambiguous case

**Level 4**: Multi-step real-world problems
- Translate scenario into mathematical model
- May involve multiple triangles
- Requires synthesis of concepts

**Level 5**: Problems requiring identities
- Simplify complex expressions
- Solve advanced equations
- Verify relationships

### Common Themes Throughout the Course

**Relationships between angles and sides**:
- This is the core of all trigonometry
- Appears in every chapter in different forms

**Multiple solution methods**:
- Often more than one way to solve a problem
- Choose based on given information and desired efficiency

**Exact vs. approximate**:
- Special angles give exact values
- Other angles require calculator approximations
- Both are valuable

**Visual and algebraic representations**:
- Diagrams help understanding
- Algebra provides precision
- Use both together

---

### Worked Examples

#### Example 10.7: Synthesizing Multiple Concepts

**Problem**: A surveyor stands at point A and measures the angle of elevation to the top of a hill as 28°. She walks 200 meters closer (to point B) and the angle is now 43°. How tall is the hill, and what is the straight-line distance from her original position to the top?

**Solution**:

This problem requires:
- Understanding angles of elevation
- Setting up multiple right triangles
- Using tangent ratios
- Solving a system of equations
- Using Pythagorean theorem

Let h = height of hill, d = distance from B to base of hill

**From point B**:
$$\tan 43° = \frac{h}{d}$$
$$d = \frac{h}{\tan 43°} = \frac{h}{0.933} = 1.072h$$

**From point A** (distance = d + 200):
$$\tan 28° = \frac{h}{d + 200}$$
$$d + 200 = \frac{h}{\tan 28°} = \frac{h}{0.532} = 1.880h$$

**Substituting**:
$$1.072h + 200 = 1.880h$$
$$200 = 0.808h$$
$$h = \frac{200}{0.808} \approx 247.5 \text{ m}$$

**Distance from B to base**:
$$d = 1.072(247.5) \approx 265.3 \text{ m}$$

**Distance from A to base**:
$$265.3 + 200 = 465.3 \text{ m}$$

**Straight-line distance from A to top** (using Pythagorean theorem):
$$\text{dist} = \sqrt{h^2 + (465.3)^2} = \sqrt{247.5^2 + 465.3^2}$$
$$= \sqrt{61256.25 + 216504.09} = \sqrt{277760.34} \approx 527.0 \text{ m}$$

**Answer**:
- Height of hill ≈ **247.5 meters**
- Straight-line distance from A to top ≈ **527.0 meters**

---

#### Example 10.8: Choosing the Most Efficient Method

**Problem**: For each scenario, identify the most efficient solution method:

a) Right triangle, one angle is 35°, hypotenuse is 20 cm
b) Triangle with sides 8, 10, 12
c) Triangle with two angles 40° and 65°, and the side between them is 15 m
d) Triangle with sides 7 and 9, and angle opposite the 7-unit side is 35°

**Solution**:

**a) Right triangle, angle + hypotenuse**:
- Use basic trig ratios (sin, cos)
- Most efficient method

**b) SSS triangle**:
- Use Law of Cosines to find angles
- Or check if it's a special triangle first (it's not)

**c) ASA (technically—find third angle first)**:
- Third angle: 180° - 40° - 65° = 75°
- Use Law of Sines to find other sides
- Very efficient

**d) SSA**:
- Check for ambiguous case first!
- h = 9 sin 35° ≈ 5.16
- Since 7 > h and 7 < 9, two triangles possible
- Use Law of Sines, but find both solutions

---

#### Example 10.9: Connecting to Future Mathematics

**Problem**: How does trigonometry connect to other areas of mathematics?

**Solution**:

**Calculus**:
- Derivatives: d/dx(sin x) = cos x
- Integrals: ∫cos x dx = sin x + C
- Periodic functions and their rates of change
- Applications to wave motion and oscillation

**Complex Numbers**:
- Euler's formula: e^(iθ) = cos θ + i sin θ
- Polar form of complex numbers
- Trigonometric form: r(cos θ + i sin θ)

**Vectors**:
- Dot product involves cosine
- Components use sine and cosine
- Direction angles and magnitude

**Differential Equations**:
- Solutions often involve sine and cosine
- Models oscillating systems
- Harmonic motion equations

**Fourier Analysis**:
- Representing functions as sums of sines and cosines
- Signal processing
- Image compression

**Linear Algebra**:
- Rotation matrices use sine and cosine
- Transformations and symmetries
- Eigenvalues and eigenvectors

---

### Practice Problems

**Problem 10.13**: Describe how the Pythagorean theorem connects to:
1. The Pythagorean identity
2. The Law of Cosines
3. The unit circle

**Problem 10.14**: A flagpole casts a 15-meter shadow when the sun's elevation is 55°. Later, it casts a 25-meter shadow. What is the sun's elevation at the later time? (Synthesize: use tangent, inverse functions, and similar triangles)

**Problem 10.15**: Explain why the Law of Cosines reduces to the Pythagorean theorem when the angle is 90°.

**Problem 10.16**: Create a concept map showing how these topics connect:
- Right triangles
- Unit circle
- Trigonometric identities
- Law of Sines
- Law of Cosines

---

## Section 10.4: Chapter Summary and Course Conclusion

### Essential Skills Acquired

**Computational Skills**:
- Using calculators effectively
- Switching between degree and radian modes
- Finding inverse trigonometric values
- Managing precision and rounding

**Conceptual Understanding**:
- Relationships between angles and sides
- Unit circle interpretation
- Trigonometric identities and why they're true
- Choosing appropriate methods

**Problem-Solving Abilities**:
- Solving right triangles
- Solving oblique triangles
- Navigating the ambiguous case
- Applying to real-world situations

**Synthesis and Integration**:
- Connecting multiple concepts
- Choosing efficient strategies
- Verifying solutions
- Translating between representations

### Course Journey Recap

**Chapter 1-2**: Foundation
- Geometry basics and triangle properties
- Pythagorean theorem as cornerstone

**Chapter 3-4**: Basic Trigonometry
- Trigonometric ratios and SOHCAHTOA
- Special triangles and angles

**Chapter 5**: Extension
- Unit circle generalizes trig functions
- Graphing reveals periodic nature

**Chapter 6**: Algebraic Tools
- Identities for simplification
- Sum, difference, and double angle formulas

**Chapter 7**: Working Backwards
- Inverse functions
- Solving equations

**Chapter 8**: Advanced Triangles
- Law of Sines and Law of Cosines
- Area formulas

**Chapter 9**: Real-World Applications
- Navigation and surveying
- Engineering and physics
- Harmonic motion

**Chapter 10**: Integration
- Tools and techniques
- Synthesis of concepts
- Connections to future mathematics

### Key Takeaways

1. **Trigonometry is about relationships**: The fundamental insight is how angles relate to side ratios

2. **Multiple perspectives deepen understanding**: Right triangles, unit circle, and graphs all show different aspects of the same functions

3. **Tools support but don't replace understanding**: Calculators are powerful, but you need to know what to calculate and why

4. **Real applications motivate the mathematics**: These aren't arbitrary rules—they solve real problems

5. **Everything connects**: Trigonometry links geometry, algebra, and analysis

### Moving Forward

**Where trigonometry leads**:

**Immediate applications**:
- Physics (mechanics, waves, electricity)
- Engineering (structures, signals, circuits)
- Computer graphics and game design
- Navigation and GPS technology

**Advanced mathematics**:
- Precalculus and calculus
- Complex analysis
- Differential equations
- Fourier analysis and signal processing

**Skills that transfer**:
- Analytical thinking
- Problem decomposition
- Visual-algebraic connections
- Precision in reasoning

### Final Thoughts

Trigonometry has been called the "mathematics of the circle" and the "mathematics of waves." It's one of the oldest branches of mathematics, used by ancient astronomers and surveyors, yet it remains essential in modern technology—from smartphones to spacecraft.

The skills you've developed go beyond memorizing formulas. You've learned to:
- Visualize abstract relationships
- Translate real situations into mathematical models
- Choose appropriate tools and methods
- Verify and validate your solutions
- See connections between different concepts

These are the hallmarks of mathematical thinking, valuable far beyond this course.

As you continue your mathematical journey, you'll see trigonometry appear again and again, each time revealing new facets and applications. The foundation you've built here will serve you well.

---

### Chapter Review Questions

**Short Answer**:

1. How can you tell if your calculator is in degree or radian mode?
2. What is the range of the arcsin function, and why is it restricted?
3. State the Pythagorean identity and explain where it comes from.
4. What does "All Students Take Calculus" help you remember?
5. When solving a triangle, how do you decide whether to use Law of Sines or Law of Cosines?

**Problem Solving**:

6. Your calculator gives sin⁻¹(0.7) = 44.43°. Find all solutions to sin θ = 0.7 in [0°, 360°).

7. Calculate the area of a triangle with sides 9.5 cm, 12.3 cm, and included angle 58.7°. Round appropriately.

8. Create a reference table showing exact values of sin θ, cos θ, and tan θ for θ = 0°, 30°, 45°, 60°, 90°.

9. Convert 120° to radians and π/3 radians to degrees.

10. A ladder 25 feet long leans against a wall at 70° from the ground. How high up the wall does it reach? Then, if the ladder slips so it only reaches 20 feet up, what angle does it now make with the ground?

**Synthesis Problems**:

11. From the top of a 200-meter building, the angle of depression to one car is 25° and to another car (in the same direction) is 18°. How far apart are the cars?

12. Two observers 3 km apart both measure the angle of elevation to a weather balloon. One measures 48°, the other measures 62°. How high is the balloon?

13. A triangle has sides a = 10, b = 14, and angle C = 45°. Find the third side and the area of the triangle.

14. Verify the identity: $\frac{1 - \cos 2\theta}{\sin 2\theta} = \tan \theta$

15. A boat travels 15 km on bearing 040°, then 20 km on bearing 110°. How far is it from the starting point, and what is its bearing from the starting point?

---

## Course Conclusion

Congratulations on completing your study of trigonometric functions! You've journeyed from the basics of right triangles to advanced applications in navigation, engineering, and physics. You've mastered computational techniques, understood deep conceptual relationships, and learned to solve complex real-world problems.

The power of trigonometry lies not just in the formulas you've memorized, but in the way of thinking you've developed: seeing angles and distances as interconnected, visualizing abstract relationships, and applying mathematical reasoning to practical situations.

As you move forward—whether to calculus, physics, engineering, or any field that uses quantitative reasoning—the foundations you've built here will serve you well. Trigonometry appears everywhere in advanced mathematics and science, and you now have the tools to use it confidently.

Keep practicing, stay curious, and remember: mathematics is not about memorizing formulas—it's about understanding relationships and solving problems. You've demonstrated both abilities throughout this course.

**Well done, and best wishes for your continued mathematical journey!**

---

**Chapter 10 Complete!** **Course Complete!**
