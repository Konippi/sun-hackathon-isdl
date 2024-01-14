import { useEffect, useState, useRef } from 'react'
import { Text, Box, Icon } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

import QuestionText from "../../features/QuestionText";
import QuestionChoice from "../../features/Choice";

function Answer() {
    const message = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    const navigate = useNavigate()
    const location = useLocation();
    const selectedChoice = location.state.selectedChoice;
    //const [setSelectedChoice] = useState<string | null>(null);
    function onClickNextQuestion() {
        navigate('/question', {state: {'questionNumber': 1}})
    }
    // const handleChoiceSelect = (choice: string) => {
    //     setSelectedChoice(choice);
    //     console.log("answer")
    //     console.log(choice)
    // };
    return (
        <div className="home_box">
            <QuestionText question={"aaaaaaaaaaa"} number={1}/>
            <Text>{selectedChoice}</Text>
            <QuestionChoice choices={["a","a","a","a"]} />
            <Text my={5} textAlign="left" fontSize='4xl' color="#000000">Explanation</Text> 
            <Box px={5} justifyContent='center' alignItems='center'>
                <Text textAlign="center" fontSize='2xl' color="#000000">{message}</Text>
            </Box>

            <Icon
                onClick={onClickNextQuestion} 
                cursor="pointer"
                position="fixed"
                right={5}
                bottom={16}
                as={HiArrowRight}
                bgColor="blue.400"
                color="white"
                w={16}
                h={16}
                rounded="full"
                p={2}
                boxShadow="md"
                _hover={{
                    bgColor: "blue.200",
                }}
            />
        </div>
        
    );
}

export default Answer