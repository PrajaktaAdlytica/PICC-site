'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function Motion(){
 const pathname=usePathname();
 useEffect(()=>{
   gsap.registerPlugin(ScrollTrigger);
   const media=gsap.matchMedia();
   let disposed=false;
   media.add('(prefers-reduced-motion: no-preference)',()=>{
     const lenis=new Lenis({lerp:0.1,smoothWheel:true,syncTouch:false,anchors:{offset:-108},stopInertiaOnNavigate:true});
     lenis.on('scroll',ScrollTrigger.update);
     const tick=(time:number)=>lenis.raf(time*1000);
     gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
     const reveal=(el:HTMLElement,direction:number)=>{
       gsap.fromTo(el,{opacity:0,y:direction*26},{opacity:1,y:0,duration:0.72,ease:'power2.out',overwrite:true});
     };
     const context=gsap.context(()=>{
       gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>{
         const rect=el.getBoundingClientRect();
         if(rect.top>=window.innerHeight||rect.bottom<=0)gsap.set(el,{opacity:0});
         ScrollTrigger.create({trigger:el,start:'top 96%',end:'bottom 4%',
           onEnter:()=>reveal(el,1),onEnterBack:()=>reveal(el,-1),
           onLeave:()=>gsap.set(el,{opacity:0,y:0}),onLeaveBack:()=>gsap.set(el,{opacity:0,y:0}),
         });
       });
       gsap.utils.toArray<HTMLElement>('[data-line]').forEach(el=>gsap.fromTo(el,{scaleX:0},{scaleX:1,transformOrigin:'left center',ease:'none',scrollTrigger:{trigger:el,start:'top 90%',end:'top 55%',scrub:0.6}}));
       gsap.to('.scroll-progress',{scaleX:1,transformOrigin:'left center',ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});
     });
     const revealFocused=(event:FocusEvent)=>{const el=(event.target as HTMLElement)?.closest<HTMLElement>('[data-reveal]');if(el)gsap.set(el,{opacity:1,y:0});};
     document.addEventListener('focusin',revealFocused);
     const refresh=()=>{if(!disposed){lenis.resize();ScrollTrigger.refresh();}};
     document.fonts.ready.then(refresh);
     const images=Array.from(document.images);images.forEach(img=>img.addEventListener('load',refresh));
     const frame=requestAnimationFrame(refresh);
     return()=>{cancelAnimationFrame(frame);images.forEach(img=>img.removeEventListener('load',refresh));document.removeEventListener('focusin',revealFocused);context.revert();lenis.off('scroll',ScrollTrigger.update);gsap.ticker.remove(tick);lenis.destroy();};
   });
   media.add('(prefers-reduced-motion: reduce)',()=>{gsap.set('[data-reveal]',{clearProps:'opacity,transform'});});
   return()=>{disposed=true;media.revert();};
 },[pathname]);
 return <div className="scroll-progress" aria-hidden="true"/>;
}
