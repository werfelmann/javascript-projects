// function countdown() {
//     for (let i = 5; i > 0; i--) {
//         console.log(i)
//     }
    
// }

setTimeout(function() {
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
}, 5000);

function printMessage() {
    console.log("The future is now!");
}
// setTimeout(countdown, 0);
// setTimeout(countdown, 1000);
// setTimeout(countdown, 2000);
// setTimeout(countdown, 3000);
// setTimeout(countdown, 4000);
setTimeout(printMessage, 5000);
