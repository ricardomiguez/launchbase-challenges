// Rocketseat: LaunchBase Bootcamp
// Challenge 01-01: Retirement Calculator

const name = "Anna";
const gender = "F";
const age = 48;
const yearsOfContribution = 23;

const retirementRule = age + yearsOfContribution;

if ((gender == "M" && yearsOfContribution >= 35 && retirementRule >= 95) || (gender == "F" && yearsOfContribution >= 30 && retirementRule >= 85)) {
    console.log(`${name}, you can retire.`);
} else {
    console.log(`${name}, you cannot retire.`);
}
