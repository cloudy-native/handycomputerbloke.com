import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export default function Matrix({ children }) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
      {children}
    </SimpleGrid>
  );
}
