#! /bin/bash
docker-compose -f ${PWD}/docker-compose.yml -f ${PWD}/tick-service/docker-compose.yml -f ${PWD}/player-service/docker-compose.yml up --build -d --scale player-service=4