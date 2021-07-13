import { Text, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import SEO from '../components/seo';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading
} from '@chakra-ui/react';

function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <VStack spacing={4} align="stretch">
        <Heading>About Us</Heading>
        <Text>
          We've been designing, building, and running enterprise software for 30
          years.
        </Text>
        <Text>
          The thrill of developing and deploying an application into production,
          seeing it used, and watching it run without a hitch never gets old.
        </Text>
        <Text>
          We don't really care about the theory of how things work if what's
          required is to make things work. That's why we build things. To make
          them work.
        </Text>
        <Text>
          
        </Text>
      </VStack>
    </>
  );
}

export default AboutPage;
