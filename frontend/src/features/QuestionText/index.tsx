import "./QuestionText.css"
import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

interface QuestionTextProps {
  question: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({ question }) => (
  <VStack align="center" spacing={4}>
    <Text fontSize="xl">{question}</Text>
    <Text fontSize="xl">aaaaaaaa</Text>
  </VStack>
);

export default QuestionText;
