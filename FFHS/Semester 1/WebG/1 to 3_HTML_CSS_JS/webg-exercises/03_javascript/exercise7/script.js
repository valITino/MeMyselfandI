document.getElementById("add").addEventListener("click", function () {

    const zahleins = parseInt(document.getElementById("inputeins").value);
    const zahlzwei = parseInt(document.getElementById("inputzwei").value);

    const sum = zahleins + zahlzwei;

    const message = document.getElementById("message");
    message.textContent = "Deine Zahl: " + sum;

});

document.getElementById("sub").addEventListener("click", function () {

    const zahleins = document.getElementById("inputeins").value;
    const zahlzwei = document.getElementById("inputzwei").value;

    const sub = zahleins - zahlzwei;

    const message = document.getElementById("message");
    message.textContent = "Deine Zahl: " + sub;

});

document.getElementById("mul").addEventListener("click", function () {

    const zahleins = document.getElementById("inputeins").value;
    const zahlzwei = document.getElementById("inputzwei").value;

    const mul = zahleins * zahlzwei;

    const message = document.getElementById("message");
    message.textContent = "Deine Zahl: " + mul;

});

document.getElementById("div").addEventListener("click", function () {

    const zahleins = document.getElementById("inputeins").value;
    const zahlzwei = document.getElementById("inputzwei").value;

    const div = zahleins / zahlzwei;

    const message = document.getElementById("message");
    message.textContent = "Deine Zahl: " + div;

});