import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

const paths: Record<string, ReactNode> = {
  consulting: <><path d="M4 20V4h16v16H4ZM8 8h8M8 12h8M8 16h5"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M8 10.5h5M10.5 8v5"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6M19 21v-3a6 6 0 0 0-2-4"/></>,
  mission: <><path d="m3 10 18-7-7 18-4-7-7-4ZM10 14 21 3"/></>,
  layers: <><path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5"/></>,
  growth: <><path d="M3 20V4M3 20h18M7 15l5-5 4 3 5-8M16 5h5v5"/></>,
  institution: <><path d="m2 8 10-5 10 5H2ZM4 21h16M6 11v7M12 11v7M18 11v7"/></>,
  chevron: <path d="m6 9 6 6 6-6"/>,
};
export function Icon({name, className = ''}: {name: string; className?: string}) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[name] || <use href={`/assets/picc-icons.svg#icon-${name}`}/>}</svg>;
}
export function Action({children, href='/contact', secondary=false, light=false, icon='arrow-up-right', className=''}: {children:ReactNode;href?:string;secondary?:boolean;light?:boolean;icon?:string;className?:string}) {
  return <Link href={href} className={`button ${secondary?'button-secondary':''} ${light?'button-light':''} ${className}`}><span>{children}</span><Icon name={icon}/></Link>;
}
export function TextLink({children,href='/contact'}:{children:ReactNode;href?:string}) { return <Link className="text-link" href={href}>{children}<Icon name="arrow-right"/></Link>; }
export function Label({children,number}:{children:ReactNode;number?:string}) {return <div className="eyebrow">{number && <span className="section-number">{number}</span>}<span>{children}</span></div>;}
export function Photo({className='',priority=false,caption,original=false,motion}:{className?:string;priority?:boolean;caption?:string;original?:boolean;motion?:'left'|'right'|'scale'}) {
 return <figure className={`photo ${className}`} data-reveal={motion} data-parallax><Image src={original?'/assets/picc-original.jpg':'/assets/architecture.png'} alt={original?'Architectural artwork from the supplied PICC visual collection':'Monochrome architectural illustration of a modern business district'} fill sizes="(max-width: 760px) 100vw, 50vw" preload={priority}/><div className="photo-blue" aria-hidden="true"/><div className="photo-red" aria-hidden="true"/>{caption&&<figcaption>{caption}</figcaption>}</figure>;
}
export function SectionHeading({number,label,title,description}:{number?:string;label:string;title:ReactNode;description?:string}) {return <div className="section-heading" data-reveal><div><Label number={number}>{label}</Label><h2>{title}</h2></div>{description&&<p>{description}</p>}</div>;}
export function InternalHero({label,title,text,theme='blue',photo=false}:{label:string;title:ReactNode;text:string;theme?:string;photo?:boolean}) {
return <section className={`internal-hero ${theme}`}><div className="internal-copy" data-reveal="left"><Label>{label}</Label><h1>{title}</h1><p>{text}</p></div>{photo?<Photo priority className="internal-photo" motion="scale"/>:<div className="connection-art" data-reveal="right" aria-hidden="true"><span className="art-word">PL</span><div className="art-bridge"><i/><b/><i/></div><span className="art-word">IL</span><small>PEOPLE. BUSINESS. OPPORTUNITIES.</small></div>}</section>;
}
export function Closing({title="Let’s talk business.",text='Tell us what you are looking to achieve in Poland, Israel or between the two markets.',button='Start a conversation'}:{title?:string;text?:string;button?:string}) {return <section className="closing"><div className="container closing-inner" data-reveal><div><Label>Your next connection</Label><h2>{title}</h2><p>{text}</p></div><Action light>{button}</Action></div><div className="closing-plane" aria-hidden="true"/></section>;}
