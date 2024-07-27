Shery.mouseFollower();
Shery.makeMagnet(".menu-icon");
Shery.makeMagnet(".logo");
Shery.makeMagnet(".btndiv");
Shery.makeMagnet(".cross-icon");
Shery.hoverWithMediaCircle(".title",{videos:["./0.mp4","./2.mp4","./3.mp4"]})


function showSidebar(){
   const sidebar = document.querySelector('.menu-content')
   sidebar.style.display = 'flex'

}

function hideSidebar(){
  const sidebar = document.querySelector('.menu-content')
  sidebar.style.display = 'none'

}
gsap.from(".nav-bar", {
    y: 50,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.3
})
gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1
    },
    y:"-300%",
    ease: Power1,
})
  let sections = document.querySelectorAll(".fleftelm");

  Shery.imageEffect(".images", {
      style: 5,
      config: {
        "a":{"value":2,"range":[0,30]},
        "b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":0.8347011186045882},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":3},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      slideStyle: (setScroll) => {
        sections.forEach(function (section, index){
          ScrollTrigger.create({
              trigger: section,
              start:"top top",
              scrub: 1,
              onUpdate:function(prog){
                  setScroll(prog.progress + index);
                  
              },
          })
        })
     },
   });