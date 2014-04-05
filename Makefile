NODE_BIN ?= node_modules/.bin

JSHINT ?= $(NODE_BIN)/jshint

LIB_DIR := lib

.SUFFIXES:
.PHONY: all lint

all: lint

lint:
	@$(JSHINT) $(LIB)
	@echo "All right!"
