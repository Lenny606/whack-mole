document.addEventListener("DOMContentLoaded", () => {



const btn = document.querySelector(".btn")
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = 0;
const timeUp = false;

//creates random interval between min - max sec
const randomTime = (min, max) => {
    let time = Math.ceil(Math.random() * (max-min) + 1)
    return time;
}

////////-------  creates random number and passes to array holes
const randomHole = (holes) => {
    let num = Math.floor(Math.random() * 6)
    let target = holes[num]
    return target
   
}

///------------ccs fot pop up efect on the mole + js setTimout
holes[0].classList = "hole active"

const timer = setTimeout(() => {

    holes[0].classList = "hole";

}, 2000 );


//peep function -------------------------




});