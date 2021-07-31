var calcDigist = [{
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  }, {
    id: 0
  }
];

var calcSign = [{
    id: 0,
    symbol: "+",
    title: "add"
  },
  {
    id: 1,
    symbol: "-",
    title: "minus"
  }, {
    id: 2,
    symbol: "*",
    title: "multiple"
  }, {
    id: 0,
    symbol: "/",
    title: "divide"
  }
];

var calcTotal = "Click to Calculate";

function generateInput() {
  const input = document.querySelector(".calc--input");
  input.innerHTML = "";

  const inputField = document.createElement('input');
  inputField.setAttribute('type', 'name');
  inputField.setAttribute('placeholder', 'Calculator');
  inputField.setAttribute('id', 'calc--input');

  input.appendChild(inputField);
}

function generateNums() {
  const ul = document.querySelector('.calc--nums');
  ul.innerHTML = "";

  calcDigist.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add("calc--fig");
    li.setAttribute('id', item.id)
    const span = document.createElement('span')
    span.innerHTML = item.id;

    li.appendChild(span);
    ul.appendChild(li);
  })
}

function generateSigns() {
  const ul = document.querySelector(".calc--operators");
  ul.classList.add("calc--operators");

  calcSign.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("calcSign");
    li.setAttribute('id', 'calcSign-' + item.title);

    const span = document.createElement("span");
    span.innerHTML = item.symbol;

    li.appendChild(span);
    ul.appendChild(li);
  });
}

function generateTotalBtn() {
  const div = document.querySelector(".calcTotal");

  const button = document.createElement('button');
  button.classList.add('btn')
  button.innerHTML = calcTotal;

  div.appendChild(button);
};




window.addEventListener('load', generateInput);
window.addEventListener('load', generateNums);
window.addEventListener('load', generateSigns);
window.addEventListener('load', generateTotalBtn);
console.log(calcDigist);
console.log(calcSign);
console.log(calcTotal);