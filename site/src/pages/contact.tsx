import { EmailIcon } from '@chakra-ui/icons';
import {
  Button, FormControl,
  FormLabel, Heading, Input, Stack,
  Textarea, useToast,Text
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import InfoCard from '../components/info-card';

export default function SimpleCard() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    email: "",
    message: ""
  });
  const toast = useToast()

  const handleChange = () => (e) => {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Stack spacing={4} align={'stretch'}>
      <Heading fontSize={'lg'}>Contact us</Heading>
      <Text>We'll get back to you as soon as we can.</Text>
      <Stack spacing={10} mx={'auto'} maxW={'lg'} >
        <InfoCard>
          <Stack
            as={'form'}
            spacing={4}
            onChange={handleChange}
            action={'https://api.slapform.com/stephen@harrison.org'}
            method={'POST'}
          >
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Your message</FormLabel>
              <Textarea placeholder="Please drop us a line" />
            </FormControl>
            <Button type={'submit'} leftIcon={<EmailIcon />} colorScheme="blue">
              Email
            </Button>
            {formStatus ? (
              toast({
                title: "Message sent.",
                description: "We'll get back to you promptly.",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            ) : (
              ""
            )}
          </Stack>
        </InfoCard>
      </Stack>
    </Stack>
  );
}
