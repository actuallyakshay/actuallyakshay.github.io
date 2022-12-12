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
import { Link, NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Links = [
  { path: "HERO__", title: "HOME" },
  { path: "ABOUT__", title: "ABOUT" },
  { path: "SKILLS__", title: "SKILLS" },
  { path: "PROJECTS__", title: "PROJECTS" },
  { path: "CONTACT__", title: "CONTACT" },
];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", () => {
    changeNavbar();
  });

  return (
    <>
      <Box
        fontFamily="Poppins"
        letterSpacing={"1.2px"}
        bg={!navbar ? "gray.800" : "white"}
        px={{ base: "3", md: "8" }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={4}
        color={!navbar ? "white" : "black"}
        shadow={!navbar ? "" : "md"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            variant="ghost"
            _hover={{ bg: "none" }}
            onFocus={{ bg: "none" }}
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
              <AnchorLink href={`#${elem.path}`} key={elem.title}>
                {elem.title}
              </AnchorLink>
            ))}
            <a
              href="https://github.com/actuallyakshay/actuallyakshay.github.io/raw/master/Akshay-Rajput-Resume.pdf"
              download={"Akshay-Rajput-Resume"}
            >
              RESUME
            </a>
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
              variant="ghost"
              color={!navbar ? "white" : "black"}
              borderRadius={"full"}
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
              {Links.map((elem) => (
                <AnchorLink href={`#${elem.path}`} key={elem.title}>
                  {elem.title}
                </AnchorLink>
              ))}
              <a
                href="https://github.com/actuallyakshay/actuallyakshay.github.io/raw/master/Akshay-Rajput-Resume.pdf"
                download={"Akshay-Rajput-Resume"}
              >
                RESUME
              </a>
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
