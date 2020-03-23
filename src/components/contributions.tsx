import React from 'react'
import { Link, StyleSheet } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'

const styles = StyleSheet.create({
  link: {
    // fontFamily: 'sans-serif'
  }
})

export const Contributions = () => (
  <Section>
    <Subhead>Open Source Contributions</Subhead>
    <Link style={styles.link} src="https://github.com/system-ui/theme-ui">
      system-ui/theme-ui
    </Link>
    <Link style={styles.link} src="https://github.com/prisma/prisma">
      prisma/prisma
    </Link>
    <Link style={styles.link} src="https://github.com/apache/tinkerpop">
      apache/tinkerpop
    </Link>
    <Link style={styles.link} src="https://github.com/adobe/leonardo">
      adobe/leonardo
    </Link>
    <Link style={styles.link} src="https://github.com/webcomponents/polyfills">
      webcomponents/polyfills
    </Link>
  </Section>
)
