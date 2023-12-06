const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");

let resultText = "";

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if (btns[i].innerHTML == "=") {
            if (resultText.slice(-1) == "*" ||
                resultText.slice(-1) == "+" ||
                resultText.slice(-1) == "-" ||
                resultText.slice(-1) == "/") {
                resultText = resultText.slice(0, -1);
            }

            let doubleResult = 0;

            doubleResult = eval(resultText);
            console.log(doubleResult);

            resultText = doubleResult.toString();
            setResult();

        }
        else if (btns[i].innerHTML == "*" ||
            btns[i].innerHTML == "+" ||
            btns[i].innerHTML == "-" ||
            btns[i].innerHTML == "/") {
            if (resultText.slice(-1) != "*" &&
                resultText.slice(-1) != "+" &&
                resultText.slice(-1) != "-" &&
                resultText.slice(-1) != "/" &&
                resultText.slice(0) != "") {
                resultText += btns[i].innerHTML;
                setResult();
            } else {
                resultText = resultText;
                setResult();
            }
        }
        else if (btns[i].innerHTML.endsWith("i>")) {
            resultText = resultText.slice(0, -1);
            setResult();
        } else {
            resultText += btns[i].innerHTML;
            setResult();
        }
    })
}

function setResult() {
    result.innerHTML = resultText;
}