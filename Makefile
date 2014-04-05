NODE_BIN ?= node_modules/.bin

JSHINT ?= $(NODE_BIN)/jshint

LIB_DIR := lib

.SUFFIXES:
.PHONY: all lint

all: prepare

lint:
	@$(JSHINT) $(LIB)
	@echo "All right!"

prepare:
	@rm -rf ./node_modules
	@npm install --production
