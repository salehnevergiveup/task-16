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
const body = document.querySelector("body");
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

// scroll effect start 

window.onscroll = () => {
    var content1 = document.querySelector(".scroll1");
    let content2 = document.querySelector(".scroll2");
    let content3 = document.querySelectorAll(".scroll3");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let contentPosition2 = content2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition1 < screenPosition) {
        content1.classList.add("activeshow");
    } else {
        content1.classList.remove("activeshow");
    }
    if (contentPosition2 < screenPosition) {
        content2.classList.add("activeshow");
    } else {
        content2.classList.remove("activeshow");
    }
    for (let i = 0; i < content3.length; i++) {
        let contentPosition3 = content3[i].getBoundingClientRect().top;
        if (contentPosition3 < screenPosition) {
            setInterval(() => { content3[i].classList.add("activeshow"); }
                , (i + "000"));
        }
        else {
            content3[i].classList.remove("activeshow");
        }
    }
};

// scroll effect end 