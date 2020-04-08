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
    companyName: 'CURO Financial Technologies Corp',
    title: 'Frontend Web Developer',
    startMonth: 'Apr',
    startYear: 2019,
    bullets: [
      'Map user journeys, design user interfaces in Figma and Adobe XD',
      'Create design systems and component libraries for new and existing products',
      'Build new web projects with tools like Webpack and Rollup',
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
      'Integrate Oracle ERP systems with third-party ecommmerce platforms like Walmart, Amazon, eBay, and Disney',
      'Develop APIs in Node.js and TypeScript, provision and deploy to serverless and VM-based infrastructure',
      'Plan, propose, implement, and optimize advertising campaigns for products on several platforms',
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
      'Collaborate with an international remote team on a git-managed codebase for the purpose of conversion rate optimization, feature development, content management, updating of promotional material, and refining design',
      'Capture, edit, upload, archive, and maintain/update large quantities of product and lifestyle photographs',
      'Manage design and distribution of promotional/marketing materials like catalogs, email campaigns, and search and display ads',
      'Write search engine optimized e-commerce web copy, blog posts, and press releases',
      'Design and optimize lead generation and email marketing campaigns',
      'Communicate with a global community of vendors and artists to facilitate quality control and a smooth customer experience',
    ],
  },
]
