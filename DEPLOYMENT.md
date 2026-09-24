# PICC deployment modes

Both sites use this GitHub repository.

| Site | Vercel build command | Result |
| --- | --- | --- |
| Bilingual review | `npm run build` | English and Polish routes; language selector visible |
| English-only | `npm run build:english` | English routes only; `/pl` returns 404; language selector and Draft notes link hidden |

For the English-only Vercel project, import the same repository as a **second project** and override its Build Command with `npm run build:english`. Leave the existing bilingual project's build command as `npm run build`. Do not assign the GoDaddy domain to the bilingual project.

Both builds currently retain `noindex` metadata. Before connecting the public domain, replace the draft legal text, decide how contact enquiries will be delivered, confirm contact details, then enable indexing for the approved English build and set its canonical domain.

When the English project is ready, add the domain and `www` variant in its Vercel Domains settings. Use the exact DNS records Vercel gives you in the authoritative DNS provider. Preserve existing email records.
