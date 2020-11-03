// Rocketseat: LaunchBase Bootcamp
// Challenge 01-04: Banking Operations

const user = {
    name: "Ricardo",
    transactions: [],
    balance: 0
};

// Add Transactions
function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === "credit") {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

// Reports
function getHigherTransactionByType(type) {
    let higherTransactionByType,
        higherValue = 0;

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransactionByType = transaction;
        }
    }

    return higherTransactionByType;
}

function getAverageTransactionValue() {
    let totalValue = 0;

    for (let transaction of user.transactions) {
        totalValue += transaction.value;
    }

    return totalValue / user.transactions.length;
}

function getTransactionCount() {
    let count = {
        credit: 0,
        debit: 0
    };

    for (let transaction of user.transactions) {
        if (transaction.type === "credit") {
            count.credit++;
        } else {
            count.debit++;
        }
    }

    return count;
}

createTransaction({type: "credit", value: 50});
createTransaction({type: "credit", value: 120});
createTransaction({type: "debit", value: 80});
createTransaction({type: "debit", value: 30});

console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionCount());
