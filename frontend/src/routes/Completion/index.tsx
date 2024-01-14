import { Text, Box, Center, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Completion() {
    const navigate = useNavigate()
    function onClickHome() {
        navigate('/')
    }
    return (
        <div className="Completion_box">
            <Box h='500px' justifyContent='center' alignItems='center'>
                <Center h='100%'>
                    <Text textAlign="center" fontSize='4xl'>Thank you for your hard work</Text>
                </Center> 
            </Box>

            <Button 
            onClick={onClickHome} 
            variant={'outline'} 
            colorScheme='blue' 
            size='lg'
            >
            Finish
            </Button>
        </div>
        
    );
}

export default Completion