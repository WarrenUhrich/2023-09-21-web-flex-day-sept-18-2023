// Write a function that adds the two highest numbers in an array

// PROBLEM SOLVING:
// 1. INPUTS -> array of numbers
// 2. OUTPUTS -> sum (of the two highest numbers)
// 3. PROCESSING (BREAKING DOWN ALL THE STEPS)
    // * Find the two highest numbers
    // * Add the two numbers together


/**
 * Sums two highest numbers in an array
 * @param {Array<Number>} arrayOfNums Array of numbers.
 * @return {Number} Sum of the two highest numbers in the array.
 */
function sumTwoHighestNumsInArray(arrayOfNums) {
    let sum;

    let highest1 = arrayOfNums[0];
    let highest2 = arrayOfNums[1];

    // PROCESSING!
    // LOOP through nums, identify highest 2
    for(const num of arrayOfNums) {
        if(highest1 < num) {
            highest2 = highest1;
            highest1 = num;
        }
    }

    // console.log('highest 1 and 2:', highest1, highest2);

    // Add the two highest numbers together:
    sum = highest1 + highest2;

    return sum;
}

const exampleArr = [1, 2, 3, 4, 5];
const result = sumTwoHighestNumsInArray(exampleArr);
console.log('result:', result); // 9

const exampleArr2 = [5, 4, 3, 2, 1];
const result2 = sumTwoHighestNumsInArray(exampleArr2);
console.log('result2:', result2); // 9
