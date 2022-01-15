import { EmailIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import InfoCard from '../components/info-card'
import SEO from '../components/seo'

function AboutPage() {
  const [formStatus, setFormStatus] = useState(false)
  const [query, setQuery] = useState({
    email: '',
    message: '',
  })
  const toast = useToast()

  const handleChange = () => (e) => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <>
      <SEO title="About" />
      <VStack spacing={4} align="stretch">
        <Flex>
          <Box w="60%">
            <VStack spacing={4} align="stretch">
              <Heading fontSize={'xl'}>About Us</Heading>
              <Text>
                We've been designing, building, and running enterprise software
                for 30 years. The thrill of developing and deploying an
                application into production, seeing it used, and watching it run
                without a hitch never gets old.
              </Text>
              <Text>
                We've been around to see the complete story of many remarkable
                evolutions and the introduction of disruptive technologies going
                way back. Message passing on mainframes was big in its day. We
                don't see mainframes anymore, but we have a deep understanding
                of event-driven architectures. Handy for us, because that's a
                fundamental of cloud-native applications.
              </Text>
              <Text>
                We won't stop at the theory of how things work because the
                requirement is to make things work. That's why we build things.
                To make them work.
              </Text>
              <Text>
                We learned some closely related things along the way, including
                how to build blazing fast websites. Like this one.
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box w="35%">
            <Stack spacing={4} align={'stretch'}>
              <Heading fontSize={'lg'}>Contact us</Heading>
              <Text>
                Email{' '}
                <a href="mailto:info@handycomputerbloke">
                  <Text as="kbd">info@handycomputerbloke.com</Text>
                </a>{' '}
                or chat below.
              </Text>
              <Stack spacing={10} mx={'auto'} maxW={'lg'}>
                <InfoCard>
                  <Stack
                    as={'form'}
                    spacing={4}
                    onChange={handleChange}
                    action={'https://api.slapform.com/SN5XGo5dz'}
                    method={'POST'}
                  >
                    <FormControl id="email" isRequired>
                      <FormLabel>Your email</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Your message</FormLabel>
                      <Textarea placeholder="How can we help you?" />
                    </FormControl>
                    <Button
                      type={'submit'}
                      leftIcon={<EmailIcon />}
                      colorScheme="blue"
                    >
                      Send
                    </Button>
                    {formStatus
                      ? toast({
                          title: 'Message sent.',
                          description: "We'll get back to you promptly.",
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        })
                      : ''}
                  </Stack>
                </InfoCard>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </VStack>
      <Text mt={10} fontSize="xs">
        Photo credits
      </Text>
      <Text fontSize="xs">
        <a href="https://unsplash.com/photos/XJRMyYMa90Q">Microscope</a>
        {' by '}
        <a href="https://unsplash.com/@martijnschreiner">martijn schreiner</a>
      </Text>
    </>
  )
}

export default AboutPage
