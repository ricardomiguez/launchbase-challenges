// Rocketseat: LaunchBase Bootcamp
// Challenge 01-03: Search for Technology

const users = [
    { name: "Ricardo", technologies: ["CSS", "HTML", "JavaScript"] },
    { name: "Rodrigo", technologies: ["C++", "MATLAB", "Python"] },
    { name: "Karla", technologies: ["Excel", "PowerPoint", "Word"] }
];

function checkCSSUse(user) {
    for (let i = 0; i < user.technologies.length; i++) {
        if (user.technologies[i] == "CSS") {
            return true;
        }
    }

    return false;
}

for (let j = 0; j < users.length; j++) {
    const workWithCSS = checkCSSUse(users[j]);

    if (workWithCSS) {
        console.log(`The user ${users[j].name} works with CSS.`);
    }
}
