
let a: number;
let b: boolean;
let c: string;
let d: any; //default 
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen  = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2};
let background = Color.Red;

let message; // any
message = 'abc';
// let endsWithC = message.endsWith('c');

let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');