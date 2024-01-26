// makeLine(size) function
// Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size);
        if (i < size - 1) {
            square += '\n';
        }
    }
    return square;
}
console.log(makeSquare(5));

function makeDownwardStairs(height) {
    let stairs = ''
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0,-1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let line = ''
    for (let i = 0; i < numSpaces; i++) { //ADD SPACES
        line += ' ';
    }
    for (let i = 0; i < numChars; i ++) { //ADD HASHES
        line += '#';
    }
    for (let i = 0; i <numSpaces; i ++) {
        line += ' ';
    }
    return line;
}
console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0,-1);
}

function makeDiamond(height) {
    let diamond = '';
    for (let i = 1; i <= height; i++) {
        diamond += makeSpaceLine(height - i, 2 * i - 1);
        if (i < height) {
            diamond += '\n';
        }
    }

// Create the bottom half of the diamond by reversing the top half
diamond += diamond.split('\n').slice(0, -1).reverse().join('\n');

return diamond;
}

console.log(makeDiamond(5));


//funtion reverse(s) {
    //return s.split('').reverse().join('');
// }
// let str = "launchcode";
// console.log(reverse(str));