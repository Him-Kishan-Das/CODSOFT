function display(value) {
    var screen = document.getElementById('screen');
        screen.value += value;
}

function clr() {
    var screen = document.getElementById('screen');
    screen.value = '';
}

function deleteLast() {
    var screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function solve() {
    var screen = document.getElementById('screen');
    try {
        var expression = screen.value.replace(/x/g, '*').replace(/÷/g, '/');
        var result = eval(expression);
        screen.value = result;
    } catch (e) {
        screen.value = 'Error';
    }
}

document.getElementById('delete').addEventListener('click', deleteLast);
