templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating langues. The following templating engines are currently integrated:

* raptor-templates
* dust
* jade

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Adding a New Template Engine

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded.



