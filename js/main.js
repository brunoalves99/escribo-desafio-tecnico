let number = document.querySelector(".number");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let inputNumber = Number(number.value);
    let arrNumbers = [];
    let arrNumbersFinal = [];
    let finalResult = 0;

    for (let i = (inputNumber - 1); i > 0; i--) {
        arrNumbers.push(i);
    }

    for (let y = 0; y < arrNumbers.length; y++) {
        if (arrNumbers[y] % 3 == 0 || arrNumbers[y] % 5 == 0) {
            arrNumbersFinal.push(arrNumbers[y]);
        }
    }

    for (let z = 0; z < arrNumbersFinal.length; z++) {
        finalResult += arrNumbersFinal[z];
    }

    result.innerHTML = finalResult;
});