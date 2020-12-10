/* 
* This class creates an arraylist that will receive input from class
* Now also pushes arraylist back and pops number off of stack
*
* @author  Douglass Jeffrey
* @version 2.0
* @since   2020-12-09
*/

class MrCoxallStack {
  constructor() {
    this.stackAsArray = [];
  }

  // This method adds user input to stack
  pushNumber(userInt) {
    this.stackAsArray.push(userInt);
  }

  // This method pops the item on top of the stack and returns it
  popper() {
    if (this.stackAsArray.length <= 0) {
      throw "Invalid input more numbers popped than in stack";
    }
    let poppedNum = this.stackAsArray[this.stackAsArray.length - 1];
    this.stackAsArray.length = this.stackAsArray.length - 1;
    return poppedNum;
  }

  // This getter tells the user the most recent iteration of the array
  currentStack() {
    let arrayVal = "Current ArrayList: ";
    for (let counter = 0; counter <= this.stackAsArray.length - 1;
         counter++) {
      arrayVal = arrayVal + this.stackAsArray[counter] + ", ";
    }
    return arrayVal;
  }
}

// Exporting the class
module.exports = MrCoxallStack;