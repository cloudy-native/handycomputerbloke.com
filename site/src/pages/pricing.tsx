import { StarIcon } from '@chakra-ui/icons';
import {
  Container,
  Grid,
  GridItem,
  Heading, ListItem, OrderedList, Text,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import InfoCard from '../components/info-card';
import Matrix from '../components/matrix';

interface PricePlan {
  tier: string;
  price: string;
  features: string[];
  timeFrame: string;
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
    ],
    timeFrame: "d"
  },
  {
    tier: 'Cloud Migration Planning',
    price: '$1,000 / day',
    features: [
      'Deeper architecture analysis',
      'Lowest-risk managed services migration',
      'Cost control tooling',
      'Cloud best practices'
    ],
    timeFrame: ""
  },
  {
    tier: 'Cloud Native Evolution',
    price: '$1,000 / day',
    features: [
      'Cloud architecture appraisal',
      'Lowest-risk, highest-value managed services',
      'Planning milestones',
      'Cost estimation'
    ],
    timeFrame: ""
  },
  {
    tier: 'Process Modernization',
    price: '$1,000 / day',
    features: [
      'End state definition',
      'Gap analysis',
      'Best practice implementation',
      'Migration path'
    ],
    timeFrame: ""
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
    <Matrix>
      {prices.map((plan) => (
        <PricingCard plan={plan} />
      ))}
    </Matrix>
  );
}

function EngagementItem(engagement: Engagement) {
  const { kind, steps } = engagement;

  return (
    <VStack spacing={4} align="stretch" >
      <Heading size="md">{kind}</Heading>
      {steps.map((step) => (
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={2}>
            <Text>{step.name}</Text>
          </GridItem>
          <GridItem colSpan={10}>
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
      <VStack spacing={4} align="stretch">
        <Heading fontSize={'xl'}>Typical Engagements and Pricing Guide</Heading>
        <Text>Every engagement is unique and you chose which areas we dig into and how deep you want us to go.
          Having said that, there are common themes and patterns. Here are some of them.</Text>
        {/* <EngagementList /> */}
        <PricingGrid />
      </VStack>
    </Container>
  );
}
