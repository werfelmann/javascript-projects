function makeLine(size) {
    let char = "";
    for (let i = 0; i < size; i++) {
        char += "#";
    }
    return char;
}

// console.log(makeLine(5));

function makeSquare(size) {
    let square = makeRectangle(size, size);
    return square;
}

// console.log(makeSquare(4));

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
            rectangle += makeLine(width) + "\n";
        } 
    return rectangle.slice(0, -1);
}

// console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i <= height; i++) {
        stairs += makeLine(i) + '\n';
    }
    return stairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, charType = "#") {
    let spaceLine = '';
    let charLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    for (let i = 0; i < numChars; i++) {
        charLine += charType;
    }
    return spaceLine + charLine + spaceLine;
}

// console.log(makeSpaceLine(3, 5, "&"));

function makeIsoscelesTriangle(height, charType = "#") {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1, charType) + '\n';
    }
    return triangle.slice(0, -1)
}

// console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

// console.log(reverse("abcde"));

function makeDiamond(height, charType = "#") {
    let diamondUpperHalf = makeIsoscelesTriangle(height, charType);
    let diamondLowerHalf = reverse(diamondUpperHalf)
    return diamondUpperHalf + '\n' + diamondLowerHalf;
}

console.log(makeDiamond(10, "+"));