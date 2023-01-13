//Знаходження класу first, для подальшої її заміни
let bg = document.querySelector(".first");

//Transition from the first picture to the second
function first_transition() {
    bg.classList.replace("first", "second")
}

//Transition from the second picture to the third
function second_transition() {
    bg.classList.replace("second", "third")
}

//Transition from the third picture to the fourth
function third_transition() {
    bg.classList.replace("third", "fourth")
}

//Transition from the fourth picture to the fifth
function fourth_transition() {
    bg.classList.replace("fourth", "fifth")
}

//Transition from the fifth picture to the first
function fifth_transition() {
    bg.classList.replace("fifth", "first")
}

//Паузи між переходами
setInterval(first_transition, 5000);
setInterval(second_transition, 10000);
setInterval(third_transition, 15000);
setInterval(fourth_transition, 20000);
setInterval(fifth_transition, 25000);