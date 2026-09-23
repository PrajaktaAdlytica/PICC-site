# PICC website — first working draft

Prepared 23 September 2026. This is a local design and interaction preview for review; it has not been published or connected to the domain.

## Open and run

Current preview: [http://127.0.0.1:3000](http://127.0.0.1:3000).

Run these commands from this folder if the preview server has stopped:

```sh
npm ci
npm run dev
```

For a production build, use `npm run build`, then `npm start`. Stop the development server first if it is using port 3000. `npm run typecheck` checks TypeScript.

## Design and content

- Homepage: the approved **Editorial Bridge** direction, with large typography, numbered service rows, architectural imagery, generous spacing, and PICC geometry.
- Internal pages: the approved **Connected Markets** direction, with modular content and a shared Poland–Israel graphic language.
- Supplied PICC logo, custom favicon and icon system; self-hosted Manrope and Inter fonts.
- English content drawn from the supplied website specification, with restrained editorial adaptation to the approved wireframes.
- The saved Perplexity research and its factual corrections were reviewed. Unconfirmed leadership, telephone numbers, partner endorsements, testimonials and statistics are omitted.
- The supplied architectural artwork is used in the market section. The new monochrome architecture image is an AI-generated illustration, not a photograph of a PICC event or claimed location. `Grafika_1.jpg` informed the visual treatment.

Reference sites informed specific design decisions, without copying their layouts or wording:

| Reference | Design principle used |
| --- | --- |
| [IPPP](https://ippp.org.pl) | Clear institutional navigation and a strong bilateral identity |
| [Accelerate Poland](https://acceleratepoland.org) | Modular information, purposeful process sections, direct calls to action |
| [Regina review site](https://regina-site-git-review-hubert-home-adlytica.vercel.app) | Editorial pacing, generous whitespace and restrained visual accents |

The dated event archive links to the [Polish government report](https://www.gov.pl/web/rozwoj-technologia/polski-biznes-w-izraelu) supporting the 19 June 2018 forum. It is clearly presented as a past event.

## Pages

Home, What We Do, Poland ↔ Israel, About PICC, Network, Startups & Innovation, Insights & Events, Contact, a historical event article, Privacy, GDPR, Cookies and Draft Review Notes. Unknown routes have a custom 404 page.

The legal pages identify their draft status; they are not approved legal policies. The Polish language edition is pending translation.

## Motion and interactions

- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) reveals content from below when scrolling down and from above when scrolling back up. Travel is 26px over 720ms.
- [Lenis](https://github.com/darkroomengineering/lenis) synchronizes smooth wheel scrolling with the GSAP ticker. Touch scrolling remains native.
- Scroll progress, a process-line reveal, subtle image movement and consistent link/button hover states.
- Reduced-motion preferences bypass smooth scrolling and reveal animations. Content is visible in the initial HTML.
- Responsive menu with labelled controls and Escape support, a skip link, visible keyboard focus, semantic headings and native form validation.
- Service links preselect relevant enquiry topics. Insights filters include honest empty states where content is not available.

## Enquiry form

The form currently produces a **local enquiry preview**. It does not send, persist or submit visitor information. A visible notice and the resulting summary explain this. Email delivery, server-side validation, spam protection and approved consent wording remain launch work.

## Project structure

| Location | Purpose |
| --- | --- |
| `app/` | Routes, metadata and responsive styles |
| `components/` | Navigation, footer, UI elements, motion, filters and form |
| `content/site.ts` | Shared service, audience, process and page content |
| `public/assets/` | Logo, icon sprite and website imagery |
| `app/icon.svg` | PICC favicon |

The existing brand kit's motion guidance was updated to match the later GSAP/Lenis request. The website has no analytics, CMS, authentication or submission backend at this stage. Search indexing is disabled for the draft.

## Checks completed

- TypeScript check and optimized Next.js production build passed.
- All 13 content routes returned HTTP 200, contained one H1 and had `noindex` metadata; an unknown route returned 404.
- Desktop homepage and internal-page navigation reviewed at 1280px.
- Mobile homepage, menu, contact form and footer reviewed at 390px; insights/archive reviewed at 320px. No horizontal overflow on those inspected pages.
- Mobile menu opened, closed with Escape and restored focus.
- Scroll-down reveal, offscreen reset and scroll-up replay observed in the browser.
- Required-field validation, query-prefilled topic and local enquiry summary checked with synthetic details.
- Insights filters and archive navigation checked. No browser console errors were reported during these checks.
- Reduced-motion handling was inspected in code; assistive-technology and cross-browser audits remain launch checks.

## Before launch

1. Review the visual draft and English copy.
2. Confirm contact details, social destinations, any leadership/partner information and image usage rights.
3. Provide/adapt the Polish content and approve privacy, GDPR and cookie wording.
4. Connect enquiry delivery and choose the content-update workflow.
5. Complete accessibility, performance and browser checks on the final content.
6. Push the approved project to GitHub, deploy to Vercel and connect the confirmed GoDaddy domain. Enable indexing and set final canonical/share metadata for the production URL.

No GoDaddy, DNS, GitHub or Vercel account changes have been made for this draft.
