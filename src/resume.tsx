import React from 'react'
// import path from 'path'
import { Page, Document, StyleSheet } from '@react-pdf/renderer'
import { Header } from './components/header'
import { Summary } from './components/summary'
import { Skills } from './components/skills'
import { Experience } from './components/experience'
import { Education } from './components/education'
import { Contributions } from './components/contributions'
// import { Interests } from './components/interests'

// Font.register({
//   family: 'Inter',
//   fonts: [
//     {
//       src: path.resolve(__dirname, '../assets/fonts/Inter-Regular.otf')
//     },
//     {
//       src: path.resolve(__dirname, '../assets/fonts/Inter-Bold.otf'),
//       fontWeight: 700
//     },
//     {
//       src: path.resolve(__dirname, '../assets/fonts/Inter-Light.otf'),
//       fontWeight: 300
//     }
//   ]
// })
// Font.register({
//   family: 'FuraCode',
//   src: path.resolve(__dirname, '../assets/fonts/Fura-Code-Regular.otf')
// })

const styles = StyleSheet.create({
  page: {
    // fontFamily: 'serif',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#F4F5FC',
    color: '#27262E',
    fontSize: 12,
    lineHeight: 1.5,
    paddingVertical: 32,
    paddingHorizontal: 32
  }
})

export const Resume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Contributions />
      {/* <Interests /> */}
    </Page>
  </Document>
)
