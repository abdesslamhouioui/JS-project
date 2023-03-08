// Diagonal program
const a = 9;
const diagonal = Math.sqrt(2 * Math.pow(a, 2));
console.log(diagonal)

// Triangle area program
const d = 5;
const b = 6;
const c = 7;
// Calculate the semiperimeter of the triangle
const s = (d + b + c) / 2;
// Calculate the area of the triangle using Heron's formula
const area = Math.sqrt(s * (s - d) * (s - b) * (s - c));
// Print the area of the triangle to the console
console.log(area);

// circumference and surface area of a circle w
const radius = 4;
const circumference = 2 * Math.PI * radius;
const surfaceArea = Math.PI * radius ** 2;
console.log(circumference)
console.log(surfaceArea)

// Assignment (Conditional Statements & Loops)
//a
const compare=(a,b)=>{if(a>=b)return a;else return b}

//b
const parity=(a)=>{if(a%2==0) return 'even';else return 'odd'}