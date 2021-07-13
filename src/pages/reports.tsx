import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';
import React from 'react';
import SEO from '../components/seo';

function ReportsPage() {
  return (
    <>
      <SEO title="Sample Reports" />
      <VStack spacing={4} align="stretch">
        <Heading>Sample Reports</Heading>
        <Text>
          Redacted full reports upon request. But here are some samples to keep
          you going.
        </Text>
        <Divider />
        <Box p={8}>
          <Heading size="sm">A subject</Heading>
          <Text>Some stuff.</Text>
        </Box>
        <Divider />
        <Box p={8}>
          <Heading size="sm">A subject</Heading>
          <Text>Some stuff.</Text>
        </Box>
        <Divider />
        <Box p={8}>
          <Heading size="sm">A subject</Heading>
          <Text>Some stuff.</Text>
        </Box>
        <Divider />
        <Box p={8}>
          <Heading size="sm">A subject</Heading>
          <Text>Some stuff.</Text>
        </Box>
      </VStack>
    </>
  );
}

export default ReportsPage;
