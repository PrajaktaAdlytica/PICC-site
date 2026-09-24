import {notFound} from 'next/navigation';

export default function PolishLayout({children}:{children:React.ReactNode}){
 if(process.env.NEXT_PUBLIC_PICC_SITE_MODE==='english')notFound();
 return children;
}
