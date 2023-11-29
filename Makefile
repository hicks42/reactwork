.PHONY: init launch-react dkreact tests help

.DEFAULT_GOAL = help

# Variables
PROJECT_NAME := $(shell basename "$(CURDIR)")
LOWPROJNAME = $(shell echo $(PROJECT_NAME) | tr 'A-Z' 'a-z')
VARIABLE_FILE := .variable
FILE_NAME?=.variable
CONTAINER = $(PROJECT_NAME)-react-container
DOCKER = docker
EXEC_REACT = $(DOCKER) exec -w /usr/frontend $(PROJECT_NAME)-react-container
EXEC_REACT_IT = $(DOCKER) exec -it -w /usr/frontend $(PROJECT_NAME)-react-container
DOCKER_COMPOSE = docker-compose

# Colors
RESET =				/bin/echo -e "\x1b[0m\#\# $1\x1b[0m"
BLACK =				/bin/echo -e "\x1b[30m\#\# $1\x1b[0m"
RED = 				/bin/echo -e "\x1b[31m\#\# $1\x1b[0m"
GREEN = 			/bin/echo -e "\x1b[32m\#\# $1\x1b[0m"
YELLOW = 			/bin/echo -e "\x1b[33m\#\# $1\x1b[0m"
BLUE = 				/bin/echo -e "\x1b[34m\#\# $1\x1b[0m"
PURPLE = 			/bin/echo -e "\x1b[35m\#\# $1\x1b[0m"
LIGHT_BLUE = 	/bin/echo -e "\x1b[36m\#\# $1\x1b[0m"
WHITE = 			/bin/echo -e "\x1b[37m\#\# $1\x1b[0m"

## —— ✅ REACT ——
launch-react:
	$(MAKE) INIT
	$(MAKE) CHANGE_DKCOMPOSE
	$(MAKE) stop
	$(MAKE) start
	$(MAKE) GIT_INIT
	# $(MAKE) GIT_SETUP
	$(MAKE) stop
	$(MAKE) start
	@$(call GREEN,"L\'application est dispo sur : http://localhost:3000/")
	@$(call LIGHT_BLUE,"En temps voulu : ajout du repo distant + push master avec : make gad_origin")

dkreact: ## Bash dans le container www
	$(EXEC_REACT_IT) bash

rereact:
	$(DOCKER_COMPOSE) restart frontend

## —— 🔥 App ——
INIT: ## Stop all containers and get sudo
	$(MAKE) stop
	sudo chown -R $$USER ./

CHANGE_DKCOMPOSE: ## Nomme les containers docker + le Network
	sed -i 's/XXXX/$(PROJECT_NAME)/g' docker-compose.yml

RESET_DKCOMPOSE: ## Supprime les modifs du docker-compose.yml
	sed -i 's/$(PROJECT_NAME)/XXXX/g' docker-compose.yml

raz: ## Remise a zéro de l'installation
	sudo chown -R $$USER ./
	$(MAKE) RESET_DKCOMPOSE
	$(MAKE) CLEAN FILE_NAME=.git
	$(MAKE) CLEAN FILE_NAME=app
	$(MAKE) stop
	@$(call LIGHT_BLUE,"L\'application est entierement detruite.")

CLEAN: ## Supprime le fichier donné
ifneq ($(wildcard $(FILE_NAME)),)
	rm -rf $(FILE_NAME)
endif

## —— ✅ GIT ——
GIT_INIT: ## Initiation de git
ifneq ($(wildcard frontend/.git),)
	rm -rf frontend/.git
endif
	git init
	ssh-add
	git checkout -b master
	sudo chown -R $$USER ./

GIT_SETUP: ## Fill the gitignore file
	sed -i '1i Makefile' .gitignore
	sed -i '2i Dockerfile' .gitignore
	sed -i '3i Docker-compose.yml' .gitignore
	sed -i '4i \.*' .gitignore

## —— ✅ Test ——
tests: ## Run all tests
	$(MAKE) database-init-test
	$(PHP) bin/phpunit --testdox tests/Unit/
	$(PHP) bin/phpunit --testdox tests/Functional/
	$(PHP) bin/phpunit --testdox tests/E2E/

database-init-test: ## Init database for test
	$(SYMFONY_CONSOLE) d:d:d --force --if-exists --env=test
	$(SYMFONY_CONSOLE) d:d:c --env=test
	$(SYMFONY_CONSOLE) d:m:m --no-interaction --env=test
	$(SYMFONY_CONSOLE) d:f:l --no-interaction --env=test

unit-test: ## Run unit tests
	$(MAKE) database-init-test
	$(PHP) bin/phpunit --testdox tests/Unit/

functional-test: ## Run functional tests
	$(MAKE) database-init-test
	$(PHP) bin/phpunit --testdox tests/Functional/

# PANTHER_NO_HEADLESS=1 ./bin/phpunit --filter LikeTest --debug to debug with Chrome
e2e-test: ## Run E2E tests
	$(MAKE) database-init-test
	$(PHP) bin/phpunit --testdox tests/E2E/

## —— 🐳 Docker ——
dockerprev:
	docker network create app-$(PROJECT_NAME)

start: ## Start app
	$(MAKE) docker-start

docker-start:
	$(DOCKER_COMPOSE) up -d

stop: ## Stop app
	$(MAKE) docker-stop

docker-stop:
	$(DOCKER_COMPOSE) stop
	@$(call RED,"The containers are now stopped.")

dkdestroy: ## Detruit les containers et les images du projet
	docker ps -aq --filter "name=$(PROJECT_NAME)*" | xargs -r docker rm -f
	docker images -q --filter "reference=$(PROJECT_NAME)*" | xargs -r docker rmi -f

## —— 🐈 YARN —————————————————————————————————————————————————————————————————

## —— :computer: remote ———————————————————————————————————————————————————————————————————————
conx:
	./conex

deploy:
	$(MAKE) build
	./deployit

## —— 📊 Database ——

## —— 🛠️  Others ——
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
