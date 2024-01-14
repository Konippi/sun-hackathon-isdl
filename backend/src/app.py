import os
import sys

sys.path.insert(0, os.getcwd())

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.controller.ai import ai_controller
from src.controller.health import health_controller

origins = [
    "http://localhost:*",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_controller.router)
app.include_router(ai_controller.router)
