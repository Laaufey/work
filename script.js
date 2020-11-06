"use strict";

window.addEventListener("load", start);
const btn = document.querySelector(".icon");
btn.addEventListener("click", navigation());

const pinkBtn = document.querySelector("#pink-btn");
pinkBtn.addEventListener("click", changeTheme);

const aboutBtn = document.querySelector(".aboutArr");
const about2Btn = document.querySelector(".aboutBack");
aboutBtn.addEventListener("click", toAbout);
about2Btn.addEventListener("click", toAbout);

const workBtn = document.querySelector(".arrowOne");
workBtn.addEventListener("click", toPortfolio);

const portfolioBtn = document.querySelector(".down");
portfolioBtn.addEventListener("click", work);

function start() {
  console.log("Hello Laufey, how are you today?");
  loadLogo();
  loadSvg();
}
async function loadLogo() {
  let res = await fetch(`assets/logo.svg`);
  let logo = await res.text();
  let myLogo = document.querySelector(".logo");
  myLogo.innerHTML = logo;
}
async function loadSvg() {
  let res = await fetch(`assets/SVG/prinss.svg`);
  let prins = await res.text();
  let prince = document.querySelector("#prince");
  prince.innerHTML = prins;
}

function navigation() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function changeTheme() {
  console.log("click");
  const logo = document.querySelector("#logo");
  const body = document.querySelector("body");
  const text = document.querySelector("#pink-btn");
  if (body.className === "black") {
    body.className = "pink";
    text.textContent = "change site to dark";
    logo.setAttribute("fill", "white");
  } else if (body.className === "pink") {
    body.className = "black";
    text.textContent = "change site to pink";
  }
}
function toAbout() {
  console.log("Aboutpage");
  const pageOne = document.querySelector("#page2");
  const pageTwo = document.querySelector("#aboutPage");

  if (pageOne.className === "page") {
    pageOne.className += " off";
    pageTwo.className = "page";
  } else {
    pageTwo.className += " off";
    pageOne.className = "page";
  }
}

function toPortfolio() {
  console.log("Workpage");
  const pageThree = document.querySelector("#page3");
  const pageFour = document.querySelector("#workPage");

  if (pageThree.className === "page") {
    pageThree.className += " off";
    pageFour.className = "page";
  } else {
    console.log("Nope");
    pageFour.className += " off";
    pageThree.className = "page";
  }
}

function work() {
  const workOne = document.querySelector("#workOne");
  const workTwo = document.querySelector("#workTwo");
  const workThree = document.querySelector("#workThree");
  const workFour = document.querySelector("#workFour");
  const workFive = document.querySelector("#workFive");

  if (workOne.className === "portfolio") {
    workOne.className = "portfolio off";
    workTwo.className = "portfolio";
  } else if (workTwo.className === "portfolio") {
    workTwo.className = "portfolio off";
    workThree.className = "portfolio";
  } else if (workThree.className === "portfolio") {
    workThree.className = "portfolio off";
    workFour.className = "portfolio";
  } else if (workFour.className === "portfolio") {
    workFour.className = "portfolio off";
    workFive.className = "portfolio";
  } else if (workFive.className === "portfolio") {
    workFive.className = "portfolio off";
    workOne.className = "portfolio";
  }
}
