// Rocketseat: LaunchBase Bootcamp
// Challenge 01-02: Objects and Arrays

const programmer = {
    name: "Charles",
    age: 32,
    technologies: [
        { name: "C++", expertise: "Desktop" },
        { name: "Python", expertise: "Data Science" },
        { name: "JavaScript", expertise: "Web/Mobile" }
    ]
};

console.log(`The user ${programmer.name} is ${programmer.age} years old and is a ${programmer.technologies[0].name} developer for ${programmer.technologies[0].expertise} applications.`);
