// Write a JavaScript program to sort the items of an array.
// Sample array: var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]
// Sample Output: -4,-3,1,2,3,5,6,7,8

var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];

console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
    }
  }
}

console.log(arr1);