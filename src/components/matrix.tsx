import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function Matrix({ columns = { sm: 1, md: 2 }, children }) {
  return (
    <SimpleGrid columns={columns} spacing={4}>
      {children}
    </SimpleGrid>
  )
}
