import { Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeToggle from './toggle-theme';

function NavBar({ siteTitle, ...rest }) {
  return (
    <Flex as="header" {...rest}>
      <Heading>
        <Link as={GatsbyLink} to="/" _hover={{ textDecor: 'none' }}>
          {siteTitle}
        </Link>
      </Heading>
      <Spacer />
      <HStack spacing={4}>
        <Link as={GatsbyLink} to="/" _hover={{ textDecor: 'none' }}>
          Home
        </Link>
        <Link as={GatsbyLink} to="/engagements" _hover={{ textDecor: 'none' }}>
          Engagements
        </Link>
        <Link as={GatsbyLink} to="/about" _hover={{ textDecor: 'none' }}>
          About Us
        </Link>
        <ThemeToggle />
      </HStack>
    </Flex>
  );
}

NavBar.propTypes = {
  siteTitle: PropTypes.string
};

NavBar.defaultProps = {
  siteTitle: ``
};

export default NavBar;
