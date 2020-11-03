// Rocketseat: LaunchBase Bootcamp
// Challenge 01-03: Sum of Revenues and Expenses

const users = [
    {
        name: "Ricardo",
        revenues: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Rodrigo",
        revenues: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Karla",
        revenues: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function calculateBalance(revenues, expenses) {
    const totalRevenues = sumNumbers(revenues),
        totalExpenses = sumNumbers(expenses);

    return totalRevenues - totalExpenses;
}

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

for (let j = 0; j < users.length; j++) {
    const balance = calculateBalance(users[j].revenues, users[j].expenses);

    if (balance > 0) {
        console.log(`${users[j].name} has a POSITIVE balance of ${balance.toFixed(2)}.`);
    } else {
        console.log(`${users[j].name} has a NEGATIVE balance of ${balance.toFixed(2)}.`);
    }
}
