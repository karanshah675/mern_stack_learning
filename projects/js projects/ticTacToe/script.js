let boxes = document.querySelectorAll(".box");
let boxtext = document.querySelectorAll(".boxtext");
let click = true;
let turn = "O";
let showTurn = document.querySelector(".turns");
let annoucment = document.querySelector(".winner");
// console.log(boxes);

// boxes.forEach((ele) => {
//   ele.forEach((box, i) => {
//     console.log(box + "" + i);
//   });
// });

const checkWin = () => {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winn = false;
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerHTML !== ""
    ) {
      winn = true;
    }
  });
  return winn;
};
const start = (e) => {
  showTurn.innerText = "O turns";
  boxes.forEach((ele, i) => {
    ele.addEventListener("click", () => {
      let boxtext = ele.firstElementChild;
      if (boxtext.innerText == "") {
        boxtext.innerText = turn;
        if (checkWin()) {
          alert(turn + " wins the match");
        } else if (i == 8) {
          alert("match is draw");
          e.innerText = "restart";
        }
        if (turn == "O") {
          turn = "X";
        } else {
          turn = "O";
        }
        showTurn.innerText = turn + " turns";
      }
    });
  });
};
