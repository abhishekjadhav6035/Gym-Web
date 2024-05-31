function home() {
    document.getElementById("homes").style.color = "rgb(20, 251, 20)";
    document.getElementById("plans").style.color = "white";
    document.getElementById("bmi").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";

}

function program() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("bmi").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "rgb(20, 251, 20)";

}
function plan() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "rgb(20, 251, 20)";
    document.getElementById("bmi").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";

}

function bmi() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("bmi").style.color = "rgb(20, 251, 20)";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";
}
function blog() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("bmi").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "rgb(20, 251, 20)";
    document.getElementById("programs").style.color = "white";

}
function contact() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("bmi").style.color = "white";
    document.getElementById("contacts").style.color = "rgb(20, 251, 20)";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";

}
//Bmi

var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } else if (35 <= bmi) {
        result = "Extremely obese";
    }
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.querySelector(".result").appendChild(h1);
    document.querySelector(".result").appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);

// submit

function submit() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if (name.value == "") {
        alert("Please Enter Name")
    } else if (number.value == "") {
        alert("Please Enter Number")
    } else {
        alert("Thanks For Join : " + name.value)
    }
}