import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

function About({colorMode}) {
  return (
    <Box id='ABOUT__' pt='4'>
      <Flex justifyContent={"center"} mt="80px">
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
        >
        ABOUT
        </Text>
      </Flex>
      <br />
      <br />
      <br />
      <Grid
        w="90%"
        m="auto"
        gap={{ base: "4", md: "10" }}
        mt={{ base: "8", md: "0" }}
        gridTemplateColumns={{ base: "none", md: "1fr 2fr" }}
        gridTemplateRows={{ base: "1fr 2fr", md: "none" }}
      >
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="https://i.ibb.co/PTWFk7t/IMG-2274-1.jpg"
            borderRadius="50%"
            w={{ base: "250px", md: "90%" }}
          />
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 10px",
          }}
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
          <Text letterSpacing={"1px"} as="i" fontWeight={"400"} lineHeight="2">
            Hi everyone, I am Akshay Rajput from Bijnor, U.P. Currently I am
            pursuing a Full-Stack Web Development Course from Masai School. I
            have completed my graduation in Bachelor of Technology (Mechanical
            Engineering) from Krishna Institute of Engineering and Technology,
            Ghaziabad. After Completing my B.tech I joined Bharat Petroleum
            Corporation Limited, Noida as a Graduate Apprentice Trainee for 1
            year. During those days, I found myself drawn towards the tech world
            so I started learning Full-Stack Web Development and after that I
            joined Masai School , Which is a 7-Month long Intensive course with
            1200+ hours of coding, DSA and hands-on Industry Relevant Skills.
          </Text>
        </motion.div>
      </Grid>
      <br />
      <br />
    </Box>
  );
}

export default About;
