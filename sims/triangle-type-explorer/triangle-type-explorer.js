// Triangle Type Explorer MicroSim
// Interactive triangle visualization that classifies triangles by sides and angles
// Based on angle-explorer pattern for 2D geometry with draggable vertices

// Canvas dimensions
let canvasWidth = 667;
let drawWidth = canvasWidth;
let drawHeight = 450;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

// Triangle vertices - positions that can be dragged
let v1 = { x: 150, y: 350 };
let v2 = { x: 550, y: 350 };
let v3 = { x: 350, y: 100 };

// Dragging state
let draggingVertex = null;
let dragDistance = 20; // pixels from vertex center to start drag

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);
    textSize(defaultTextSize);
}

function draw() {
    // Draw background regions
    fill('aliceblue');
    stroke('silver');
    rect(0, 0, canvasWidth, drawHeight);

    fill('white');
    rect(0, drawHeight, canvasWidth, controlHeight);

    // Draw the triangle
    stroke('black');
    strokeWeight(2);
    fill('rgba(100, 150, 255, 0.3)');
    triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);

    // Draw vertices as draggable circles
    drawVertices();

    // Calculate triangle properties
    let sides = calculateSides();
    let angles = calculateAngles();

    // Classify triangle
    let sideType = classifyBySides(sides);
    let angleType = classifyByAngles(angles);
    let fullClassification = sideType + " " + angleType;

    // Display classification
    fill('black');
    textSize(28);
    textWeight = 'bold';
    text(fullClassification, 20, 40);

    // Display side lengths
    fill('black');
    textSize(14);
    text(`Sides: ${sides.a.toFixed(1)}, ${sides.b.toFixed(1)}, ${sides.c.toFixed(1)}`, 20, 65);

    // Display angles
    text(`Angles: ${angles.A.toFixed(1)}°, ${angles.B.toFixed(1)}°, ${angles.C.toFixed(1)}°`, 20, 85);

    // Display instructions
    textSize(12);
    fill('darkgray');
    text("Drag vertices to create different triangles", 20, drawHeight + 25);
    text("Try creating: Equilateral, Isosceles Right, Obtuse Scalene, etc.", 20, drawHeight + 45);
}

function drawVertices() {
    // Draw vertex circles
    fill('red');
    stroke('darkred');
    strokeWeight(2);

    // Vertex 1
    circle(v1.x, v1.y, 12);

    // Vertex 2
    circle(v2.x, v2.y, 12);

    // Vertex 3
    circle(v3.x, v3.y, 12);

    // Draw vertex labels
    fill('darkred');
    textSize(12);
    text('A', v1.x - 15, v1.y + 5);
    text('B', v2.x + 8, v2.y + 5);
    text('C', v3.x - 5, v3.y - 15);
}

function calculateSides() {
    // Calculate distances between vertices
    let a = dist(v2.x, v2.y, v3.x, v3.y); // Side opposite to vertex A (BC)
    let b = dist(v1.x, v1.y, v3.x, v3.y); // Side opposite to vertex B (AC)
    let c = dist(v1.x, v1.y, v2.x, v2.y); // Side opposite to vertex C (AB)

    return { a: a, b: b, c: c };
}

function calculateAngles() {
    // Use law of cosines to find angles
    let sides = calculateSides();
    let a = sides.a;
    let b = sides.b;
    let c = sides.c;

    // Avoid division by zero
    if (a < 1 || b < 1 || c < 1) {
        return { A: 0, B: 0, C: 0 };
    }

    // Law of cosines: cos(A) = (b² + c² - a²) / (2bc)
    let angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c));
    let angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c));
    let angleC = Math.acos((a * a + b * b - c * c) / (2 * a * b));

    // Convert to degrees
    return {
        A: degrees(angleA),
        B: degrees(angleB),
        C: degrees(angleC)
    };
}

function classifyBySides(sides) {
    let tolerance = 2; // pixels tolerance for equal sides

    // Sort sides to compare
    let sideArray = [sides.a, sides.b, sides.c].sort((x, y) => x - y);

    // Check if equilateral (all three sides approximately equal)
    if (Math.abs(sideArray[2] - sideArray[0]) < tolerance) {
        return "Equilateral";
    }

    // Check if isosceles (two sides approximately equal)
    if (Math.abs(sideArray[1] - sideArray[0]) < tolerance ||
        Math.abs(sideArray[2] - sideArray[1]) < tolerance) {
        return "Isosceles";
    }

    // Otherwise scalene
    return "Scalene";
}

function classifyByAngles(angles) {
    let rightAngleTolerance = 5; // degrees tolerance for right angle

    let angleArray = [angles.A, angles.B, angles.C];

    // Check for right angle (approximately 90°)
    for (let angle of angleArray) {
        if (Math.abs(angle - 90) < rightAngleTolerance) {
            return "Right";
        }
    }

    // Check if all angles are acute (less than 90°)
    if (angleArray.every(angle => angle < 90)) {
        return "Acute";
    }

    // Check if one angle is obtuse (greater than 90°)
    if (angleArray.some(angle => angle > 90)) {
        return "Obtuse";
    }

    return "";
}

function degrees(radians) {
    return radians * 180 / Math.PI;
}

function mousePressed() {
    // Check if clicking on a vertex
    if (dist(mouseX, mouseY, v1.x, v1.y) < dragDistance) {
        draggingVertex = 'v1';
        return false; // Prevent default behavior
    }
    if (dist(mouseX, mouseY, v2.x, v2.y) < dragDistance) {
        draggingVertex = 'v2';
        return false;
    }
    if (dist(mouseX, mouseY, v3.x, v3.y) < dragDistance) {
        draggingVertex = 'v3';
        return false;
    }
}

function mouseDragged() {
    // Keep vertices within canvas bounds
    let padding = 10;

    if (draggingVertex === 'v1') {
        v1.x = constrain(mouseX, padding, canvasWidth - padding);
        v1.y = constrain(mouseY, padding, drawHeight - padding);
        return false;
    }
    if (draggingVertex === 'v2') {
        v2.x = constrain(mouseX, padding, canvasWidth - padding);
        v2.y = constrain(mouseY, padding, drawHeight - padding);
        return false;
    }
    if (draggingVertex === 'v3') {
        v3.x = constrain(mouseX, padding, canvasWidth - padding);
        v3.y = constrain(mouseY, padding, drawHeight - padding);
        return false;
    }
}

function mouseReleased() {
    draggingVertex = null;
}
