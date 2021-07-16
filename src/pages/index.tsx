import { CheckIcon } from '@chakra-ui/icons';
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
  Spacer,
  Image
} from '@chakra-ui/react';
import React from 'react';
import InfoCard from '../components/info-card';

interface ServiceCardProps {
  heading: string;
  blurb: string[];
}

const services: ServiceCardProps[] = [
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
    role: 'Private Equity Due Diligence Partnership',
    content:
      'We needed a deeper dive on [company] after we liked the books, people, and product. We brought in SHC for tech due diligence. In 2 days flat they worked the software, the team, infrastructure, and process from head to toe. '
  },
  {
    role: 'CTO, same company',
    content:
      "I can't believe they picked up on all that in 2 days."
  },
  {
    role: 'Venture Capital Principal',
    content:
      `You always manage to get to the "and then a miracle happens" when a company presents their ideas.`
  }
];

interface QuestionCardProps {
  question: string;
  answers: string[];
}

const questions: QuestionCardProps[] = [
  {
    question: "Where's your architecture diagram?",
    answers: [
      '⚠️ Let me send you the PowerPoint.',
      "⚠️ ⚠️ Here it is, but it's very out of date."
    ]
  },
  {
    question: 'Can I see a Pull Request?',
    answers: ["⚠️ ⚠️ We don't use PRs.", `❌ ❌ No you can't.`]
  },
  {
    question: 'How do you plan sprints?',
    answers: [
      "⚠️ Not sure who has it right now, but there's a spreadsheet.",
      '❌ ❌ We invented our own version of Agile and have one long sprint really.'
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
      'Start with the lowest-friction components. Like anything running on a provisioned VM after the forklift that has a managed service equivalent.',
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

function ServiceCard(props: ServiceCardProps) {
  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="md">{props.heading}</Heading>
        {props.blurb.map((t) => (
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
  return (
    <InfoCard>
      <VStack spacing={4} align="stretch">
        <Heading size="md">{solutionCardProps.topic}</Heading>
        {solutionCardProps.solutions.map((t) => (
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

function ServicesGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
      <InfoCard>
        <Flex>
          <Spacer />
          <Image
            src="https://d1ckzwk0wp36d2.cloudfront.net/desk3.jpeg"
            fit="scale-down"
            maxWidth="sm"
          />
          <Spacer />
        </Flex>
      </InfoCard>
      {services.map((cardInfo, index) => (
        <ServiceCard {...cardInfo} />
      ))}
    </SimpleGrid>
  );
}

function TestimonialGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} mx={'auto'}>
      {testimonials.map((cardInfo, index) => (
        <TestimonialCard {...cardInfo} />
      ))}
      <InfoCard>
        <Flex>
          <Spacer />
          <Image
            src="https://d1ckzwk0wp36d2.cloudfront.net/desk3.jpeg"
            fit="scale-down"
            maxWidth="sm"
          />
          <Spacer />
        </Flex>
      </InfoCard>
    </SimpleGrid>
  );
}

function QuestionGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} mx={'auto'}>
      {questions.slice(0, 3).map((cardInfo, index) => (
        <QuestionCard {...cardInfo} />
      ))}
      <InfoCard>
        <Flex>
          <Spacer />
          <Image
            src="https://d1ckzwk0wp36d2.cloudfront.net/bench.jpeg"
            fit="scale-down"
            maxWidth="sm"
          />
          <Spacer />
        </Flex>
      </InfoCard>
      {questions.slice(3, 6).map((cardInfo, index) => (
        <QuestionCard {...cardInfo} />
      ))}
    </SimpleGrid>
  );
}

function SolutionGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} mx={'auto'}>
      {solutions.map((cardInfo, index) => (
        <SolutionCard {...cardInfo} />
      ))}
    </SimpleGrid>
  );
}

function Splash() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} >
      <VStack align="stretch" spacing={10}>
        <InfoCard>
          <VStack spacing={10} >
            <Heading>Technical evaluation</Heading>
            <Heading>Tailored to purpose</Heading>
            <Heading>On your schedule</Heading>
          </VStack>
        </InfoCard>
        <InfoCard>
          <VStack spacing={10}>
            <Heading>Nowhere to hide</Heading>
            <Heading>Brutally honest</Heading>
            <Heading>Actionable</Heading>
          </VStack>
        </InfoCard>
      </VStack>
      <InfoCard>
        <Flex>
          <Spacer />
          <Image
            src="https://d1ckzwk0wp36d2.cloudfront.net/waterfront.jpeg"
            fit="scale-down"
            maxWidth="sm"
          />
          <Spacer />
        </Flex>
      </InfoCard>
    </SimpleGrid>
  )
}

function IndexPage() {
  return (
    <Container maxWidth="100%" p={0} mt={10}>
      <VStack spacing={10} maxWidth="100%" align="stretch">
        <Splash />
        <Heading>Services</Heading>
        <ServicesGrid />
        {/* <Heading>People Say Nice Things</Heading>
        <TestimonialGrid /> */}
        <VStack align="stretch">
          <Heading>Revealing Questions and Awkward Answers</Heading>
          <Text>⚠️ = warning sign<br />❌ = serious concern<br />(These really happened)</Text>
        </VStack>
        <QuestionGrid />
        <VStack align="stretch">
          <Heading>Solutions</Heading>
          <Text>Building on our core competency of Technical Due Diligence, we will work with you tirelessly
            to make initiatives like the following successful. We are strongly opinionated but not dogmatic or arbitrary.
          </Text>
          <Text>For example, we leverage open source frameworks whenever we can. Competitive advantage is what you build 
            on OSS with the time you save not building the foundation yourself. However, if you're modernizing legacy code
            that has a strong "not invented here" bias, we're not going to make you use Spring Boot just because. Not at all.
          </Text>
          <Text>So we never "boil the ocean," believing that successful evolutions are always incremental and always deployable. We'll note that
            doing so is often at least as hard as the task itself.
          </Text>
        </VStack>
        <SolutionGrid />
      </VStack>
    </Container>
  );
}

export default IndexPage;
