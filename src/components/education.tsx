import React from 'react'
import { Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'
export const Education = () => (
  <Section>
    <Subhead>Education</Subhead>
    <Text style={{ fontWeight: 'bold' }}>
      Bachelors of Fine Arts, Art History
    </Text>
    <Text>Wichita State University, 2016</Text>
  </Section>
)
