export const navigation = [
  { label: 'What We Do', href: '/what-we-do', icon: 'services' },
  { label: 'Poland ↔ Israel', href: '/poland-israel', icon: 'bridge' },
  { label: 'About PICC', href: '/about', icon: 'about' },
  { label: 'Network', href: '/network', icon: 'network' },
  { label: 'Insights & Events', href: '/insights', icon: 'insights' },
];
export const services = [
  { id: 'consulting', name: 'Business Consulting', icon: 'consulting', short: 'Local understanding for your next business decision.', text: 'Practical guidance for companies considering opportunities, partnerships or development between the Polish and Israeli markets.', topic: 'Market Entry' },
  { id: 'partner-search', name: 'Business Partner Search', icon: 'search', short: 'Find people and organisations aligned with your objective.', text: 'Identification of potential companies and organisations relevant to a specific commercial objective.', topic: 'Business Partner Search' },
  { id: 'meetings', name: 'Business Meetings', icon: 'people', short: 'Create the right setting for a meaningful conversation.', text: 'Arrangement of targeted meetings and introductions between relevant decision-makers.', topic: 'Business Meeting' },
  { id: 'missions', name: 'Business Missions', icon: 'mission', short: 'Explore a market through purposeful business connections.', text: 'Planning and support for economic and trade missions connecting companies with the relevant market environment.', topic: 'Business Mission' },
  { id: 'projects', name: 'International Projects', icon: 'layers', short: 'Develop cooperation across companies and institutions.', text: 'Support in establishing cooperation around international projects involving Polish and Israeli partners.', topic: 'International Project' },
  { id: 'specialist', name: 'Specialist & Legal Support', icon: 'gdpr', short: 'Access relevant expertise for cross-border activity.', text: 'Access to relevant specialist contacts, market information and legal support connected with international business activity.', topic: 'Other' },
];
export const audiences = [
  { name: 'Companies', icon: 'services', text: 'Established businesses exploring partnerships, international development and new market opportunities.' },
  { name: 'Startups', icon: 'mission', text: 'Innovative companies looking for international connections, partners, investors and opportunities for growth.' },
  { name: 'Investors', icon: 'growth', text: 'Funds, private investors, business angels, banks and financial institutions interested in business and innovation.' },
  { name: 'Academia', icon: 'consulting', text: 'Universities and research centres supporting knowledge exchange, innovation and technology development.' },
  { name: 'Institutions', icon: 'institution', text: 'Embassies, chambers of commerce and other organisations contributing to economic cooperation.' },
];
export const process = [
  { name: 'Understand', text: 'We begin with your business objective, target market, sector and the relationship you want to develop.' },
  { name: 'Identify', text: 'We identify relevant companies, entrepreneurs, investors, institutions or professional contacts.' },
  { name: 'Connect', text: 'We facilitate introductions and help establish the right framework for a business conversation.' },
  { name: 'Develop', text: 'Where appropriate, we support the relationship as it develops into an opportunity, project or cooperation.' },
];
export const innovation = [
  ['International connections', 'Introductions to companies, institutions and research organisations.', 'network'],
  ['Investor networking', 'Opportunities to connect with funds, private investors and business angels.', 'growth'],
  ['Market development', 'Support in exploring opportunities for international business development.', 'globe'],
  ['Research & technology', 'Connections with organisations working in innovation and technology.', 'layers'],
  ['Events & visibility', 'Participation in relevant thematic events and selected opportunities to present projects and expertise.', 'insights'],
  ['Specialist information', 'Access to relevant market information and specialist contacts.', 'consulting'],
];
export const topics = ['Business Partner Search', 'Market Entry', 'Business Meeting', 'Business Mission', 'International Project', 'Startup / Innovation', 'Investor Connection', 'Institutional Contact', 'Other'];
export const archive = { slug: 'polish-israeli-economic-forum-2018', category: 'Events', date: '19 June 2018', location: 'Tel Aviv, Israel', title: 'Polish–Israeli Economic Forum', excerpt: 'A meeting of Polish and Israeli businesses, with networking and direct conversations at its centre.', source: 'https://www.gov.pl/web/rozwoj-technologia/polski-biznes-w-izraelu' };
export const pages: Record<string, { title: string; description: string }> = {
  'what-we-do': { title: 'What We Do', description: 'Practical support for business relationships between Poland and Israel, shaped around your objective.' },
  'poland-israel': { title: 'Poland ↔ Israel', description: 'Two markets connected through business relationships, knowledge and practical cooperation.' },
  about: { title: 'About PICC', description: 'Learn about the Polish–Israeli Chamber of Commerce, its mission and its business-led origins.' },
  network: { title: 'Our Network', description: 'Connections across companies, startups, investors, academia and institutions.' },
  startups: { title: 'Startups & Innovation', description: 'International connections for innovative companies developing opportunities between Poland and Israel.' },
  insights: { title: 'Insights & Events', description: 'Business meetings, international initiatives and perspectives on Poland–Israel cooperation.' },
  contact: { title: 'Contact PICC', description: 'Tell us about your business objective in Poland, Israel or between the two markets.' },
  privacy: { title: 'Privacy Policy', description: 'Privacy information for the PICC website preview.' },
  gdpr: { title: 'Data Protection', description: 'Personal data information for the PICC website preview.' },
  cookies: { title: 'Cookie Policy', description: 'Cookie information for the PICC website preview.' },
  'preview-notes': { title: 'Draft Review Notes', description: 'Source references, implementation status and remaining PICC content.' },
};
