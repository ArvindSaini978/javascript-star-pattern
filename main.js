const closeRunnerContainerBtn = document.querySelectorAll(".close-runner-container");
const runnerContainer = document.querySelectorAll(".runner-container");
const iframes = document.querySelectorAll("iframe");
const runNow = document.querySelectorAll(".run-now");
const loader = document.getElementById("loader");
const toggleSidebar = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarLinksCont = document.getElementById("sidebarLinksCont");

toggleSidebar.addEventListener("click", ()=>{
    setTimeout(() => {
        sidebar.classList.toggle("activeSidebar");
    }, 150);
})
closeSidebar.addEventListener("click", ()=>{
    setTimeout(() => {
        sidebar.classList.remove("activeSidebar");
        setTimeout(() => {
            sidebarLinksCont.scrollTop = 0;
        }, 300);
    }, 150);
})
document.addEventListener("click", (e)=>{
    let targetId = e.target.id;
    if ((targetId !=="sidebar") && (targetId !=="burger") && (targetId !=="line") && (targetId !=="closeSidebar") && (targetId !=="sidebar") && (targetId !=="sidebarH2") && (targetId !=="sidebarTop") && (targetId !=="seperatorSide") && (targetId !=="SidebarLinksCont")) {
        sidebar.classList.remove("activeSidebar");
        setTimeout(() => {
            sidebarLinksCont.scrollTop = 0;
        }, 300);
    }
})

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
    if (window.scrollY>64) {
        document.getElementById("navbar").classList.add("active");
    }
    if (window.scrollY<64) {
        document.getElementById("navbar").classList.remove("active");
    }
}
document.onscroll = (e)=>{
    if (window.scrollY>64) {
        document.getElementById("navbar").classList.add("active");
    }
    if (window.scrollY<64) {
        document.getElementById("navbar").classList.remove("active");
    }
}

window.onresize = ()=>{
    if (window.innerWidth>1143) {
        sidebar.classList.remove("activeSidebar");
        setTimeout(() => {
            sidebarLinksCont.scrollTop = 0;
        }, 300);
    }
}

