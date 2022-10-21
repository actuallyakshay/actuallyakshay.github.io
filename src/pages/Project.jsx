import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Project() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Box
      position="relative"
      h="90vh"
      border="2px solid black"
      overflow="hidden"
      mt="5"
    >
      <Flex w="full" justifyContent={"center"}>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
          mt="5"
        >
          PROJECTS
        </Text>
      </Flex>
      <Box
        w="120vw"
        h="260px"
        // bgColor={"#F7AB0A"}
        bgColor="gray.900"
        position="absolute"
        top="25%"
        left="-50px"
        opacity=".1"
        transform="rotate(-8deg)"
      ></Box>
      <Flex
        position="absolute"
        top="30%"
        border="2px solid red"
        w="full"
        overflowX={"scroll"}
        overflowY="hidden"
        scrollSnapType="x mandatory"
        h="50vh"
      >
        {arr?.map((elem) => {
          return (
            <Flex>
              <Image src="https://i.ibb.co/FYshXJk/57286-laptop-working.gif" />
              <Heading>Akshay</Heading>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Project;
