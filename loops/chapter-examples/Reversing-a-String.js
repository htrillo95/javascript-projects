let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    //reversed = reversed + str[i]; // prints "blue" regularly
}

console.log(reversed);

