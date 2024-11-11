let marksHeight = 1.69;
let marksWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

const markBmi = marksWeight / marksHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI is ${markBmi} and it's higher than John's `);
} else {
  console.log(`John's BMI is ${johnBmi} and it's higher than Marks's `);
}

// console.log(markBmi, johnBmi);

// const bmi = markBmi > johnBmi;
// console.log(bmi);
