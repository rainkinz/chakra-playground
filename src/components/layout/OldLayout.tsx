import Navbar from '../ui/Navbar'
import { Flex } from "@chakra-ui/react"

export default function OldLayout(props) {
  return (
    <Flex direction='column' align='center' justify='center'>
      <Navbar />
      <Flex justify='center' align='center' w='100%' h='93vh'>
        {props.children}
      </Flex>
    </Flex>
  )
}