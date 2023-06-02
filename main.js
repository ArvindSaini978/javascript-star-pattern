const closeRunnerContainerBtn = document.querySelectorAll(".close-runner-container");
const runnerContainer = document.querySelectorAll(".runner-container");
const runNow = document.querySelectorAll(".run-now");

runNow.forEach((element, index) => {
    element.onclick = ()=>{
        runnerContainer[index].classList.add("active")
    }
})

closeRunnerContainerBtn.forEach((closeBtn, index) => {
    closeBtn.onclick = ()=>{
        runnerContainer[index].classList.remove("active");
    }
});

