import {
  combineNames,
  findElement,
  printAll,
  printAllAndInverted,
  printFirst,
} from "./bigONotation/bigONotation";
import { bubbleSort } from "./bubbleSort/bubbleSort";

const testCases = () => {
  console.log("Find elements");
  findElement(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    5
  );

  console.log("Combine Names");
  combineNames(["Gabriela", "Daniel", "Maria", "Yasmim", "Felipe"]);

  console.log("Print all");
  printAll([1, 2, 3, 4, 5, 6]);

  console.log("Print all and inverted");
  printAllAndInverted([1, 2, 3, 4, 5, 6]);

  console.log("Print first");
  printFirst([1, 2, 3, 4, 5, 6]);

  console.log("Bubble sort");
  bubbleSort([0, 4, 8, 5, 6, 9, 7, 1, 3]);
};

testCases();
