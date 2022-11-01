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
import { motion } from "framer-motion";
import { RiContactsLine } from "react-icons/ri";

function ContactMe({ colorMode }) {
  return (
    <Box id="CONTACT__" pt="100px">
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
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        position="relative"
      >
        <Box
          position={"absolute"}
          opacity={colorMode === "light" ? ".7" : ".1"}
          w="500px"
          left="30%"
          top="0"
          color={colorMode === "light" ? "blackAlpha.100" : "#F7AB0A"}
          display={{ base: "none", md: "flex" }}
        >
          <RiContactsLine fontSize="400px" />
        </Box>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
          //   border="2px solid black"
          w={{ base: "full", lg: "60%" }}
          gap="3"
          m="auto"
        >
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
              scale: 0.5,
            }}
            // whileInView={{ rotate: 360, scale: 1 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Box>
              <Box>
                <br />
                {/*TODO:  */}
                <Text as="i" mt={{ sm: 3, md: 3, lg: 10 }} color="gray.600">
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
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 60,
                    }}
                  >
                    <a href="https://www.linkedin.com/in/akshay-rajput-422794220/">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dd6b20", color: "white" }}
                        icon={<FaLinkedinIn size="28px" />}
                      />
                    </a>
                    <a href="https://github.com/actuallyakshay">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dd6b20", color: "white" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                      <IconButton
                        aria-label="Send email"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dd6b20", color: "white" }}
                        icon={<EmailIcon size="28px" />}
                      />
                    </a>
                  </motion.div>
                </HStack>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
              scale: 0.5,
            }}
            // whileInView={{ rotate: 360, scale: 1 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Box>
              <Box borderRadius="lg">
                <Box m={8}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel as="i">Your Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input
                          _focus={{ outline: "none" }}
                          border={"none"}
                          outline="none"
                          type="text"
                          size="md"
                          borderBottom={"1px solid gray"}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel as="i">Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input
                          type="text"
                          size="md"
                          _focus={{ outline: "none" }}
                          border={"none"}
                          borderBottom={"1px solid gray"}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel as="i">Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="message"
                        resize="none"
                        _focus={{ outline: "none" }}
                        border={"none"}
                        outline="none"
                        type="text"
                        size="md"
                        borderBottom={"1px solid gray"}
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
          </motion.div>
        </Grid>
      </Container>
      <br />
      <Flex textAlign={"center"} justifyContent="center" mb="1">
        <Text letterSpacing={"1px"}>
          Designed and build by AKSHAY RAJPUT, @ 2022 All rights reserved
        </Text>
      </Flex>
    </Box>
  );
}

export default ContactMe;
