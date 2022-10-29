import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Hero from "./Hero";
import { useState } from "react";

const Links = [
  { path: "HERO__", title: "HOME" },
  { path: "/about", title: "ABOUT" },
  { path: "/skills", title: "SKILLS" },
  { path: "/projects", title: "PROJECTS" },
  { path: "/contact", title: "CONTACT" },
  "RESUME",
];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        fontFamily="Poppins"
        bg={useColorModeValue("gray.800", "gray.800")}
        px={{ base: "3", md: "8" }}
        position="sticky"
        top="0"
        zIndex={4}
        color="white"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <Heading letterSpacing={3} fontFamily={"Inspiration"}>
                Akshay
              </Heading>
            </motion.div>
          </HStack>
          <HStack
            as={"nav"}
            spacing={20}
            display={{ base: "none", md: "flex" }}
            fontWeight="500"
            fontSize="16px"
          >
            {Links.map((elem) => (
              <a href={`#${elem.path}`} key={elem.title}>
                {elem.title}
              </a>
            ))}
          </HStack>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </motion.div>
        </Flex>
        {isOpen ? (
          <VStack
            justifyContent={"center"}
            flexDirection="row"
            textAlign="center"
            alignItems="center"
            h="100vh"
            display={{ md: "none" }}
            fontWeight="500"
            fontSize="16px"
          >
            <VStack spacing={14} mt="20">
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}

export default Header;

/*

 <motion.div
        
      >

*/
