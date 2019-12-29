var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arrUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '('];

document.getElementById('passwordLength').oninput = function () {
    //slider
    document.getElementById('password-length').innerHTML = this.value;
}

document.getElementById('generator').onclick = generatePass;

function generatePass(event) {
    event.preventDefault();

    var result = [];
    var password = [];

    if (document.getElementById('number').checked) {
        result = result.concat(arrNumber);
        password.push(getRandom(arrNumber))
    }
    if (document.getElementById('uppercase').checked) {
        result = result.concat(arrUpper);
        password.push(getRandom(arrUpper))
    }
    if (document.getElementById('lowercase').checked) {
        result = result.concat(arrLower);
        password.push(getRandom(arrLower))
    }
    if (document.getElementById('symbol').checked) {
        result = result.concat(arrSymbol);
        password.push(getRandom(arrSymbol))
    }

    var passLength = parseInt(document.getElementById('passwordLength').value);

    for (var i = password.length; i < passLength; i++) {
        password.push(getRandom(result))
    }
    document.getElementById('out').innerHTML = '<p>' + shuffle(password).join("") + '</p>';
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var randomIndex = Math.floor(Math.random() * arr.length);

        var valOne = arr[i];
        var valTwo = arr[randomIndex];

        arr[i] = valTwo;
        arr[randomIndex] = valOne;
    }
    return arr;
}