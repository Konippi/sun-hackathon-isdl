import os
import sys

sys.path.insert(0, os.getcwd())

import re

import yaml


class PromptFormat:
    def __init__(self, genre: str, n: int):
        self.__genre = genre
        self.__n = n

    def get_format(self) -> str:
        resposnse_format = f"""\
        Please create {self.__n} questions about {self.__genre}. 
        Expected response format is the following format.
        ---
        [
            {{
                "question": string,
                "choices": array of string (length: 4),
                "answer": {{
                    "choice_index": integer,
                    "explanation": string 
                }}
            }}
        ]
        """
        if self.__n == 1:
            return re.sub(r"\d+ questions", "a question", resposnse_format)
        return resposnse_format
