/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

function printDouble(number, total) {
    return new Promise(resolve => {
        setTimeout(
            () => {
                let result = number * 2 + total;

                console.log(result);

                resolve(result);
            },
            Math.floor(Math.random() * 100) + 1
        );
    });
}

printDouble(5, 0)
    .then((result) => printDouble(10, result))
    .then((result) => printDouble(22, result))
    .then((result) => printDouble(1, result))
    .then((result) => printDouble(89, result));
