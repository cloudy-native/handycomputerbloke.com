import { CheckIcon } from '@chakra-ui/icons'
import {
  Grid,
  GridItem,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import InfoCard from '../components/info-card'
import Matrix from '../components/matrix'

interface PricingPlan {
  tier: string
  price: string
  features: string[]
}

const dueDiligencePricingPlans: PricingPlan[] = [
  {
    tier: 'Techical Due Diligence',
    price: '$1,650 / day',
    features: [
      'Architecture deep dive',
      'Technical overview',
      'Software development process review',
      'Candid, actionable report',
    ],
  },
]

const cloudPricingPlans: PricingPlan[] = [
  {
    tier: 'Cloud Migration Planning',
    price: '$1,650 / day',
    features: [
      'Deeper architecture analysis',
      'Lowest-risk managed services migration',
      'Cost control tooling',
      'Cloud best practices',
    ],
  },
  {
    tier: 'Cloud Migration Groundwork',
    price: '$1,650 / day',
    features: [
      'Create accounts, organization, and implement single sign-on',
      'Implement security governance',
      'Connect observability tools',
      'Set up cost controls',
      'Establish data center connectivity',
    ],
  },
  {
    tier: 'Cloud Migration Execution',
    price: '$1,650 / day',
    features: [
      'Decouple the first service from the monolith, including databases',
      "Migrate the service as-is: Don't worry about cloud-native just yet",
      'Decouple and deploy piece by piece at your own pace, mirroring Data Center',
      "You're in the cloud and it looks like your data center: Lock the colo cage and walk away",
    ],
  },
  {
    tier: 'Cloud Native Evolution',
    price: '$1,650 / day',
    features: [
      'Cloud architecture appraisal',
      'Migrate legacy services to lowest-risk, highest-value public cloud managed services',
      'Planning milestones',
      'Cost estimation',
    ],
  },
]

const technicalTeamPricingPlans: PricingPlan[] = [
  {
    tier: 'Leveling Up Workshops',
    price: '$1,650 / day',
    features: [
      'Introduction to public cloud',
      'Coding best practices',
      'Debugging skills',
      'Learning a new framework or language',
    ],
  },
  {
    tier: 'Architecture Patterns',
    price: '$1,650 / day',
    features: [
      'Event-driven for cloud-native architectures',
      'Horizontal scaling',
      'Resiliency and circuit breakers',
      'Excellent non-function requirements (NFRs)',
    ],
  },
  {
    tier: 'Process Modernization',
    price: '$1,650 / day',
    features: [
      'End state definition, including Infrastructure-as-Code, CI/CD, Agile process tooling',
      'Gap analysis',
      'Migration path',
      'Best practice implementation',
    ],
  },
]

function PricingCard({ plan }) {
  const { tier, price, features } = plan

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="lg">{tier}</Heading>
        <Text>{price}</Text>
        <VStack align="stretch">
          {features.map((feature) => (
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem>
                <CheckIcon
                  color={useColorModeValue('green.500', 'green.400')}
                />
              </GridItem>
              <GridItem colSpan={11}>
                <Text>{feature}</Text>
              </GridItem>
            </Grid>
          ))}
        </VStack>
      </VStack>
    </InfoCard>
  )
}

function PricingGrid({ heading, pricingPans }) {
  return (
    <>
      <Heading>{heading}</Heading>
      <Matrix>
        {pricingPans.map((plan) => (
          <PricingCard plan={plan} />
        ))}
      </Matrix>
    </>
  )
}

interface StatsCardProps {
  title: string
  stat: number
}

const statsCards: StatsCardProps[] = [
  { title: 'Technical Due Diligence', stat: 9 },
  { title: 'Cloud Migration Execution', stat: 3 },
  { title: 'Cloud Native Evolution', stat: 3 },
  { title: 'Leveling Up Workshops', stat: 2 },
]

function StatsGrid() {
  return (
    <Matrix columns={{ sm: 1, md: 4 }}>
      {statsCards.map((card, index) => (
        <InfoCard lightBackground="green.100" darkBackground="green.700">
          <Stat>
            <StatLabel isTruncated>{card.title}</StatLabel>
            <StatNumber>{card.stat}</StatNumber>
          </Stat>
        </InfoCard>
      ))}
    </Matrix>
  )
}

export default function EngagementsPage() {
  return (
    <VStack spacing={4} align="stretch">
      <Heading>Engagements By the Numbers</Heading>
      <StatsGrid />
      <PricingGrid
        heading="Due Diligence"
        pricingPans={dueDiligencePricingPlans}
      />
      <PricingGrid heading="Cloud" pricingPans={cloudPricingPlans} />
      <PricingGrid
        heading="Technical Team"
        pricingPans={technicalTeamPricingPlans}
      />
    </VStack>
  )
}
