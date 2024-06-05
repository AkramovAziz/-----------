let username = "aziz";
let userSurname = "azimovich";

 alert(`hello,${username}`);

console.log(name)

let x = document.getElementsByName("x")[0].value
let y = document.getElementsByName("y")[0].value



function calcplus() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value

    let s = Number(x) + Number(y);

    let result = document.getElementById("calcResult");
    result.innerHTML = `Резулътат = ${s}`

    // console.log(x)
    // console.log(y)
    // console.log(s)
    // console.log(result)
}

function calcminus() {


    let s = Number(x) - Number(y);

    let result = document.getElementById("calcResult");
    result.innerHTML = `Резулътат = ${s}`

    // console.log(x)
    // console.log(y)
    // console.log(s)
    // console.log(result)
}


function calcumnozhit() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value

    let s = Number(x) * Number(y);

    let result = document.getElementById("calcResult");
    result.innerHTML = `Резулътат = ${s}`

    // console.log(x)
    // console.log(y)
    // console.log(s)
    // console.log(result)
}

function calcdelenie() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value

    let s = Number(x) / Number(y);

    let result = document.getElementById("calcResult");
    result.innerHTML = `Резулътат = ${s}`

    // console.log(x)
    // console.log(y)
    // console.log(s)
    // console.log(result)
}
function calcstepen() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value

    let s = Number(x) * Number(x);

    let result = document.getElementById("calcResult");
    result.innerHTML = `Резулътат = ${s}`

    // console.log(x)
    // console.log(y)
    // console.log(s)
    // console.log(result)
}
function codeDetektor() {
    let country = document
    input.value = "вы не выбрали страну"
    if (country == "uz") {
        input.value = "+998"
    }

    else if (country == "ru") {
        input.value = "+7"
    }

    else if (country == "usa") {
        input.value = "+1"
    } else {

    }

}
function courseCalculator() {
    let courseName = document.getElementById("courseSelect").value
    const PYTHON_PRICE = 9000000
    const FRONTEND_PRICE = 11000000
    const DA_PRICE=14000000
    let basicPrice
    if(courseName == "none"){
        basicPrice=0
  } else if(courseName =="python") {
    basicPrice=PYTHON_PRICE
  } else if(courseName ="fronted") {
    basicPrice=FRONTEND_PRICE
  } else if(courseName ="da") {
    basicPrice=DA_PRICE
  }
    let discount = document.getElementsByName("discountRange")[0].value 
    let dizcountValue = document.getElementById("discountValue")
    dizcountValue.innerHTML = discount + "%"

    let sum = basicPrice / 100*(100-discount)

    let resultInput = document.getElementById("coursSum")
    resultInput.value = sum
}







