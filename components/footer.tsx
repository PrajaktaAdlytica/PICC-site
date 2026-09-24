'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {navigation} from '@/content/site';
import {pl} from '@/content/pl';
import {Icon} from './ui';

const polishLabels:Record<string,string>={
  '/what-we-do':pl.nav.whatWeDo,'/poland-israel':pl.nav.polandIsrael,'/about':pl.nav.about,
  '/network':pl.nav.network,'/insights':pl.nav.insights,
};

export function Footer(){
 const pathname=usePathname();
 const polish=pathname==='/pl'||pathname.startsWith('/pl/');
 const prefix=polish?'/pl':'';
 const href=(path:string)=>`${prefix}${path==='/'?'':path}`||'/';
 return <footer className="site-footer"><div className="container">
  <div className="footer-top">
   <div className="footer-brand" data-reveal="left">
    <Link href={href('/')} aria-label={polish?'Strona główna PICC':'PICC homepage'}><Image src="/assets/picc-logo-footer.png" width={838} height={234} alt={polish?'Polsko-Izraelska Izba Gospodarcza':'Polish–Israeli Chamber of Commerce'}/></Link>
    <p>{polish?<>Łączymy biznes.<br/>Budujemy relacje.</>:<>Bridging business.<br/>Building connections.</>}</p>
    <span className="footer-location">{polish?'POLSKA':'POLAND'} <i/> {polish?'IZRAEL':'ISRAEL'}</span>
   </div>
   <div data-reveal><h3>{polish?pl.nav.explore:'Explore'}</h3><nav aria-label={polish?'Nawigacja w stopce':'Footer navigation'}>{navigation.slice(0,4).map(item=><Link key={item.href} href={href(item.href)}>{polish?polishLabels[item.href]:item.label}</Link>)}</nav></div>
   <div data-reveal><h3>{polish?pl.nav.discover:'Discover'}</h3><nav aria-label={polish?'Więcej o PICC':'More from PICC'}><Link href={href('/startups')}>{polish?'Startupy i innowacje':'Startups & Innovation'}</Link><Link href={href('/insights')}>{polish?pl.nav.insights:'Insights & Events'}</Link><Link href={href('/contact')}>{polish?pl.nav.contact:'Contact'}</Link></nav></div>
   <div className="footer-contact" data-reveal="right"><h3>{polish?'Rozpocznij rozmowę':'Start a conversation'}</h3><a href="mailto:office@polishisraeli.org"><Icon name="mail"/>office@polishisraeli.org</a><p><Icon name="pin"/><span>{polish?<>ul. Trębacka 4<br/>00-074 Warszawa, Polska</>:<>ul. Trębacka 4<br/>00-074 Warsaw, Poland</>}</span></p><Link href={href('/contact')} className="footer-talk">{polish?pl.nav.talk:'Talk to Us'} <Icon name="arrow-up-right"/></Link></div>
  </div>
  <div className="footer-bottom" data-reveal><span>© {new Date().getFullYear()} PICC</span><nav aria-label={polish?'Informacje prawne':'Legal information'}><Link href={href('/privacy')}>{polish?'Prywatność':'Privacy'}</Link><Link href={href('/gdpr')}>GDPR</Link><Link href={href('/cookies')}>{polish?'Pliki cookie':'Cookies'}</Link><Link href={href('/preview-notes')} className="preview-link">{polish?'Uwagi do wersji roboczej':'Draft notes'}</Link></nav><a href="#top" aria-label={polish?'Wróć na górę':'Back to top'} className="back-top"><Icon name="arrow-up"/></a></div>
 </div></footer>;
}
