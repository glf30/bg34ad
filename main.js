let amandaCard = document.querySelector("#amandaCard");

let bobbyCard = document.querySelector("#bobbyCard");

let bobbyText = document.querySelector("#bobbyText");

amandaCard.addEventListener("mouseenter", () => {
  amandaCard.style.border = "8px green solid";
});

amandaCard.addEventListener("mouseleave", () => {
  amandaCard.style.border = "none";
});

bobbyCard.addEventListener("mouseenter", () => {
  bobbyCard.style.border = "8px blue solid";
  bobbyText.innerText = "LOL JK, silly amanda!! You cant be Bobby!!!";
});

bobbyCard.addEventListener("mouseleave", () => {
  bobbyCard.style.border = "none";
  bobbyText.innerText = "BOBBY";
});

let roll1 = document.querySelector("#roll1Button");
let answerImg = document.querySelector("#answerImg");
let answerText = document.querySelector("#answerText");
let rollNumber = document.querySelector("#rollNumber");

let rollCount = 0;
let input = document.createElement("input");

roll1.addEventListener("click", () => {
  if (rollCount < 50) {
    let myRoll = Math.ceil(Math.random() * 20);

    rollNumber.innerText = myRoll;

    if (myRoll === 20) {
      answerText.innerText = "yes :)";
      answerImg.src = "assets/bg3YES.png";
    } else {
      answerText.innerText = "no";
      answerImg.src = "assets/sadamanda.png";
    }

    rollCount++;
  } else {
    document.querySelector("h1").innerText = "DOES BOBBY LOVE ME?"
    document.querySelector("h5").appendChild(input);

    if (input.value === "imamazing") {
        myRoll = 20;
        rollNumber.innerText = myRoll;
        answerText.innerText = "yes :)";
        answerImg.src = "assets/bg3YESHEART.png";
    } else {
        myRoll = 1;
        rollNumber.innerText = myRoll;
        answerText.innerText = "no";
        answerImg.src = "assets/sadamanda.png";
    }
  }


    

});
