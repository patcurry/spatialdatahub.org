# pull official python base image
#FROM python:3.7-alpine
FROM python:3.7-stretch

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /usr/src/spatialdatahub.org

# install dependencies
COPY requirements.txt /usr/src/spatialdatahub.org/
RUN pip install --upgrade pip
RUN pip install -r /usr/src/spatialdatahub.org/requirements.txt

# copy project
COPY . /usr/src/spatialdatahub.org/
