import { ChakraProvider, Flex } from "@chakra-ui/react"
import { customTheme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
			<Flex direction='column' align='center' justify='center'>
				<Flex justify='center' align='center' w='100%' h='93vh'>
					<Component {...pageProps} />
				</Flex>
			</Flex>
    </ChakraProvider>
  )
}

export default MyApp