'use client';
import {useState} from 'react';
import Link from 'next/link';
import {archive} from '@/content/site';
import {pl} from '@/content/pl';
import {Action,Icon} from './ui';

const categories=['All','Business','Innovation','Events','Poland–Israel','Startups'];
export function InsightsList({polish=false}:{polish?:boolean}) {
 const [category,setCategory]=useState(0);
 const labels=polish?pl.insights.categories:categories;
 const selected=labels[category];
 const show=[0,1,3,4].includes(category);
 const emptyTitle=polish?pl.insights.empty:`More ${selected.toLowerCase()} perspectives to come.`;
 const emptyText=polish?'Porozmawiaj z PICC o innowacjach, współpracy międzynarodowej lub swoim projekcie.':`For conversations about ${selected==='Startups'?'your startup or innovation project':'innovation and international cooperation'}, get in touch with PICC.`;
 const cta=polish?(category===5?'Wsparcie dla startupów':'Porozmawiajmy'):(category===5?'Explore startup support':'Talk to Us');
 return <>
  <div className="filters" aria-label={polish?'Filtruj wydarzenia i analizy':'Filter insights and events'}>{labels.map((label,i)=><button key={label} type="button" className="filter" aria-pressed={category===i} onClick={()=>setCategory(i)}>{label}</button>)}</div>
  <div aria-live="polite">{show?<Link href={`${polish?'/pl':''}/insights/${archive.slug}`} className="archive-feature"><div className="archive-date"><span>{polish?pl.insights.archive:'FROM THE ARCHIVE'}</span><strong>19.06</strong><b>2018</b></div><div><div className="meta">{polish?'WYDARZENIA':'EVENTS'} <i/> {polish?'TEL AWIW, IZRAEL':'TEL AVIV, ISRAEL'}</div><h3>{polish?pl.insights.title:archive.title}</h3><p>{polish?pl.insights.excerpt:archive.excerpt}</p></div><span className="round-arrow"><Icon name="arrow-up-right"/></span></Link>:<div className="empty-state"><h3>{emptyTitle}</h3><p>{emptyText}</p><Action href={`${polish?'/pl':''}${category===5?'/startups':'/contact'}`}>{cta}</Action></div>}</div>
 </>;
}
