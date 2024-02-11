gsap.registerPlugin(ScrollTrigger);

const slide = document.querySelector('.field1')

let tl =  gsap.timeline({
    default: {
        ease: 'none'
    },
    scrollTrigger :{
        trigger: slide,
        pin: true,
        scrub: 2,
        end : () => "+=" + slide.offsetWidth
    }
})

tl.to(slide,{
    xPercent : -75
})