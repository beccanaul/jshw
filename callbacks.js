var data = require('./data.json');

// 1 ############################################
function printName(element) {
  console.log(element.name)
}

// write a function called myfunctionOne that calls printName on every element in the
// array data

function myFunctionOne(array, callback) {

  // YOUR WORK GOES HERE
}

myFunctionOne(data, printName);


// 2 #################################################################
function printGender(element) {
  console.log(element.gender)
}

// write a function  called myFunctionTwo that calls printName on every woman in the array data,
// and calls printGender on ever man

function myFunctionTwo(array, callback) {


}

myFunctionTwo(data, printGender)

//3 ##############################################################

function processAge(element, callback) {
  return callback(element.age)
}

// processAge is a function that takes an element and calls a callback function on the elements
// age. Write a function that uses processAge to multiply every person's age by 2.
// Then write a function that uses processAge to divide every person's age by 2.

//WRITE AND CALL YOUR FUNCTIONS HERE, NO HELP THIS TIME :)



//4 #####################################

function oneLastThing(array, callback) {

  for (var i=0; i< array.length; i++) {

    callback(array[i])
  }
}

//This time i wrote a function that loops over an array and calls a callback function on
// each element.

//call my function, oneLastThing, on the data array, and pass in an ANONYMOUS function as
//the callback that prints the name of the element all in lowercase
