import { StarIcon } from '@chakra-ui/icons';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  OrderedList,
  ListItem,
  Divider
} from '@chakra-ui/react';
import React from 'react';
import InfoCard from '../components/info-card';

interface PricePlan {
  tier: string;
  price: string;
  features: string[];
}

const prices: PricePlan[] = [
  {
    tier: 'Due Diligence',
    price: '$1,000 / day',
    features: [
      'Architecture deep dive',
      'Technical overview',
      'Software development process review',
      'Candid, actionable report'
    ]
  },
  {
    tier: 'Cloud Migration Planning',
    price: '$1,000 / day',
    features: [
      'Deeper architecture analysis',
      'Lowest-risk managed services migration',
      'Cost control tooling',
      'Cloud best practices'
    ]
  },
  {
    tier: 'Cloud Native Evolution',
    price: '$1,000 / day',
    features: [
      'Cloud architecture appraisal',
      'Lowest-risk, highest-value managed services',
      'Planning milestones',
      'Cost estimation'
    ]
  },
  {
    tier: 'Process Modernization',
    price: '$1,000 / day',
    features: [
      'End state definition',
      'Gap analysis',
      'Best practice implementation',
      'Migration path'
    ]
  }
];

interface EngagementStep {
  name: string;
  actions: string[];
}

interface Engagement {
  kind: string;
  steps: EngagementStep[];
}

const engagements: Engagement[] = [
  {
    kind: 'Due Diligence',
    steps: [
      {
        name: 'Preparation',
        actions: ['Review collateral', 'Something else', 'And another thing']
      },
      {
        name: 'Interviews',
        actions: [
          'Interview key stakeholders and leadership',
          'Interview engineering leads',
          'Interview individual contributors',
          'Document current state of the software and the team'
        ]
      }
    ]
  },
  {
    kind: 'Cloud Migration',
    steps: [
      {
        name: 'Evaluate current infrastructure',
        actions: ['foo', 'bar', 'baz']
      }
    ]
  }
];

function PricingCard({ plan }) {
  const { tier, price, features } = plan;

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="xl">{tier}</Heading>
        <Text color="gray.500">{price}</Text>
        <VStack align="stretch">
          {features.map((feature) => (
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem>
                <StarIcon color="green.500" />
              </GridItem>
              <GridItem colSpan={11}>
                <Text>{feature}</Text>
              </GridItem>
            </Grid>
          ))}
        </VStack>
      </VStack>
    </InfoCard>
  );
}

function PricingGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'10'} mx={'auto'}>
      {prices.map((plan) => (
        <PricingCard plan={plan} />
      ))}
    </SimpleGrid>
  );
}

function EngagementItem(engagement: Engagement) {
  const { kind, steps } = engagement;

  return (
    <VStack spacing={4} align="stretch" divider={<Divider />}>
      <Heading>{kind}</Heading>
      {steps.map((step) => (
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={3}>
            <Text>{step.name}</Text>
          </GridItem>
          <GridItem colSpan={9}>
            <OrderedList>
              {step.actions.map((action) => (
                <ListItem>{action}</ListItem>
              ))}
            </OrderedList>
          </GridItem>
        </Grid>
      ))}
    </VStack>
  );
}

function EngagementList() {
  return (
    <>
      {engagements.map((engagement) => (
        <EngagementItem {...engagement} />
      ))}
    </>
  );
}

export default function PricingPage() {
  return (
    <Container maxWidth="100%" p={0} mt={10}>
      <VStack spacing={10}>
        <Heading>Engagement Pricing</Heading>
        <PricingGrid />
        <Heading>Methodology</Heading>
        <EngagementList />
      </VStack>
    </Container>
  );
}
