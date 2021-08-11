import { ChakraProvider, layout } from "@chakra-ui/react"
import { customTheme } from "../styles/theme"
import type { AppProps /* AppContext */ } from 'next/app';
import OldLayout from "../src/components/layout/OldLayout";
import Landing from "../src/components/layout/Landing";



function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Landing>
				<Component {...pageProps} />
			</Landing>
		</ChakraProvider>
	)
}

export default MyApp