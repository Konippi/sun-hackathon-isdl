import "./Choice.css"
import React from 'react';
import { Button, VStack } from '@chakra-ui/react';

type QuestionChoiceProps = {
  choices: string[];
};

const QuestionChoice: React.FC<QuestionChoiceProps> = ({ choices }) => (
    <VStack spacing={4} align="stretch">
        {choices.map((choice, index) => (
        <Button key={index} colorScheme="teal" variant="outline" w="80%">
            {choice}
        </Button>
        ))}
    </VStack>
);

export default QuestionChoice;