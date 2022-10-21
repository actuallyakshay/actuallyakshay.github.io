import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <>
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
        //  fontFamily="Poppins"
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
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ratione
            eligendi nam odit! Quasi repellendus ipsam eos, eligendi obcaecati,
            fugit, cumque temporibus culpa molestiae iusto molestias quis magnam
            hic incidunt. Labore magni magnam eligendi excepturi, explicabo
            aspernatur. Illo saepe reiciendis culpa debitis aspernatur quod quos
            neque placeat iste voluptates? Fugiat ipsa fuga totam voluptatibus
            optio suscipit quisquam odio obcaecati, fugit, cumque temporibus
            culpa molestiae iusto molestias quis magnam hic incidunt. Labore
            magni magnam eligendi excepturi, explicabo aspernatur. Illo saepe
            reiciendis culpa debitis aspernatur quod quos neque placeat iste
            voluptates? Fugiat ipsa fuga totam voluptatibus optio
          </Text>
        </motion.div>
      </Grid>
      <br />
      <br />
    </>
  );
}

export default About;
