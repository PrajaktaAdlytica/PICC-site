import type {Metadata} from 'next';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import 'lenis/dist/lenis.css';
import './globals.css';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Motion} from '@/components/motion';
export const metadata:Metadata={title:{default:'Polish–Israeli Chamber of Commerce | Business Between Poland & Israel',template:'%s | PICC'},description:'PICC connects companies, entrepreneurs, investors and institutions across Poland and Israel, supporting business partnerships, international projects and cross-border cooperation.',robots:{index:false,follow:false},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><Motion/></body></html>}
