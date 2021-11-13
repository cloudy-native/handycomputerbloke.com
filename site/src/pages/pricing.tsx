import { StarIcon } from '@chakra-ui/icons';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Text,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import InfoCard from '../components/info-card';
import Matrix from '../components/matrix';

interface PricePlan {
  tier: string;
  price: string;
  features: string[];
}

const prices: PricePlan[] = [
  {
    tier: 'Due Diligence',
    price: '$1,250 / day',
    features: [
      'Architecture deep dive',
      'Technical overview',
      'Software development process review',
      'Candid, actionable report'
    ]
  },
  {
    tier: 'Cloud Migration Planning',
    price: '$1,250 / day',
    features: [
      'Deeper architecture analysis',
      'Lowest-risk managed services migration',
      'Cost control tooling',
      'Cloud best practices'
    ]
  },
  {
    tier: 'Cloud Migration Groundwork',
    price: '$1,250 / day',
    features: [
      'Create accounts and implement single sign on',
      'Connect observability tools',
      'Set up cost controls',
      'Implement configuration governance',
      'Establish data center connectivity'
    ]
  },
  {
    tier: 'Cloud Migration Execution',
    price: '$1,250 / day',
    features: [
      'Decouple the first service from the monolith, including databases',
      "Migrate the service as-is: Don't worry about cloud-native yet",
      'Decouple and deploy piece by piece at your own pace, mirroring Data Center',
      "You're in the cloud and it looks like your data center. Lock the colo cage and walk away"
    ]
  },
  {
    tier: 'Cloud Native Evolution',
    price: '$1,250 / day',
    features: [
      'Cloud architecture appraisal',
      'Migrate legacy services to lowest-risk, highest-value managed services',
      'Planning milestones',
      'Cost estimation'
    ]
  },
  {
    tier: 'Process Modernization',
    price: '$1,250 / day',
    features: [
      'End state definition, including Infrastructure-as-Code, CI/CD, Agile process tooling',
      'Gap analysis',
      'Migration path',
      'Best practice implementation'
    ]
  }
];

interface EngagementStep {
  name: string;
  actions: string[];
}

function PricingCard({ plan }) {
  const { tier, price, features } = plan;

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="lg">{tier}</Heading>
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

export default function PricingPage() {
  return (
    <VStack spacing={4} align="stretch">
      <Heading fontSize={'xl'}>Engagement Pricing</Heading>
      <PricingGrid />
    </VStack>
  );
}
