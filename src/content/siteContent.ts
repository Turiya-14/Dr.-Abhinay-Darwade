/**
 * All public homepage copy, links and image metadata.
 * Components only handle layout — edit wording here.
 * Eyebrow labels are stored in sentence case and shown in capitals via CSS.
 */

import { typesetAll } from './typeset';

export type NavItem = { label: string; href: string };

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  srcSet?: string;
};

export type GalleryItem = ImageAsset & { id: string; caption: string; srcSet: string };
export type Publication = { title: string; citation: string; action: string; href: string };
export type PressItem = { title: string; description: string; source: string; action: string; href: string };
export type Episode = { title: string; description: string; action: string; href: string };

/** The parent-education programme name, kept in Marathi wherever it appears. */
export const programmeName = 'पालकांची शाळा';

export const person = {
  fullName: 'Dr. Abhinay Bhaskar Darwade',
  shortName: 'Dr. Abhinay Darwade',
  role: 'Pediatrician & Medical Educator',
  email: 'dr.abhinaydarwade@gmail.com',
  registration: 'Maharashtra Medical Council Registration: 2006/02/650',
} as const;

/** Header identity link (top of the homepage). */
export const brandLink = { href: '/#home' };

export const navigation: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'IAP 2027', href: '/#iap-2027' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export const images = {
  hero: {
    src: '/images/dr-darwade-hero.webp',
    width: 760,
    height: 1060,
    alt: 'Dr. Abhinay Bhaskar Darwade',
  },
  office: {
    src: '/images/dr-darwade-office.webp',
    srcSet: '/images/dr-darwade-office-640.webp 640w, /images/dr-darwade-office.webp 1016w',
    width: 1016,
    height: 1270,
    alt: 'Dr. Abhinay Darwade seated in his office',
  },
  teaching: {
    src: '/images/medical-teaching.webp',
    srcSet: '/images/medical-teaching-640.webp 640w, /images/medical-teaching.webp 1040w',
    width: 1040,
    height: 469,
    alt: 'A medical teaching session with a lecturer and students',
  },
} satisfies Record<string, ImageAsset>;

export const hero = {
  eyebrow: 'Dhule, Maharashtra',
  /** Rendered as two intentional lines; reads as “Dr. Abhinay Bhaskar Darwade”. */
  titleLines: ['Dr. Abhinay', 'Bhaskar Darwade'],
  /** Two intentional lines; reads as “Pediatrician. Medical educator. A commitment to children and families.” */
  roleLines: ['Pediatrician. Medical educator.', 'A commitment to children and families.'],
  intro:
    'Bringing together clinical care, medical education, counselling and community service — with a focus on children, families and the pediatric community.',
  affiliations: [
    { title: 'Associate Professor, Department of Pediatrics', place: 'ACPM Medical College, Dhule' },
    { title: 'Founder & Director', place: 'Sangopan Balrugnalay, Dhule' },
  ],
  campaign: 'Aspirant for CIAP Executive Board Member 2027',
  primaryAction: { label: 'Explore my profile', href: '/#about' },
  secondaryAction: { label: 'Get in touch', href: '/#contact' },
};

export const about = {
  eyebrow: 'About Dr. Darwade',
  title: 'Clinical care, teaching and a wider sense of service.',
  paragraphs: [
    'Dr. Abhinay Bhaskar Darwade is a pediatrician and medical educator based in Dhule, Maharashtra. He serves as an Associate Professor in the Department of Pediatrics at ACPM Medical College and is the Founder and Director of Sangopan Balrugnalay.',
    'His professional work brings together the care of children, the teaching of medical students, counselling and public education. Through clinical practice, academic work and community involvement, he seeks to make child health information more understandable and useful for families.',
    `His research includes work on children’s screen time, neonatal jaundice and perinatal outcomes. Beyond the classroom and clinic, he shares parenting and child-health guidance through the “${programmeName}” series.`,
  ],
  qualificationsLabel: 'Qualifications & professional development',
  qualifications: [
    'MBBS',
    'DCH',
    'DNB (Pediatrics)',
    'MNAMS',
    'Diploma in Counselling Psychology',
    'Advanced Course in Medical Education (ACME)',
  ],
  registration: person.registration,
};

export const work = {
  eyebrow: 'Professional work',
  title: 'Care, education and communication.',
  lead: 'Three connected areas shape Dr. Darwade’s work.',
  areas: [
    {
      number: '01',
      title: 'Clinical practice',
      text: 'Pediatric care at Sangopan Balrugnalay, with attention to children and the questions, concerns and understanding of their families.',
    },
    {
      number: '02',
      title: 'Medical education',
      text: 'Teaching in the Department of Pediatrics at ACPM Medical College, with an interest in meaningful learning, clinical understanding and communication.',
    },
    {
      number: '03',
      title: 'Parent and community education',
      text: 'Counselling, public education and practical conversations that help parents and communities better understand children’s health and wellbeing.',
    },
  ],
  caption: 'Teaching and learning in a medical classroom.',
};

export const service = {
  eyebrow: 'Service & recognition',
  title: 'A commitment that extends beyond the clinic.',
  body: 'Community service is an important part of Dr. Darwade’s professional work. His involvement includes public education and support for families, alongside his clinical and teaching responsibilities.',
  award: {
    year: '2020',
    title: 'RISE INDIA Awards — 2020',
    text: 'Recognised by RED FM and Music Plus at the 2020 RISE INDIA Awards for service during the COVID-19 pandemic.',
    action: 'Read the coverage',
    href: 'https://www.exchange4media.com/industry-briefing-news/red-fm-music-plus-felicitate-covid-crusaders-at-rise-india-awards-105185.html',
  },
};

export const campaign = {
  eyebrow: 'CIAP Elections 2027',
  titleLines: ['Connecting Pediatricians,', 'Strengthening Pediatrics.'],
  status: 'Aspirant for CIAP Executive Board Member 2027',
  body: 'Dr. Abhinay Darwade is seeking to contribute his experience in clinical care, medical education, counselling and community service to the wider pediatric community.',
  supporting:
    'His campaign brings together a commitment to academic collaboration, professional learning and a shared focus on children’s health.',
  supportLine: 'Your support and good wishes are deeply valued.',
  action: { label: 'Connect with Dr. Darwade', href: '/#contact' },
};

export const education = {
  eyebrow: 'Parent education',
  title: 'Helping parents understand, one conversation at a time.',
  body: `“${programmeName}” is Dr. Darwade’s parenting and child-health education series. It brings everyday questions about raising children into practical conversations for parents and families.`,
  episodes: [
    {
      title: `${programmeName} — Episode 1`,
      description: 'Everyday parenting challenges and the need to reflect on how we guide children.',
      action: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=BYrwSeBic3E',
    },
    {
      title: `${programmeName} — Episode 2`,
      description: 'A conversation about parental choices and children’s everyday wellbeing.',
      action: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=PQcsxvlekYI',
    },
  ] satisfies Episode[],
};

export const research = {
  eyebrow: 'Research & press',
  title: 'Selected publications and coverage.',
  publicationsHeading: 'Selected research',
  publications: [
    {
      title: 'Mobile Screen Time and Its Impact on the Health of School Children: A School-Based Research Study',
      citation: 'Research Journal of Medical Sciences · 2023 · 17(12): 131–135',
      action: 'Read paper',
      href: 'https://www.makhillpublications.co/public/files/published-files/mak-rjms/2023/131-135.pdf',
    },
    {
      title: 'Prospective Study of Perinatal Outcomes in Infants of Diabetic Mothers',
      citation: 'International Journal of Pharmaceutical and Clinical Research · 2023 · 15(5): 1355–1367',
      action: 'Read paper',
      href: 'https://impactfactor.org/PDF/IJPCR/15/IJPCR,Vol15,Issue5,Article173.pdf',
    },
    {
      title:
        'Assessment of Cord Bilirubin, Total Serum Bilirubin and Transcutaneous Bilirubin for Predicting and Managing Neonatal Jaundice',
      citation: 'Research Journal of Medical Sciences · 2023 · 17(12): 104–110',
      action: 'Read paper',
      href: 'https://makhillpublications.co/files/published-files/mak-rjms/2023/104-110.pdf',
    },
  ] satisfies Publication[],
  pressHeading: 'In the press',
  press: [
    {
      title: 'A moment of care at Sangopan',
      description: 'ABP Majha’s report on Dr. Darwade comforting a baby through song.',
      source: 'ABP Majha · 25 May 2021',
      action: 'Read coverage',
      href: 'https://marathi.abplive.com/news/maharashtra/the-doctor-sang-a-song-and-put-the-crying-baby-to-sleep-video-of-dhule-dr-abhinay-darwade-goes-viral-987957',
    },
    {
      title: 'Pediatric care during the pandemic',
      description: 'Sakal’s report on clinical work at Sangopan during the COVID-19 pandemic.',
      source: 'Sakal · 14 October 2020',
      action: 'Read coverage',
      href: 'https://www.esakal.com/uttar-maharashtra/marathi-news-dhule-six-children-were-diagnosed-mis-c-after-coronary-heart-disease',
    },
  ] satisfies PressItem[],
};

/** Builds the responsive WebP set produced from each original (480/960 variants, never upscaled). */
const responsive = (base: string, width: number, height: number) => ({
  src: `/images/${base}.webp`,
  srcSet: [480, 960]
    .filter((w) => w < width)
    .map((w) => `/images/${base}-${w}.webp ${w}w`)
    .concat(`/images/${base}.webp ${width}w`)
    .join(', '),
  width,
  height,
});

export const gallery = {
  eyebrow: 'Moments from his work',
  title: 'Teaching, dialogue and professional engagement.',
  items: [
    {
      id: 'academic-discussion',
      ...responsive('academic-discussion', 1600, 900),
      caption: 'An academic group discussion.',
      alt: 'An academic group discussion in an office setting',
    },
    {
      id: 'mahaiap-felicitation',
      ...responsive('mahaiap-felicitation', 1358, 1600),
      caption: 'A felicitation at a MAHAIAP event.',
      alt: 'Dr. Abhinay Darwade at a MAHAIAP felicitation',
    },
    {
      id: 'ncd-summit-felicitation',
      ...responsive('ncd-summit-felicitation', 1315, 702),
      caption: 'National NCD Summit, Shirdi 2026.',
      alt: 'A felicitation at the National NCD Summit in Shirdi',
    },
    {
      id: 'ncd-summit-panel',
      ...responsive('ncd-summit-panel', 1500, 1000),
      caption: 'A panel discussion at the National NCD Summit.',
      alt: 'Panellists in discussion at the National NCD Summit',
    },
  ] satisfies GalleryItem[],
};

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Let’s stay connected.',
  body: 'For professional enquiries, academic conversations or to connect with Dr. Darwade, please use the email below.',
  name: person.fullName,
  location: 'Dhule, Maharashtra, India',
  email: person.email,
  action: 'Email Dr. Darwade',
  note: 'Please use this contact for general enquiries. Do not send confidential patient information or urgent medical requests through this website.',
};

export const footer = {
  identity: person.fullName,
  supporting: 'Pediatrician & Medical Educator · Dhule, Maharashtra',
  registration: person.registration,
  note: 'This is Dr. Darwade’s personal profile and campaign website. It is not the official website of ACPM Medical College or the Indian Academy of Pediatrics.',
  privacyLink: { label: 'Privacy Policy', href: '/privacy-policy/' },
  backToTop: { label: 'Back to top', href: '/#home' },
  copyright: '© 2026 Dr. Abhinay Bhaskar Darwade. All rights reserved.',
};

typesetAll(person, images, hero, about, work, service, campaign, education, research, gallery, contact, footer);
