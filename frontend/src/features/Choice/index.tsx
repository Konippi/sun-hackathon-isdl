import "./Choice.css"
//import React, {useState} from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

type QuestionChoiceProps = {
  choices: string[];
  onChoiceSelect: (choice: string) => void;
};

const QuestionChoice: React.FC<QuestionChoiceProps> = ({ choices, onChoiceSelect }) => {
    // const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    // const handleChoiceClick = (choice: string) => {
    //     // 選択された選択肢を保持する処理
    //     setSelectedChoice(choice);
    //     console.log(choice)
    // };
    return(
        <VStack spacing={4} align="center" pt={5}>
            {choices.map((choice, index) => (
                <Button key={index} colorScheme="black" variant="outline" w="80%" borderRadius={30} onClick={() => onChoiceSelect(choice)}>
                    <Text w={250} textAlign={"start"}>{choice}</Text>
                </Button>
            ))}
        </VStack>
    );
};

export default QuestionChoice;