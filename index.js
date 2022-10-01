//select the character and block
let character = document.getElementById("character");
let block = document.getElementById("block");
//allow the character to jump on click
function jump() {
    if(character.classList != "animation") {
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 500)
}
//set a collision

//make a counter
let counter = document.getElementById("counter")

let count = 0;

updateDisplay();

document.addEventListener("click", () => {
    count++;
    updateDisplay();
})

function updateDisplay(){
    counter.innerHTML = `Score: ${count}`;
}
//have a end message


