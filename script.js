let marksHeight = 1.69
let marksWeight = 78

let johnHeight = 1.95
let johnWeight = 92

const markBmi = marksWeight / (marksHeight ** 2);
const johnBmi = johnWeight / (johnHeight ** 2);

console.log(markBmi, johnBmi);

const bmi = (markBmi>johnBmi);
console.log(bmi);
