templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML | ✔ | ✔ | ✔
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
                   ✓ marko »    3,938 op/s (fastest)
                    ✗ dust »      807 op/s (79.51% slower)

                      if-expression
                   ✓ marko »  365,090 op/s (fastest)
                    ✗ jade »   24,640 op/s (93.25% slower)

                      projects-escaped
      ✓ marko (native-for) »   80,722 op/s (fastest)
                   ✗ marko »   80,626 op/s (0.12% slower)
              ✗ handlebars »   49,628 op/s (38.52% slower)
                    ✗ dust »   44,183 op/s (45.27% slower)

                      projects-unescaped
      ✓ marko (native-for) »  358,746 op/s (fastest)
                   ✗ marko »  330,644 op/s (7.83% slower)
              ✗ handlebars »  154,299 op/s (56.99% slower)
                    ✗ dust »   75,454 op/s (78.97% slower)

                      reverse-helper
                   ✓ marko »  360,835 op/s (fastest)
                    ✗ dust »  275,400 op/s (23.68% slower)

                      search-results
                   ✓ marko »   33,887 op/s (fastest)
                    ✗ dust »    9,523 op/s (71.90% slower)

                      simple-1
                   ✓ marko »  186,960 op/s (fastest)
                     ✗ dot »  182,433 op/s (2.42% slower)
              ✗ handlebars »   90,034 op/s (51.84% slower)
                    ✗ dust »   87,160 op/s (53.38% slower)
                    ✗ swig »   48,753 op/s (73.92% slower)
                ✗ nunjucks »   35,671 op/s (80.92% slower)
                    ✗ jade »   29,633 op/s (84.15% slower)
                   ✗ react »    3,565 op/s (98.09% slower)

                      simple-2
                   ✓ marko »  288,573 op/s (fastest)
                    ✗ dust »  109,311 op/s (62.12% slower)

                      ui-components
                   ✓ marko »   55,855 op/s (fastest)
                   ✗ react »    2,890 op/s (94.83% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   470 bytes gzipped     914 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    3.89% larger              34.10% larger

                      if-expression
                   ✓ marko »   281 bytes gzipped     469 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   388 bytes gzipped    1057 bytes uncompressed
                                   27.58% larger              55.63% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   271 bytes gzipped     407 bytes uncompressed
                                    8.86% larger               6.88% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   55.33% larger              75.56% larger

                      projects-unescaped
                   ✓ marko »   250 bytes gzipped     380 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    6.72% larger              36.13% larger
      ✗ marko (native-for) »   275 bytes gzipped     408 bytes uncompressed
                                    9.09% larger               6.86% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   52.83% larger              75.84% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              31.78% larger
                   ✗ marko »   167 bytes gzipped     219 bytes uncompressed
                                    9.58% larger                 (smallest)

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger

                      simple-1
                   ✓ marko »   251 bytes gzipped     369 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   255 bytes gzipped     493 bytes uncompressed
                                    1.57% larger              25.15% larger
                   ✗ react »   262 bytes gzipped     478 bytes uncompressed
                                    4.20% larger              22.80% larger
                    ✗ jade »   345 bytes gzipped     704 bytes uncompressed
                                   27.25% larger              47.59% larger
                     ✗ dot »   362 bytes gzipped     559 bytes uncompressed
                                   30.66% larger              33.99% larger
              ✗ handlebars »   434 bytes gzipped     880 bytes uncompressed
                                   42.17% larger              58.07% larger
                ✗ nunjucks »   466 bytes gzipped     991 bytes uncompressed
                                   46.14% larger              62.76% larger
                    ✗ swig »   558 bytes gzipped    2636 bytes uncompressed
                                   55.02% larger              86.00% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger

                      ui-components
                   ✓ marko »   179 bytes gzipped     219 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   12.25% larger              29.35% larger
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
