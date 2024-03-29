# Hydra Tests
[![Build Status](https://travis-ci.org/sizzlorox/hydra-tests.svg?branch=master)](https://travis-ci.org/sizzlorox/hydra-tests) [![works badge](https://cdn.jsdelivr.net/gh/nikku/works-on-my-machine@v0.2.0/badge.svg)](https://github.com/nikku/works-on-my-machine)

Testing Hydra by having a service that sends ticks to multiple player services via Hydra Router 

## Required
- Docker [View Homepage](https://www.docker.com/)
- NodeJS v6+ [View Homepage](https://www.nodejs.org)

## Pre-installation

It's recommended that [NVM](https://github.com/creationix/nvm) be used to manage NodeJS versions.
The project includes an .nvmrc which specifies NodeJS 6.2.1

## Usage
:warning: Before running, you must have a docker network named `hydra-net`

```shell
$ docker network create hydra-net
```

```shell
$ sh run.sh
```

```shell
$ sh stop.sh
```

## Screenshot

![Preview](screenshot.png?raw=true)

## Resources

- Hydra [View Homepage](https://www.hydramicroservice.com/)
- Hydra Router [View Homepage](https://www.hydramicroservice.com/docs/tools/hydra-router/)
