// make a website that is a game that records how many times you can click an image within a minute and keeps a record of the times clicked. accepts teo players. in one round whoever clicks more times wins.
// use session storage to get their name and say that they won or lost or beat their record. also be able to make an input box appear and disappear

// plan:
// have a start button, when clicked, it counts how many times the image was clicked. and after one minute it ends and tells you if you win or lose and if you beat your highest record.

const clicker = document.getElementById("clicker");
const startBtn = document.getElementById("startBtn");

let counter = 0;

startBtn.addEventListener("click", () => {
    setTimeout(() => {
        console.log("works");
        let paragraph = document.createElement("p");
        paragraph.remove();
        paragraph.innerHTML = `You clicked ${counter} amount of times!`;
        let results = document.getElementsByClassName("results")[0];
        results.append(paragraph);
        counter = 0;
    }, 3000);
    clicker.addEventListener("click", () => {
        counter++;
        console.log("You clicked");
    });
});


