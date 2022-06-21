/**

Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

function booleanToString(b: any) {
  //your code here
  return b + ""
}
 */
function booleanToString(b: boolean) {
  //your code here
  return b.toString()
}

console.log(typeof booleanToString(true))
