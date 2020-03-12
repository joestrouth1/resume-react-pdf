import React from 'react'
import { Text, View, Link } from '@react-pdf/renderer'
// import { textVariants } from '../base-styles'

export const Header = () => (
  <View>
    <Text
      style={{
        fontSize: '32pt',
        lineHeight: 1.25,
        textAlign: 'center'
      }}
    >
      Joe Strouth
    </Text>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}
    >
      <Link src="tel:+13165186680" style={{ marginRight: 8 }}>
        (316) 518-6680
      </Link>
      <Link src="mailto:joestrouth1@gmail.com" style={{ marginRight: 8 }}>
        joestrouth1@gmail.com
      </Link>
      <Text>Wichita, KS</Text>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}
    >
      <Link
        src="https://www.linkedin.com/in/joestrouth1"
        style={{ marginRight: 8 }}
      >
        LinkedIn
      </Link>
      <Link src="https://www.github.com/joestrouth1">Github</Link>
    </View>
  </View>
)
