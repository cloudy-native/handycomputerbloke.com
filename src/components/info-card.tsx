import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function InfoCard({ lightBackground='blue.50', darkBackground='blue.900', children }) {
  return (
    <Box
      background={useColorModeValue(lightBackground, darkBackground)}
      w="100%"
      p={4}
      boxShadow="md"
      borderRadius="xl"
      borderWidth={'1px'}
    >
      {children}
    </Box>
  )
}
