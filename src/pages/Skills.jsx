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
  "https://i.ibb.co/7WVrwwH/9035061-logo-javascript-icon.png",
  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png",
  "https://o.remove.bg/downloads/6e25431a-441c-49d4-96e2-a286662e7804/6202fcdee5ee8636a145a41b_1234-removebg-preview.png",
  "https://o.remove.bg/downloads/2de0cc86-cfb4-486d-ae2d-f68d3b724858/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail-removebg-preview.png",
  "https://o.remove.bg/downloads/c130e984-5f42-48af-a286-24ab82843df3/mongoose-removebg-preview.png",
  "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png",

  "https://o.remove.bg/downloads/df8dfb2e-0eef-41eb-9e6a-6ce86843ca31/download-removebg-preview.png",
  "https://i.ibb.co/4PNb6C0/rzyl-Ujaf-400x400-removebg-preview.png",
  "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png",

  "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png",
  "https://i.ibb.co/q14GdKr/4691397-postman-icon.png",

  "https://o.remove.bg/downloads/9e426415-3468-47ca-91b8-a8a7118c5b84/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo-thumbnail-removebg-preview.png",
];

function WorkProjects() {
  return (
    <>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default WorkProjects;
