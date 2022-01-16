import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react'
import 'fontsource-open-sans'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import NavBar from './navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Container maxWidth="6xl">
        <NavBar my="6" siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Text fontSize="lg">{data.site.siteMetadata?.description}</Text>
        <Divider mt={4} />
        <Box my="4" as="main">
          {children}
        </Box>
        <Divider mt={20} />
        <Flex as="footer" my="2">
          <Text fontSize="xs">
            © {new Date().getFullYear()}, Stephen Harrison, Handy Computer Bloke
          </Text>
          <Spacer />
          <Text fontSize="xs">
            Made from scratch with ❤️ by{' '}
            <Link href="https://www.linkedin.com/in/stephenharrison/">
              Stephen Harrison <ExternalLinkIcon />
            </Link>
          </Text>
        </Flex>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
