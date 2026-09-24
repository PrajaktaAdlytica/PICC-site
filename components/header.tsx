'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {navigation} from '@/content/site';
import {pl} from '@/content/pl';
import {Icon} from './ui';

const polishLabels:Record<string,string>={
  '/what-we-do':pl.nav.whatWeDo,'/poland-israel':pl.nav.polandIsrael,'/about':pl.nav.about,
  '/network':pl.nav.network,'/insights':pl.nav.insights,
};

export function Header(){
 const pathname=usePathname();
 const englishOnly=process.env.NEXT_PUBLIC_PICC_SITE_MODE==='english';
 const isPolish=pathname==='/pl'||pathname.startsWith('/pl/');
 const prefix=isPolish?'/pl':'';
 const [open,setOpen]=useState(false);
 const trigger=useRef<HTMLButtonElement>(null);
 const englishPath=pathname.replace(/^\/pl(?=\/|$)/,'')||'/';
 const polishPath=isPolish?pathname:(pathname==='/'?'/pl':`/pl${pathname}`);
 useEffect(()=>{setOpen(false);document.documentElement.lang=isPolish?'pl':'en';},[pathname,isPolish]);
 useEffect(()=>{const handler=(e:KeyboardEvent)=>{if(e.key==='Escape'&&open){setOpen(false);trigger.current?.focus();}};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);},[open]);
 const href=(path:string)=>`${prefix}${path==='/'?'':path}`||'/';
 return <header className="site-header" id="top">
  <Link href={href('/')} className="logo-link" aria-label={isPolish?'Strona główna PICC':'PICC homepage'}><Image src="/assets/picc-logo-light.png" alt={isPolish?'Polsko-Izraelska Izba Gospodarcza':'Polish–Israeli Chamber of Commerce'} width={838} height={234} preload/></Link>
  <nav className="desktop-nav" aria-label={isPolish?'Nawigacja główna':'Main navigation'}>{navigation.map(item=><Link key={item.href} href={href(item.href)} aria-current={pathname===href(item.href)?'page':undefined}>{isPolish?polishLabels[item.href]:item.label}</Link>)}</nav>
  <div className="header-actions">
   {!englishOnly&&<nav className="languages" aria-label={isPolish?'Wybór języka':'Language selector'}><Link href={englishPath} lang="en" aria-current={!isPolish?'page':undefined}>EN</Link><span>/</span><Link href={polishPath} lang="pl" aria-current={isPolish?'page':undefined}>PL</Link></nav>}
   <Link href={href('/contact')} className="button header-cta"><span>{isPolish?pl.nav.talk:'Talk to Us'}</span><Icon name="arrow-up-right"/></Link>
   <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={isPolish?(open?'Zamknij menu':'Otwórz menu'):(open?'Close menu':'Open menu')} ref={trigger} onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'}/></button>
  </div>
  <nav id="mobile-menu" className={`mobile-menu ${open?'is-open':''}`} aria-label={isPolish?'Nawigacja mobilna':'Mobile navigation'} hidden={!open} data-lenis-prevent>
   <Link href={href('/')} onClick={()=>setOpen(false)}>{isPolish?pl.nav.home:'Home'}<Icon name="arrow-right"/></Link>
   {navigation.map(item=><Link key={item.href} href={href(item.href)} aria-current={pathname===href(item.href)?'page':undefined} onClick={()=>setOpen(false)}><span><Icon name={item.icon}/>{isPolish?polishLabels[item.href]:item.label}</span><Icon name="arrow-right"/></Link>)}
   <Link href={href('/contact')} onClick={()=>setOpen(false)}>{isPolish?pl.nav.contact:'Contact'}<Icon name="message"/></Link>
  </nav>
 </header>;
}
