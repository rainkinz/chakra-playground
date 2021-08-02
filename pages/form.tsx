import {
  Button,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from "@chakra-ui/react"

export default function FormExample() {
  return (
    <form action="submit">
      <Stack space={3} >
        <InputGroup>
          <InputLeftElement children={<Icon name="info" />} />
          <Input type="name" placeholder="First Name" aria-label="First name" />
        </InputGroup>
        <Input />
        <Input />
        <Button
          type="submit"
          variant="solid"
          colorScheme="blue"
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  )
}