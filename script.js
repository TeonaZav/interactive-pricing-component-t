"use strict";
const switchPeriod = document.querySelector(".switch");
const numberOfViewers = document.querySelector(".numberOfViewers");
const price = document.querySelector(".price");
const slider = document.querySelector(".range-slider");
const pricePerMonth = [8, 12, 16, 24, 36];
const discount = 0.25;
const pricePerYear = pricePerMonth.map((el) => (el - el * discount) * 12);
const media = window.matchMedia("(min-width: 90em)");
if (media.matches) {
  document.querySelector(".discount").innerText = "25 % discount";
} else {
  document.querySelector(".discount").innerText = "-25%";
}
media.onchange = (e) => {
  if (e.matches) {
    document.querySelector(".discount").innerText = "25 % discount";
  } else {
    document.querySelector(".discount").innerText = "-25%";
  }
};
const priceRenderer = function () {
  if (document.querySelector("#switch").ariaChecked === "true") {
    const currentPrice = pricePerYear[slider.valueAsNumber];
    price.innerText = `$${currentPrice.toFixed(2)}`;
  } else {
    const currentPrice = pricePerMonth[slider.valueAsNumber];
    price.innerText = `$${currentPrice.toFixed(2)}`;
  }
};
const views = ["10k", "50k", "100k", "500k", "1m"];
slider.addEventListener("input", (e) => {
  numberOfViewers.innerText = views[e.target.valueAsNumber];
  const percentage = e.target.valueAsNumber * 25;
  e.target.style.background = `linear-gradient(to right, #A4F3EB, #A4F3EB  ${percentage}%, #ECF0FB ${percentage}%, #ECF0FB 100%)`;

  priceRenderer();
});

switchPeriod.addEventListener("change", () => {
  priceRenderer();
});
switchPeriod.onclick = function () {
  if (document.querySelector("#switch").ariaChecked === "true") {
    document.querySelector("#switch").ariaChecked = "false";
    switchPeriod.style.background = "#cfd8ef";
    price.innerText = `$${pricePerMonth[slider.valueAsNumber].toFixed(2)}`;
  } else {
    document.querySelector("#switch").ariaChecked = "true";
    switchPeriod.style.background = "#7aeadf";
    price.innerText = `$${pricePerYear[slider.valueAsNumber].toFixed(2)}`;
  }
};
