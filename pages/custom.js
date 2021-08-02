import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Stack, Button, Center, IconButton, useColorMode } from '@chakra-ui/react'

export default function CustomPage() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center h="100vh" maxW="1200px" mx="auto">
      <Stack isInline>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon /> }
          variant="outline"
          colorScheme="cyan"
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >Switch Mode</IconButton>
        <Button variant="solid" colorScheme="green" >
          Solid
        </Button>
        <Button variant="primary">
          Primary Color
        </Button>
        <Button variant="secondary">
          Secondary Color
        </Button>
        <Button variant="warning">
          Warning Color
        </Button>
      </Stack>
    </Center>
  )
}