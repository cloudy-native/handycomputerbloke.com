import { CheckIcon } from '@chakra-ui/icons';
import { Divider, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import InfoCard from '../components/info-card';
import Matrix from '../components/matrix';

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
    heading: 'Architecture Deep Dive',
    blurb: [
      'This is conducting Due Diligence on yourself.',
      "Often, this comes about because you made or inherited a monolith and it's time to fix it.",
      "We all migrate to the cloud in time. This might be the journey you're on and we will partner with you using low-risk, battle-hardened patterns.",
      "We're honest. If your architecture is broken, we'll let you know. We'll be nice about it. But trust us."
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

interface QuestionCardProps {
  question: string;
  answers: string[];
}

const questions: QuestionCardProps[] = [
  {
    question: "Where's your architecture diagram?",
    answers: [
      'Let me send you the PowerPoint.',
      "Here it is, but it's very out of date."
    ]
  },
  {
    question: 'Can I see a Pull Request?',
    answers: ["We don't use PRs.", `No you can't.`]
  },
  {
    question: 'How do you plan sprints?',
    answers: [
      "Not sure who has it right now, but there's a spreadsheet.",
      'We invented our own version of Agile and have one long sprint really.'
    ]
  },
  {
    question: "What's your unit test coverage?",
    answers: [
      "It's really good in the [redacted] module but everything else we test manually.",
      'We can write code faster without them.'
    ]
  },
  {
    question:
      'Why is your AWS bill breakdown different to the architecture diagram you just showed us?',
    answers: ["We don't know."]
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

interface SplashCardProps {
  splash: string[]
}

const splashCards: SplashCardProps[] = [
  {
    splash: ['Technical evaluation', 'Tailored for you', 'Nowhere to hide']
  },
  {
    splash: [`Proven expertise`, 'Politely candid', 'Always actionable']
  }
]

function ServiceCard(props: ServiceCardProps) {
  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="md">{props.heading}</Heading>
        {props.blurb.map((t, index) => (
          <Text key={index}>{t}</Text>
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
        {answers.map((answer, index) => (
          <Grid key={index} templateColumns="repeat(12, 1fr)">
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
        {solutionCardProps.solutions.map((t, index) => (
          <Grid key={index} templateColumns="repeat(12, 1fr)">
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
    <Matrix>
      {/* <Image
        maxH={'xs'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        src={'https://d1ckzwk0wp36d2.cloudfront.net/desk2.jpeg'}
      /> */}
      {services.map((cardInfo, index) => (
        <ServiceCard key={index}{...cardInfo} />
      ))}
    </Matrix>
  );
}

function QuestionGrid() {
  return (
    <Matrix>
      {questions.slice(0, 3).map((cardInfo, index) => (
        <QuestionCard key={index} {...cardInfo} />
      ))}
      <Image
        maxH={'xs'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        src={'https://d1ckzwk0wp36d2.cloudfront.net/bench.jpeg'}
      />
      {questions.slice(3, 6).map((cardInfo, index) => (
        <QuestionCard key={index} {...cardInfo} />
      ))}
    </Matrix>
  );
}

function SolutionGrid() {
  return (
    <Matrix>
      {solutions.map((cardInfo, index) => (
        <SolutionCard key={index} {...cardInfo} />
      ))}
      {/* <Image
        maxH={'xs'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        src={'https://d1ckzwk0wp36d2.cloudfront.net/table.jpeg'}
      /> */}
    </Matrix>
  );
}

function SplashCard(props: SplashCardProps) {
  return (
    <VStack
      w="100%"
      align={'stretch'}
    >
      {
        props.splash.map((t, index) => <Text key={index} color={'white'} fontWeight={'bold'} fontSize={'6xl'}>{t}</Text>)
      }
    </VStack>
  )
}

function Splash() {
  return (
    <Flex
      h={'100vh'}
      backgroundImage={'url(https://d1ckzwk0wp36d2.cloudfront.net/waterfront.jpeg)'}
      backgroundSize={'cover'}
    >
      <VStack
        w={'full'}
        align={'flex-start'}
        px={useBreakpointValue({ base: 10 })}
        py={useBreakpointValue({ base: 20 })}
        bgGradient={'linear(to-r, blackAlpha.700, transparent)'}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={'36'}>
          {
            splashCards.map((splash, index) => <SplashCard key={index} {...splash} />)
          }
        </SimpleGrid>
      </VStack>
    </Flex >
  );
}

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function IndexPage() {
  return (
    <VStack spacing={10} maxWidth="100%" align="stretch">
      <Splash />
      <Heading>Services</Heading>
      <ServicesGrid />
      <Heading>Revealing Questions and Awkward Answers</Heading>
      <QuestionGrid />
      <VStack align="stretch">
        <Heading>Common Solutions</Heading>
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
  );
}

export default IndexPage;
