import React from 'react'
import { Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'

export const Summary = () => (
  <Section>
    <Subhead>Summary</Subhead>
    <Text>
      Part designer and part developer, I'm excited by the web and the tech that
      makes it possible. I do my best to create measurable value for my company
      by building the best experience for all our users. Making accessible,
      performant, and intuitive frontends is my daily focus.
    </Text>
  </Section>
)
