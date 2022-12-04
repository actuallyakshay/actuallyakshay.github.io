import {
  Flex,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillCameraVideoFill, BsGithub } from "react-icons/bs";

function ProjectComponent({ image, title, techStack, desc }) {
  return (
    <Flex
      direction="column"
      bg="white"
      shadow={"xl"}
      borderRadius="20px"
      py="5"
    >
      <Box w="90%" mx="auto">
        <Image borderRadius={"5px"} src={image} />
      </Box>
      <Flex w="full" justifyContent={"center"}>
        <Heading mt="4" size="md" fontWeight={"500"} letterSpacing="2px">
          {title}
        </Heading>
      </Flex>
      <br />
      <Box w="90%" mx="auto">
        <Text
          fontSize={"14px"}
          color="blackAlpha.800"
          fontWeight={"400"}
          letterSpacing=".6px"
        >
          {desc}
        </Text>
      </Box>
      <Box w="90%" m="auto" mt="4">
        <Text color="red" fontWeight={"500"} fontSize={"15px"}>
          Tech Stack :
        </Text>
        <Text
          fontSize={"14px"}
          letterSpacing=".9px"
          fontWeight={"500"}
          color="blackAlpha.700"
        >
          {techStack}
        </Text>
      </Box>
      <br />
      <Box mt="auto" w="full">
        <HStack w="60%" m="auto" justifyContent={"space-between"}>
          <AiFillEye fontSize={"40px"} />
          <BsGithub fontSize={"35px"} />
          <BsFillCameraVideoFill fontSize={"35px"} />
        </HStack>
      </Box>
    </Flex>
  );
}

export default ProjectComponent;
