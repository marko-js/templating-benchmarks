templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/raptorjs3/marko) | HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

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


## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,460 op/s (fastest)
                    ✗ dust »      849 op/s (65.49% slower)

                      if-expression
                   ✓ marko »  198,050 op/s (fastest)
                    ✗ dust »   51,630 op/s (73.93% slower)

                      projects-escaped
      ✓ marko (native-for) »   75,731 op/s (fastest)
                   ✗ marko »   72,769 op/s (3.91% slower)
              ✗ handlebars »   61,665 op/s (18.57% slower)
                    ✗ dust »   59,188 op/s (21.84% slower)

                      projects-unescaped
              ✓ handlebars »  235,905 op/s (fastest)
      ✗ marko (native-for) »  208,526 op/s (11.61% slower)
                   ✗ marko »  196,873 op/s (16.55% slower)
                    ✗ dust »  149,956 op/s (36.43% slower)

                      reverse-helper
                    ✓ dust »  315,557 op/s (fastest)
                   ✗ marko »  275,330 op/s (12.75% slower)

                      search-results
      ✓ marko (native-for) »   33,214 op/s (fastest)
                   ✗ marko »   28,187 op/s (15.14% slower)
                    ✗ dust »   18,016 op/s (45.76% slower)

                      simple-1
                     ✓ dot »  209,327 op/s (fastest)
              ✗ handlebars »  150,459 op/s (28.12% slower)
      ✗ marko (native-for) »  137,950 op/s (34.10% slower)
                   ✗ marko »  129,936 op/s (37.93% slower)
                    ✗ dust »  120,474 op/s (42.45% slower)
                ✗ nunjucks »   86,023 op/s (58.90% slower)
                    ✗ swig »   80,928 op/s (61.34% slower)
                    ✗ jade »   45,410 op/s (78.31% slower)
                  ✗ plates »   10,593 op/s (94.94% slower)

                      simple-2
                   ✓ marko »  206,458 op/s (fastest)
                    ✗ dust »  166,185 op/s (19.51% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   437 bytes gzipped     866 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   494 bytes gzipped    1501 bytes uncompressed
                                   11.54% larger              42.31% larger

                      if-expression
                   ✓ marko »   250 bytes gzipped     417 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   379 bytes gzipped     948 bytes uncompressed
                                   34.04% larger              56.01% larger

                      projects-escaped
                   ✓ marko »   213 bytes gzipped     330 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   237 bytes gzipped     357 bytes uncompressed
                                   10.13% larger               7.56% larger
                    ✗ dust »   269 bytes gzipped     600 bytes uncompressed
                                   20.82% larger              45.00% larger
              ✗ handlebars »   519 bytes gzipped    1377 bytes uncompressed
                                   58.96% larger              76.03% larger

                      projects-unescaped
                   ✓ marko »   214 bytes gzipped     330 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   240 bytes gzipped     357 bytes uncompressed
                                   10.83% larger               7.56% larger
                    ✗ dust »   277 bytes gzipped     632 bytes uncompressed
                                   22.74% larger              47.78% larger
              ✗ handlebars »   497 bytes gzipped    1430 bytes uncompressed
                                   56.94% larger              76.92% larger

                      reverse-helper
                    ✓ dust »   135 bytes gzipped     308 bytes uncompressed
                                      (smallest)              35.71% larger
                   ✗ marko »   139 bytes gzipped     198 bytes uncompressed
                                    2.88% larger                 (smallest)

                      search-results
                   ✓ marko »   500 bytes gzipped    1140 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   540 bytes gzipped    1193 bytes uncompressed
                                    7.41% larger               4.44% larger
                    ✗ dust »   551 bytes gzipped    1573 bytes uncompressed
                                    9.26% larger              27.53% larger

                      simple-1
                   ✓ marko »   183 bytes gzipped     244 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   204 bytes gzipped     271 bytes uncompressed
                                   10.29% larger               9.96% larger
                     ✗ dot »   228 bytes gzipped     309 bytes uncompressed
                                   19.74% larger              21.04% larger
                    ✗ dust »   253 bytes gzipped     449 bytes uncompressed
                                   27.67% larger              45.66% larger
                    ✗ jade »   328 bytes gzipped     617 bytes uncompressed
                                   44.21% larger              60.45% larger
                ✗ nunjucks »   384 bytes gzipped     695 bytes uncompressed
                                   52.34% larger              64.89% larger
              ✗ handlebars »   427 bytes gzipped     814 bytes uncompressed
                                   57.14% larger              70.02% larger
                    ✗ swig »   464 bytes gzipped    1306 bytes uncompressed
                                   60.56% larger              81.32% larger

                      simple-2
                   ✓ marko »   219 bytes gzipped     435 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   275 bytes gzipped     716 bytes uncompressed
                                   20.36% larger              39.25% larger
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

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
