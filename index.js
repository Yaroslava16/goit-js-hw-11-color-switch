const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  body: document.querySelector("body"),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", onBtnStartClick);
refs.stopBtn.addEventListener("click", onBtnStopClick);

function changeBackground(color) {
  refs.body.style.backgroundColor = color;
}

let colorChangeId = 0;

function onBtnStartClick() {
  colorChangeId = setInterval((randomColor) => {
    randomColor = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomColor]);
  }, 1000);
  refs.stopBtn.removeAttribute("disabled");
  refs.startBtn.setAttribute("disabled", true);
}

function onBtnStopClick() {
  clearInterval(colorChangeId);
  refs.startBtn.removeAttribute("disabled");
  refs.stopBtn.setAttribute("disabled", true);
}
