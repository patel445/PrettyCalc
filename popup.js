var answers = document.getElementById('answers');

function erase() {
    var num = answers.value;
    var len = num.length - 1;
    var clearSpace = num.substring(0, len);
    answers.value = clearSpace;
}

function place(i) {
    answers.value = answers.value + i;
    if (i == 'Clear') {
        answers.value = '';
    }
}

function answer() {
    i = answers.value;
    i = eval(i);
    answers.value = i;
}
document.getElementById('<').addEventListener('click', erase, false);
document.getElementById('Clear').addEventListener('click', function () {
    place('Clear');
}, false);
document.getElementById('7').addEventListener('click', function () {
    place('7');
}, false);
document.getElementById('8').addEventListener('click', function () {
    place('8');
}, false);
document.getElementById('9').addEventListener('click', function () {
    place('9');
}, false);
document.getElementById('/').addEventListener('click', function () {
    place('/');
}, false);
document.getElementById('4').addEventListener('click', function () {
    place('4');
}, false);
document.getElementById('5').addEventListener('click', function () {
    place('5');
}, false);
document.getElementById('6').addEventListener('click', function () {
    place('6')
}, false);
document.getElementById('x').addEventListener('click', function () {
    place('*');
}, false);
document.getElementById('1').addEventListener('click', function () {
    place('1');
}, false);
document.getElementById('2').addEventListener('click', function () {
    place('2');
}, false);
document.getElementById('3').addEventListener('click', function () {
    place('3');
}, false);
document.getElementById('-').addEventListener('click', function () {
    place('-');
}, false);
document.getElementById('.').addEventListener('click', function () {
    place('.');
}, false);
document.getElementById('0').addEventListener('click', function () {
    place('0');
}, false);
document.getElementById('equal').addEventListener('click', answer, false);
document.getElementById('+').addEventListener('click', function () {
    place('+');
}, false);