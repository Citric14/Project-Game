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
character = { x: 5, y: 5, width: 50, height: 120}
block = { x: 5, y: 5, width: 25, height: 25}

let checkIfLost = setInterval(function(){
    if( character.x < block.x + block.width &&
        character.x + character.width > block.xx &&
        character.y < block.y + block.height &&
        character.y + character.height > block.y) {
            alert("Gon didn't jump")
        }
    
},10)
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


