const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".timer");

function startCounter(){
    console.log("start");
}

function stopCounter(){
    console.log("stop");
}

function resetCounter(){
    console.log("reset");
}

// event listeners
startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stopCounter);
resetBtn.addEventListener("click", resetCounter);