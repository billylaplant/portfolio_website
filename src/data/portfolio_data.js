// All personal content for the site lives in this file.

export const profile = {
  name: 'Billy LaPlant',
  headline: 'Manufacturing Engineer at Subaru of Indiana Automotive, Purdue MBT Student',
  // Resume PDF in public/. Set to '' to hide the resume button and link.
  resume: '/billy_laplant_resume.pdf',
  bio: 'I work in the advanced manufacturing planning group at SIA. Through my job and in my classes, I research and implement new technologies in DevOps and manufacturing. I find cost-cutting, fast automation solutions and create business cases with the value and often see the project to completion.',
}

// Skill level is 'Familiar', 'Proficient' or 'Expert'. Leave as '' to show no bar.
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', level: 'Familiar' },
      { name: 'PLC', level: 'Proficient' },
      { name: 'Java', level: 'Familiar' },
      { name: 'C', level: 'Proficient' },
      { name: 'C#', level: 'Familiar' },
      { name: 'Visual Basic', level: 'Proficient' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'Google Cloud Run', level: 'Familiar' },
      { name: 'Claude Code', level: 'Proficient' },
      { name: 'Visual Studio Code', level: 'Familiar' },
    ],
  },
  {
    group: 'Engineering',
    items: [
      { name: 'AutoCAD', level: 'Proficient' },
      { name: 'CATIA', level: 'Familiar' },
      { name: 'SolidWorks', level: 'Proficient' },
      { name: 'Mitsubishi PLC', level: 'Proficient' },
      { name: 'FANUC robots', level: 'Familiar' },
    ],
  },
]

// Leave link as '' to hide the "View project" button.
// Image is optional: put the file in public/images/projects/ and set
// image to '/images/projects/<file name>', with a short imageAlt description.
export const projects = [
  {
    title: 'Hello API',
    description: 'Built website with 2-way messaging.',
    tags: ['Visual Studio Code', 'Google Cloud Run', 'Claude Code', 'Gemini'],
    link: 'https://hello-api-1054166105150.us-central1.run.app/',
    image: '/images/projects/hello_api.png',
    imageAlt: 'Hello API website with Gemini generated Haiku.',
  },
  {
    title: 'Web Scraping API',
    description:
      'Built custom web-scraping API with RAG chat for publicly available air permit documents. Chat can answer questions like "How much NOx does Company X emit annually?"',
    tags: ['Google Colab', 'Gemini'],
    link: '',
    image: '/images/projects/rag.png',
    imageAlt: 'RAG that reads pdf and answers questions about the content of the pdf.',
  },
  {
    title: 'Predictive Maintenance Model',
    description:
      'Built custom solar tracking model to catch unexpected maintenance requirements instantly. The model uses historical weather data to match the actual array output with expected output.',
    tags: ['Amazon Quick', 'API'],
    link: '',
    image: '/images/projects/solar_pm.png',
    imageAlt: 'Rooftop solar array.',
  },
]

export const awards = [
  { title: 'Eagle Scout', issuer: 'Troop 133', year: '2014' },
]

export const contact = {
  email: 'blaplant56@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/billylaplant' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/billylaplant/' },
  ],
}
