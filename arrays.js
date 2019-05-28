var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;


function addElementToBeginningOfArray(array, element) {
  return [element, ...addElementToBeginningOfArray]()
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray.unshift(element);
}