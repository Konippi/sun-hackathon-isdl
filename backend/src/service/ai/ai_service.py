import os
import sys

sys.path.insert(0, os.getcwd())

import json

from src.client.openai.format.prompt_format import PromptFormat
from src.client.openai.openai_client import OpenAIClient
from src.dto.problem_dto import ProblemDTO


class AIService:
    __openai_client = OpenAIClient()

    def __init__(self):
        pass

    def create_problems(self, question: str, n: int) -> list[ProblemDTO]:
        request_format = PromptFormat(question, n).get_format()
        res = self.__openai_client.ask(request_format)
        problems = json.loads(res.choices[0].message.content)
        problems = [ProblemDTO(*self.__extract_problem_info_from_response(problem)) for problem in problems]
        return problems

    def __extract_problem_info_from_response(self, problem: dict[str, any]) -> tuple[str, list[str], dict[str, any]]:
        question = problem["question"]
        choices = problem["choices"]
        answer = problem["answer"]
        return question, choices, answer
