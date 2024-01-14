import os


class Env:
    def __init__(self):
        pass

    def get_env(self) -> str:
        return os.environ.get("ENV", "local")
