# Chapter 8: Advanced Triangle Solutions

## Introduction

In Chapter 7, we mastered solving right triangles. But what about triangles without a right angle? Oblique triangles (triangles that are not right triangles) appear everywhere in real-world applications—from GPS positioning to architectural design to analyzing forces in physics.

This chapter introduces two powerful laws that work for **any triangle**: the **Law of Sines** and the **Law of Cosines**. These laws extend our problem-solving abilities beyond right triangles. We'll also learn multiple methods for calculating triangle areas and develop strategies for choosing the most efficient approach for each problem.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall the Law of Sines and Law of Cosines
- **Understand**: Explain when to use each law and why they work
- **Apply**: Solve any triangle given sufficient information
- **Analyze**: Recognize the ambiguous case and determine the number of solutions
- **Evaluate**: Choose the most efficient method for different triangle problems
- **Create**: Solve complex real-world problems involving oblique triangles

---

## Section 8.1: Law of Sines

### The Law of Sines Statement

For any triangle ABC with sides a, b, c opposite angles A, B, C respectively:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

**Alternative form** (equally valid):
$$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

### When to Use the Law of Sines

Use the Law of Sines when you know:
- **ASA** (Angle-Side-Angle): Two angles and the included side
- **AAS** (Angle-Angle-Side): Two angles and a non-included side
- **SSA** (Side-Side-Angle): Two sides and an angle opposite one of them (ambiguous case!)

### Why It Works

The Law of Sines comes from the area formula. For any triangle:
$$\text{Area} = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$$

Setting these equal and simplifying leads to the Law of Sines.

### Standard Labeling Convention

**Important**: In triangle ABC:
- Side **a** is opposite angle **A**
- Side **b** is opposite angle **B**
- Side **c** is opposite angle **C**

This notation is used consistently in all formulas.

---

### Worked Examples

#### Example 8.1: Solving AAS Triangle

**Problem**: In triangle ABC, angle A = 40°, angle B = 65°, and side a = 10 cm. Find all remaining parts.

**Solution**:

**Step 1**: Find angle C
$$C = 180° - 40° - 65° = 75°$$

**Step 2**: Use Law of Sines to find side b
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{10}{\sin 40°} = \frac{b}{\sin 65°}$$
$$b = \frac{10 \sin 65°}{\sin 40°}$$
$$b = \frac{10(0.906)}{0.643} \approx 14.10 \text{ cm}$$

**Step 3**: Use Law of Sines to find side c
$$\frac{a}{\sin A} = \frac{c}{\sin C}$$
$$\frac{10}{\sin 40°} = \frac{c}{\sin 75°}$$
$$c = \frac{10 \sin 75°}{\sin 40°}$$
$$c = \frac{10(0.966)}{0.643} \approx 15.02 \text{ cm}$$

**Answer**:
- Angle C = 75°
- Side b ≈ 14.10 cm
- Side c ≈ 15.02 cm

---

#### Example 8.2: Solving ASA Triangle

**Problem**: In triangle ABC, angle A = 50°, side b = 12 inches, and angle C = 70°. Find all remaining parts.

**Solution**:

**Step 1**: Find angle B
$$B = 180° - 50° - 70° = 60°$$

**Step 2**: Use Law of Sines to find side a
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{a}{\sin 50°} = \frac{12}{\sin 60°}$$
$$a = \frac{12 \sin 50°}{\sin 60°}$$
$$a = \frac{12(0.766)}{0.866} \approx 10.61 \text{ inches}$$

**Step 3**: Use Law of Sines to find side c
$$\frac{c}{\sin C} = \frac{b}{\sin B}$$
$$\frac{c}{\sin 70°} = \frac{12}{\sin 60°}$$
$$c = \frac{12 \sin 70°}{\sin 60°}$$
$$c = \frac{12(0.940)}{0.866} \approx 13.02 \text{ inches}$$

**Answer**:
- Angle B = 60°
- Side a ≈ 10.61 inches
- Side c ≈ 13.02 inches

---

#### Example 8.3: Finding an Unknown Angle

**Problem**: In triangle ABC, a = 15 cm, b = 20 cm, and angle A = 35°. Find angle B.

**Solution**:

Use Law of Sines:
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{15}{\sin 35°} = \frac{20}{\sin B}$$
$$\sin B = \frac{20 \sin 35°}{15}$$
$$\sin B = \frac{20(0.574)}{15} \approx 0.765$$
$$B = \arcsin(0.765) \approx 49.9°$$

**Answer**: Angle B ≈ **49.9°**

**Note**: This is the SSA case, which we'll explore more in Section 8.2!

---

#### Example 8.4: Real-World Application

**Problem**: Two fire lookout towers are 10 miles apart. Rangers at each tower spot a fire. From tower A, the fire is at a bearing of 42° from due north. From tower B (which is due east of A), the fire is at a bearing of 315° from due north. How far is the fire from each tower?

**Solution**:

Setting up the triangle:
- The angle at A (between AB and AF) = 90° - 42° = 48°
- The angle at B (between BA and BF) = 315° - 270° = 45° (or 360° - 315° = 45° from west)
- Actually, angle at B from AB to BF = 270° - 315° + 360° = 315°... Let me recalculate.

The angle at B (interior to triangle) = 315° - 270° = 45°
The angle at F = 180° - 48° - 45° = 87°

Using Law of Sines:
$$\frac{c}{\sin F} = \frac{AB}{\sin F} = \frac{10}{\sin 87°}$$

Distance from A to fire:
$$\frac{BF}{\sin 48°} = \frac{10}{\sin 87°}$$
$$BF = \frac{10 \sin 48°}{\sin 87°} \approx 7.44 \text{ miles}$$

Distance from B to fire:
$$\frac{AF}{\sin 45°} = \frac{10}{\sin 87°}$$
$$AF = \frac{10 \sin 45°}{\sin 87°} \approx 7.08 \text{ miles}$$

**Answer**: Fire is approximately **7.44 miles from tower A** and **7.08 miles from tower B**.

---

### Practice Problems

**Problem 8.1**: In triangle ABC, angle A = 55°, angle C = 78°, and side a = 16 m. Find all remaining parts.

**Problem 8.2**: In triangle ABC, angle B = 42°, side a = 9 cm, and angle A = 60°. Find all remaining parts.

**Problem 8.3**: In triangle ABC, a = 8 ft, b = 10 ft, and angle A = 30°. Find angle B.

**Problem 8.4**: Two sides of a triangle are 12 inches and 15 inches. The angle opposite the 12-inch side is 45°. Find the angle opposite the 15-inch side.

**Problem 8.5**: A ship leaves port and travels 40 miles on a bearing of N 50° E. It then turns and travels on a bearing of N 20° W until it is due north of the port. How far is the ship from port?

---

## Section 8.2: The Ambiguous Case (SSA)

### What Is the Ambiguous Case?

When you know two sides and an angle opposite one of them (SSA), there might be:
- **No triangle** (impossible configuration)
- **One triangle** (unique solution)
- **Two different triangles** (two valid solutions)

This is called the **ambiguous case** because the number of solutions is ambiguous until you check.

### Determining the Number of Solutions

Given sides a and b, and angle A (opposite side a):

**Calculate the height**: h = b sin A

**Then check**:

1. **If a < h**: No triangle (side a is too short)
2. **If a = h**: One right triangle (exactly reaches)
3. **If h < a < b**: Two triangles (ambiguous case)
4. **If a ≥ b**: One triangle (side a is long enough to determine uniquely)

**Special case**: If angle A ≥ 90°, there's at most one triangle (and only if a > b).

### Finding Both Solutions

When two triangles exist:
1. Find the first angle B using arcsin
2. Find the second possible angle B' = 180° - B
3. Check if both lead to valid triangles (sum of angles = 180°)
4. Solve each triangle completely

---

### Worked Examples

#### Example 8.5: Ambiguous Case - Two Solutions

**Problem**: In triangle ABC, a = 10 cm, b = 12 cm, and angle A = 40°. Find all possible triangles.

**Solution**:

**Step 1**: Calculate height h
$$h = b \sin A = 12 \sin 40° = 12(0.643) = 7.72 \text{ cm}$$

**Step 2**: Compare with a
Since h = 7.72 < a = 10 < b = 12, there are **two possible triangles**.

**Step 3**: Find angle B using Law of Sines
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\sin B = \frac{b \sin A}{a} = \frac{12 \sin 40°}{10} = 0.771$$
$$B_1 = \arcsin(0.771) \approx 50.5°$$

**Step 4**: Find the second possible angle B
$$B_2 = 180° - 50.5° = 129.5°$$

**Triangle 1** (using B₁ = 50.5°):
- A = 40°, B = 50.5°
- C = 180° - 40° - 50.5° = 89.5°
- Find c: $c = \frac{a \sin C}{\sin A} = \frac{10 \sin 89.5°}{\sin 40°} \approx 15.54$ cm

**Triangle 2** (using B₂ = 129.5°):
- A = 40°, B = 129.5°
- C = 180° - 40° - 129.5° = 10.5°
- Find c: $c = \frac{a \sin C}{\sin A} = \frac{10 \sin 10.5°}{\sin 40°} \approx 2.83$ cm

**Answer**: Two triangles exist with the following measurements:

**Triangle 1**: B ≈ 50.5°, C ≈ 89.5°, c ≈ 15.54 cm
**Triangle 2**: B ≈ 129.5°, C ≈ 10.5°, c ≈ 2.83 cm

---

#### Example 8.6: Ambiguous Case - No Solution

**Problem**: In triangle ABC, a = 5 ft, b = 12 ft, and angle A = 30°. How many triangles are possible?

**Solution**:

Calculate height:
$$h = b \sin A = 12 \sin 30° = 12(0.5) = 6 \text{ ft}$$

Since a = 5 < h = 6, side a is too short to reach from the baseline.

**Answer**: **No triangle possible**

---

#### Example 8.7: Ambiguous Case - One Solution

**Problem**: In triangle ABC, a = 15 m, b = 10 m, and angle A = 50°. How many triangles are possible?

**Solution**:

Calculate height:
$$h = b \sin A = 10 \sin 50° = 10(0.766) = 7.66 \text{ m}$$

Since a = 15 > b = 10, there is exactly **one triangle**.

Using Law of Sines:
$$\sin B = \frac{b \sin A}{a} = \frac{10 \sin 50°}{15} = 0.511$$
$$B \approx 30.7°$$

The supplement (180° - 30.7° = 149.3°) would make A + B > 180°, so it's invalid.

**Answer**: **One triangle** with B ≈ 30.7°

---

### Practice Problems

**Problem 8.6**: Determine the number of possible triangles:
1. a = 8, b = 10, A = 45°
2. a = 6, b = 15, A = 25°
3. a = 20, b = 12, A = 60°

**Problem 8.7**: In triangle ABC, a = 7 cm, b = 9 cm, and A = 35°. Find all possible triangles.

**Problem 8.8**: For what values of a would exactly two triangles be possible if b = 10 and A = 40°?

---

## Section 8.3: Law of Cosines

### The Law of Cosines Statement

For any triangle ABC:

$$a^2 = b^2 + c^2 - 2bc \cos A$$
$$b^2 = a^2 + c^2 - 2ac \cos B$$
$$c^2 = a^2 + b^2 - 2ab \cos C$$

**Note**: This generalizes the Pythagorean theorem! When C = 90°, cos C = 0, and we get a² + b² = c².

### When to Use the Law of Cosines

Use the Law of Cosines when you know:
- **SAS** (Side-Angle-Side): Two sides and the included angle
- **SSS** (Side-Side-Side): All three sides

### Alternative Form (for finding angles)

When you know all three sides and need an angle:

$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$
$$\cos B = \frac{a^2 + c^2 - b^2}{2ac}$$
$$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

---

### Worked Examples

#### Example 8.8: Solving SAS Triangle

**Problem**: In triangle ABC, b = 8 cm, c = 5 cm, and angle A = 60°. Find all remaining parts.

**Solution**:

**Step 1**: Use Law of Cosines to find side a
$$a^2 = b^2 + c^2 - 2bc \cos A$$
$$a^2 = 8^2 + 5^2 - 2(8)(5) \cos 60°$$
$$a^2 = 64 + 25 - 80(0.5)$$
$$a^2 = 64 + 25 - 40 = 49$$
$$a = 7 \text{ cm}$$

**Step 2**: Use Law of Sines to find angle B
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{7}{\sin 60°} = \frac{8}{\sin B}$$
$$\sin B = \frac{8 \sin 60°}{7} = \frac{8(0.866)}{7} \approx 0.989$$
$$B \approx 81.8°$$

**Step 3**: Find angle C
$$C = 180° - 60° - 81.8° = 38.2°$$

**Answer**:
- Side a = 7 cm
- Angle B ≈ 81.8°
- Angle C ≈ 38.2°

---

#### Example 8.9: Solving SSS Triangle

**Problem**: In triangle ABC, a = 10 m, b = 12 m, and c = 15 m. Find all angles.

**Solution**:

**Step 1**: Use Law of Cosines to find angle A
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$
$$\cos A = \frac{12^2 + 15^2 - 10^2}{2(12)(15)}$$
$$\cos A = \frac{144 + 225 - 100}{360} = \frac{269}{360} \approx 0.747$$
$$A = \arccos(0.747) \approx 41.7°$$

**Step 2**: Use Law of Cosines to find angle B
$$\cos B = \frac{a^2 + c^2 - b^2}{2ac}$$
$$\cos B = \frac{10^2 + 15^2 - 12^2}{2(10)(15)}$$
$$\cos B = \frac{100 + 225 - 144}{300} = \frac{181}{300} \approx 0.603$$
$$B = \arccos(0.603) \approx 52.9°$$

**Step 3**: Find angle C
$$C = 180° - 41.7° - 52.9° = 85.4°$$

**Answer**:
- Angle A ≈ 41.7°
- Angle B ≈ 52.9°
- Angle C ≈ 85.4°

---

#### Example 8.10: Application Problem

**Problem**: Two ships leave a port at the same time. One travels at 20 knots on a bearing of N 35° E, and the other travels at 25 knots on a bearing of N 55° W. How far apart are they after 2 hours?

**Solution**:

After 2 hours:
- Ship 1 has traveled: 20(2) = 40 nautical miles
- Ship 2 has traveled: 25(2) = 50 nautical miles

The angle between their paths:
- Ship 1: 35° east of north
- Ship 2: 55° west of north
- Angle between paths: 35° + 55° = 90°

Using Law of Cosines with SAS (sides 40 and 50, included angle 90°):
$$d^2 = 40^2 + 50^2 - 2(40)(50) \cos 90°$$
$$d^2 = 1600 + 2500 - 0$$
$$d^2 = 4100$$
$$d = \sqrt{4100} \approx 64.0 \text{ nautical miles}$$

**Answer**: The ships are approximately **64.0 nautical miles apart**.

---

### Practice Problems

**Problem 8.9**: In triangle ABC, a = 6 ft, b = 8 ft, and angle C = 70°. Find all remaining parts.

**Problem 8.10**: In triangle ABC, a = 5 cm, b = 7 cm, and c = 9 cm. Find all angles.

**Problem 8.11**: Two sides of a triangle are 13 inches and 18 inches, and they form a 45° angle. Find the third side.

**Problem 8.12**: Three towns are connected by straight roads. Town A is 15 miles from town B and 20 miles from town C. The road from B to C is 25 miles long. Find the angles at each town.

---

## Section 8.4: Triangle Area Formulas

### Standard Area Formula

The most basic formula (for any triangle):
$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$$

### Area Using Two Sides and Included Angle

When you know two sides and the angle between them:
$$\text{Area} = \frac{1}{2}ab \sin C = \frac{1}{2}bc \sin A = \frac{1}{2}ac \sin B$$

This is extremely useful when you don't know the height directly.

### Heron's Formula

When you know all three sides:
$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$$

where s is the **semi-perimeter**: $s = \frac{a+b+c}{2}$

### Area Using Circumradius

For advanced applications:
$$\text{Area} = \frac{abc}{4R}$$

where R is the radius of the circumscribed circle.

---

### Worked Examples

#### Example 8.11: Area Using SAS Formula

**Problem**: Find the area of triangle ABC where b = 10 cm, c = 12 cm, and angle A = 50°.

**Solution**:

Using the SAS area formula:
$$\text{Area} = \frac{1}{2}bc \sin A$$
$$= \frac{1}{2}(10)(12) \sin 50°$$
$$= 60 \sin 50°$$
$$= 60(0.766)$$
$$= 45.96 \text{ cm}^2$$

**Answer**: Area ≈ **45.96 cm²**

---

#### Example 8.12: Area Using Heron's Formula

**Problem**: Find the area of a triangle with sides 7 m, 8 m, and 9 m.

**Solution**:

**Step 1**: Find semi-perimeter
$$s = \frac{7 + 8 + 9}{2} = \frac{24}{2} = 12 \text{ m}$$

**Step 2**: Apply Heron's formula
$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$$
$$= \sqrt{12(12-7)(12-8)(12-9)}$$
$$= \sqrt{12(5)(4)(3)}$$
$$= \sqrt{720}$$
$$= 12\sqrt{5} \approx 26.83 \text{ m}^2$$

**Answer**: Area = $12\sqrt{5}$ ≈ **26.83 m²**

---

#### Example 8.13: Comparing Methods

**Problem**: A triangle has sides 6 ft, 8 ft, and 10 ft. Find its area using two different methods.

**Solution**:

**Method 1: Recognize it's a right triangle**
Since 6² + 8² = 36 + 64 = 100 = 10², this is a right triangle.
$$\text{Area} = \frac{1}{2}(6)(8) = 24 \text{ ft}^2$$

**Method 2: Heron's formula**
$$s = \frac{6+8+10}{2} = 12$$
$$\text{Area} = \sqrt{12(12-6)(12-8)(12-10)}$$
$$= \sqrt{12(6)(4)(2)}$$
$$= \sqrt{576} = 24 \text{ ft}^2$$

Both methods give the same answer! ✓

---

### Practice Problems

**Problem 8.13**: Find the area of triangle ABC where:
1. a = 5 cm, b = 7 cm, C = 60°
2. All sides are 8 inches (equilateral)
3. Sides are 10 m, 12 m, and 14 m

**Problem 8.14**: A triangle has sides 13 ft, 14 ft, and 15 ft. Find its area using Heron's formula.

**Problem 8.15**: Two sides of a triangle are 20 cm and 25 cm, forming a 75° angle. Find the area.

---

## Section 8.5: Selecting Solution Methods

### Decision Tree for Triangle Problems

**Do you have a right triangle?**
- YES → Use right triangle methods (Chapter 7)
- NO → Continue below

**What information do you have?**

**ASA or AAS** (two angles, one side):
→ Use **Law of Sines**

**SSA** (two sides, angle opposite one):
→ Check for **ambiguous case**, then use **Law of Sines**

**SAS** (two sides, included angle):
→ Use **Law of Cosines**

**SSS** (three sides):
→ Use **Law of Cosines**

### Choosing Area Formulas

**Do you know the height?**
- YES → Use $\frac{1}{2} \times \text{base} \times \text{height}$

**Do you know two sides and the included angle?**
- YES → Use $\frac{1}{2}ab \sin C$

**Do you know all three sides?**
- YES → Use **Heron's formula**

### Efficiency Tips

1. **Use Law of Sines when possible** - generally simpler calculations
2. **Law of Cosines for finding sides** - when you have SAS
3. **Law of Cosines for finding angles** - when you have SSS
4. **Check for special triangles** - 30-60-90, 45-45-90, 3-4-5, etc.
5. **Verify with angle sum** - angles should total 180°

---

### Worked Examples

#### Example 8.14: Choosing the Best Method

**Problem**: You're given:
- Triangle 1: Two angles (40° and 70°) and a side of 10 cm
- Triangle 2: Three sides (5 cm, 6 cm, 7 cm)
- Triangle 3: Two sides (8 cm, 12 cm) and the angle between them (55°)

Which method should you use for each?

**Solution**:

**Triangle 1** (AAS): Use **Law of Sines**
- Find third angle: 180° - 40° - 70° = 70°
- Use Law of Sines to find other sides

**Triangle 2** (SSS): Use **Law of Cosines**
- Use Law of Cosines to find angles
- Or use Heron's formula for area

**Triangle 3** (SAS): Use **Law of Cosines**
- Use Law of Cosines to find third side
- Then Law of Sines for remaining angles

---

### Practice Problems

**Problem 8.16**: Identify which law(s) to use:
1. a = 10, b = 12, C = 45°
2. A = 30°, B = 75°, c = 20
3. a = 7, b = 9, c = 11
4. a = 15, A = 40°, b = 18

**Problem 8.17**: A surveyor needs to find the distance across a lake. From point A, she measures the distance to point B (on the other side) as 200 m and to point C (also on the other side) as 150 m. The angle at A is 65°. What's the distance from B to C?

---

## Section 8.6: Chapter Summary

### Key Laws and Formulas

**Law of Sines**:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

**Law of Cosines**:
$$a^2 = b^2 + c^2 - 2bc \cos A$$
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

**Area Formulas**:
- Standard: $\frac{1}{2} \times \text{base} \times \text{height}$
- SAS: $\frac{1}{2}ab \sin C$
- Heron's: $\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \frac{a+b+c}{2}$

### When to Use Each Method

| Given Info | Method | Notes |
|------------|--------|-------|
| ASA or AAS | Law of Sines | Find third angle first |
| SSA | Law of Sines | Check ambiguous case! |
| SAS | Law of Cosines | Find third side, then angles |
| SSS | Law of Cosines | Find angles |

### The Ambiguous Case (SSA)

Given a, b, and angle A:
- Calculate h = b sin A
- If a < h: no triangle
- If a = h: one right triangle
- If h < a < b: two triangles
- If a ≥ b: one triangle

### Problem-Solving Strategy

1. **Draw and label** a diagram
2. **Identify** what you know (ASA, SAS, etc.)
3. **Choose** the appropriate law
4. **Solve** step by step
5. **Verify** (angles sum to 180°, triangle inequality, etc.)

### Why This Matters for Trigonometry

These advanced methods are essential because:

1. **Universal applicability** - Works for any triangle, not just right triangles
2. **Real-world relevance** - Surveying, navigation, architecture, engineering
3. **Problem-solving flexibility** - Multiple approaches to solve the same problem
4. **Foundation for advanced topics** - Vector analysis, complex numbers, physics
5. **Practical efficiency** - Choose the best method for each situation

### Looking Ahead

In **Chapter 9**, we'll apply everything we've learned to **real-world problems**. You'll work with navigation and surveying applications, solve height and distance problems, and explore how trigonometry is used in engineering and physics. These practical applications will show why trigonometry is such a powerful and essential tool.

---

### Chapter Review Questions

**Short Answer**:

1. State the Law of Sines.
2. State the Law of Cosines.
3. When would you use the Law of Cosines instead of the Law of Sines?
4. What is the ambiguous case, and when does it occur?
5. State Heron's formula for the area of a triangle.

**Problem Solving**:

6. In triangle ABC, A = 50°, B = 70°, and a = 15 cm. Find all remaining parts.

7. In triangle ABC, a = 10 m, b = 12 m, and C = 65°. Find all remaining parts.

8. In triangle ABC, a = 8 ft, b = 10 ft, and c = 12 ft. Find all angles.

9. In triangle ABC, a = 7 inches, b = 9 inches, and A = 35°. Determine how many triangles are possible and solve all possible triangles.

10. Find the area of a triangle with sides 6 cm, 8 cm, and 10 cm.

11. Find the area of a triangle where two sides are 14 m and 18 m, forming a 75° angle.

12. Two ships leave port simultaneously. One travels at 15 knots on bearing N 40° E, the other at 20 knots on bearing S 50° E. How far apart are they after 3 hours?

13. A triangular plot of land has sides 50 m, 60 m, and 70 m. Find the largest angle.

14. In triangle ABC, b = 20 cm, c = 15 cm, and A = 80°. Find side a.

15. Which method (Law of Sines or Law of Cosines) would you use if given: a = 5, A = 30°, B = 45°?

---

**Chapter 8 Complete!** Move on to Chapter 9: Real-World Applications
