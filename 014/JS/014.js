// get dom nodes
let boxes = document.querySelectorAll(".box");

const OPEN_CARDS = [];

let MOVE_COUNT = 0;

// functions
function showCard(e) {
  const card = e.target;
  card.classList.add("show");
  OPEN_CARDS.push(card);
  console.log(OPEN_CARDS);
  if (OPEN_CARDS.length === 2) {
    CompareCards();
    countMove();
  }
}

function CompareCards() {
  if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
    MatchedCards();
  } else {
    UnmatchedCards();
  }
}

function MatchedCards() {
  OPEN_CARDS[0].classList.add("matched");
  OPEN_CARDS[1].classList.add("matched");
  OPEN_CARDS.length = 0;
}

function UnmatchedCards() {
  OPEN_CARDS[0].classList.add("unmatched");
  OPEN_CARDS[1].classList.add("unmatched");
  disableCards();

  setTimeout(function () {
    OPEN_CARDS[0].classList.remove("show", "unmatched");
    OPEN_CARDS[1].classList.remove("show", "unmatched");
    OPEN_CARDS.length = 0;
    enableCards();
  }, 1000);
}

// events

function disableCards() {
  for (const box of boxes) {
    box.classList.add("disable");
  }
}

function enableCards() {
  for (const box of boxes) {
    box.classList.remove("disable");
  }
}

function startGame() {
  showAllCards();
  const shuffleCards = shuffle([...boxes]); //copy boxes array into a pure array with spread syntax
  const section = document.getElementById("root");
  section.innerHTML = "";
  for (const card of shuffleCards) {
    section.innerHTML += card.outerHTML;
  }
  boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.addEventListener("click", showCard);
  }

  setTimeout(hideAllCards, 5000);
}

function showAllCards() {
  for (const box of boxes) {
    box.classList.add("show");
  }
}

function hideAllCards() {
  for (const box of boxes) {
    box.classList.remove("show");
  }
}

function shuffle(list) {
  for (let index = 0; index < list.length; index++) {
    const random = Math.floor(Math.random() * list.length);
    const tmp = list[random];
    list[random] = list[index];
    list[index] = tmp;
  }
  return list;
}

function countMove() {
  MOVE_COUNT++;
  document.querySelector("#move").textContent = MOVE_COUNT;
}
