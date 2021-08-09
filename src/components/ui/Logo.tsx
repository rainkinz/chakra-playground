import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  boxSize: number
}

export default function Logo({ boxSize }: Props) {
  return (
    <Box boxSize={boxSize} >
      <Image src="/images/dog.png" />
    </Box>
  );
}