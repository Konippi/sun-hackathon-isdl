import {
    Box,
    Flex,
    Container,
    Heading,
    HStack,
    Text,
    Image,
} from '@chakra-ui/react';

// import "./Header.css"

function Header() {
    return (
        <Box px={4} bgColor="#F6AD55" w='100%'>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Heading fontSize="2xl" cursor="pointer">
                        <HStack>
                            <Text fontSize="2xl" fontWeight="bold" color="#fff">KnowledgeQ</Text>
                            <Image src="/favicon.png" boxSize={14} />
                        </HStack>
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
