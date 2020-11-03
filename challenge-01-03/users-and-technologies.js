// Rocketseat: LaunchBase Bootcamp
// Challenge 01-03: Users and Technologies

const users = [
    { name: "Ricardo", technologies: ["CSS", "HTML", "JavaScript"] },
    { name: "Rodrigo", technologies: ["C++", "MATLAB", "Python"] },
    { name: "Karla", technologies: ["Excel", "PowerPoint", "Word"] }
];

for (i = 0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].technologies.join(", ")}.`);
}
