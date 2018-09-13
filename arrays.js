
var chocolatebars = [snickers,hundredgrand,kitkat,skittles];

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
