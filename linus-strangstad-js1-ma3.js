// question 1
(a, b) => {
  return a - b;
};

// question 2
fetch("https://api.rawg.io/api/games?genres=sports")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    gameLoop(json);
  })
  .catch(function(error) {
    errorMessage(error);
  });

function gameLoop(json) {
  const games = json.results;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

function errorMessage() {
  const page = "/error.html";
  document.location.href = page;
}
// question 3
let str = "These cats are outrageous.";
let res = str.replace(/cats/g, "giraffes");

// question 4
const newUrl = new URL("https://my.site.com/?userId=");
const params = new URLSearchParams(newUrl.search);

let id;

id = params.get("userId");

if (params.get("userId")) {
  ifItIsAnId();
} else {
  document.location = "third.html";
}

function ifItIsAnId() {
  if (10 <= id) {
    document.location = "second.html";
  } else if (10 > id) {
    document.location = "first.html";
  }
}

// question 5
const myButton = document.querySelector(".btn");
const myContainer = document.querySelector(".container");
myContainer.removeChild(myButton);

// question 6
const parrotElem = document.createElement("li");
const ulElem = document.querySelector(".animals");
const elephantElem = document.querySelector(".elephants");

parrotElem.className = "parrots";
const parrotCnt = document.createTextNode("Parrots");
parrotElem.appendChild(parrotCnt);
ulElem.appendChild(parrotElem);
elephantElem.before(parrotElem);

// question 7
fetch("https://api.rawg.io/api/games/3801")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.querySelector(".rating").innerText = json.rating;
  })
  .catch(function(error) {
    console.dir(error);
  });
