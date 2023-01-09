import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

let array = [
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png",
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-128.png",
  "https://i.ibb.co/jZMcZMC/javascript.png",
  "https://user-images.githubusercontent.com/107462720/209814072-918f6b90-982e-49a0-b445-8e535f598c29.png",
  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png",
  "https://i.ibb.co/8cx8KzC/6202fcdee5ee8636a145a41b-1234.png",
  "https://i.ibb.co/dMhVT7t/mongodb.png",
  "https://i.ibb.co/WBxWt8Q/mongoose-removebg-preview.png",
  "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png",

  "https://i.ibb.co/RSvZL6j/redux.png",
  "https://user-images.githubusercontent.com/107462720/211248122-67a394db-7603-47b2-8c8e-0699e05ea0f3.svg",
  "https://i.ibb.co/4PNb6C0/rzyl-Ujaf-400x400-removebg-preview.png",
  "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png",

  "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png",
  "https://i.ibb.co/q14GdKr/4691397-postman-icon.png",

  "https://i.ibb.co/8z0pBHy/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo-thumbnail-removebg-preview.png",
];

function WorkProjects() {
  return (
    <Box id="SKILLS__" pt='8'>
      <br />
      <br />
      <br />
      <Flex w="full" justifyContent={"center"}>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
        >
          SKILLS
        </Text>
      </Flex>
      <br />
      <br />
      <Flex justifyContent={"center"} alignItems="center">
        
        <Grid
          m="auto"
          w="26%"
          alignItems={"center"}
          justifyContent="center"
          gridTemplateColumns="repeat(4,1fr)"
          rowGap="5"
          columnGap={{ base: "3", md: "0" }}
        >
          {array.map((elem, i) => {
            return (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 60,
                  }}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid gray"
                    borderRadius="full"
                    overflow={"hidden"}
                    p="3"
                    w="75px"
                  >
                    <Image w="100%" src={elem} />
                  </Flex>
                </motion.div>
              </>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
}

export default WorkProjects;
