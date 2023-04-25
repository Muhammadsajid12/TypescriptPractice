function adds(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number): void {
  // IF we console the functiom which is not return anything its return the undefined..
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(adds(5, 12));

// Here combinValue is the variable that will hold the fn which is look like here we specifing.....
let combineValues: (a: number, b: number) => number;

combineValues = adds; // Heere add function will assign to combineValues fn...👻👻
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

//------------------------------------------- CallBack ---------------------------------------------

function persentage(a: number, b: number, display: (a: number) => void) {
  const add = a + b; // Here question is if i want to make callback fn return type rather than void how is this possible

  display(add);
}

persentage(12, 23, (a) => {
  return console.log(a, ">>>>>>>>>>");
});

//------------------------------------------- UnknownType --------------------------------------------

let somthing: unknown;

(somthing = 12), (somthing = "sajid");

let userName: string;

if (typeof somthing === "string") {
  //Unknown is different from any datatype
  //beacause its not disable all typecheck as any do but we still and store any datatype value...
  userName = somthing;
}

//------------------------------------------- Never --------------------------------------------------
// function generateError(message: string, code: number): never {
//   throw { Message: message, errorCode: code };
//   // while(true){}
// } // Never is the other datatype in typescript which refere this function is return nothing....

// const rest = generateError("Bad request", 400);
// console.log(rest), ">>>>>><<<<<<<";
