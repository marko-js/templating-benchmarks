BIN = ./node_modules/.bin

.PHONY: main
main: benchmarks

.PHONY: benchmarks
benchmarks:
	$(BIN)/matcha templating-benchmarks.js

.PHONY: clean
clean:
	$(BIN)/rhtmlc . --clean
