import {
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  PlusSquareIcon,
  TimeIcon,
} from "@chakra-ui/icons";
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
import React from "react";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";

function Project({ colorMode }) {
  return (
    <Box id="PROJECTS__" mt='10'>
      <br />
      <br />
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
      <Project1 colorMode={colorMode} />
      <Project2 colorMode={colorMode} />
    </Box>
  );
}

export default Project;
