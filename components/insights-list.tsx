'use client';
import {useState} from 'react';
import {Action} from './ui';
import {pl} from '@/content/pl';

const categories=['All','Business','Innovation','Events','Startups'];
const emptyTitles=[
 'More perspectives to come.',
 'More business perspectives to come.',
 'More innovation perspectives to come.',
 'More events to come.',
 'More startup perspectives to come.',
];
const polishEmptyTitles=[
 'Więcej materiałów wkrótce.',
 'Więcej materiałów biznesowych wkrótce.',
 'Więcej materiałów o innowacjach wkrótce.',
 'Więcej wydarzeń wkrótce.',
 'Więcej materiałów o startupach wkrótce.',
];

export function InsightsList({polish=false}:{polish?:boolean}) {
 const [category,setCategory]=useState(0);
 const labels=polish?pl.insights.categories:categories;
 const title=polish?polishEmptyTitles[category]:emptyTitles[category];
 const startup=category===4;
 return <>
  <div className="filters" aria-label={polish?'Filtruj wydarzenia i analizy':'Filter insights and events'}>
   {labels.map((label,index)=><button key={label} type="button" className="filter" aria-pressed={category===index} onClick={()=>setCategory(index)}>{label}</button>)}
  </div>
  <div className="empty-state" aria-live="polite">
   <h3>{title}</h3>
   <p>{polish?'Masz już konkretny cel biznesowy? Porozmawiaj z PICC o możliwościach współpracy.':'Have a business objective now? Talk with PICC about the connections you need.'}</p>
   <Action href={`${polish?'/pl':''}${startup?'/startups':'/contact'}`}>{polish?(startup?'Wsparcie dla startupów':'Porozmawiajmy'):(startup?'Explore startup support':'Talk to Us')}</Action>
  </div>
 </>;
}
