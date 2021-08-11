import {
  Button,
  ButtonGroup,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text
} from "@chakra-ui/react"
import Logo from "../src/components/ui/Logo"


export default function SignUpPage(): JSX.Element {
  return (
    <Center h="100vh" w="100vh" bg="purple.200">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
        <Logo boxSize={8} mb={8} mx={"auto"} maxW="70px" />
        <Heading as="h1" color="gray.900" fontSize="xl">
          Log In
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Please log in with the data you entered during registration.
        </Text>

        <Stack justify="center" color="gray.600" spacing="3">
          <Text as="div" textAlign="center">
            <span>Don't have an account? </span>
            <Button colorScheme="purple" variant="link">
              Sign Up
            </Button>
          </Text>
          <Button colorScheme="purple" variant="link">
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </Center >
  )
}
