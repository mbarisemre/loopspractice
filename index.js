const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for ( let i=0 ; i<=3 ; i++)
numsZeroToThree.push(i)
console.log(numsZeroToThree);

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let i=5 ; i<=10 ; i++ )
numsFiveToTen.push(i)
console.log(numsFiveToTen);

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

for (let i=0 ; i<=6 ; i=i+2)
evenNums.push(i)
console.log(evenNums);

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for( i=3 ; i>=0 ; i--)

countdown.push(i)
console.log(countdown);

//* 2nd practice

const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10] 
let sum = 0   
const doubledNums = []
const letters = ['H', 'e', 'l', 'l', 'o'] 
let word = ''
const everySecondNum = []

// 1. Use a for loop to set the sum variable to the sum of all the values in nums

 
for( let i=0 ; i< nums.length ; i++)
     sum += nums[i]
   console.log(sum);

// 2. Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])

for ( let i =0 ; i<nums.length ; i++)
doubledNums.push(nums[i]*2)
console.log(doubledNums);

// 3. Use a for loop to set word equal to all the letters in the letters array

for ( let i = 0 ; i< letters.length ; i++)

word += letters [i]
console.log(word);


// 4. Use a for loop to populate everySecondNum with every second number from the nums array

for ( let i=0 ; i<nums.length ; i+=2)
everySecondNum.push(nums[i])
console.log(everySecondNum);


// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []

for ( let i = nums.length-1  ; i>=0 ; i--)
numsReversed.push(nums[i])
console.log(numsReversed);
