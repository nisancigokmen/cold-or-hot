const inputNum = document.querySelector("#inputNum");
const checkBtn = document.querySelector(".checkBtn");
const luckyNum = document.querySelector(".luckyNumber");
const title = document.querySelector(".titleNum");
const infos = document.querySelector(".infos");
const numberBtwn = document.querySelector(".betweenNum");
const health = document.querySelector("#health");

const tag = document.querySelector(".health1");

const randomNum = Number(Math.floor(Math.random() * 20));


// after the click check button :) 
checkBtn.addEventListener("click", function() {


    //  health.innerHTML = `${tag.textContent += `<img src="./img/icons8-love-30.png" alt="healht" width="38px" class="health1">`}`


    if (inputNum.value === randomNum) {

        luckyNum.textContent = "Well Done !";

    } else if (inputNum.value < randomNum) {

        luckyNum.textContent = "COLD ";
        document.body.style.backgroundColor = "#24A1E9";
        title.style.color = "white"
        infos.style.color = "white";
        numberBtwn.style.color = "white"

    } else if (inputNum.value > randomNum) {


        luckyNum.textContent = "HOT";
        document.body.style.backgroundColor = "#F02020";
        title.style.color = "white"
        infos.style.color = "white";
        numberBtwn.style.color = "white";


    } else {

        luckyNum.textContent = "GAME OVER !";
        document.body.style.backgroundColor = "#60b347";
        title.style.color = "white"
        infos.style.color = "white";
        numberBtwn.style.color = "white";

        //empty value (start empty value ...)
        inputNum.value = ` `;
    }
});