import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import Layout from './src/components/layout';

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans'
  }
});

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
