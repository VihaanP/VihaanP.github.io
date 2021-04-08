let myImage = document.querySelector("img");
myImage.onclick = function () {
  mySrc = myImage.getAttribute("src");
  if (mySrc === "Re-zero.jpg") {
    myImage.setAttribute("src", "Gang.jpg");
  } else {
    myImage.setAttribute("src", "Re-zero.jpg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
  let myName = prompt("Please enter your name");
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Re Zero arc 5 is a masterpiece," + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Re Zero arc 5 is a masterpiece," + storedName;
}
myButton.onclick = function () {
  setUsername();
};
