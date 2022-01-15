import { CheckIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import InfoCard from '../components/info-card'
import Matrix from '../components/matrix'

interface ServiceCardProps {
  heading: string
  blurb: string[]
}

interface QuestionCardProps {
  question: string
  answers: string[]
}

interface SolutionCardProps {
  topic: string
  solutions: string[]
}

interface SplashCardProps {
  splash: string[]
}

interface TestimonialCardProps {
  title: string
  quote: string
  company: string
  avatar: string
}

const services: ServiceCardProps[] = [
  {
    heading: 'Technical Due Diligence',
    blurb: [
      "You're the Due Diligence Team looking at a target software company.",
      "You need help with the technical part and that's where we come in. We conduct a thorough, nowhere-to-hide technical evaluation.",
      'Our reports are always as candid as they are actionable.',
    ],
  },
  {
    heading: 'Architecture Deep Dive',
    blurb: [
      'This is conducting Due Diligence on yourself.',
      "Often, this comes about because you made or inherited a monolith and it's time to fix it.",
      "We're honest. If your architecture is broken, we'll let you know. We'll be nice about it. But trust us.",
      "We'll tell you how to fix it. And help if you want.",
    ],
  },
  {
    heading: 'Technical Debt Remediation',
    blurb: [
      "As seasoned, hands-on veterans of the software industry we know what makes things work. And of course what doesn't.",
      "We've taken components a company deems too risky to touch and reworked them to be less scary.",
      'We never boil the ocean when we refactor legacy code. Instead, we spend the time it takes up front to plan incrementally testable, deployable evolutions.',
    ],
  },
  {
    heading: 'Cloud Adoption',
    blurb: [
      "You may be just starting your migration to the cloud. Or you may be in the process and you think it could be going better. Perhaps you did a forklift from your data center and are wonder what's up with your bill.",
      "Wherever you are in your cloud journey, we've got you covered.",
    ],
  },
]

const questions: QuestionCardProps[] = [
  {
    question: "Where's your architecture diagram?",
    answers: [
      'Let me send you the PowerPoint.',
      "Here it is, but it's very out of date.",
    ],
  },
  {
    question: 'Can I see a Pull Request?',
    answers: [
      "We don't use PRs.",
      `No you can't.`,
      'We use PRs but merging is not gated on reviews.',
    ],
  },
  {
    question: 'How do you plan sprints?',
    answers: [
      "Not sure who has it right now, but there's a spreadsheet.",
      'We invented our own version of Agile and have one long sprint really.',
    ],
  },
  {
    question: "What's your unit test coverage?",
    answers: [
      'We keep a good list of manual tests and use that.',
      'We can write code faster without them.',
      `We don't know`,
    ],
  },
  {
    question: "What's your CI and CD?",
    answers: ["What's that?", 'Neal. Neal does the builds.'],
  },
  {
    question: 'Why is your AWS bill breakdown different to the architecture?',
    answers: ["We don't know."],
  },
]

const solutions: SolutionCardProps[] = [
  {
    topic: 'Cloud Migration',
    solutions: [
      "It's OK to start with forklift because it's low risk and you mostly have the skills already.",
      "Think about cloud-native as a fast follow. But please think about it. That's our specialty.",
      'Pick the same cloud provider everyone else uses.',
    ],
  },
  {
    topic: 'Cloud Native',
    solutions: [
      "Don't hesitate. Running your forklift migration in the cloud is not cloud native. Using managed services is.",
      'Start with the lowest-friction components. Like anything running on a provisioned VM after the forklift that has a managed service equivalent.',
      "Either migrate something to a managed service, or optimize something that's already native. But please not both at the same time.",
    ],
  },
  {
    topic: 'Production Readiness',
    solutions: [
      'Make all metrics observable independently.',
      'Observe them.',
      'Define and follow a mandatory "Definition of Done."',
      'Eliminate manual production access by default.',
      'Use Infrastructure-as-Code (IaC) and deploy automatically.',
    ],
  },
]

const splashCards: SplashCardProps[] = [
  {
    splash: ['Technical evaluation', 'Tailored for you', 'Nowhere to hide'],
  },
  {
    splash: [`Proven expertise`, 'Politely candid', 'Always actionable'],
  },
]

const testimonials: TestimonialCardProps[] = [
  {
    title: 'How on Earth...',
    quote: '... did they get all that in two days of due diligence?',
    company: 'CTO, Target Company',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  },
  {
    title: 'We completed the deal',
    quote:
      'But with our eyes open [based on the] risks surfaced during the thorough technical due diligence.',
    company: 'Partner, Private Equity',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
  },
  {
    title: 'The best explainers we know',
    quote:
      'It was a pleasure watch the team explain technical concerns so we understood the implications.',
    company: 'Associate, Venture Capital',
    avatar: 'https://www.w3schools.com/w3images/avatar6.png',
  },
  {
    title: 'We did not have to boil the ocean',
    quote:
      'We were able to start migrating to the cloud component by component. We engaged [Handy Computer Bloke] from the start and came out the other side experts!',
    company: 'Architect, Public Cloud Late Bloomer',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png',
  },
]

function ServiceCard(props: ServiceCardProps) {
  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Heading size="md">{props.heading}</Heading>
        <Divider />
        {props.blurb.map((t, index) => (
          <Text key={index}>{t}</Text>
        ))}
      </VStack>
    </InfoCard>
  )
}

function QuestionCard(questionCardProps: QuestionCardProps) {
  const { question, answers } = questionCardProps

  return (
    <InfoCard>
      <VStack spacing={2} align="stretch">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem>Q:</GridItem>
          <GridItem colSpan={11}>
            <Text fontWeight="1000">{question}</Text>
          </GridItem>
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
  )
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
  )
}

function ServicesGrid() {
  return (
    <Matrix>
      {services.map((cardInfo, index) => (
        <ServiceCard key={index} {...cardInfo} />
      ))}
    </Matrix>
  )
}

function QuestionGrid() {
  return (
    <Matrix>
      {questions.map((cardInfo, index) => (
        <QuestionCard key={index} {...cardInfo} />
      ))}
    </Matrix>
  )
}

function SolutionGrid() {
  return (
    <Matrix>
      {solutions.map((cardInfo, index) => (
        <SolutionCard key={index} {...cardInfo} />
      ))}
    </Matrix>
  )
}

const TestimonialAvatar = ({ props }: { props: TestimonialCardProps }) => {
  return (
    <HStack>
      <Wrap>
        <WrapItem>
          <Avatar src={props.avatar} />
        </WrapItem>
      </Wrap>
      <Text fontSize={'lg'}>{props.company}</Text>
    </HStack>
  )
}

function TestimonialCard(testimonialCardProps: TestimonialCardProps) {
  return (
    <InfoCard>
      <VStack spacing={4} align="stretch">
        <TestimonialAvatar props={testimonialCardProps} />
        <Divider />
        <Heading size="md">{testimonialCardProps.title}</Heading>
        <Text>{testimonialCardProps.quote}</Text>
      </VStack>
    </InfoCard>
  )
}

function TestimonialsGrid() {
  return (
    <Matrix>
      {testimonials.map((cardInfo, index) => (
        <TestimonialCard key={index} {...cardInfo} />
      ))}
    </Matrix>
  )
}

function SplashCard(props: SplashCardProps) {
  return (
    <VStack w="100%" align={'stretch'}>
      {props.splash.map((t, index) => (
        <Text key={index} color={'white'} fontWeight={'bold'} fontSize={'6xl'}>
          {t}
        </Text>
      ))}
    </VStack>
  )
}

function Splash() {
  return (
    <>
      <Flex
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1588665306984-d5c6f62224aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2238&q=80)'
        }
        backgroundSize={'cover'}
      >
        <VStack
          w={'full'}
          align={'flex-start'}
          px={useBreakpointValue({ base: 10 })}
          py={useBreakpointValue({ base: 20 })}
          bgGradient={'linear(to-r, blackAlpha.800, blackAlpha.100)'}
        >
          <SimpleGrid columns={{ base: 1 }} spacing={'36'}>
            {splashCards.map((splash, index) => (
              <SplashCard key={index} {...splash} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    </>
  )
}

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
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
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

function IndexPage() {
  return (
    <VStack spacing={10} maxWidth="100%" align="stretch">
      <Splash />
      <Stack as={Box} textAlign={'center'} spacing={2}>
        <Text fontSize={'2xl'}>
          We build on our core competency of Technical Due Diligence.
        </Text>
        <Text fontSize={'2xl'}>We work quickly and efficiently.</Text>
        <Text fontSize={'2xl'}>
          We have strong opinions, but are not dogmatic or arbitrary.
        </Text>
      </Stack>
      <Heading>Services</Heading>
      <ServicesGrid />
      <Heading>What people say</Heading>
      <TestimonialsGrid />
      <VStack align="stretch">
        <Heading>Revealing Questions and Awkward Answers</Heading>
        <Text>From the archives...</Text>
      </VStack>
      <QuestionGrid />
      {/* <Heading>Common Solutions</Heading>
      <SolutionGrid /> */}
    </VStack>
  )
}

export default IndexPage
