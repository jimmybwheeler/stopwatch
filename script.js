const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".timer");

function startCounter(){
    let sec = 00;
    let min = 00;
    let hour = 00;
    sec++;
    time.textContent = sec;
}

function stopCounter(){
    console.log("stop");
}

function resetCounter(){
    console.log("reset");
}

// event listeners
startBtn.addEventListener("click", () => {
    setInterval(startCounter, 1000);
});
stopBtn.addEventListener("click", stopCounter);
resetBtn.addEventListener("click", resetCounter);