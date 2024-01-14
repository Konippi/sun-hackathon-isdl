import {
    Box,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';

// import "./Header.css"

function Header() {
    return (
        <Box px={4} bgColor="#F6AD55" w='100%'>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Heading as='h1' fontSize="2xl" cursor="pointer">
                        Knowledge Q
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
