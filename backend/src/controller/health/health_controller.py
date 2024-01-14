import os
import sys

sys.path.insert(0, os.getcwd())

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/health", tags=["health"])


@router.get("")
async def check():
    return JSONResponse(status_code=status.HTTP_200_OK, content={"health": "OK"})
