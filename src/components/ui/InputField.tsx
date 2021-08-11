import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react"
import { useField } from "formik"

interface InputFieldProps {
  name: string
  label?: string,
  leftAddon: any,
  type: string
}

export default function InputField(props: InputFieldProps): JSX.Element {
  const { name, label, leftAddon, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl
      id={name}
      isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <FormLabel mb="1" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddon && <InputLeftElement children={leftAddon} />}
        <Input  {...field} {...rest} />
      </InputGroup>
      {meta.error && meta.touched && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  )
}