/**
 * Full public Privacy Policy text (brief Section 9). Published as written.
 * Occurrences of the contact email are turned into mailto links when rendered.
 */

import { typesetAll } from './typeset';

export type PolicySection = { number: number; title: string; paragraphs: string[] };

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: 'Last updated: 7 October 2026',
  backLink: { label: 'Back to profile', href: '/#home' },
  intro: [
    'This Privacy Policy explains how information may be handled when you visit Dr. Abhinay Bhaskar Darwade’s personal profile and campaign website or contact him using the links provided on it.',
    'The website presents professional information, selected publications, public education material and campaign information. It does not provide an online medical consultation service, patient portal or voting platform.',
  ],
  sections: [
    {
      number: 1,
      title: 'Website identity and contact',
      paragraphs: [
        'This website presents Dr. Abhinay Bhaskar Darwade’s professional profile and campaign information. For privacy-related enquiries concerning this website, please email dr.abhinaydarwade@gmail.com.',
      ],
    },
    {
      number: 2,
      title: 'Information handled when you browse',
      paragraphs: [
        'You can read this website without creating an account or completing a form. The website application does not provide an enquiry form, collect appointment information, record voting preferences, or request patient records.',
        'The application does not use analytics, advertising pixels, behavioural tracking or session-recording tools. It does not intentionally write cookies or store visitor information in your browser’s local storage.',
        'The service used to host and deliver the website may process technical information such as an IP address, browser information, requested pages, access times and security events. Such information may be used to deliver the website, maintain performance and investigate misuse or security issues. Its handling and retention depend on the hosting service’s configuration and applicable requirements.',
      ],
    },
    {
      number: 3,
      title: 'Information you send by email',
      paragraphs: [
        'If you choose to email Dr. Darwade, the information you provide may include your name, email address and the contents of your message. That information may be used to respond to your enquiry and manage the related correspondence.',
        'Email communication is handled through the email service you use and the recipient’s email service. Please share only information relevant to your general enquiry. Do not send confidential patient records, medical reports or urgent medical requests through the contact link on this website.',
      ],
    },
    {
      number: 4,
      title: 'External links',
      paragraphs: [
        'This website includes links to YouTube, news coverage and research publications. These are ordinary external links; third-party video players and social-media widgets are not automatically embedded in the page.',
        'When you follow an external link, you leave this website. The destination service may process information under its own privacy policy, terms and technical practices. Please review those policies when using the relevant service.',
      ],
    },
    {
      number: 5,
      title: 'Use and sharing of information',
      paragraphs: [
        'Information received through a general enquiry may be used to respond, maintain relevant correspondence and address privacy or security requests. Contacting Dr. Darwade through an email link does not by itself enrol you in a campaign mailing list or messaging service.',
        'Information may be processed by service providers involved in hosting the website or handling email. Information may also be disclosed where required by applicable law or where reasonably necessary to address misuse, security incidents or the protection of legal rights.',
      ],
    },
    {
      number: 6,
      title: 'Retention and security',
      paragraphs: [
        'Enquiry correspondence may be retained for as long as reasonably needed to respond, maintain relevant records or meet applicable requirements. Technical logs are subject to the hosting service’s configuration and applicable requirements.',
        'Appropriate precautions should be taken when handling correspondence and administering the website. No method of internet transmission or electronic storage can be guaranteed to be completely secure. Please avoid sending sensitive information through general email enquiries.',
      ],
    },
    {
      number: 7,
      title: 'Privacy requests',
      paragraphs: [
        'You may email dr.abhinaydarwade@gmail.com to ask about information you have provided, request correction or deletion where applicable, or raise a privacy concern. Please describe your request clearly. Information may be requested to verify your identity where appropriate, and requests will be considered in line with applicable requirements.',
      ],
    },
    {
      number: 8,
      title: 'Children and medical information',
      paragraphs: [
        'The website shares general professional and public education information. It is not designed to collect personal information from children and does not offer a system for submitting children’s medical records.',
        'Information on the website is not a substitute for individual medical advice. For urgent medical concerns, contact an appropriate medical professional or local emergency service rather than relying on this website or its email link.',
      ],
    },
    {
      number: 9,
      title: 'Changes to this policy',
      paragraphs: [
        'This policy may be updated if the website’s features or information-handling practices change. The latest version will be published on this page with an updated date.',
      ],
    },
  ] satisfies PolicySection[],
};

typesetAll(privacyPolicy);
