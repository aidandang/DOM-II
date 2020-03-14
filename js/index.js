// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
  navLink.addEventListener("mouseover", (event) => {
    event.target.style.color = "#17A2B8"
  });
  navLink.addEventListener("mouseout", (event) => {
    event.target.style.color = ""
  });
  navLink.addEventListener("click", (event) => {
    event.target.style.color = "red";
    event.preventDefault();
    event.stopPropagation();
  })
})

const wheelImgs = document.querySelectorAll('img');
wheelImgs.forEach(wheelImg => {
  wheelImg.addEventListener("wheel", (event) => {
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "all 0.5s";
    setTimeout(function() {
      event.target.style.transform = "scale(1)";
    }, 500);
  })
})

const dblclickImgs = document.querySelectorAll('img');
dblclickImgs.forEach(dblclickImg => {
  dblclickImg.addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "all 1s";
    setTimeout(function() {
      event.target.style.transform = "scale(1)";
    }, 1000);
  })
})

const headlineText = document.querySelector('h2');
document.addEventListener('keydown', logKey);

function logKey(e) {
  headlineText.textContent += `!`;
}

// add text input
const node = document.createElement("input");

const inputText = document.querySelector('.nav-container').appendChild(node);
inputText.setAttribute("type", "text");
inputText.setAttribute("id", "funtext");

funtext.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "#17A2B8"
});

funtext.addEventListener("blur", (event) => {
  event.target.style.backgroundColor = ""
});

funtext.addEventListener("change", (event) => {
  let strUpper = event.target.value.toUpperCase();
  event.target.value = strUpper;
});

// get nest 
let bodyClick = document.querySelector('body');
bodyClick.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "blue";
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 1000)
});

