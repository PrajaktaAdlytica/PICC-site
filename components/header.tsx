'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {navigation} from '@/content/site';
import {Icon} from './ui';
export function Header(){
 const pathname=usePathname(); const [open,setOpen]=useState(false); const trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false);},[pathname]);
 useEffect(()=>{const handler=(e:KeyboardEvent)=>{if(e.key==='Escape'&&open){setOpen(false);trigger.current?.focus();}};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);},[open]);
 return <header className="site-header" id="top"><Link href="/" className="logo-link" aria-label="PICC homepage"><Image src="/assets/picc-logo-light.png" alt="Polish–Israeli Chamber of Commerce" width={838} height={234} preload/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?'page':undefined}>{item.label}</Link>)}</nav><div className="header-actions"><div className="languages" aria-label="Language"><strong lang="en">EN</strong><span>/</span><span lang="pl" title="Polish edition pending translation">PL</span></div><Link href="/contact" className="button header-cta"><span>Talk to Us</span><Icon name="arrow-up-right"/></Link><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Close menu':'Open menu'} ref={trigger} onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'}/></button></div><nav id="mobile-menu" className={`mobile-menu ${open?'is-open':''}`} aria-label="Mobile navigation" hidden={!open} data-lenis-prevent><Link href="/" onClick={()=>setOpen(false)}>Home<Icon name="arrow-right"/></Link>{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?'page':undefined} onClick={()=>setOpen(false)}><span><Icon name={item.icon}/>{item.label}</span><Icon name="arrow-right"/></Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact<Icon name="message"/></Link></nav></header>;
}
