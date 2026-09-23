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
       const kind=el.dataset.reveal;
       const from=kind==='left'?{x:-48,y:0}:kind==='right'?{x:48,y:0}:kind==='scale'?{scale:0.94,y:18}:{x:0,y:direction*54};
       if(direction<0&&kind!=='left'&&kind!=='right'&&kind!=='scale')from.y=-54;
       gsap.fromTo(el,{...from,opacity:0},{opacity:1,x:0,y:0,scale:1,duration:0.9,delay:Number(el.dataset.revealDelay||0),ease:'power3.out',overwrite:true});
     };
     const context=gsap.context(()=>{
       const reveals=gsap.utils.toArray<HTMLElement>('[data-reveal]');
       reveals.forEach(el=>{
         const rect=el.getBoundingClientRect();
         const initiallyVisible=rect.top<window.innerHeight*0.88&&rect.bottom>0;
         if(initiallyVisible)reveal(el,1);else gsap.set(el,{opacity:0});
         const siblings=Array.from(el.parentElement?.children??[]).filter((node):node is HTMLElement=>node instanceof HTMLElement&&node.hasAttribute('data-reveal'));
         const stagger=Math.min(siblings.indexOf(el),5)*0.095;
         ScrollTrigger.create({trigger:el,start:'top 84%',end:'bottom 14%',
           onEnter:()=>reveal(el,1),onEnterBack:()=>reveal(el,-1),
           onLeave:()=>gsap.set(el,{opacity:0,y:0,x:0,scale:1}),onLeaveBack:()=>gsap.set(el,{opacity:0,y:0,x:0,scale:1}),
           onRefresh:self=>{if(self.isActive&&initiallyVisible)gsap.set(el,{opacity:1,x:0,y:0,scale:1});},
         });
         el.dataset.revealDelay=String(stagger);
       });
       gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el)=>gsap.to(el,{yPercent:-8,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:0.7}}));
       gsap.utils.toArray<HTMLElement>('[data-line]').forEach(el=>gsap.fromTo(el,{scaleX:0},{scaleX:1,transformOrigin:'left center',ease:'none',scrollTrigger:{trigger:el,start:'top 90%',end:'top 55%',scrub:0.6}}));
       gsap.to('.scroll-progress',{scaleX:1,transformOrigin:'left center',ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});
     });
     const revealFocused=(event:FocusEvent)=>{const el=(event.target as HTMLElement)?.closest<HTMLElement>('[data-reveal]');if(el)gsap.set(el,{opacity:1,x:0,y:0,scale:1});};
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
