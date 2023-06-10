const closeRunnerContainerBtn = document.querySelectorAll(".close-runner-container");
const runnerContainer = document.querySelectorAll(".runner-container");
const iframes = document.querySelectorAll("iframe");
const runNow = document.querySelectorAll(".run-now");
const loader = document.getElementById("loader");

runNow.forEach((element, index) => {
    element.onclick = ()=>{
        runnerContainer[index].classList.add("active")
    }
})

closeRunnerContainerBtn.forEach((closeBtn, index) => {
    closeBtn.onclick = ()=>{
        runnerContainer[index].classList.remove("active");
        iframes[index].src = iframes[index].src;
    }
});
window.onload = ()=>{
    setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.add("active");
    }, 500);
}

