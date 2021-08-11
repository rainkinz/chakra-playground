import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Checkbox,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react"
import { Form, Formik, useField } from "formik"
import Logo from "../src/components/ui/Logo"
import InputField from "../src/components/ui/InputField";
import { object, string } from "yup";

const schema = object().shape({
  email: string()
    .email("Invalid Email")
    .required("Please enter your email address"),
  password: string()
    .required("Please enter your password"),
})

export default function SignUpPage(): JSX.Element {
  const bg = useColorModeValue("gray.900", "gray.100")
  const color = useColorModeValue("gray.100", "gray.900")
  const { colorMode } = useColorMode()

  return (
    <Center h="100vh" w="100vh">
      <Stack boxShadow="md" p="20" rounded="md" >
        <Logo boxSize={8} mb={8} mx={"auto"} maxW="70px" />
        <Heading as="h1" fontSize="xl">
          Log In
        </Heading>

        <Text fontSize="lg">
          Please log in with the data you entered during registration.
        </Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          validationSchema={schema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack my="4" spacing="6" >
                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  leftAddon={<EmailIcon />}
                />
                <InputField
                  name="password"
                  type="password"
                  label="Password"
                  leftAddon={<LockIcon />}
                />
                <Checkbox>Keep me logged in</Checkbox>

                <Button
                  isLoading={isSubmitting}
                  loadingText="Whispering to our servers"
                  size="lg"
                  colorScheme="messenger"
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>

        <Stack justify="center" color="gray.600" spacing="3">
          <Text as="div" textAlign="center">
            <span>Don't have an account? </span>
            <Button variant="link">
              Sign Up
            </Button>
          </Text>
          <Button variant="link">
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </Center >
  )
}
