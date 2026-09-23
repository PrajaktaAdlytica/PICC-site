import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Action,TextLink,Label,Icon,Closing} from '@/components/ui';
import {archive} from '@/content/site';
import {pl} from '@/content/pl';

type Props={params:Promise<{article:string}>};
export function generateStaticParams(){return [{article:archive.slug}]}
export async function generateMetadata({params}:Props):Promise<Metadata>{const{article}=await params;if(article!==archive.slug)return{};return{title:pl.insights.title,description:pl.insights.excerpt,alternates:{canonical:`/pl/insights/${article}`}}}
export default async function PolishArticle({params}:Props){
 const{article}=await params;if(article!==archive.slug)notFound();
 return <><header className="article-hero" data-reveal="left"><div className="container"><TextLink href="/pl/insights">Wydarzenia i analizy</TextLink><Label>Z archiwum / Wydarzenia</Label><h1>{pl.insights.title}</h1><div className="article-meta"><span><Icon name="insights"/>19 czerwca 2018</span><span><Icon name="pin"/>Tel Awiw, Izrael</span><span>Wydarzenie archiwalne</span></div></div></header><section className="section"><div className="container article-layout"><article className="article-body" data-reveal><h2>Kontakty biznesowe w praktyce.</h2><p>Polsko-Izraelskie Forum Gospodarcze odbyło się 19 czerwca 2018 roku w Tel Awiwie. W opublikowanej następnego dnia relacji polski rząd wymienił Polsko-Izraelską Izbę Gospodarczą wśród organizatorów.</p><p>Program koncentrował się na networkingu i bezpośrednich rozmowach między polskimi a izraelskimi firmami. W spotkaniu uczestniczyły przedsiębiorstwa z branż takich jak spożywcza, kosmetyczna, IT i inteligentny transport.</p><p>Ta nota opisuje udział PICC w wydarzeniu archiwalnym. Nie przedstawia go jako aktualnego programu ani nie określa obecnego statusu relacji instytucjonalnych.</p><a className="source-link" href={archive.source} target="_blank" rel="noreferrer">Źródło: raport polskiego ministerstwa z 20 czerwca 2018 r. <Icon name="external"/></a></article><aside className="event-side" data-reveal="right"><Label>Informacje o wydarzeniu</Label><h3>{pl.insights.title}</h3><dl><dt>Data</dt><dd>19 czerwca 2018</dd><dt>Miejsce</dt><dd>Tel Awiw, Izrael</dd><dt>Status</dt><dd>Wydarzenie historyczne · archiwum</dd></dl><Action href="/pl/contact">Kontakt z PICC</Action></aside></div></section><Closing label="Kolejny krok" href="/pl/contact" title="Nawiążmy kolejny kontakt." text="Interesują Cię spotkania biznesowe lub inicjatywy międzynarodowe? Opowiedz PICC o swoim celu." button="Rozpocznij rozmowę"/></>
}
