import React from "react"
import { Flex } from "@chakra-ui/react"
import NavBar from "../sections/NavBar"
import Footer from "../sections/Footer"


export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      pl={8}
      pr={8}
      {...props}
    >
      <NavBar />
      {props.children}
      <Footer />
    </Flex>
  )
}