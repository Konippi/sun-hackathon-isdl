import { useEffect, useState, useRef } from 'react'
import { Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
// import axios from 'axios';
import QuestionText from "../../features/QuestionText";
import QuestionChoice from "../../features/Choice";


function Question() {
    const navigate = useNavigate();
    const location = useLocation();
    const questionNumber = useRef<number>(0);
    // const [questionNumber, setQuestionNumber] = useState(0);
    function onClickAnswer() {
        navigate('/Answer', {state: {}})
    }
    useEffect(() => {
        questionNumber.current = location.state.questionNumber + 1;
        console.log(questionNumber.current)
        // const form = new FormData();
        // form.append('genre', location.state.genre);
        // const response = axios.post("http://localhost:3000/question", form)
        // console.log(response)
        // if (response.status !== 200) {
        //     console.log(response)
        // }
    }, []);
    return (
        <div className="home_box">
            <QuestionText question={"aaaaaaaaaaa"} number={questionNumber.current}/>
            <QuestionChoice choices={["a","a","a","a"]}/>

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