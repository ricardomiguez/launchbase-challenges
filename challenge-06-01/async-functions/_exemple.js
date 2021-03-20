/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

function printDouble(number){
    setTimeout(
        () => {
            console.log(number * 2);
        },
        Math.floor(Math.random() * 100) + 1
    )
}

function printAll(){
    printDouble(5);
    printDouble(10);
    printDouble(22);
    printDouble(1);
    printDouble(89);
}

printAll();
