import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  Stack,
  useColorMode,
  IconButton,
  Box,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = { light: 'blue.100', dark: 'blue.700' }
  const textColor = { light: 'gray.700', dark: 'gray.100' }

  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      fontSize={['md', 'lg', 'xl', 'xl']}
      h="7vh"
      p={2}
      backgroundColor={bgColor[colorMode]}
    >
      <Stack
        spacing={8}
        justify="center"
        align="center"
        color={textColor[colorMode]}
        isInline
      >
        <Link href="/custom">
          <a>Custom</a>
        </Link>
        <Link href="/form">
          <a>Forms</a>
        </Link>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          variant="outline"
          colorScheme="cyan"
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>

      </Stack>

    </Flex>
  )
}