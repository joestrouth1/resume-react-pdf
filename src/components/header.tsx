import React from 'react'
import { Text, View, Link } from '@react-pdf/renderer'
// import { textVariants } from '../base-styles'

export const Header = () => (
  <View style={{ marginBottom: 32, color: '#4F4E5B' }}>
    <Text
      style={{
        fontSize: '32pt',
        lineHeight: 1.25,
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'light',
        color: '#002261'
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
        alignItems: 'baseline',
        marginBottom: 8
      }}
    >
      <Text style={{ marginRight: 8 }}>
        <Link src="tel:+13165186680">(316) 518-6680</Link>
      </Text>
      <Text style={{ marginRight: 8 }}>
        <Link src="mailto:joestrouth1@gmail.com">joestrouth1@gmail.com</Link>
      </Text>
      <Text>
        <Link src="https://www.google.com/maps/place/Wichita,+KS,+USA/">
          Wichita, KS
        </Link>
      </Text>
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
