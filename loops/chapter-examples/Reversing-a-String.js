let str = "blue";
let reversed = ""; //accumulator variable, initialized as an empty string

for (let i = 0; i < str.length; i++) {
    reversed = reversed + str[i];
}

console.log(reversed);