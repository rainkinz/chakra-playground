import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons"
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from "@chakra-ui/react"

export default function FormExample() {
  return (
    <form action="submit">
      <Stack space={3} >
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input type="name" placeholder="First Name" aria-label="First name" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input type="name" placeholder="Last Name" aria-label="Last name" />
          </InputGroup>
        </FormControl>
        <Divider />
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type="email" placeholder="email@email.com" aria-label="Email" />
          </InputGroup>
          <FormHelperText>
            We never share your email
          </FormHelperText>
        </FormControl>
        <FormControl isRequired isInvalid={true}>
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input type="password" placeholder="Password" aria-label="Password" />
          </InputGroup>
          <FormErrorMessage>Password is required</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          variant="solid"
          colorScheme="blue"
        >
          Sign Up
        </Button>
        <FormControl>

        </FormControl>
      </Stack>
    </form>
  )
}