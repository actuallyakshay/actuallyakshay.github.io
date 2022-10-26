import {
  Box,
  Flex,
  Grid,
  Heading,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Education from "../pages/Education";
import { FaUniversity } from "react-icons/fa";

function Projects({ colorMode }) {
  return (
    <>
      <br />
      <br />
      <br />
      <Grid
        w="85%"
        gap="5"
        m="auto"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        position="relative"
      >
        <Box
          display={{ base: "none", md: "flex" }}
          position={"absolute"}
          opacity={colorMode === "light" ? ".4" : ".1"}
          w="500px"
          left="20%"
          top="-20%"
          color={colorMode === "light" ? "blackAlpha.100" : "#F7AB0A"}
        >
          <FaUniversity fontSize="450px" />
        </Box>
        <Flex flexDirection="column">
          <Flex w="full" justifyContent={"center"}>
            <Text
              color="orange.500"
              fontSize="22px"
              letterSpacing="20px"
              fontWeight="700"
            >
              EXPERIENCE
            </Text>
          </Flex>
          <br />
          <Flex
            flexDirection="column"
            gap="3"
            pl={{ base: "2", md: "10" }}
            mt="5"
            lineHeight={"2"}
          >
            <Heading letterSpacing={"1px"} size="md">
              GRADUATE APPRENTICE TRAINEE
            </Heading>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
                @ Bharat Petroleum Corporation Limited, Noida
              </Text>
            </motion.div>
            <Heading letterSpacing={"1px"} as="i" size="sm">
              {" "}
              Duration
            </Heading>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <Text letterSpacing={"1px"}>02/2020 – 02/2021</Text>
            </motion.div>
            <Heading letterSpacing={"1px"} as="i" size="sm">
              Responsibilities
            </Heading>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <li style={{ letterSpacing: "1px" }} letterSpacing={"1px"}>
                Worked as a Site Engineer
              </li>
              <li style={{ letterSpacing: "1px" }}>
                Handled all the work flow at site
              </li>
            </motion.div>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="10">
          <Flex w="full" justifyContent={"center"}>
            <Text
              color="orange.500"
              fontSize="20px"
              letterSpacing="22px"
              fontWeight="700"
            >
              EDUACTION
            </Text>
          </Flex>
          <Education />
        </Flex>
      </Grid>
    </>
  );
}

export default Projects;
