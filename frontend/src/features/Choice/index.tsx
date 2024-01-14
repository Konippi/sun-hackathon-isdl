//import React, {useState} from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

type QuestionChoiceProps = {
  choices: string[];
  onChoiceSelect: (index: number) => void;
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
                <Button maxH={110} h={"100%"} key={index} colorScheme="black" variant="outline" w="80%" borderRadius={30} whiteSpace="unset" onClick={() => onChoiceSelect(index)}>
                    <Text textAlign={"start"} overflowWrap="break-word" margin={3}>{choice}</Text>
                </Button>
            ))}
        </VStack>
    );
};

export default QuestionChoice;