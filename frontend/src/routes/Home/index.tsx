import { useState } from 'react'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Text, Box, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

import './Home.css'


function Home() {
    const [genre, setGenre] = useState('sample')
    const [numberOfQuestion, setNumberOfQuestion] = useState(3)
    const questionNumber = 0;
    const navigate = useNavigate()
    function onClickHome() {
        navigate('/question', {state: {'genre': genre, 'numberOfQuestion': numberOfQuestion, 'questionNumber': questionNumber}})
    }
    const onChangeNumberOfQuestion = (valueAsString: string, valueAsNumber: number):void => setNumberOfQuestion(valueAsNumber)
    
    return (
        <Box className="home_box" padding={4}>
            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">Select genre</Text>  
                <Input placeholder='Select genre (Ex. C++)' size='lg' onChange={e => setGenre(e.target.value)}/> 
                {/* <Select placeholder='Select genre' onChange={e => setGenre(e.target.value)}>
                    <option value='Java'>Java</option>
                    <option value='Go'>Go</option>
                    <option value='Python'>Python</option>
                </Select>  */}
            </Box>

            <Box my={10} justifyContent='center' alignItems='center'>
                <Text textAlign="left" fontSize='2xl' color="#000000">How many questions?</Text>   
                <NumberInput onChange={onChangeNumberOfQuestion} defaultValue={3} min={1} max={5} >
                    <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                {/* <Select placeholder='How many questions?' onChange={e => setNumberOfQuestion(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </Select>  */}
            </Box>

            <Button 
            onClick={onClickHome} 
            variant={'outline'} 
            colorScheme='blue' 
            size='lg'
            >
            Create
            </Button>
        </Box>
        
    );
}

export default Home