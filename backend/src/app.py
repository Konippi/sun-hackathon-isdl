import os
import sys

sys.path.insert(0, os.getcwd())

from fastapi import FastAPI
from src.controller.ai import ai_controller
from src.controller.health import health_controller

app = FastAPI()

app.include_router(health_controller.router)
app.include_router(ai_controller.router)
