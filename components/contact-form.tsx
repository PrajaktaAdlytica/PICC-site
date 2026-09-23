'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import Link from 'next/link';
import {topics} from '@/content/site';
import {Icon} from './ui';
export function ContactForm(){
 const form=useRef<HTMLFormElement>(null);const summary=useRef<HTMLDivElement>(null);
 const [topic,setTopic]=useState('');const [values,setValues]=useState<Record<string,string>|null>(null);
 useEffect(()=>{const value=new URLSearchParams(window.location.search).get('topic');if(value&&topics.includes(value))setTopic(value);},[]);
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<string,string>;setValues(data);requestAnimationFrame(()=>summary.current?.focus());}
 return <div><div className="form-intro"><h2>Your business objective</h2><span>* Required fields</span></div><form className="contact-form" ref={form} onSubmit={submit}>
 <div className="field"><label htmlFor="title">Title</label><select id="title" name="title" defaultValue=""><option value="">Select title</option><option>Mr.</option><option>Ms.</option><option>Mrs.</option></select></div><div className="field"><label htmlFor="firstName">First name <span className="required">*</span></label><input id="firstName" name="firstName" autoComplete="given-name" required maxLength={100}/></div>
 <div className="field"><label htmlFor="lastName">Last name <span className="required">*</span></label><input id="lastName" name="lastName" autoComplete="family-name" required maxLength={100}/></div><div className="field"><label htmlFor="company">Company <span className="required">*</span></label><input id="company" name="company" autoComplete="organization" required maxLength={180}/></div>
 <div className="field"><label htmlFor="position">Position</label><input id="position" name="position" autoComplete="organization-title" maxLength={150}/></div><div className="field"><label htmlFor="email">Email address <span className="required">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/></div>
 <div className="field"><label htmlFor="telephone">Telephone</label><input id="telephone" name="telephone" type="tel" autoComplete="tel" maxLength={40}/></div><div className="field"><label htmlFor="country">Country</label><input id="country" name="country" autoComplete="country-name" maxLength={100}/></div>
 <div className="field field-wide"><label htmlFor="topic">What can we help you with?</label><select id="topic" name="topic" value={topic} onChange={e=>setTopic(e.target.value)}><option value="">Select an area of support</option>{topics.map(t=><option key={t}>{t}</option>)}</select></div>
 <div className="field field-wide"><label htmlFor="objective">Tell us about your business objective <span className="required">*</span></label><textarea id="objective" name="objective" required minLength={10} maxLength={5000} placeholder="Your market, sector, and the type of connection you are looking for…"/></div>
 <label className="consent field-wide"><input name="consent" type="checkbox" required/><span>I agree to be contacted about this enquiry and acknowledge the <Link href="/privacy">privacy information</Link>. <span className="required">*</span></span></label>
 <p className="form-preview-note field-wide">Draft preview: this form lets you review an enquiry locally. It does not send or save your details. PICC’s final privacy wording and email delivery will be connected before launch.</p>
 <div className="field-wide"><button type="submit" className="button"><span>Preview enquiry</span><Icon name="arrow-up-right"/></button></div>
 {values&&<div className="review-summary" ref={summary} tabIndex={-1} role="status"><h3>Your enquiry preview</h3><p style={{fontSize:14,marginBottom:20}}>Nothing has been sent. You can edit the fields above and preview again.</p><dl><dt>Name</dt><dd>{values.firstName} {values.lastName}</dd><dt>Company</dt><dd>{values.company}</dd><dt>Email</dt><dd>{values.email}</dd><dt>Area</dt><dd>{values.topic||'Not specified'}</dd><dt>Objective</dt><dd>{values.objective}</dd></dl></div>}
 </form></div>;
}
