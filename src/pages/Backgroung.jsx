import { Box, Image } from "@chakra-ui/react";
import React from "react";
import WorkProjects from "./Skills";
import { GiSkills } from "react-icons/gi";

function Backgroung({ colorMode }) {
  return (
    <Box position="relative">
      <Box position={"absolute"} w="100%">
        <Image
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          opacity=".3"
          w="100%"
        />
      </Box>
      <WorkProjects />
    </Box>
  );
}
export default Backgroung;
