BIN = ./node_modules/.bin

.PHONY: main
main: benchmarks

.PHONY: benchmarks
benchmarks:
	$(BIN)/matcha templating-benchmarks.js -R ./reporter.js --expose-gc

.PHONY: clean
clean:
	$(BIN)/markoc . --clean
	rm -rf output
