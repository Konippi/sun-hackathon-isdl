import os
import sys

sys.path.insert(0, os.getcwd())

from pydantic_settings import BaseSettings, SettingsConfigDict
from src.util.env import Env


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=f".env.{Env().get_env()}")

    # OpenAI
    azure_openai_api_endpoint: str = ""
    azure_openai_api_key: str = ""
    azure_openai_api_version: str = "2023-05-15"
    azure_openai_api_model: str = "GPT35TURBO"


settings = Settings()
