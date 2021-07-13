import { CheckIcon, InfoIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Divider,
  Box,
  Spacer
} from '@chakra-ui/react';
import React from 'react';
import InfoCard from '../components/info-card';

interface HeroCardProps {
  heading: string;
  blurb: string[];
}

const hero: HeroCardProps[] = [
  {
    heading: 'Technical Due Diligence',
    blurb: [
      "You're the Due Diligence Team looking at a software company.",
      "You need help with the technical part and that's where we come in. We conduct a thorough, nowhere-to-hide technical evaluation.",
      'Our reports are always as candid as they are actionable.'
    ]
  },
  {
    heading: 'Architecture Evolution',
    blurb: [
      'This is conducting Due Diligence on yourself.',
      "Often, this comes about because you made or inherited a monolith and it's time to fix it.",
      "We all migrate to the cloud in time. This might be the journey you're on and we will partner with you using low-risk, battle-hardened patterns.",
      "We're brutally honest. If your architecture is broken, we'll let you know. We'll be nice about it. But trust us."
    ]
  },
  {
    heading: 'Technical Debt Remediation',
    blurb: [
      "As seasoned, hands-on veterans of the software industry we know what makes things work. And of course what doesn't.",
      "We've taken components a company deems too risky to touch and reworked them to be less scary.",
      'We never boil the ocean when we refactor legacy code. Instead, we spend the time it takes up front to plan incremental testable, deployable evolutions.'
    ]
  }
];

interface TestimonialCardProps {
  role: string;
  content: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    role: 'Private Equity Due Diligence',
    content:
      'We needed a deeper dive on [company] after we liked the books, people, and product. We brought in SHC for tech due diligence. In 2 days flat they worked the software, the team, infrastructure, and process from head to toe. '
  },
  {
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!"
  },
  {
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!"
  },
  {
    role: 'Musician',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!'
  }
];

interface QuestionCardProps {
  question: string;
  answers: string[];
}

const questions: QuestionCardProps[] = [
  {
    question: 'How do you plan sprints?',
    answers: [
      "⚠️ Not sure who has it right now, but there's a spreadsheet.",
      '❌ ❌ We invented our own version of Agile and have one long sprint really.'
    ]
  },
  {
    question: 'Can I see a Pull Request?',
    answers: ["⚠️ ⚠️ We don't use PRs.", `❌ ❌ No you can't.`]
  },
  {
    question: 'Can show me your longest open PR and unmerged branch?',
    answers: [
      "⚠️ This PR was made by [redacted] who doesn't work here anymore and we don't want to delete it.",
      '⚠️ ⚠️ This branch is for the [redacted] feature but there are so many conflicts everything broke when we merged.'
    ]
  },
  {
    question: "Where's your architecture diagram?",
    answers: [
      '⚠️ Let me send you the PowerPoint.',
      "⚠️ ⚠️ Here it is, but it's very out of date."
    ]
  },
  {
    question: "What's your unit test coverage?",
    answers: [
      "⚠️ It's really good in the [redacted] module but everything else we test manually.",
      '❌ ❌ ❌ We can write code faster without them.'
    ]
  },
  {
    question:
      'Why is your AWS bill breakdown different to the architecture diagram you just showed us?',
    answers: ["⚠️ We don't know."]
  }
];

interface SolutionCardProps {
  topic: string;
  solutions: string[];
}

const solutions: SolutionCardProps[] = [
  {
    topic: 'Cloud Migration',
    solutions: [
      "It's OK to start with forklift because it's low risk and you mostly have the skills already.",
      "Think about cloud-native as a fast follow. But please think about it. That's our specialty.",
      'Pick the same cloud provider everyone else uses.'
    ]
  },
  {
    topic: 'Cloud Native',
    solutions: [
      "Don't hesitate. Running your forklift migration in the cloud is not cloud native. Using managed services is.",
      'Start with the lowest-friction components. Like anything running on bare metal after the forklift that has a managed service equivalent.',
      "Either migrate something to a managed service, or optimize something that's already native. But please not both at the same time."
    ]
  },
  {
    topic: 'Architecture Evolution',
    solutions: [
      'Make a manifest.',
      'Distinguish carefully between synchronous/transactional and event-driven/eventually-consistent because they have very different designs.',
      'Draw up service-level agreements (SLAs) for non-functional requirements (NFRs)—like throughput and latency—for each component separately.'
    ]
  },
  {
    topic: 'Production Readiness',
    solutions: [
      'Make all metrics observable independently.',
      'Observe them.',
      'Define and follow a mandatory "Definition of Done."',
      'Eliminate manual production access by default.',
      'Use Infrastructure-as-Code (IaC) and deploy automatically.'
    ]
  }
];

function TestimonialCard(props: TestimonialCardProps) {
  const { role, content } = props;

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Text>{content}</Text>
        <Text size="sm" color="gray.500">
          — {role}
        </Text>
      </VStack>
    </InfoCard>
  );
}

function HeroCard(heroCardProps: HeroCardProps) {
  const { heading, blurb } = heroCardProps;

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="md">{heading}</Heading>
        {blurb.map((t) => (
          <Text>{t}</Text>
        ))}
      </VStack>
    </InfoCard>
  );
}

function QuestionCard(questionCardProps: QuestionCardProps) {
  const { question, answers } = questionCardProps;

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem>Q:</GridItem>
          <GridItem colSpan={11}><Text fontWeight="1000">{question}</Text></GridItem>
        </Grid>
        <Divider />
        {answers.map((answer) => (
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem>A:</GridItem>
            <GridItem colSpan={11}>{answer}</GridItem>
          </Grid>
        ))}
      </VStack>
    </InfoCard>
  );
}

function SolutionCard(solutionCardProps: SolutionCardProps) {
  const { topic, solutions } = solutionCardProps;

  return (
    <InfoCard>
      <VStack spacing={4} align="stretch">
        <Heading size="md">{topic}</Heading>
        {solutions.map((t) => (
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem>
              <CheckIcon color="green.500" />
            </GridItem>
            <GridItem colSpan={11}>
              <Text>{t}</Text>
            </GridItem>
          </Grid>
        ))}
      </VStack>
    </InfoCard>
  );
}

function HeroGrid() {
  return (
    <Flex>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        {hero.map((cardInfo, index) => (
          <HeroCard {...cardInfo} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

function TestimonialGrid() {
  return (
    <Flex>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'10'} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

function QuestionGrid() {
  return (
    <Flex>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'10'} mx={'auto'}>
        {questions.map((cardInfo, index) => (
          <QuestionCard {...cardInfo} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

function SolutionGrid() {
  return (
    <Flex>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'10'} mx={'auto'}>
        {solutions.map((cardInfo, index) => (
          <SolutionCard {...cardInfo} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

function IndexPage() {
  return (
    <Container maxWidth="100%" p={0} mt={10}>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'10'} mx={'auto'}>
        <Heading>Nowhere-to-Hide Technical Evaluation</Heading>
        <Heading>On your terms</Heading>
        <Heading>On your schedule</Heading>
      </SimpleGrid>
      <VStack spacing="10" maxWidth="100%"> 
        <Divider />
        <HeroGrid />
        <Heading>People Say Nice Things</Heading>
        <TestimonialGrid />
        <VStack>
          <Heading>Revealing Questions and Awkward Answers</Heading>
          <Text>⚠️ = warning sign, ❌ = serious concern. (These really happened.)</Text>
        </VStack>
        <QuestionGrid />
        <Heading>Solutions</Heading>
        <SolutionGrid />
      </VStack>
    </Container>
  );
}

export default IndexPage;
