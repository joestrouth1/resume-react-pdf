import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link
} from '@react-pdf/renderer'
import { Header } from './components/header'
import { experiences } from './work-experience'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#fafafa',
    color: '#333333'
  }
})

const Summary = () => (
  <View>
    <Text>Summary</Text>
    <Text>
      Part designer and part developer, I'm excited by the web and the tech that
      makes it possible. I do my best to create measurable value for my company
      by building the best experience for all our users. Making accessible,
      performant, and intuitive frontends is my daily focus.
    </Text>
  </View>
)

const Skills = () => (
  <View>
    <Text>Skills</Text>
    <Text>Expert: HTML, CSS, Javascript, Vue.js, Figma, Adobe Photoshop</Text>
    <Text>
      Advanced: TypeScript, React.js, Gatsby, GraphQL, Node.js, UI/UX Design
    </Text>
    <Text>Intermediate: Accessibility, Webpack, SCSS, jQuery, Bootstrap</Text>
  </View>
)

const ExperienceBullet = (props: { children: React.ReactNode }) => (
  <View>
    <Text>• {props.children}</Text>
  </View>
)
interface TimeSpanProps {
  startMonth: string
  startYear: number
  endMonth?: string
  endYear?: number
}
const TimeSpan = ({
  startMonth,
  startYear,
  endMonth,
  endYear
}: TimeSpanProps) => {
  const isPresent = !endMonth && !endYear
  return (
    <Text>
      {startMonth} {startYear}
      {isPresent ? ` - Present` : `${endMonth} ${endYear}`}
    </Text>
  )
}
const Experience = () => (
  <View>
    <Text>Experience</Text>
    {experiences.map(
      ({
        companyName,
        title,
        startMonth,
        startYear,
        endMonth,
        endYear,
        bullets
      }) => (
        <View key={`${companyName}_${title}`}>
          <View>
            <Text>{title}</Text>
            <TimeSpan
              startMonth={startMonth}
              startYear={startYear}
              endMonth={endMonth}
              endYear={endYear}
            />
          </View>
          <Text>{companyName}</Text>
          {bullets.map(bullet => (
            <ExperienceBullet key={bullet}>{bullet}</ExperienceBullet>
          ))}
        </View>
      )
    )}
  </View>
)

const Education = () => (
  <View>
    <Text>Education</Text>
    <Text>Bachelors of Fine Arts, Art History</Text>
    <Text>Wichita State University, 2016</Text>
  </View>
)

const Contributions = () => (
  <View>
    <Text>Open Source Contributions</Text>
    <Link src="https://github.com/system-ui/theme-ui">system-ui/theme-ui</Link>
    <Link src="https://github.com/prisma/prisma">prisma/prisma</Link>
    <Link src="https://github.com/apache/tinkerpop">apache/tinkerpop</Link>
    <Link src="https://github.com/adobe/leonardo">adobe/leonardo</Link>
    <Link src="https://github.com/webcomponents/polyfills">
      webcomponents/polyfills
    </Link>
  </View>
)

const Interests = () => (
  <View>
    <Text>Interests</Text>
    <View>
      <Text>Reading</Text>
      <Text>Travel</Text>
      <Text>Gaming</Text>
      <Text>Art</Text>
    </View>
  </View>
)

export const Resume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Contributions />
      <Interests />
    </Page>
  </Document>
)
