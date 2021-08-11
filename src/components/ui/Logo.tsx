import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  boxSize: number
  mb?: number
  mx?: number | "auto"
  maxW?: string
}

export default function Logo({ maxW, boxSize, mb = 0, mx = 0 }: Props) {
  return (
    <Image boxSize={boxSize} maxW={maxW} mx={mx} mb={mb} src="/images/dog.png" />
  );
}