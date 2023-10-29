// smooth scrolling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// mouse chapta effect when move the cursor
function customMouseChapta() {
    var xprev = 0;
    var yprev = 0;

    var timeout;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        var xDiff = Math.abs(dets.clientX - xprev);
        var yDiff = Math.abs(dets.clientY - yprev);

        var xscale = gsap.utils.clamp(0.7, 1.2, xDiff);
        var yscale = gsap.utils.clamp(0.7, 1.2, yDiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#custom-mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(0.9, 0.9)`;

        }, 100);
    });
}

// custom mouse follow
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#custom-mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

customMouseChapta();

// page 1 animation 
function firstPageAnimation() {
    var t1 = gsap.timeline();
    var t2 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        stagger: .2,
        ease: Expo.easeInOut
    })

    t2.to(".boundingelem", {
        y: 0,
        duration: 2,
        stagger: .2,
        ease: Expo.easeInOut,

    })

        .from("#herofooter , .blocktext h5", {
            y: -10,
            opacity: 0,
            duration: 2,
            stagger: .2,
            delay: -1.25,
            ease: Expo.easeInOut
        })
}
firstPageAnimation();


// page 2 images effect
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    // when mousemove on div
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - 200 - rotate;
        rotate = dets.clientX - 200;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            scrub: 5,
            top: diff - 150,
            left: dets.clientX - 200,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.6)
        });
    });


    // when mouseleave 
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            scrub: 5,
            ease: Power3,
        });
    });



});








// mouse scale when hover on .elem
const elem = document.querySelectorAll('.elem');
const customMouse = document.getElementById('custom-mouse');

elem.forEach(item => {
    item.addEventListener('mouseover', () => {
        customMouse.style.width = '85px';
        customMouse.style.height = '85px';
        customMouse.style.top = '-45px';
        customMouse.style.left = '-40px';
        customMouse.style.fontSize = '17px';
        customMouse.style.opacity = .8;
        customMouse.style.mixBlendMode='normal';

    });

    item.addEventListener('mouseout', () => {
        customMouse.style.width = '13px';
        customMouse.style.height = '13px';
        customMouse.style.top = '-6px';
        customMouse.style.left = '-6px';
        customMouse.style.fontSize = 0;
        customMouse.style.opacity = 1;
        customMouse.style.mixBlendMode='exclusion';

    });
});


// when mouse hover on normal texts 

const cursorBig = document.querySelectorAll('.custom-cursor-bigger');
const customMouse2 = document.getElementById('custom-mouse');

cursorBig.forEach(item => {
    item.addEventListener('mouseover', () => {
        customMouse.style.width = '25px';
        customMouse.style.height = '25px';
        customMouse.style.top = '-13px';
        customMouse.style.left = '-13px';
       

    });

    item.addEventListener('mouseout', () => {
        customMouse.style.width = '13px';
        customMouse.style.height = '13px';
        customMouse.style.top = '-6px';
        customMouse.style.left = '-px';

    });
});


// when mouse hover on down arrow in hero footer right 

const cursorHide = document.querySelectorAll('.circle');
const customMouse3 = document.getElementById('custom-mouse');

cursorHide.forEach(item => {
    item.addEventListener('mouseover', () => {
        customMouse.style.opacity =0;
    });

    item.addEventListener('mouseout', () => {
        customMouse.style.opacity =1;
    });
});

