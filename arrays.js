var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;


function addElementToBeginningOfArray(array, element) {
  var addElementToBeginningOfArray = [element, array]
  return ['element', ...addElementToBeginningOfArray]()
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray.unshift(element);
}