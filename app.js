let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

// Winning pattern
const winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8],
];

//reset game 
const resetGame = () => {
    trueO =true;
    enableBoxes();
    msgContainer.classList.add("hide");//hiding the winning msg 
};


// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Prevent overwriting a box if already filled
            console.log("box was clicked");

            if (turnO) { // Turn of player O
                box.innerText = "O";
                turnO = false; // Now next turn is for player X
            } else {
                box.innerText = "X";
                turnO = true;
            }

            box.disabled = true; // Disable the box after it's clicked

            checkWinner();
        }
    });
});


//for after winning disabled 
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

//for start new game  
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



// Showing winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Checking for winner
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner:", pos1);
                showWinner(pos1);
            }
        }
    }
};



newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
