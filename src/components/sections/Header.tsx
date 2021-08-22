import { ReactNode, useState } from "react";
import { Box, Flex, useColorMode, Button } from "@chakra-ui/react";
import NextLink from 'next/link';

import Logo from "../ui/Logo";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

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
      <NextLink href="/" passHref>
        <a>
          <Logo boxSize={8} />
        </a>
      </NextLink>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ?
          <Button><CloseIcon /></Button> :
          <Button><HamburgerIcon /></Button>
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
          <MenuItem to="/form">Form with Formik</MenuItem>
          <MenuItem to="/custom">Custom</MenuItem>
          <MenuItem to="/signup">Signup</MenuItem>

          <Button as="a" variant="ghost" onClick={toggleColorMode}>
            {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}