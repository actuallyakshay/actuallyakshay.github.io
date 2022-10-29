import { Box, Image } from "@chakra-ui/react";
import React from "react";
import WorkProjects from "./Skills";
import { GiSkills } from "react-icons/gi";

function Backgroung({ colorMode }) {
  return (
    <Box position="relative" >
      <Box
        display={{ base: "none", md: "flex" }}
        position={"absolute"}
        opacity={colorMode === "light" ? ".8" : ".1"}
        w="500px"
        left="5%"
        top="27%"
        color={colorMode === "light" ? "blackAlpha.100" : "#F7AB0A"}
      >
        <GiSkills fontSize="400px" />
      </Box>
      <WorkProjects />
    </Box>
  );
}
export default Backgroung;
