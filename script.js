window.onload = function() {
  newColor();
}

function settings(){
  
}
  let score = 0;
  



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clickButton(buttonNumber){ //função que retorna qual o botão que apertei,
  let txtcorrect = document.getElementById("correct");
  let botões = document.querySelectorAll(".btn"); //cria um vetor com todos os .btn

  if(buttonNumber == correctButton){
    newColor()
    score++
    let txtscore = document.getElementById("score");
    txtscore.innerHTML = score;
  }else {
    botões[buttonNumber].style.opacity = "0"; //Apaga o botão errado
}
}

function newColor(){
  
  correctButton = randomNumber(0, 5); //escolhe qual botão será o correto

  console.log(correctButton)
  //document.getElementById("newColor") //atribui newColor() ao li
  let botões = document.querySelectorAll(".btn"); //cria um vetor com todos os .btn

  for (let i = 0; i < botões.length; i++) {
    //botões[i].style.display = "inline";
    botões[i].style.opacity = "1";
    let R = randomNumber(0, 255);
    let G = randomNumber(0, 255);
    let B = randomNumber(0, 255);
    botões[i].style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")"; //atribui cor aos botões

    if(i === correctButton){  //quando o contador chega no botão correto a ser escolhido, muda o html para o rgb
    let rgbcode = document.getElementById("rgbcode");
        botões[i].style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
    rgbcode.innerHTML = `rgb(${R}, ${G},${B})`;
    }
  }
}
