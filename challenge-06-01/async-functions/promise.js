/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

function printDouble(number) {
    return new Promise(resolve => {
        setTimeout(
            () => {
                console.log(number * 2);

                resolve();
            },
            Math.floor(Math.random() * 100) + 1
        );
    });
}

printDouble(5)
    .then(() => printDouble(10))
    .then(() => printDouble(22))
    .then(() => printDouble(1))
    .then(() => printDouble(89));
