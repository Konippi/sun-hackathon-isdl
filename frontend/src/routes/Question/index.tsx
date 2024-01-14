import { useEffect, useState } from 'react'
import { Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import axios from 'axios';
import QuestionText from "../../features/QuestionText";
import QuestionChoice from "../../features/Choice";


export type Problem = {
    question: string,
    choices: string[],
    answer: {
        choiceIndex: number,
        explanation: string
    }
}

function Question() {
    const navigate = useNavigate();
    const location = useLocation();
    const beforeQuestionNumber = location.state.questionNumber;
    const numberOfQuestion = location.state.numberOfQuestion;
    const [questionNumber, setQuestionNumber] = useState<number>(beforeQuestionNumber);
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [problem, setProblem] = useState<Problem>();
    
    function onClickAnswer() {
        navigate('/Answer', {state: {'problem': problem, 'questionNumber': questionNumber, 'selectedChoice': selectedChoice, 'numberOfQuestion': numberOfQuestion}})
    }
    useEffect(() => {
        if (questionNumber == location.state.numberOfQuestion){
            navigate('/completion')
        }
        setQuestionNumber(questionNumber + 1);
        console.log("numberOfQuestion:",location.state.numberOfQuestion)
        console.log("questionNumber:", questionNumber)
        
        axios.post(`http://localhost:8888/problem/create?genre=${location.state.genre}`)
        .then((res) => {
            const problem = res.data[0];
            setProblem(
                {
                    question: problem.question,
                    choices: problem.choices,
                    answer: {
                        choiceIndex: problem.answer.choice_index,
                        explanation: problem.answer.explanation
                    }
                }
            )

        }).catch((error) => {
            console.log(error)
        })
        
    }, []);
    const handleChoiceSelect = (index: number) => {
        setSelectedChoice(index);
    };
    return (
        <div className="home_box">
            <QuestionText question={problem?.question} number={questionNumber}/>
            <QuestionChoice choices={problem?.choices ?? []} onChoiceSelect={handleChoiceSelect}/>

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