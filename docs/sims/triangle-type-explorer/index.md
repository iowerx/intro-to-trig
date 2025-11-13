# Triangle Type Explorer

![Triangle Type Explorer](./triangle-type-explorer.png){ width="400" }

[Run the Triangle Type Explorer](./main.html){ .md-button .md-button--primary }
[Edit this MicroSim](https://editor.p5js.org/){:target="_blank"}

## Overview

The Triangle Type Explorer is an interactive MicroSim that helps students understand triangle classification by exploring how vertices can be moved to create different types of triangles.

## Learning Objectives

After using this MicroSim, students will be able to:

- **Identify** the three types of triangles based on side lengths (Equilateral, Isosceles, Scalene)
- **Recognize** the three types of triangles based on angles (Acute, Right, Obtuse)
- **Understand** the relationship between side lengths and triangle classification
- **Explore** how changing vertex positions affects triangle properties
- **Apply** knowledge to classify triangles based on their characteristics

## Features

### Interactive Vertex Dragging

- **Three draggable vertices** (labeled A, B, and C) that you can move freely across the canvas
- **Real-time triangle drawing** using p5.js `triangle()` primitive
- **Visual feedback** with vertex circles that highlight which points can be moved

### Automatic Classification

The simulator automatically calculates and displays:

1. **Side Classification**
   - **Equilateral**: All three sides are approximately equal length
   - **Isosceles**: Exactly two sides are approximately equal length
   - **Scalene**: All three sides have different lengths

2. **Angle Classification**
   - **Acute**: All three angles are less than 90°
   - **Right**: One angle is approximately 90°
   - **Obtuse**: One angle is greater than 90°

3. **Combined Classification**: The simulator displays both classifications together (e.g., "Isosceles Right" or "Scalene Obtuse")

### Real-Time Measurements

The display shows:

- **Side lengths** calculated using the distance formula
- **Angle measures** calculated using the Law of Cosines
- **Triangle classification** updated as you drag vertices

## How to Use

1. **Start** with a simple triangle displayed on the canvas
2. **Drag** any of the three vertices (red circles marked A, B, C) to change the triangle shape
3. **Watch** the classification update in real-time as the triangle changes
4. **Experiment** by creating different triangle types:
   - Drag vertices to form equal distances for **Equilateral** triangles
   - Create two equal sides for **Isosceles** triangles
   - Form a right angle for **Right** triangles
   - Make all sides unequal for **Scalene** triangles
   - Create an angle greater than 90° for **Obtuse** triangles

## Classroom Activities

### Activity 1: Triangle Type Hunt

Students create specific triangle types in a given amount of time:
- How quickly can you create an Equilateral triangle?
- Can you create an Isosceles Right triangle?
- What's the widest Acute Scalene triangle you can make?

### Activity 2: Property Exploration

For each triangle type, students record:
- Approximate side lengths
- Approximate angle measures
- Which combinations of side and angle types are possible

### Activity 3: Constraint Challenge

Ask students to create triangles with constraints:
- A right triangle that is not isosceles
- An acute triangle that is isosceles
- A scalene obtuse triangle
- Why can't you create an obtuse equilateral triangle?

## Technical Details

### Mathematics Behind the Scenes

**Distance Formula** (for side lengths):
```
distance = √((x₂ - x₁)² + (y₂ - y₁)²)
```

**Law of Cosines** (for angles):
```
cos(A) = (b² + c² - a²) / (2bc)
where a, b, c are the side lengths opposite angles A, B, C
```

### Implementation Notes

- Vertices are constrained to the drawing area with 10-pixel padding
- A 2-pixel tolerance is used to determine if sides are "equal" (for classification)
- A 5-degree tolerance is used to determine if an angle is "right" (approximately 90°)
- The triangle is drawn with semi-transparent blue fill for clarity

## Standards Alignment

This MicroSim aligns with the following Common Core State Standards:

- **CCSS.MATH.CONTENT.7.G.A.2** - Draw triangles with given measurements and angles
- **CCSS.MATH.CONTENT.HSG.CO.B.8** - Understand congruence in terms of rigid motions
- **CCSS.MATH.CONTENT.HSG.SRT.A.1** - Understand similarity in terms of similarity transformations

## Tips for Educators

1. **Warm-up**: Have students predict what will happen when they drag vertices before using the simulator
2. **Vocabulary**: Use the automatic labels to reinforce correct terminology
3. **Challenge**: Ask students what triangle classifications are impossible (e.g., Equilateral Right)
4. **Extension**: Ask why the Law of Cosines gives us the angles
5. **Discussion**: Which triangle type is most common in real-world structures?

## Further Exploration

Students interested in extending this activity might:

- **Calculate perimeter and area** for triangles they create
- **Explore the Triangle Inequality Theorem** - what happens when you push vertices too close together?
- **Investigate special triangles** - 30-60-90 and 45-45-90 triangles
- **Connect to trigonometry** - how do the sine, cosine, and tangent functions relate to the angles and sides?
