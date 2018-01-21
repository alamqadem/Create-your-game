function message(choice, side) {
    function win() { return choice === side }
    return win()? "You win" : "You loose"
}

function randomSide() { return Math.floor(Math.random() * 2) }

function main(choice) {
    document.getElementById("result").innerHTML = message(choice, randomSide())
}

document.getElementById("head").onclick = function() { main(0) };
document.getElementById("tail").onclick = function() { main(1) }
