import { useState, useRef } from 'react'
import { Text, Box, Button, Select } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

import './Home.css'


function Home() {
    const [genre, setGenre] = useState('sample')
    const [numberOfQuestion, setNumberOfQuestion] = useState('3')
    let questionNumber = 0;
    const navigate = useNavigate()
    function onClickHome() {
        navigate('/question', {state: {'genre': genre, 'numberOfQuestion': numberOfQuestion, 'questionNumber': questionNumber}})
    }
    
    return (
        <div className="home_box">
            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">Select genre</Text>   
                <Select placeholder='Select genre' onChange={e => setGenre(e.target.value)}>
                    <option value='Java'>Java</option>
                    <option value='Go'>Go</option>
                    <option value='Python'>Python</option>
                </Select> 
            </Box>

            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">How many questions?</Text>   
                <Select placeholder='How many questions?' onChange={e => setNumberOfQuestion(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
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