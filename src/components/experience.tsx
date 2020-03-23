import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import { Section } from './section'
import { Subhead } from './subhead'
import { experiences } from '../work-experience'

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
      {startMonth} {startYear} -{' '}
      {isPresent ? `Present` : `${endMonth} ${endYear}`}
    </Text>
  )
}

const ExperienceBullet = (props: { children: React.ReactNode }) => (
  <View>
    <Text>• {props.children}</Text>
  </View>
)

export const Experience = () => (
  <Section>
    <Subhead>Experience</Subhead>
    {experiences.map(
      (
        {
          companyName,
          title,
          startMonth,
          startYear,
          endMonth,
          endYear,
          bullets
        },
        index
      ) => (
        <View
          key={`${companyName}_${title}`}
          style={{
            marginBottom: index === experiences.length - 1 ? 0 : 8
          }}
          wrap={false}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'baseline'
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
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
  </Section>
)
