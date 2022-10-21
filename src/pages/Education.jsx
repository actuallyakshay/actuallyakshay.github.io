import { CalendarIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
function Education() {
  return (
    <Flex flexDirection={"column"} gap="3" lineHeight={"2"}>
      <Heading letterSpacing={"1px"} size="sm">
        FULL STACK WEB DEVELOPMENT (Full Time)
      </Heading>
      <motion.div
        initial={{
          x: 300,
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
          @ Masai School, Bangalore <br />
          <CalendarIcon /> 05/22 to present | Remote
        </Text>
      </motion.div>
      <Heading letterSpacing={"1px"} size="sm">
        B.TECH (MECHANICAL ENGINEERING)
      </Heading>
      <motion.div
        initial={{
          x: 300,
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
          @ Krishna Institute of Engineering and Technology, Ghaziabad <br />
          <CalendarIcon /> 2015 - 2019 <br />
          <StarIcon color="orange.500" /> Grade 70%
        </Text>
      </motion.div>
      <Heading letterSpacing={"1px"} size="sm">
        HIGHER SECONDRY EDUCATION
      </Heading>
      <motion.div
        initial={{
          x: 300,
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
          @ LDRSVM, Kiratpur <br />
          <CalendarIcon /> 2012-2014 <br />
          <StarIcon color="orange.500" /> Grade 90%
        </Text>
      </motion.div>
    </Flex>
  );
}

export default Education;
