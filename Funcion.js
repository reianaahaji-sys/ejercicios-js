// 3Textos Diferences
// 



let age = 10;
let withAdult = true;
let rating = '+12';
function canWatchMovie(age, withAdult, rating) {
    if (rating === "TP") {
 console.log('Puede entrar');

} else if (rating === '+12') {
    if (age >= 12 || (age >= 7 && withAdult === true)) {
        console.log('Puede entrar');
    } else {
        console.log('No puede entrar');
    }
} else if (rating === '+16') {
    if (age >= 16) {
        console.log('Puede entrar');
    } else {
        console.log('No puede entrar');
    }

} else if (rating === '+18') {
    if (age >= 18) {
        console.log('Puede entrar');
    } else {
        console.log('No puede entrar');
    }

} else if (rating !== '+12' && rating !=='TP' && rating !=='16' && rating !=='18')
    console.log('Clasificación desconocida');
}

