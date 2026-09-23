'use client';
import {useState} from 'react';
import Link from 'next/link';
import {archive} from '@/content/site';
import {Action,Icon} from './ui';
const categories=['All','Business','Innovation','Events','Poland–Israel','Startups'];
export function InsightsList(){const[category,setCategory]=useState('All');const show=['All','Business','Events','Poland–Israel'].includes(category);return <><div className="filters" aria-label="Filter insights and events">{categories.map(c=><button key={c} type="button" className="filter" aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><div aria-live="polite">{show?<Link href={`/insights/${archive.slug}`} className="archive-feature"><div className="archive-date"><span>FROM THE ARCHIVE</span><strong>19.06</strong><b>2018</b></div><div><div className="meta">EVENTS <i/> TEL AVIV, ISRAEL</div><h3>{archive.title}</h3><p>{archive.excerpt}</p></div><span className="round-arrow"><Icon name="arrow-up-right"/></span></Link>:<div className="empty-state"><h3>More {category.toLowerCase()} perspectives to come.</h3><p>For conversations about {category==='Startups'?'your startup or innovation project':'innovation and international cooperation'}, get in touch with PICC.</p><Action href={category==='Startups'?'/startups':'/contact'}>{category==='Startups'?'Explore startup support':'Talk to Us'}</Action></div>}</div></>}
