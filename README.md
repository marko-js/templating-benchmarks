templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML/Concise HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[react](https://facebook.github.io/react/)<sup>1</sup> | JSX | ✖ | ✖ | ✔
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

NOTE 1: While React is not a "templating engine", it is commonly used to render HTML on the server so it has been included in this benchmark.

# Table of Contents

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Marko](#marko)
	- [Dust](#dust)
- [Contribute](#contribute)
	- [Adding a New Comparison Group](#adding-a-new-comparison-group)
	- [Adding a New Template Engine](#adding-a-new-template-engine)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Current Results

The following results were collected with the following setup:

- Node.js v5.10.1
- MacBook Pro (Retina, 15-inch, Mid 2014)
- Processor: 2.8 GHz Intel Core i7
- Memory: 16 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,569 op/s (fastest)
                    ✗ dust »      274 op/s (89.33% slower)

                      if-expression
                   ✓ marko »  131,313 op/s (fastest)
                     ✗ pug »   44,568 op/s (66.06% slower)

                      projects-escaped
                   ✓ marko »   41,986 op/s (fastest)
      ✗ marko (native-for) »   41,522 op/s (1.11% slower)
              ✗ handlebars »   23,640 op/s (43.70% slower)
                    ✗ dust »    9,196 op/s (78.10% slower)

                      projects-unescaped
                   ✓ marko »  163,985 op/s (fastest)
      ✗ marko (native-for) »  160,112 op/s (2.36% slower)
              ✗ handlebars »   70,050 op/s (57.28% slower)
                    ✗ dust »   38,321 op/s (76.63% slower)

                      reverse-helper
                   ✓ marko »  167,674 op/s (fastest)
                    ✗ dust »  103,403 op/s (38.33% slower)

                      search-results
                   ✓ marko »   20,525 op/s (fastest)
                    ✗ dust »    5,437 op/s (73.51% slower)

                      simple-1
                     ✓ dot »   84,277 op/s (fastest)
                   ✗ marko »   74,221 op/s (11.93% slower)
              ✗ handlebars »   47,866 op/s (43.20% slower)
                    ✗ dust »   38,667 op/s (54.12% slower)
                    ✗ swig »   24,398 op/s (71.05% slower)
                ✗ nunjucks »   13,944 op/s (83.45% slower)
                   ✗ react »    1,756 op/s (97.92% slower)

                      simple-2
                   ✓ marko »   93,122 op/s (fastest)
                    ✗ dust »   42,421 op/s (54.45% slower)

                      ui-components
                   ✓ marko »   23,066 op/s (fastest)
                   ✗ react »    1,153 op/s (95.00% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   480 bytes gzipped     972 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    1.84% larger              29.92% larger

                      if-expression
                   ✓ marko »   283 bytes gzipped     477 bytes uncompressed
                                      (smallest)                 (smallest)
                     ✗ pug »  1196 bytes gzipped    2801 bytes uncompressed
                                   76.34% larger              82.97% larger

                      projects-escaped
                   ✓ marko »   253 bytes gzipped     401 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    3.44% larger              28.77% larger
      ✗ marko (native-for) »   281 bytes gzipped     437 bytes uncompressed
                                    9.96% larger               8.24% larger
              ✗ handlebars »   556 bytes gzipped    1571 bytes uncompressed
                                   54.50% larger              74.47% larger

                      projects-unescaped
                   ✓ marko »   257 bytes gzipped     402 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    4.10% larger              32.44% larger
      ✗ marko (native-for) »   284 bytes gzipped     438 bytes uncompressed
                                    9.51% larger               8.22% larger
              ✗ handlebars »   531 bytes gzipped    1593 bytes uncompressed
                                   51.60% larger              74.76% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              26.79% larger
                   ✗ marko »   171 bytes gzipped     235 bytes uncompressed
                                   11.70% larger                 (smallest)

                      search-results
                    ✓ dust »   545 bytes gzipped    1523 bytes uncompressed
                                      (smallest)              18.45% larger
                   ✗ marko »   548 bytes gzipped    1242 bytes uncompressed
                                    0.55% larger                 (smallest)

                      simple-1
                   ✓ marko »   252 bytes gzipped     370 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   255 bytes gzipped     493 bytes uncompressed
                                    1.18% larger              24.95% larger
                   ✗ react »   262 bytes gzipped     478 bytes uncompressed
                                    3.82% larger              22.59% larger
                     ✗ dot »   362 bytes gzipped     559 bytes uncompressed
                                   30.39% larger              33.81% larger
              ✗ handlebars »   436 bytes gzipped     898 bytes uncompressed
                                   42.20% larger              58.80% larger
                ✗ nunjucks »   469 bytes gzipped    1019 bytes uncompressed
                                   46.27% larger              63.69% larger
                    ✗ swig »   558 bytes gzipped    2636 bytes uncompressed
                                   54.84% larger              85.96% larger

                      simple-2
                   ✓ marko »   259 bytes gzipped     494 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    3.36% larger              23.77% larger

                      ui-components
                   ✓ marko »   181 bytes gzipped     221 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   11.27% larger              28.71% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Marko

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `marko` | ~1.2KB gzipped (2.7KB uncompressed) |
| `marko` +<br>`async-writer` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

_NOTE:_ Sizes are approximate because overhead associated with the CommonJS module loader varies. Size based on code as of April 7, 2014.

## Dust

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `dust-core` | 3.41KB gzipped (10.07KB uncompressed) |
| `dust-core` +<br>`dust-helpers` | 4.7KB gzipped (14.2KB uncompressed) |

_NOTE:_ Size based on code as of April 7, 2014.

# Contribute

## Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.marko
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.marko
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.marko
    │   └── template.marko
    └── group4
        ├── data.json
        ├── template.dust
        └── template.marko
```

## Adding a New Template Engine

To register a new templating engine, simply create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
