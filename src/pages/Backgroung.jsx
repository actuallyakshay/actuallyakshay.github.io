import { Box, Image } from "@chakra-ui/react";
import React from "react";
import WorkProjects from "./Skills";

function Backgroung() {
  return (
    <Box position="relative" >
      {/* <Image
        pos="absolute"
        top="5%"
        right="2%"
        // src="https://i.ibb.co/FYshXJk/57286-laptop-working.gif"
        w="60%"
        opacity="0.1"
        h="100%"
      /> */}

      <WorkProjects />
    </Box>
  );
}

export default Backgroung;

// src="https://i.ibb.co/XJL0jfd/94847-3d-working-environment.gif"
// src="https://i.ibb.co/FYshXJk/57286-laptop-working.gif"
