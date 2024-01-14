import { useEffect, useState } from 'react'
import { Button, HStack, VStack, Text, Box, Icon } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

function Answer() {
    const navigate = useNavigate()
    const location = useLocation();
    const question = location.state.question;
    const choices = ["a","a","a","a"];
    const selectedChoice = location.state.selectedChoice;
    const answerIndex = location.state.answerIndex;
    const questionNumber = location.state.questionNumber;
    const explanation = location.state.explanation;
    const [answer, setAnswer] = useState('');
    const [answerColor, setAnswerColor] = useState("black");
    const [colorScheme, setColorScheme] = useState(["black","black","black","black"])

    const newColorScheme = colorScheme.map((x, i) => {
        if (i === answerIndex) {
            return "green";
        }else if (i === selectedChoice) { 
            return "red";
        }else {
            return x
        }
    });

    function onClickNextQuestion() {
        navigate('/question', {state: {'questionNumber': questionNumber}})
    }

    useEffect(() => {
        if (selectedChoice == answerIndex){
            setAnswer("Correct");
            setAnswerColor("green");
        }
        else {
            setAnswer("Incorrect");
            setAnswerColor("red");
        }
        setColorScheme(newColorScheme);
        
    }, []);
    
    return (
        <div className="home_box">
            <VStack align="center" spacing={2} pr={5} pl={5}>
                <Box marginRight={"auto"}>
                <HStack spacing={4} align="center" pt={5}>
                    <Text fontSize={"xx-large"}>Q.{questionNumber} </Text>
                    <Text fontSize={"large"} color={answerColor}>{answer}</Text>
                </HStack>
                </Box>
                <Text fontSize="xl" textAlign={"start"}>{question}</Text>
            </VStack>

            <VStack spacing={4} align="center" pt={5}>
                {choices.map((choice, index) => (
                    <Button key={index} colorScheme={colorScheme[index]} variant="outline" w="80%" borderRadius={30}>
                        <Text w={250} textAlign={"start"}>{choice}</Text>
                    </Button>
                ))}
            </VStack>
            
            <Text my={5} textAlign="left" fontSize='4xl' color="#000000">Explanation</Text> 
            <Box px={5} justifyContent='center' alignItems='center'>
                <Text textAlign="center" fontSize='2xl' color="#000000">{explanation}</Text>
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