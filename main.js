const replyOne = document.querySelector('.reply__1');
const replyTwo = document.querySelector('.reply__2');
const replyThree = document.querySelector('.reply__3');
const replyFour = document.querySelector('.reply__4');
const replyFive = document.querySelector('.reply__5');

const iconOne = document.querySelector('.arrow__1');
const iconTwo = document.querySelector('.arrow__2');
const iconThre = document.querySelector('.arrow__3');
const iconFour = document.querySelector('.arrow__4');
const iconFive = document.querySelector('.arrow__5');

const questionOne = document.querySelector('.question__1');
const questionTwo = document.querySelector('.question__2');
const questionThree = document.querySelector('.question__3');
const questionFour = document.querySelector('.question__4');
const questionFive = document.querySelector('.question__5');

iconOne.addEventListener('click', mostrarOne);
function mostrarOne() {
    replyOne.classList.toggle('mostrar');
    iconOne.classList.toggle('voltear')
    questionOne.classList.toggle('oscuro');
}

iconTwo.addEventListener('click', mostrarTwo);
function mostrarTwo() {
    replyTwo.classList.toggle('mostrar');
    iconTwo.classList.toggle('voltear');
    questionTwo.classList.toggle('oscuro');
}

iconThre.addEventListener('click', mostrarThree);
function mostrarThree() {
    replyThree.classList.toggle('mostrar');
    iconThre.classList.toggle('voltear');
    questionThree.classList.toggle('oscuro');
}

iconFour.addEventListener('click', mostrarFour);
function mostrarFour() {
    replyFour.classList.toggle('mostrar');
    iconFour.classList.toggle('voltear');
    questionFour.classList.toggle('oscuro');
}

iconFive.addEventListener('click', mostrarFive);
function mostrarFive() {
    replyFive.classList.toggle('mostrar');
    iconFive.classList.toggle('voltear');
    questionFive.classList.toggle('oscuro');
}