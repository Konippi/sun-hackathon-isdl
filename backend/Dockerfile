ARG PYTHON_VERSION=3.12.1

FROM python:${PYTHON_VERSION}-bullseye

WORKDIR /sun-app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY ./ ./

CMD ["uvicorn", "src.app:app", "--host", "0.0.0.0", "--port", "8888"]