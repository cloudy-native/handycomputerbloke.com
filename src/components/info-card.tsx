import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function InfoCard({ children }) {
  return (
    <Box w="100%" p={4} boxShadow="md" borderRadius="xl" borderWidth={'1px'}>
      {children}
    </Box>
  );
}
