document.addEventListener("DOMContentLoaded", () => {



const btn = document.querySelector(".btn")
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
let score = 0;
const timeUp = false;

//creates random interval between min - max sec
const randomTime = (min, max) => {
    let time = Math.ceil(Math.random() * (max-min) + 1)
    return time*1000;
}

////////-------  creates random number and passes to array holes
const randomHole = (holes) => {
    let num = Math.floor(Math.random() * 6)
    let target = holes[num]
    return target
   
}

//peep function -------------------------

const peep = (min, max, hole) => {
    let interval = randomTime(min, max)
    let target = randomHole(hole)
    target.classList = "hole active"
    setTimeout(() => {

        target.classList = "hole";
    
    }, interval );
    return target
}

peep(1,2,holes)
//-------------whack / hide function sets the score

const whack = () => {

    let newScore = score++;
    const scoreTarget = document.querySelector(".score")
    scoreTarget.innerHTML = "SCORE: "  + newScore
}

// const hide = (e) => {

//     e.target.classList = "hole"
    
    
// }



whack()
// hide()


});