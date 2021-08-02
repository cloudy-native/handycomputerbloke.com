import {
  Flex, Heading,
  SimpleGrid, Spacer, Text, VStack, Image, Box
} from '@chakra-ui/react';
import React from 'react';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <VStack spacing={4} align="stretch">
        <Heading fontSize={'xl'}>About Us</Heading>
        <Flex>
          <Box w="60%">
            <VStack spacing={4} align="stretch">
              <Text>
                We've been designing, building, and running enterprise software for 30
                years. The thrill of developing and deploying an application into production,
                seeing it used, and watching it run without a hitch never gets old.
              </Text>
              <Text>
                We've been around to see the complete story of many remarkable evolutions and the introduction of disruptive technologies going way back. Message passing on mainframes
                was big in its day. We don't see mainframes anymore, but we have a deep understanding of event-driven architectures.
                Handy for us, because that's a fundamental of cloud-native applications.
              </Text>
              <Text>
                We won't stop at the theory of how things work because the requirement
                is to make things work. That's why we build things. To make
                them work.
              </Text>
              <Text>
                We learned some closely related things along the way, including how to build blazing fast websites.
                Like this one.
              </Text>
              <Text>Also pictures. Like that one.</Text>
            </VStack>
          </Box>
          <Spacer />
          <Box w="35%">
            <Image
              src="https://d1ckzwk0wp36d2.cloudfront.net/leaves-and-rain.jpeg"
              fit="scale-down"
              maxWidth="sm"
            />
          </Box>
        </Flex>
      </VStack>
    </>
  );
}

export default AboutPage;
