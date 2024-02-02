var tl = gsap.timeline();


tl.from(".header",{
    y:-100,
    duration:1,
    opacity:0,
    
})

tl.from(".main",{
     z:-100,
     duration:2,
     opacity:0,
})