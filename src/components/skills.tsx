import React from 'react'
import { Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'
export const Skills = () => (
  <Section>
    <Subhead>Skills</Subhead>
    <Text>Expert: HTML, CSS, Javascript, Vue.js, Figma, Adobe Photoshop</Text>
    <Text>
      Advanced: TypeScript, React.js, Gatsby, GraphQL, Node.js, UI/UX Design
    </Text>
    <Text>
      Intermediate: WCAG Accessibility, Angular, Webpack, SCSS, jQuery,
      Bootstrap
    </Text>
  </Section>
)
