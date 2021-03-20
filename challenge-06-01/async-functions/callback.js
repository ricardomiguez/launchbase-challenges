/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

function printDouble(number, total, callback) {
    setTimeout(
        () => {
            let result = number * 2 + total;

            console.log(result);

            if (callback) callback(result);
        },
        Math.floor(Math.random() * 100) + 1
    );
}

function printAll() {
    printDouble(5, 0, (result) => {
        printDouble(10, result, (result) => {
            printDouble(22, result, (result) => {
                printDouble(1, result, (result) => {
                    printDouble(89, result);
                });
            });
        });
    });
}

printAll();
