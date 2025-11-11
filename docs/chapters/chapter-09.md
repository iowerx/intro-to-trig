# Chapter 9: Real-World Applications

## Introduction

Throughout this course, you've built a powerful toolkit of trigonometric concepts and techniques. Now it's time to see how these tools are used to solve actual problems in the real world. From determining your location with GPS to designing roller coasters, from analyzing sound waves to predicting tides, trigonometry is everywhere.

In this chapter, we'll explore practical applications in navigation, surveying, engineering, and physics. You'll learn specialized terminology like "bearing" and "angle of elevation," and you'll see how professionals use trigonometry daily. These aren't just textbook exercises—they're the kinds of problems that engineers, architects, pilots, surveyors, and scientists actually solve.

### Chapter Learning Objectives

After completing this chapter, you will be able to:

- **Remember**: Recall terminology for navigation, surveying, and measurement
- **Understand**: Explain how trigonometry applies to real-world situations
- **Apply**: Solve practical problems in navigation, surveying, and engineering
- **Analyze**: Break down complex scenarios into solvable trigonometric problems
- **Evaluate**: Assess which methods and approaches work best for different applications
- **Create**: Design solutions to multi-step real-world problems

---

## Section 9.1: Navigation and Surveying

### Navigation Terminology

**Bearing**: The direction of travel measured as an angle from a reference direction (usually north).

**Two bearing systems**:

1. **Compass Bearing** (N/S/E/W notation):
   - Measured from north or south
   - Examples: N 30° E, S 45° W
   - N 30° E means: Start facing north, rotate 30° toward east

2. **True Bearing** (0° to 360°):
   - Measured clockwise from north
   - Examples: 30°, 135°, 270°
   - 0° = North, 90° = East, 180° = South, 270° = West

**Converting between systems**:
- N 30° E = 30° (true bearing)
- S 45° W = 225° (true bearing)
- N 45° W = 315° (true bearing)

### Surveying Terminology

**Angle of Elevation**: The angle above the horizontal when looking up at an object.

**Angle of Depression**: The angle below the horizontal when looking down at an object.

**Horizontal distance**: The distance along the ground (not the direct line-of-sight distance).

**Note**: From point A looking up at point B, the angle of elevation at A equals the angle of depression from B to A (alternate interior angles).

### Dead Reckoning

A navigation method that uses:
- Starting position
- Direction of travel (bearing)
- Distance traveled
- Trigonometry to calculate current position

---

### Worked Examples

#### Example 9.1: Basic Bearing Problem

**Problem**: A ship travels 40 nautical miles on a bearing of N 35° E. How far north and how far east has it traveled?

**Solution**:

Draw a diagram:
- The bearing creates a right triangle
- The northward distance is adjacent to the 35° angle
- The eastward distance is opposite the 35° angle

**Northward distance** (adjacent):
$$d_N = 40 \cos 35° = 40(0.819) \approx 32.77 \text{ nautical miles}$$

**Eastward distance** (opposite):
$$d_E = 40 \sin 35° = 40(0.574) \approx 22.94 \text{ nautical miles}$$

**Answer**: The ship has traveled approximately **32.77 nautical miles north** and **22.94 nautical miles east**.

---

#### Example 9.2: Finding Distance and Bearing

**Problem**: A hiker walks 5 km north, then 3 km east. What is the hiker's displacement (straight-line distance and bearing from start)?

**Solution**:

**Distance** (using Pythagorean theorem):
$$d = \sqrt{5^2 + 3^2} = \sqrt{25 + 9} = \sqrt{34} \approx 5.83 \text{ km}$$

**Bearing**:
The angle from north:
$$\tan \theta = \frac{3}{5} = 0.6$$
$$\theta = \arctan(0.6) \approx 30.96°$$

**Answer**: The hiker is approximately **5.83 km** from the starting point on a bearing of **N 31° E** (or **31° true bearing**).

---

#### Example 9.3: Angle of Elevation Problem

**Problem**: From a point 150 meters from the base of a cliff, the angle of elevation to the top is 58°. How tall is the cliff?

**Solution**:

This creates a right triangle:
- Adjacent side (horizontal distance) = 150 m
- Opposite side (height) = h (unknown)
- Angle = 58°

Using tangent:
$$\tan 58° = \frac{h}{150}$$
$$h = 150 \tan 58° = 150(1.600) = 240 \text{ meters}$$

**Answer**: The cliff is approximately **240 meters tall**.

---

#### Example 9.4: Angle of Depression Problem

**Problem**: From the top of a 200-foot lighthouse, the angle of depression to a boat is 12°. How far is the boat from the base of the lighthouse?

**Solution**:

Important: The angle of depression from the top equals the angle of elevation from the boat's perspective.

Right triangle:
- Opposite side (height of lighthouse) = 200 ft
- Adjacent side (distance to boat) = d (unknown)
- Angle of elevation = 12°

Using tangent:
$$\tan 12° = \frac{200}{d}$$
$$d = \frac{200}{\tan 12°} = \frac{200}{0.213} \approx 939 \text{ feet}$$

**Answer**: The boat is approximately **939 feet** from the base of the lighthouse.

---

#### Example 9.5: Multiple-Bearing Navigation

**Problem**: A plane flies 300 km on a bearing of 120°, then 200 km on a bearing of 200°. How far is the plane from its starting point?

**Solution**:

This requires breaking each leg into north-south and east-west components.

**First leg** (120° = S 60° E):
- East: 300 sin 60° = 300(0.866) = 259.8 km
- South: 300 cos 60° = 300(0.5) = 150 km

**Second leg** (200° = S 20° W):
- West: 200 sin 20° = 200(0.342) = 68.4 km
- South: 200 cos 20° = 200(0.940) = 188 km

**Total displacement**:
- East-West: 259.8 - 68.4 = 191.4 km east
- North-South: 150 + 188 = 338 km south

**Final distance**:
$$d = \sqrt{191.4^2 + 338^2} = \sqrt{36634 + 114244} = \sqrt{150878} \approx 388.4 \text{ km}$$

**Answer**: The plane is approximately **388.4 km** from its starting point.

---

### Practice Problems

**Problem 9.1**: A ship sails 25 miles on a bearing of N 40° W. How far north and how far west has it traveled?

**Problem 9.2**: From a point 80 meters from a building, the angle of elevation to the top is 52°. How tall is the building?

**Problem 9.3**: A plane flies 120 km east, then 90 km north. What is its bearing from the starting point?

**Problem 9.4**: From the top of a 300-meter tower, the angle of depression to a car is 18°. How far is the car from the base of the tower?

**Problem 9.5**: Convert these compass bearings to true bearings:
1. N 50° E
2. S 30° W
3. N 25° W

**Problem 9.6**: A surveyor stands 100 feet from a tree. The angle of elevation to the top is 35°. If the surveyor's eye level is 5 feet above ground, how tall is the tree?

**Problem 9.7**: Two ships leave port at the same time. Ship A travels at 15 knots on bearing 045°, Ship B travels at 20 knots on bearing 120°. How far apart are they after 3 hours?

**Problem 9.8**: A hiker walks 4 km on bearing 060°, then 5 km on bearing 150°. How far is the hiker from the starting point?

---

## Section 9.2: Indirect Measurement

### When Direct Measurement Is Impossible

Trigonometry allows us to find distances and heights that we cannot measure directly:
- Height of mountains or tall buildings
- Width of rivers or canyons
- Distance to inaccessible objects
- Astronomical distances

### Common Techniques

**Single observation with known baseline**: Use angle of elevation/depression and known distance.

**Two observation points**: Take measurements from two locations, then solve the resulting triangle.

**Triangulation**: Use multiple observation points to pinpoint a location.

**Shadow method**: Use shadows and similar triangles (ancient technique).

### Solving Height and Distance Problems

**General strategy**:
1. Draw a clear diagram
2. Label all known information
3. Identify the triangle(s) involved
4. Choose appropriate trig functions or laws
5. Solve step by step
6. Check if answer is reasonable

---

### Worked Examples

#### Example 9.6: Finding Height Using Two Angles

**Problem**: From point A, the angle of elevation to the top of a mountain is 32°. Moving 500 meters closer (to point B), the angle of elevation is 48°. How tall is the mountain?

**Solution**:

Let h = height of mountain, d = distance from B to the base

From point B:
$$\tan 48° = \frac{h}{d}$$
$$d = \frac{h}{\tan 48°}$$

From point A (distance = d + 500):
$$\tan 32° = \frac{h}{d + 500}$$
$$d + 500 = \frac{h}{\tan 32°}$$

Substitute the first equation into the second:
$$\frac{h}{\tan 48°} + 500 = \frac{h}{\tan 32°}$$
$$\frac{h}{1.111} + 500 = \frac{h}{0.625}$$

Multiply by 1.111:
$$h + 555.5 = \frac{h \cdot 1.111}{0.625} = 1.778h$$

$$555.5 = 1.778h - h = 0.778h$$
$$h = \frac{555.5}{0.778} \approx 714 \text{ meters}$$

**Answer**: The mountain is approximately **714 meters tall**.

---

#### Example 9.7: Finding Width of a River

**Problem**: To find the width of a river, a surveyor sets up two points A and B, 100 meters apart on one side. From point A, a tree on the opposite side is at an angle of 72° from line AB. From point B, the same tree is at an angle of 58° from line BA. How wide is the river at the tree?

**Solution**:

This creates a triangle with:
- Side AB = 100 m (known)
- Angle at A = 72°
- Angle at B = 58°
- Angle at tree C = 180° - 72° - 58° = 50°

Using Law of Sines to find AC (the distance from A to the tree):
$$\frac{AC}{\sin B} = \frac{AB}{\sin C}$$
$$\frac{AC}{\sin 58°} = \frac{100}{\sin 50°}$$
$$AC = \frac{100 \sin 58°}{\sin 50°} = \frac{100(0.848)}{0.766} \approx 110.7 \text{ m}$$

The width of the river is the perpendicular distance from A to the tree.

Actually, we need to rethink this. The width is perpendicular to the river, not the direct distance AC.

Let's say the perpendicular from A to the line through the tree (parallel to AB) makes the width w.

From A, angle to tree from perpendicular:
$$\sin 72° = \frac{w}{AC}$$
$$w = AC \sin 72° = 110.7(0.951) \approx 105.3 \text{ m}$$

**Answer**: The river is approximately **105.3 meters wide** at that point.

---

#### Example 9.8: Indirect Distance Using Similar Triangles

**Problem**: A person who is 6 feet tall casts a shadow 8 feet long. At the same time, a building casts a shadow 120 feet long. How tall is the building?

**Solution**:

Since the sun creates the same angle for both:
$$\frac{\text{height}}{\text{shadow}} = \text{constant}$$

$$\frac{6}{8} = \frac{h}{120}$$
$$h = \frac{6 \times 120}{8} = \frac{720}{8} = 90 \text{ feet}$$

**Answer**: The building is **90 feet tall**.

**Alternative**: Find the sun's angle:
$$\tan \theta = \frac{6}{8} = 0.75$$
$$\theta = \arctan(0.75) \approx 36.87°$$

Then:
$$\tan 36.87° = \frac{h}{120}$$
$$h = 120(0.75) = 90 \text{ feet}$$ ✓

---

### Practice Problems

**Problem 9.9**: From one point, the angle of elevation to a mountaintop is 25°. From a point 1000 feet closer, the angle is 40°. How tall is the mountain?

**Problem 9.10**: A 5-foot person casts a 7-foot shadow. At the same time, a flagpole casts a 35-foot shadow. How tall is the flagpole?

**Problem 9.11**: To measure the width of a lake, a surveyor measures a baseline of 200 meters along the shore. From one end, a landmark on the opposite shore is at 65° from the baseline. From the other end, it's at 48°. How wide is the lake?

**Problem 9.12**: A person stands at the edge of a canyon. Looking down at a rock, the angle of depression is 15°. Looking at the opposite rim at the same elevation, the angle is 12°. If the canyon is 800 feet wide, how far below is the rock?

---

## Section 9.3: Engineering and Physics Applications

### Structural Engineering

**Force analysis**: Breaking forces into components
**Stability**: Ensuring structures can withstand loads
**Angles and slopes**: Designing ramps, roofs, stairs
**Load distribution**: How forces spread through structures

### Physics Applications

**Projectile motion**: Trajectory of objects in flight
**Harmonic motion**: Oscillations and waves
**Vector analysis**: Breaking motion into components
**Circular motion**: Analyzing rotation

### Harmonic Motion

Many natural phenomena exhibit **simple harmonic motion**, which can be modeled using sine and cosine functions:

**General form**: $y = A \sin(B(t - C)) + D$ or $y = A \cos(B(t - C)) + D$

Where:
- **A** = amplitude (maximum displacement from equilibrium)
- **B** = relates to period: $\text{Period} = \frac{2\pi}{B}$
- **C** = phase shift (horizontal shift)
- **D** = vertical shift (equilibrium position)

**Examples**:
- Pendulum swings
- Spring oscillations
- Sound waves
- Alternating current
- Tides

---

### Worked Examples

#### Example 9.9: Force Resolution in Engineering

**Problem**: A 500-pound box sits on a ramp inclined at 20° to the horizontal. What force parallel to the ramp is needed to keep the box from sliding down? (Assume frictionless surface)

**Solution**:

The weight (500 lbs) acts straight down. We need to find the component parallel to the ramp.

The component parallel to the ramp:
$$F_{\parallel} = 500 \sin 20° = 500(0.342) = 171 \text{ pounds}$$

**Answer**: A force of **171 pounds** parallel to the ramp (up the ramp) is needed.

**Note**: The component perpendicular to the ramp is:
$$F_{\perp} = 500 \cos 20° = 500(0.940) = 470 \text{ pounds}$$

This is the normal force pressing against the ramp.

---

#### Example 9.10: Projectile Motion

**Problem**: A ball is thrown at 60 feet per second at an angle of 35° above horizontal. Find:
a) The horizontal component of velocity
b) The vertical component of velocity

**Solution**:

**a) Horizontal component** (adjacent to the angle):
$$v_x = 60 \cos 35° = 60(0.819) = 49.15 \text{ ft/s}$$

**b) Vertical component** (opposite the angle):
$$v_y = 60 \sin 35° = 60(0.574) = 34.43 \text{ ft/s}$$

**Answer**:
- Horizontal velocity: **49.15 ft/s**
- Vertical velocity: **34.43 ft/s**

**Note**: These components determine how far and how high the ball will travel.

---

#### Example 9.11: Simple Harmonic Motion - Pendulum

**Problem**: A pendulum swings with amplitude 10 cm and completes one swing in 2 seconds. Write an equation for its position as a function of time, assuming it starts at maximum displacement.

**Solution**:

**Amplitude**: A = 10 cm
**Period**: T = 2 seconds, so $B = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi$
**Starting at maximum**: Use cosine (cos 0 = 1)

**Equation**:
$$y = 10 \cos(\pi t)$$

where y is position in cm and t is time in seconds.

**Verification**:
- At t = 0: y = 10 cos(0) = 10 cm ✓ (maximum)
- At t = 1: y = 10 cos(π) = -10 cm ✓ (other extreme)
- At t = 2: y = 10 cos(2π) = 10 cm ✓ (back to start)

---

#### Example 9.12: Alternating Current

**Problem**: The voltage in an AC circuit is modeled by V = 120 sin(120πt), where V is in volts and t is in seconds. Find:
a) The maximum voltage
b) The period
c) The voltage at t = 1/240 seconds

**Solution**:

**a) Maximum voltage**: The amplitude A = **120 volts**

**b) Period**:
$$B = 120\pi$$
$$\text{Period} = \frac{2\pi}{B} = \frac{2\pi}{120\pi} = \frac{1}{60} \text{ seconds}$$

This makes sense for 60 Hz AC power!

**c) Voltage at t = 1/240**:
$$V = 120 \sin\left(120\pi \cdot \frac{1}{240}\right) = 120 \sin\left(\frac{\pi}{2}\right) = 120(1) = 120 \text{ volts}$$

**Answer**:
a) **120 volts**
b) **1/60 second** (frequency = 60 Hz)
c) **120 volts**

---

#### Example 9.13: Vector Analysis - Boat in Current

**Problem**: A boat heads due north at 15 mph in a river with a current flowing east at 5 mph. What is the boat's actual speed and direction?

**Solution**:

The boat's velocity is a vector sum:
- North component: 15 mph
- East component: 5 mph

**Actual speed** (magnitude):
$$v = \sqrt{15^2 + 5^2} = \sqrt{225 + 25} = \sqrt{250} \approx 15.81 \text{ mph}$$

**Direction** (bearing from north):
$$\tan \theta = \frac{5}{15} = \frac{1}{3}$$
$$\theta = \arctan(1/3) \approx 18.43°$$

**Answer**: The boat travels at approximately **15.81 mph** on a bearing of **N 18.4° E**.

---

### Practice Problems

**Problem 9.13**: A 300-pound barrel sits on a ramp inclined at 25°. What force parallel to the ramp is needed to keep it stationary?

**Problem 9.14**: A ball is kicked at 50 ft/s at an angle of 40° above horizontal. Find the horizontal and vertical components of velocity.

**Problem 9.15**: A spring oscillates with amplitude 8 cm and period 3 seconds. Write an equation for its position starting from equilibrium (y = 0) moving upward.

**Problem 9.16**: The height of water at a dock varies with the tides according to h = 10 + 3 sin(πt/6), where h is in feet and t is in hours after midnight. Find:
a) The maximum height
b) The minimum height
c) The period of the tide

**Problem 9.17**: A plane flies at 400 mph on heading 060° in a wind blowing from the west at 50 mph. What is the plane's actual speed and direction?

**Problem 9.18**: A radio tower is supported by cables attached at a point 100 feet up the tower. The cables make a 55° angle with the ground. How long are the cables?

---

## Section 9.4: Chapter Summary

### Key Application Areas

**Navigation**:
- Bearings (compass and true)
- Dead reckoning
- Course plotting
- Distance and position calculation

**Surveying**:
- Angles of elevation and depression
- Triangulation
- Indirect measurement
- Mapping and positioning

**Engineering**:
- Force resolution
- Load analysis
- Structural angles
- Design specifications

**Physics**:
- Projectile motion
- Harmonic oscillation
- Vector analysis
- Wave phenomena

### Common Problem Types

**Height problems**: Use angle of elevation and horizontal distance
**Distance problems**: Use bearings and vector components
**Force problems**: Resolve into components parallel and perpendicular
**Motion problems**: Break velocity/acceleration into components
**Wave problems**: Model with sine/cosine functions

### Problem-Solving Strategies

1. **Draw a diagram** - Essential for visualization
2. **Label everything** - Known values, unknowns, angles
3. **Identify triangles** - Right or oblique?
4. **Choose methods** - Right triangle trig, Law of Sines, Law of Cosines
5. **Set up equations** - Carefully, with correct signs
6. **Solve systematically** - One step at a time
7. **Check reasonableness** - Does the answer make sense?
8. **Include units** - Always specify units in final answer

### Converting Between Representations

**Bearings**:
- Compass ↔ True bearing
- Remember: N = 0°, E = 90°, S = 180°, W = 270°

**Angles**:
- Elevation/Depression ↔ Triangle angles
- Remember: They're alternate interior angles

**Vectors**:
- Magnitude and direction ↔ Components
- Use sine and cosine for conversion

### Why This Matters

Real-world applications demonstrate:

1. **Practical value** - These aren't just academic exercises
2. **Problem-solving skills** - Translating real scenarios into mathematical models
3. **Career relevance** - Used daily in many professions
4. **Interdisciplinary connections** - Links math to physics, engineering, geography
5. **Historical significance** - These methods have shaped human achievement

### Looking Ahead

In **Chapter 10**, we'll bring everything together with a focus on **tools and techniques**. You'll learn about calculator usage, accuracy and precision, error analysis, and how to synthesize all the concepts from this course. We'll also look at how trigonometry connects to other areas of mathematics and where to go next in your mathematical journey.

---

### Chapter Review Questions

**Short Answer**:

1. What is the difference between angle of elevation and angle of depression?
2. Explain what a bearing of N 40° W means.
3. Convert a true bearing of 135° to compass bearing notation.
4. In harmonic motion, what does the amplitude represent?
5. How do you find the horizontal and vertical components of a vector?

**Problem Solving**:

6. A ship sails 30 miles on bearing 050°. How far north and how far east has it traveled?

7. From a point 200 feet from a building, the angle of elevation to the top is 48°. How tall is the building?

8. A plane flies at 300 mph on heading 120° in a wind from the north at 40 mph. What is the plane's actual velocity (speed and direction)?

9. A 400-pound crate sits on a ramp inclined at 18°. What force parallel to the ramp keeps it from sliding?

10. From the top of a 150-meter cliff, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?

11. Two ships leave port. Ship A travels at 20 knots on bearing 060°, Ship B at 15 knots on bearing 160°. How far apart are they after 2 hours?

12. A pendulum has amplitude 15 cm and period 1.5 seconds. Write an equation for its motion starting at maximum displacement.

13. From two points 500 meters apart, the angles of elevation to a mountain peak are 32° and 46°. How high is the peak?

14. A ball is thrown at 80 ft/s at 30° above horizontal. Find its horizontal and vertical velocity components.

15. The height of tide is modeled by h = 8 + 2.5 cos(πt/6) feet, where t is hours after midnight. What is the high tide height and when does it occur?

---

**Chapter 9 Complete!** Move on to Chapter 10: Tools, Reference, and Integration
