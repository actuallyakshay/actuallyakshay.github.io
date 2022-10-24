// import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedinIn } from "react-icons/fa";

function ContactMe() {
  return (
    <>
      <Flex w="full" justifyContent={"center"}>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
        >
          CONTACT ME
        </Text>
      </Flex>
      <br />
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
          //   border="2px solid black"
          w={{ base: "full", lg: "60%" }}
          gap="3"
          m="auto"
        >
          <Box>
            <Box>
              <Text mt={{ sm: 3, md: 3, lg: 12 }} color="gray.600">
                Fill up the form below to contact
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="fit-content"
                    variant="ghost"
                    color="#dd6b20"
                    _hover={{ border: "1px solid #dd6b20" }}
                    leftIcon={<MdPhone size="20px" />}
                    letterSpacing={"1px"}
                  >
                    +91-9568950421
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="fit-content"
                    variant="ghost"
                    color="#dd6b20"
                    _hover={{ border: "1px solid #dd6b20" }}
                    leftIcon={<MdEmail color="#dd6b20" size="20px" />}
                    letterSpacing={"1px"}
                  >
                    akshay.rajput1197@gmail.com
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="fit-content"
                    variant="ghost"
                    color="#dd6b20"
                    letterSpacing={"1px"}
                    _hover={{ border: "1px solid #dd6b20" }}
                    leftIcon={<MdLocationOn color="#dd6b20" size="20px" />}
                  >
                    Lucknow, U.P.
                  </Button>
                </VStack>
              </Box>
              <HStack
                // mt={{ lg: 5, md: 3 }}
                spacing={3}
                px={5}
                // border="2px solid black"
                alignItems="flex-start"
              >
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#dd6b20", color: "white" }}
                  icon={<FaLinkedinIn size="28px" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#dd6b20", color: "white" }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="Send email"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#dd6b20", color: "white" }}
                  icon={<EmailIcon size="28px" />}
                />
              </HStack>
            </Box>
          </Box>
          <Box>
            <Box borderRadius="lg">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      variant="solid"
                      borderRadius={"20px"}
                      colorScheme={"orange"}
                      _hover={{ borderRadius: "20px" }}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default ContactMe;
