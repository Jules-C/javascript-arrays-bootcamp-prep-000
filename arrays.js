var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;

var addElementToBeginningOfArray = ["array", "element"] 
function addElementToBeginningOfArray() {
  return ['element', ...addElementToBeginningOfArray]
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray.unshift("element");
}