import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// import GitHubCalender from "react-github-calender";

function Github() {
  //   const selectedyear =
  return (
    <>
      {/* <GitHubCalender
        // style={{ margin: "auto" }}
        username="actuallyakshay"
        // transformData={selectedyear}
        blockSize={20}
        fontSize="20"
      ></GitHubCalender> */}
      <br />
      <br />
      <Flex w="full" justifyContent={"center"}>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing={{ base: "10px", md: "20px" }}
          fontWeight="700"
        >
          GITHUB STATS
        </Text>
      </Flex>
      <br />
      <br />
      <Grid
        w="90%"
        m="auto"
        gap={{ base: "3", md: "10" }}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
      >
        <Image src="https://streak-stats.demolab.com/?user=actuallyakshay&theme=nord&hide_border=true&border_radius=30&date_format=M%20j%5B%2C%20Y%5D)" />
        <Image src="https://github-readme-stats.vercel.app/api?username=actuallyakshay&count_private=true&theme=nord&hide_border=true&border_radius=30" />
        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=actuallyakshay&layout=compact&theme=nord&hide_border=true&border_radius=30" />
      </Grid>
    </>
  );
}

export default Github;
