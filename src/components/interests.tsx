import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'
export const Interests = () => (
  <Section>
    <Subhead>Interests</Subhead>
    <View>
      <Text>Reading</Text>
      <Text>Travel</Text>
      <Text>Gaming</Text>
      <Text>Art</Text>
    </View>
  </Section>
)
