# getting the path of the current makefile even when it is called as an include so that env can be sourced
MAKE_FILE_PATH :=  $(abspath $(lastword $(MAKEFILE_LIST)))
MAKE_DIR := $(dir $(MAKE_FILE_PATH))

#get the last small commit sha
SHA:=$(shell git rev-parse --short HEAD)
RELEASE_VERSION:= ${RELEASE_VERSION}
TIME_STAMP:= $(shell /bin/date "+%Y%m%d%H%M")
TAG := $(SHA)-$(RELEASE_VERSION)-$(TIME_STAMP)
LATEST_TAG := latest
# Default configuration
IMG_NAME := ${DOCKER_PUSH_REPOSITORY}

.PHONY: help
# To add a target to the help, add a double comment (##) on the target line.
# from https://github.com/nodejs/node/blob/master/Makefile
help: ## Print help for targets with comments.
	@printf "For more targets and info see the comments in the Makefile.\n\n"
	@grep -E '^[a-zA-Z0-9._-]+:.*?## .*$$' Makefile | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

################################################################
## Docker stuff

.PHONY: docker-login
docker-login: ## login to DockerHub with credentials found in env
	@echo ${DOCKER_REG_PASSWORD} | docker login -u ${DOCKER_REG_USER_NAME} --password-stdin ${DOCKER_PUSH_REPOSITORY}

.PHONY: docker-build
docker-build:
	docker build -t $(IMG_NAME):$(TAG) $(DIR_NAME)

.PHONY: docker-push
docker-push:
	docker push $(IMG_NAME):$(TAG)

.PHONY: docker-build-all
docker-build-all: $(addprefix docker-build-,$(MAKE_DIR))

docker-build-%: ## build image for eslint configuration 
	@echo "Building dockerfile:" $(MAKE_DIR)/$*/Dockerfile
	@make docker-build IMG_NAME="$(IMG_NAME)/$*" TAG=$(TAG) DIR_NAME="$(MAKE_DIR)/$*"

.PHONY: docker-push-all
docker-push-all: $(addprefix docker-push-,$(MAKE_DIR))

docker-push-%: ## push image to the repository
	@echo "Pushing Image:" $(IMG_NAME)/$*:$(TAG)
	make docker-push IMG_NAME="$(IMG_NAME)/$*" TAG=$(TAG)
