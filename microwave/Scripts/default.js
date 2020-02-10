const timerText = document.getElementById("timer-text");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("stop");
const inputTime = document.getElementById("time");
const inputPower = document.getElementById("power");
const btnChicken = document.getElementById("frango");
const btnMeat = document.getElementById("carne");
const btnFish = document.getElementById("peixe");
const btnRice = document.getElementById("arroz");
const btnCancel = document.getElementById("cancel");

let timerDefault;
let count = 1;
let option = 0;
btnStart.addEventListener("click", function () {
  //Aquecimento rápido.
  timerDefault = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    
    //Aquecimento setando propriedades.
    if(inputPower.value >= 8 || inputTime.value >= 120) {
     inputPower.value = 8;
     if(inputTime.value >= 120) {
       inputTime.value = 120;
     }
      if (option <= 1){
        option++;
        count = inputTime.value;
      }
    }
    else {
      inputTime.value = 30;
      inputPower.value = 8;
      count = inputTime.value;
    }
    btnStart.innerText = "Cozinhando...";
    
    //Aquecimento Finalizado.
    if(count === 0) {
      clearInterval(timerDefault);
      btnStart.innerText = "Aquecida!!!";
    }
  }, 1000);
  
});

btnChicken.addEventListener("click", function () {
  timerDefault = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    inputTime.value = 45;
    inputPower.value = 6;
    if (option <= 1){
      option++;
      count = inputTime.value;
    }
  },1000);
});

btnMeat.addEventListener("click", function () {
  timerDefault = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    inputTime.value = 65;
    inputPower.value = 8;
    if (option <= 1){
      option++;
      count = inputTime.value;
    }
  },1000);
});

btnFish.addEventListener("click", function () {
  timerDefault = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    inputTime.value = 50;
    inputPower.value = 5;
    if (option <= 1){
      option++;
      count = inputTime.value;
    }
  },1000);
});

btnRice.addEventListener("click", function () {
  timerDefault = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    inputTime.value = 80;
    inputPower.value = 7;
    if (option <= 1){
      option++;
      count = inputTime.value;
    }
  },1000);
});

//Pausar aquecimento.
btnPause.addEventListener("click", function () {
  clearInterval(timerDefault);
  btnStart.innerText = "Parado!!!";
});

btnCancel.addEventListener("click", function () {
  clearInterval(timerDefault);
  timerText.textContent = "0";
  inputTime.value = 0;
  inputPower.value = 0;
  btnStart.innerText = "Cozinhar";
});