document.addEventListener("DOMContentLoaded", () => {



const btn = document.querySelector(".btn")
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = 0;
const timeUp = false;

//creates random interval between min - max sec
const randomTime = (min, max) => {
    let time = Math.ceil(Math.random() * (max-min) + 1)
    console.log(time);
}

// randomTime(1,10)














});