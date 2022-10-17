import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { DownloadIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "{ A FULL STACK WEB DEVELOPER }",
      "Guy-who-loves-Coffee.jsx",
      "<ButLoveToCodeMore/>",
    ],
    loop: true,
    typeSpeed: 80,
    delaySpeed: 2000,
    deleteSpeed: 70,
  });
  return (
    <>
      <Box
        position="absolute"
        top="100px"
        left="200px"
        display={{ base: "none", lg: "flex" }}
      >
        <Image
          src="https://i.ibb.co/k18mmg8/undraw-Coding-re-iv62-removebg-preview.png"
          w="150px"
        />
      </Box>
      <Flex
        className="overflow-hidden"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        textAlign="center"
        // border="2px solid white"
        position={"absolute"}
        top="120"
        w="full"
        margin="auto"
        gap="10"
        fontFamily="Poppins"
      >
        <motion.div
          initial={{
            x: 1000,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
          }}
        >
          <Heading
            fontFamily="Poppins"
            letterSpacing="1px"
            fontSize={"42px"}
            color="#cdcdff"
          >
            Hi, I am <span style={{ color: "#90a0d9" }}>Akshay Rajput</span>{" "}
          </Heading>
        </motion.div>
        <Heading
          letterSpacing="1px"
          size="md"
          fontFamily="Poppins"
          color="#cdcdff"
        >
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </Heading>
        <motion.div
          initial={{
            x: -1000,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
          }}
        >
          <Text
            fontSize="xs"
            letterSpacing="1px"
            fontFamily="Poppins"
            color="#cdcdff"
            width={{ base: "300px", md: "700px" }}
          >
            A Mern Stack Developer who loves solving problems and building
            projects. I am equipped with a variety of technologies and tools to
            help me build the best possible product.
          </Text>
        </motion.div>
        <HStack>
          <SocialIcon
            className="cursor-pointer"
            network="github"
            fgColor="#cdcdff"
            bgColor="transparent"
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#cdcdff"
            bgColor="transparent"
          />
          <SocialIcon
            className="cursor-pointer"
            network="linkedin"
            fgColor="#cdcdff"
            bgColor="transparent"
          />
        </HStack>
        <Button
          borderRadius={"30px"}
          colorScheme="facebook"
          rightIcon={<DownloadIcon />}
          size='md'
        >
          Resume
        </Button>
      </Flex>
    </>
  );
}

export default Hero;
