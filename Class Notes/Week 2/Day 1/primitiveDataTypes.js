//////////////////////////// Primitive Data //////////////////////////
// Primitive data types in JavaScript include:
///////////// Numbers - Integers, floats
///////////// Strings - Any data under single quote, double quote or backtick quote
///////////// Booleans - true or false value
///////////// Null - empty value or no value
///////////// Undefined - a declared variable without a value
///////////// Symbol - A unique value that can be generated by Symbol constructor

// Non-primitive data types in JavaScript includes:
///////////// Objects
///////////// Arrays
///////////// Functions

//Non-primitive data types  
//Primitive Data Types are immutable (non-modifyable) You can't change them
let word="JavaScript"
word[0]="y"

let numOne=3;
let numTwo="3"
console.log(numOne== numTwo)

let js="javascript"
let python="pyton"
console.log(js== python)

//Non-Primitive Data Types are mutable (you can change them)

let number=[1,2,3]
number[0]=11
console.log(number)


let car1={
    color: "Blue"
}

let car2={
    color: "Blue"
}
console.log(car1==car2)