import { Text, Box, Center, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import QuestionText from "../../features/QuestionText";


function Question() {
    const navigate = useNavigate()
    function onClickAnswer() {
        navigate('/Answer')
    }
    return (
        <div className="home_box">
            {/* <QuestionText /> */}

            <Button 
            onClick={onClickAnswer} 
            variant={'outline'} 
            colorScheme='green' 
            size='lg'
            >
            Next
            </Button>
        </div>
        
    );
}

export default Question