import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import {
  ChevronRightIcon,
  DownloadIcon,
  MinusIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { AiOutlineSmallDash } from "react-icons/ai";

function Hero({ colorMode }) {
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
      <br />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        w="95%"
        m="auto"
        // h="90vh"
        fontFamily="Poppins"
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Flex
            flexDirection="column"
            px={{ base: "5", md: "8", lg: "20" }}
            textAlign={"center"}
            mt={{ base: "5", md: "20" }}
          >
            <Text color={colorMode === "light" ? "gray.600" : "white"}>
              {" "}
              <span
                style={{ fontSize: "30px", fontWeight: "500", color: "red" }}
              >
                Hi,{" "}
              </span>
              I am
            </Text>
            <Heading
              as="i"
              color={colorMode === "light" ? "red.500" : "white"}
              fontSize={{ base: "42px", md: "62px" }}
            >
              Akshay Rajput
            </Heading>
            <br />
            <Heading
              color={colorMode === "light" ? "gray.700" : "white"}
              size="md"
            >
              {<ChevronRightIcon />} {text}
            </Heading>
            <br />
            <Text
              fontSize={"14px"}
              color={colorMode === "light" ? "gray.600" : "white"}
            >
              A Mern Stack Developer who loves solving problems and building
              projects. I am equipped with a variety of technologies and tools
              to help me build the best possible product.
            </Text>
            <br />
            <br />
            <HStack justifyContent={"center"} spacing="4">
              <SocialIcon
                url="https://linkedin.com/in/jaketrent"
                fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
                style={{ height: 40, width: 40 }}
                // bgColor='transparent'
                // fgColor='black'
              />
              <SocialIcon
                fgColor={colorMode === "light" ? "white" : "gray.300"}
                url="https://github.com"
                style={{ height: 40, width: 40 }}
                // bgColor='transparent'
                // fgColor='black'
              />
              <SocialIcon
                url="https://mail.com"
                className="cursor-pointer"
                network="email"
                fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
                bgColor="orange"
                style={{ height: 40, width: 40 }}
              />
            </HStack>
          </Flex>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <Flex alignItems={"center"} justifyContent="center">
            {/* TODO: */}

            <Image
              // src="https://i.ibb.co/XJL0jfd/94847-3d-working-environment.gif"
              // src="https://i.ibb.co/FYshXJk/57286-laptop-working.gif"
              src="https://i.ibb.co/jWLNQmH/109423-man-with-laptop-answering-email-next-to-plants.gif"
              // src="https://i.ibb.co/N6msMjC/112681-developer-coding-on-laptop.gif"
              // borderRightRadius="200px"
              borderTopLeftRadius={"220px"}
              borderTopRightRadius={"200px"}
              borderBottomRightRadius={"220px"}
              w={{ base: "0px", md: "350px", lg: "500px" }}
            />
          </Flex>
        </motion.div>
      </Grid>
    </>
  );
}

export default Hero;
