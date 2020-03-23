import React from 'react'
import { Text } from '@react-pdf/renderer'

interface SubheadProps {
  style?: React.ComponentProps<typeof Text>['style']
  children: React.ReactNode
}
export const Subhead = (props: SubheadProps) => (
  <Text
    style={{
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.2,
      fontSize: 16,
      lineHeight: 1.25,
      color: '#894202',
      marginBottom: 4
    }}
    {...props}
  />
)
