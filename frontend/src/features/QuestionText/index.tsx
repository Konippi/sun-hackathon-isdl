import "./QuestionText.css"
import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
//import { useNavigate } from "react-router-dom";

interface QuestionTextProps {
  question: string | undefined,
  number: number;
}

const QuestionText: React.FC<QuestionTextProps> = ({ question,number }) => (
  <VStack align="center" spacing={2} pr={5} pl={5}>
    <Box marginRight={"auto"}>
        <Text fontSize={"xx-large"}>Q.{number}</Text>
    </Box>
    <Text fontSize="xl" textAlign={"start"}>{question}</Text>
  </VStack>
);

export default QuestionText;