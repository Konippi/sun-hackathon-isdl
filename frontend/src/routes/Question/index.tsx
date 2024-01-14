import { useEffect, useState } from 'react'
import { Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import axios from 'axios';
import QuestionText from "../../features/QuestionText";
import QuestionChoice from "../../features/Choice";


function Question() {
    type Problem = {
        question: string,
        choices: string[],
        answer: {
            choiceIndex: number,
            explanation: string
        }
    } 
    const navigate = useNavigate();
    const location = useLocation();
    const beforeQuestionNumber = location.state.questionNumber;
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [problem, setProblem] = useState<Problem>();
    
    function onClickAnswer() {
        navigate('/Answer', {state: {'explanation': problem!.answer.explanation,'question': problem!.question, 'selectedChoice': selectedChoice,'answerIndex': problem!.answer.choiceIndex, 'questionNumber': questionNumber}})
    }
    useEffect(() => {
        if (questionNumber == location.state.numberOfQuestion){
            navigate('/Completion')
        }
        setQuestionNumber(beforeQuestionNumber + 1);
        console.log(location.state.genre)
        console.log(location.state.numberOfQuestion)
        
        // const form = new FormData();
        // form.append('genre', location.state.genre);
        axios.post(`http://localhost:8888/problem/create?genre=${location.state.genre}`)
        .then((res) => {
            const problem = res.data[0];
            setProblem(
                {
                    question: problem.question,
                    choices: problem.choices,
                    answer: {
                        choiceIndex: problem.choice_index, 
                        explanation: problem.explanation
                    }
                }
            )

        })
        
    }, []);
    const handleChoiceSelect = (index: number) => {
        setSelectedChoice(index);
        console.log("routes")
        console.log(index)
    };
    return (
        <div className="home_box">
            <QuestionText question={problem!.question} number={questionNumber}/>
            <QuestionChoice choices={problem!.choices} onChoiceSelect={handleChoiceSelect}/>

            <Icon
                onClick={onClickAnswer} 
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

export default Question