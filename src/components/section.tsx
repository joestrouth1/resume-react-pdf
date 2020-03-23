import React from 'react'
import { View } from '@react-pdf/renderer'

interface SectionProps {
  style?: React.ComponentProps<typeof View>['style']
  children: React.ReactNode
}
export const Section = ({ style, ...props }: SectionProps) => (
  <View style={{ marginBottom: 16, ...style }} {...props} />
)
