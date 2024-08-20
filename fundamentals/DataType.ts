import { log } from "console";

var myName: string
myName = "ARM"


let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

var list: Array<number> = [1,2,3]


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

let fullName: string = `ARM`;
let age: number = 28;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

log(sentence)


