// make a website that is a game that records how many times you can click an image within a minute and keeps a record of the times clicked. accepts teo players. in one round whoever clicks more times wins.
// use session storage to get their name and say that they won or lost or beat their record. also be able to make an input box appear and disappear

// plan:
// have a start button, when clicked, it counts how many times the image was clicked. and after one minute it ends and tells you if you win or lose and if you beat your highest record.

const clicker = document.getElementById("clicker");
const startBtn = document.getElementById("startBtn");
let results = document.getElementsByTagName("footer")[0];

let counter = 0;

startBtn.addEventListener("click", () => {
    results.removeChild(results.lastChild);
    setTimeout(() => {
        let paragraph = document.createElement("p");
        if (counter === 1) {
            paragraph.innerHTML = `You clicked ${counter} time!`;
        }
        if (counter >= 100) {
            paragraph.innerHTML = `You clicked ${counter} times! You won!! `;
        } else {
            paragraph.innerHTML = `You clicked ${counter} times!`;
        }

        results.append(paragraph);
        counter = 0;
    }, 10000);
    clicker.addEventListener("click", () => {
        counter++;
    });
});


