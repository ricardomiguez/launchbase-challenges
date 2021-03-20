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

async function printAll() {
    let result;

    result = await printDouble(5, 0);
    result = await printDouble(10, result);
    result = await printDouble(22, result);
    result = await printDouble(1, result);
    result = await printDouble(89, result);
}

printAll();
