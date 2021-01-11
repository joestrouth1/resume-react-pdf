interface Experience {
  companyName: string
  title: string
  startMonth: string
  startYear: number
  endMonth?: string
  endYear?: number
  bullets: string[]
}
export const experiences: Experience[] = [
  {
    companyName: 'Principal Financial Group',
    title: 'Software Engineer',
    startMonth: 'May',
    startYear: 2020,
    bullets: [
      'Help lead a small team of software engineers focused on accessibility',
      'Audit and fix accessibility issues across multiple websites',
      'Test pages with multiple browsers and assistive technologies, including NVDA, axe, and ARC Toolkit',
      'Contribute code and documentation to internal design systems',
      'Advocate for accessibility throughout the organization via presentations, writing, and consulting with other teams',
    ],
  },
  {
    companyName: 'CURO Financial Technologies Corp',
    title: 'Frontend Web Developer',
    startMonth: 'Apr',
    startYear: 2019,
    endMonth: 'May',
    endYear: 2020,
    bullets: [
      'Map user journeys, design user interfaces in Figma and Adobe XD',
      'Create design systems and component libraries for new and existing products',
      'Build new web projects with Webpack and Rollup',
      'Develop user interfaces with React, Typescript, Babel, Gatsby, and Emotion',
      'Lead the transition of legacy codebases from jQuery & Bootstrap to modern component-driven architectures',
      'Audit, optimize, and monitor web sites for accessibility, performance and SEO',
    ],
  },
  {
    companyName: 'Open Road Brands, LLC.',
    title: 'Item Maintenance Coordinator',
    startMonth: 'Jan',
    startYear: 2018,
    endMonth: 'Apr',
    endYear: 2019,
    bullets: [
      'Develop APIs in Node.js and TypeScript, provision and deploy to serverless and VM-based infrastructure',
      'Build web applications for internal use with Vue.js, Nuxt, Stencil, Webpack, and SCSS',
      'Integrate Oracle ERP systems with ecommmerce platforms like Walmart, Amazon, eBay, and Disney',
      'Plan, implement, and optimize advertising campaigns on several platforms',
      'Ensure product and inventory data integrity and availability across multiple channels',
    ],
  },
  {
    companyName: 'overstockArt.com',
    title: 'Website and Marketing Manager',
    startMonth: 'Nov',
    startYear: 2015,
    endMonth: 'Jan',
    endYear: 2018,
    bullets: [
      'Use product and marketing analytics to identify optimization opportunities in hotjar and Google Analytics',
      'Design, build, and test improvements to ecommerce UI using Figma and Photoshop',
      'Develop with HTML, CSS, SCSS, jQuery, and Bootstrap',
      'Capture, edit, and archive large quantities of product and lifestyle photographs in an on-site studio',
      'Manage design and distribution of marketing materials like catalogs, email campaigns, and ads',
      'Write search engine optimized product descriptions, blog posts, and press releases',
      'Communicate with global vendors and artists for quality control and customer experience',
    ],
  },
]
