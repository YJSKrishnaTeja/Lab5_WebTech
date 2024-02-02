const scroll = new LocomotiveScroll({
    el: document.querySelector('.home'),
    smooth: true
});

var tl = gsap.timeline();

tl.from(".pp",{
    x:-100,
    duration:0.5,
    opacity:0,

})

tl.from("#id",{
    x:-100,
    duration:0.5,
    opacity:0,

})

tl.from(".contact",{
    x:+100,
    duration:0.5,
    opacity:0,

})

tl.from(".main",{
    z: -100,
    opacity:0,
    duration:0.5,
})

tl.from("#scl10th", {
    x: -100,
    duration: 0.5,
    opacity: 0,
})

tl.from("#cgpa", {
    x: -100,
    duration: 0.5,
    opacity: 0,
})
tl.from("#inter_percent", {
    x: -100,
    duration: 0.5,
    opacity: 0,
})

tl.from("hr",{
    x:+1200,
    duration:0.5,
    opacity:0,
})


tl.from(".rightpart",{
    x:+1000,
    opacity:0,
    duration:1,
})



