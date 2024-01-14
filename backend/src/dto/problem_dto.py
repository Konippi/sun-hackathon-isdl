class ProblemDTO:
    def __init__(self, question: str, choices: list[str], answer: dict[str, int | str]):
        self.__question = question
        self.__choices = choices
        self.__answer = answer

    def to_dict(self):
        return {
            "question": self.__question,
            "choices": self.__choices,
            "answer": self.__answer,
        }
