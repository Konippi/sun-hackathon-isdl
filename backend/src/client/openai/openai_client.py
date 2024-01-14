import os
import sys

sys.path.insert(0, os.getcwd())

from openai import AzureOpenAI
from openai.types import chat
from src.settings import settings

__client: AzureOpenAI


class OpenAIClient:
    def __init__(self):
        global __client
        __client = AzureOpenAI(
            azure_endpoint=settings.azure_openai_api_endpoint,
            api_key=settings.azure_openai_api_key,
            api_version=settings.azure_openai_api_version,
        )

    def ask(self, content: str) -> chat.chat_completion.ChatCompletion:
        # Example: Please create one question about java
        res = __client.chat.completions.create(
            model=settings.azure_openai_api_model,
            messages=[{"role": "user", "content": content}],
            n=1,
        )
        return res
