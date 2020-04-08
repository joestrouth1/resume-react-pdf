import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'
import { certifications } from '../certifications'

export const Certifications = () => (
  <Section>
    <Subhead>Certifications</Subhead>
    {certifications.map(({ issuedBy, title }, index) => (
      <View
        key={`${issuedBy}_${title}`}
        style={{
          marginBottom: index === certifications.length - 1 ? 0 : 8,
        }}
        wrap={false}
      >
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text>{issuedBy}</Text>
      </View>
    ))}
  </Section>
)
