import React from "react";
import {
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  PlusSquareIcon,
  TimeIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function Project1({colorMode}) {
  return (
    <>
      <Box position="relative" h="90vh" overflow="hidden" mt="5" w="100%">
        <Box
          w="120vw"
          h="280px"
          bgColor={colorMode == "light" ? "gray.900" : "#F7AB0A"}
          position="absolute"
          top="21%"
          left="-50px"
          opacity=".1"
          transform="rotate(-8deg)"
          // border='2px solid red'
        ></Box>
        <Grid
          position="absolute"
          top={{ base: "15%", md: "20%" }}
          w="full"
          h="60vh"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        >
          <Image src="https://i.postimg.cc/CLmtrsXc/002-1.png" w="full" />
          <Flex
            flexDirection="column"
            gap="6"
            // border="1px solid blue"
            px="8"
          >
            <Flex alignItems={"center"} gap="5">
              <Heading letterSpacing={"2px"} size="xl">
                {" "}
                Food Store
              </Heading>
            </Flex>
            <Text letterSpacing={"1px"} as="i" fontSize="13px">
              This project is about an Online E-commerce food web application
              showing the functionalities of an e-commerce website like sorting,
              searching , filtering, add to cart, login/signup and many more.
            </Text>
            <Text
              letterSpacing={"1px"}
              fontSize="13px"
              fontWeight="400"
              mt="-3"
            >
              <TimeIcon /> A Solo Project executed in 01 day
            </Text>
            <HStack spacing="3" mt="-2">
              <Link>
                <Text
                  letterSpacing={"2px"}
                  fontSize="13px"
                  border="1px solid gray"
                  px="5"
                  borderRadius="20px"
                  _hover={{
                    bgColor: "gray",
                    color: "white",
                    border: "1px solid yellow",
                  }}
                >
                  {" "}
                  <LinkIcon /> See this live
                </Text>
              </Link>
              <Link>
                <Text
                  letterSpacing={"2px"}
                  fontSize="13px"
                  border="1px solid gray"
                  px="5"
                  borderRadius="20px"
                  _hover={{
                    bgColor: "gray",
                    color: "white",
                    border: "1px solid yellow",
                  }}
                >
                  {" "}
                  <LinkIcon /> Github
                </Text>
              </Link>
            </HStack>
            <HStack>
              <PlusSquareIcon />
              <Heading
                // as="dotted"
                size="sm"
                letterSpacing={"1px"}
              >
                Tech Stack
              </Heading>
            </HStack>
            <TechStack />
          </Flex>
        </Grid>
      </Box>
    </>
  );
}

export default Project1;
