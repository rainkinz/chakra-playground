import { ReactNode, useState } from "react";
import { Box, Flex, Link, Text, useColorMode, Button } from "@chakra-ui/react";
import NextLink from 'next/link';

import Logo from "../ui/Logo";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type MenuItemProps = {
  to: string,
  children: ReactNode,
  rest?: any
}

function MenuItem({ children, to = "/", ...rest }: MenuItemProps) {
  return (
    <NextLink href={to} passHref>
      <Button as="a" variant="ghost">
        {children}
      </Button>
    </NextLink>
  )
}

interface IconProps {
  color: string
  bg: string
}

const CloseIcon = ({ bg, color }: IconProps) => (
  <svg width="24"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    fill={bg}
    color={color}
  >
    <title>Close</title>
    <path
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = ({ bg, color }: IconProps) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={bg}
    color={color}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default function Header({ props }: { props?: any }) {
  const { colorMode, toggleColorMode } = useColorMode()

  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const bgColors = { light: 'white.100', dark: 'gray.900' }
  const textColors = { light: 'gray.900', dark: 'gray.100' }
  const bg = bgColors[colorMode];
  const color = textColors[colorMode];

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      justify="space-between"
      w="100%"
      mb={8}
      p={4}
      bg={bg}
      color={color}
      {...props}
    >
      <Logo boxSize={8} />

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu} >
        {show ?
          <CloseIcon bg={bg} color={color} /> :
          <MenuIcon bg={bg} color={color} />
        }
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>

          <Button as="a" variant="ghost" onClick={toggleColorMode}>
            {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}