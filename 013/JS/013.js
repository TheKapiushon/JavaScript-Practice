const count = document.querySelector("h2");

function addCounter() {
  const value = Number(count.textContent) + 1;
  getValueStatus(value);
  count.textContent = value;
}

function minusCounter() {
  const value = Number(count.textContent) - 1;
  getValueStatus(value);
  count.textContent = value;
}

function oddCounter() {
  const value = Number(count.textContent);
  if (value % 2 === 1) {
    addCounter();
  }
}

function getValueStatus(value) {
  if (value < 5) {
    count.className = "";
    count.classList.add("green");
  }

  if (value > 5 && value < 8) {
    count.className = "";
    count.classList.add("yellow");
  }

  if (value > 8) {
    count.className = "";
    count.classList.add("red");
  }
}
