// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');
  var v1 = new Vector3([2.25, 2.25, 0]);

  // Draw a blue rectangle
  //ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);        // Fill a rectangle with the color
  drawVector(v1, "red");
}

function drawVector(v, color) {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(canvas.clientWidth / 2, canvas.clientHeight / 2);
  ctx.lineTo((canvas.clientWidth / 2) + (v.elements[0] * 20), (canvas.clientHeight / 2) - (v.elements[1] * 20)); // Change numbers to get canvas size???
  ctx.stroke();
}

function handleDrawEvent() {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  var v1 = new Vector3([document.getElementById('x1').value, document.getElementById('y1').value, 0]);
  drawVector(v1, "red");
  var v2 = new Vector3([document.getElementById('x2').value, document.getElementById('y2').value, 0]);
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  var v1 = new Vector3([document.getElementById('x1').value, document.getElementById('y1').value, 0]);
  drawVector(v1, "red");
  var v2 = new Vector3([document.getElementById('x2').value, document.getElementById('y2').value, 0]);
  drawVector(v2, "blue");
  if (document.getElementById('operation').value == "add") {
    drawVector(v1.add(v2), "green");
  } 
  if (document.getElementById('operation').value == "subtract") {
    drawVector(v1.sub(v2), "green");
  } 
  if (document.getElementById('operation').value == "multiply") {
    drawVector(v1.mul(document.getElementById('scalar').value), "green");
    drawVector(v2.mul(document.getElementById('scalar').value), "green");
  } 
  if (document.getElementById('operation').value == "divide") {
    drawVector(v1.div(document.getElementById('scalar').value), "green");
    drawVector(v2.div(document.getElementById('scalar').value), "green");
  }
  if (document.getElementById('operation').value == "angle") {
    console.log("Angle: " + angleBetween(v1, v2));
  }
  if (document.getElementById('operation').value == "area") {
    console.log("Area of the triangle: " + areaTriangle(v1, v2));
  }
  if (document.getElementById('operation').value == "magnitude") {
    console.log("Magnitude v1: " + v1.magnitude());
    console.log("Magnitude v2: " + v2.magnitude());
  }
  if (document.getElementById('operation').value == "normalize") {
    drawVector(v1.normalize(), "green");
    drawVector(v2.normalize(), "green");
  }
}

function angleBetween(v1, v2) {
  return Math.acos(Vector3.dot(v1, v2) / (v1.magnitude() * v2.magnitude())) * (180 / Math.PI);
}

function areaTriangle(v1, v2) {
  return Vector3.cross(v1, v2).magnitude() / 2;
}