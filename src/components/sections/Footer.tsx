import { Box, ButtonGroup, Stack, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import * as React from 'react'
import Copyright from '../ui/Copyright'
import Logo from '../ui/Logo';

export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo boxSize={6} />
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton as="a" href="#" aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />} />
          <IconButton as="a" href="#" aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />} />
          <IconButton as="a" href="#" aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />} />
        </ButtonGroup>
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)

export default Footer