import { Text, Box, Button, Select } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

import './Home.css'


function Home() {
    const navigate = useNavigate()
    function onClickHome() {
        navigate('/question')
    }
    return (
        <div className="home_box">
            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">Select genre</Text>   
                <Select placeholder='Select genre'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select> 
            </Box>

            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">How many questions?</Text>   
                <Select placeholder='How many questions?'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select> 
            </Box>

            <Button 
            onClick={onClickHome} 
            variant={'outline'} 
            colorScheme='blue' 
            size='lg'
            >
            Create
            </Button>
        </div>
        
    );
}

export default Home