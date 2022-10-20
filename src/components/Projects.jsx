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

function Projects() {
  return (
    <div
      style={{
        height: "100vh",
        // backgroundColor: "pink",
        scrollSnapAlign: "start",
      }}
    >
      <Grid
        w="85%"
        gap="5"
        m="auto"
        h="100vh"
        // border="2px solid black"
        gridTemplateColumns={"repeat(2,1fr)"}
      >
        <Flex flexDirection="column">
          <Flex w="full" justifyContent={"center"}>
            <Text
              color="orange.500"
              mt="8"
              fontSize="20px"
              letterSpacing="20px"
              fontWeight="600"
            >
              EXPERINECE
            </Text>
          </Flex>
          <br />
          <br />
          <br />
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
            <Flex flexDirection="column" gap="3" pl="10" mt="10">
              <Heading letterSpacing={"1px"} size="md">
                GRADUATE APPRENTICE TRAINEE
              </Heading>
              <Text letterSpacing={"1px"} as="i"  fontWeight={'400'}>
                @ Bharat Petroleum Corporation Limited, Noida
              </Text>
              <Heading letterSpacing={"1px"} as="i" size="sm">
                {" "}
                Duration
              </Heading>
              <Text  letterSpacing={"1px"}>02/2020 – 02/2021</Text>
              <Heading letterSpacing={"1px"} as="i" size="sm">
                Responsibilities
              </Heading>
              <li style={{ letterSpacing: "1px" }} letterSpacing={"1px"}>
                Worked as a Site Engineer
              </li>
              <li style={{ letterSpacing: "1px" }}>
                Handled all the work flow at site
              </li>
            </Flex>
          </motion.div>
        </Flex>
        <Flex>
          <Flex w="full" justifyContent={"center"}>
            <Text
              // color="orange.400"
              mt="8"
              fontSize="20px"
              letterSpacing="20px"
              fontWeight="600"
            >
              EDUACTION
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </div>
  );
}

export default Projects;
