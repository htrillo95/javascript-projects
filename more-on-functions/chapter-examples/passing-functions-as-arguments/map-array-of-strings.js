let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let pullFirstInital = function(name) { // pulls name from array & uses charAt(0) to get first initial
    return name.charAt(0);
};
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(pullFirstInital); //map method used applies the firstInitial function to each element in array, creates new array firstInitials containing the first initials of each name

console.log(firstInitials); //outputs results
