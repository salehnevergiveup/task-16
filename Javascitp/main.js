// navbar start
var iconsNav = document.querySelector(".bar");
const menu = document.querySelector(".menu");
const learnMore = document.querySelector(".mainpart");
iconsNav.onclick = () => {
    menu.classList.toggle("menushow");
    menu.classList.toggle("menuhidde");
    learnMore.classList.toggle("hidetext");
    learnMore.classList.toggle("showtext");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}
const active = document.querySelectorAll(".menu li a");
active[0].onclick = () => {
    active[0].classList.toggle("active");
    for (var i = 0; i < active.length; i++) {
        if (i === 0) {
            continue;
        }
        active[i].classList.remove("active");
    }
}
active[1].onclick = () => {
    active[1].classList.toggle("active");
    for (var i = 0; i < active.length; i++) {
        if (i === 1) {
            continue;
        }
        active[i].classList.remove("active");
    }
}
active[2].onclick = () => {
    active[2].classList.toggle("active");
    for (var i = 0; i < active.length; i++) {
        if (i === 2) {
            continue;
        }
        active[i].classList.remove("active");
    }
}
active[3].onclick = () => {
    active[3].classList.toggle("active");
    for (var i = 0; i < active.length; i++) {
        if (i === 3) {
            continue;
        }
        active[i].classList.remove("active");
    }
}
active[4].onclick = () => {
    active[4].classList.toggle("active");
    for (var i = 0; i < active.length; i++) {
        if (i === 4) {
            continue;
        }
        active[i].classList.remove("active");
    }
}
// navbar end