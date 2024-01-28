let nums = [3.14, 42, 4811];

let divideTwo = function (n) {
    return n*.5;
};
let halved = nums.map(divideTwo);

console.log(halved);
console.log(nums);
