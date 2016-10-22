var data = require('./data.json');
//
// // 1 ############################################
function printName(element) {
  console.log(element.name)
}

function gender(element){
  console.log(element.gender)
}

function myFunctionOne(array, callback) {
  for (i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

myFunctionOne(data, gender);

 // becca rewrite drill one #################################################################

// var data = require('./data.json');
//
// function printName(element) {
//   console.log(element.name);
// }
//
// function powerFunction (array, callbackF) {
//   for (i = 0; i < array.length; i++){
//     callbackF(array[i]);
//   }
// }
//
// powerFunction(data, printName)



// 2 #################################################################
// function printGender(element) {
//   console.log(element.gender)
// }
//
// // write a function  called myFunctionTwo that calls printName on every woman in the array data,
// // and calls printGender on ever man
//
// function myFunctionTwo(array, callback) {
//
//
// }
//
// myFunctionTwo(data, printGender)
//
// //3 ##############################################################
//
// function olderAge(element, callback) {
//   console.log(element.age * 2)
// }
//
// function youngerAge(element, callback) {
//   console.log(element.age / 2)
// }
//
//
// function processAge(array, callback){
//   for(i = 0; i<array.length; i++){
//     callback(array[i])
//   }
// }
//
// processAge(data, youngerAge)


//
// //4 ##################################### STILL WORKING ON

// function oneLastThing(array, callback) {
//
//   for (var i=0; i< array.length; i++) {
//
//     callback(array[i])
//   }
// }
//
// fn(element){
//   console.log(element.name);
// }
//
// oneLastThing(data, fn();)
//
// //This time i wrote a function that loops over an array and calls a callback function on
// // each element.
//
// //call my function, oneLastThing, on the data array, and pass in an ANONYMOUS function as
// //the callback that prints the name of the element all in lowercase
