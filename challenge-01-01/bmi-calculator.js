// Rocketseat: LaunchBase Bootcamp
// Challenge 01-01: BMI Calculator

const name = "Charles";
const weight = 84;
const height = 1.88;

const bmi = weight / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you are overweight.`);
} else {
    console.log(`${name}, you are not overweight.`);
}
