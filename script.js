function locomotiveanimation(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loaderanimation(){
    var t1=gsap.timeline()
    t1.from(".line h1, .line h2",{
        // overflow hidden dena css  mai tabhi lagega ki ekdam se aa rha hai
        duration: 0.5,
        y:"100%",
        stagger:0.2,
        delay: 0.5
    })


    t1.from("#line1-part1",{
        opacity:0,
    
        // it will start function code when this timeline executes
        onStart:function(){
            var timer=document.querySelector('#line1-part1 h5')
            var count=0;
            var interval= setInterval(function(){
                if(count===100){
                    clearInterval(interval);
                }
                timer.textContent=count;
                count++;
            },25);
            }

    })
    t1.to('.line h2',{
        
        animationName: "anime"
    })

    t1.to("#loader",{
        opacity: 0,
         delay:2.6,
        duration:0.8,
    })
    t1.to("#loader",{
        display:"none",  ///////////////////////////////most most most important step
        
    })
    t1.from('#page1',{
        y:1200,
        opacity:0,
        onStart:function(){
            
            gsap.from(".hero h1,.hero h2",{
                duration: 0.5,
                y:"100%",
                stagger:0.2,
                delay: 0.2
            })
           
        }
       
    })
    t1.from('#navbar',{
        opacity:0
    })
    

    
   
}
Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
function cursoranimation(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    

    var videocontainer=document.querySelector("#video-container")
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            gsap.to("#video-container #cursor",{
                left:dets.x-540,
                top:dets.y-200,
            })
            gsap.to(".mousefollower",{
                opacity:0
            })
        })
    })
    videocontainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to("#video-container #cursor",{
            left:"70%",
            top:"-10%"

        })
    })
    var videocon=document.querySelector("#video-container")
    var video=document.querySelector("#video-container video")
    var videocursor=document.querySelector("#video-container #cursor")
    var flag=0;
    videocon.addEventListener("click",function(){
        if(flag==0){
            video.play(),
            video.style.opacity=1,
            videocursor.innerHTML=`<i class="ri-pause-line"></i>`;//ye semicolon mat bhulna
            gsap.to("#video-container #cursor",{
                scale:0.7
            })
            gsap.to("#video-container img",{
                opacity:0
            })
            flag=1;
        }
        else{
            video.pause(),
            video.style.opacity=0,
            videocursor.innerHTML=`<i class="ri-play-fill"></i>`;//ye semicolon mat bhulna
            gsap.to("#video-container #cursor",{
                scale:1
            })
            gsap.to("#video-container img",{
                opacity:1
            })
            flag=0;
        }
        
        
    })
      
    
} 
function image_animation(){
    Shery.imageEffect(".image",{
        style:5,
        config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500074444267144},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}
var flag=document.querySelector("#flag")
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        left:dets.x,
        top:dets.y,
    })
})
var alag=document.querySelector("#alag")
alag.addEventListener("mouseenter",function(){
    flag.style.opacity=1
})
alag.addEventListener("mouseleave",function(){
    flag.style.opacity=0
})
loaderanimation()
locomotiveanimation()
cursoranimation()
image_animation();

// var text=document.querySelector("#page6 h1")
// text.addEventListener("hover",function(){
//     gsap.from("#page6 h1",{
//         // opacity:0,
//         onstart:function(){
//             $('h1').textillate({ 
//                 in: { effect: 'fadeIn' },

//             });
            
//         }
//     })
//     // gsap.to("#page6 h1",{

//     //     fontFamily:"Silk Serif",
        
//     // })
// })
// text.addEventListener("mouseleave",function(){
//     gsap.from("#page6 h1",{
//         // opacity:0,
        
    
//         onstart:function(){
            
//             $('h1').textillate({ 
//                 out: {
//                     effect: 'fadeIn',
//                     // delayScale: 1.5,
//                     // delay: 50,
//                     // sync: false,
//                     // shuffle: false,
//                     reverse: true,
//                     // callback: function () {}
//                   },  });
    
//         }
//     })
// })



