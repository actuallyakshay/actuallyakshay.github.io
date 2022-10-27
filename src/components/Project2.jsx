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
import "../Images/image.png";

function Project2({ colorMode }) {
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
        ></Box>
        <Grid
          position="absolute"
          top={{ base: "15%", md: "20%" }}
          w="full"
          h="60vh"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        >
          <Image
            src="https://i.postimg.cc/CLmtrsXc/002-1.png"
            alt="x-x"
            w="full"
          />
          <Flex flexDirection="column" gap="6" px="8">
            <Flex alignItems={"center"} gap="5">
              <Heading letterSpacing={"2px"} size="xl">
                {" "}
                indeed clone
              </Heading>
            </Flex>
            <Text letterSpacing={"1px"} as="i" fontSize="13px">
              Indeed is a free service to job seekers, where you can upload a
              resume, create job alert emails, search for jobs, save them and
              apply to them directly. We include all the job listings from major
              job boards, newspapers, associations, and company career pages,
              and employers can even post jobs directly to Indeed that may not
              be available anywhere else.
            </Text>
            <Text
              letterSpacing={"1px"}
              fontSize="13px"
              fontWeight="400"
              mt="-3"
            >
              <TimeIcon /> A Solo Project executed in 04 day
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
              <Heading size="sm" letterSpacing={"1px"}>
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

export default Project2;
