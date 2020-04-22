# code-quality

## eslint-config-dsx

This package provides DSX's .eslintrc as an extensible shared config, including base, vue and react.

## Use Makefile to build&push docker image

### TODO: how to pass in envs from aws

```

## login to DockerHub with credentials found in env
docker-login

## build all images at one time
docker-build-all

## build specified image for eslint configuration
## %: replaced by your real folder name,
## for example: eslint-config-dsx-base
docker-build-%

## push all images at one time
docker-push-all

## push specified image to the repository
## %: replaced by your real folder name,
## for example: eslint-config-dsx-base
docker-push-%

```
