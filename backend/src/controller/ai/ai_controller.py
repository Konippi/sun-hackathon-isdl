import os
import sys

sys.path.insert(0, os.getcwd())

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from src.service.ai.ai_service import AIService

__ai_service = AIService()

router = APIRouter(prefix="/problem", tags=["problem"])


@router.post("/create")
async def create(genre: str, n: int = 1):
    problems = __ai_service.create_problems(genre, n)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=[problem.to_dict() for problem in problems])
