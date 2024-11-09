function calculatebmi () {
    let weight = document.getElementById("inputweight").value;
    let height = document.getElementById("inputheight").value;
    let bmi = weight/((height/100)^2);

    const message = document.getElementById("message");
    message.textContent = "Dein BMI ist " + bmi;

}
document.getElementById("submitbutton").addEventListener("click", calculatebmi);