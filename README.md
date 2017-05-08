templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[pug](https://github.com/pugjs/pug) | Short-hand HTML | ✖ | ✖ | ✔
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

- Node.js v7.4.0
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
                   ✓ marko »    4,301 op/s (fastest)
                    ✗ dust »      879 op/s (79.56% slower)

                      if-expression
                   ✓ marko »  533,709 op/s (fastest)
                     ✗ pug »  344,010 op/s (35.54% slower)
                    ✗ jade »   46,419 op/s (91.30% slower)

                      projects-escaped
      ✓ marko (native-for) »  102,139 op/s (fastest)
                   ✗ marko »  100,347 op/s (1.75% slower)
              ✗ handlebars »   57,562 op/s (43.64% slower)
                    ✗ dust »   42,501 op/s (58.39% slower)

                      projects-unescaped
      ✓ marko (native-for) »  460,329 op/s (fastest)
                   ✗ marko »  432,482 op/s (6.05% slower)
              ✗ handlebars »  152,276 op/s (66.92% slower)
                    ✗ dust »   94,979 op/s (79.37% slower)

                      reverse-helper
                   ✓ marko »  607,768 op/s (fastest)
                    ✗ dust »  304,793 op/s (49.85% slower)

                      search-results
                   ✓ marko »   40,351 op/s (fastest)
                    ✗ dust »   10,190 op/s (74.75% slower)

                      simple-1
                     ✓ pug »  288,262 op/s (fastest)
                   ✗ marko »  282,387 op/s (2.04% slower)
                     ✗ dot »  267,316 op/s (7.27% slower)
              ✗ handlebars »  121,964 op/s (57.69% slower)
                    ✗ dust »   98,719 op/s (65.75% slower)
                    ✗ swig »   87,299 op/s (69.72% slower)
                    ✗ jade »   46,289 op/s (83.94% slower)
                ✗ nunjucks »   33,016 op/s (88.55% slower)
                     ✗ vue »    9,629 op/s (96.66% slower)
                   ✗ react »    4,252 op/s (98.52% slower)

                      simple-2
                   ✓ marko »  423,506 op/s (fastest)
                    ✗ dust »  112,470 op/s (73.44% slower)

                      ui-components
                   ✓ marko »   86,548 op/s (fastest)
                   ✗ react »    4,031 op/s (95.34% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                    ✓ dust »   489 bytes gzipped    1378 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   635 bytes gzipped    1677 bytes uncompressed
                                   22.99% larger              17.83% larger

                      if-expression
                   ✓ marko »   341 bytes gzipped     670 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   388 bytes gzipped    1057 bytes uncompressed
                                   12.11% larger              36.61% larger
                     ✗ pug »   906 bytes gzipped    2146 bytes uncompressed
                                   62.36% larger              68.78% larger

                      projects-escaped
                    ✓ dust »   262 bytes gzipped     554 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   409 bytes gzipped     972 bytes uncompressed
                                   35.94% larger              43.00% larger
      ✗ marko (native-for) »   413 bytes gzipped     964 bytes uncompressed
                                   36.56% larger              42.53% larger
              ✗ handlebars »   558 bytes gzipped    1609 bytes uncompressed
                                   53.05% larger              65.57% larger

                      projects-unescaped
                    ✓ dust »   268 bytes gzipped     586 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   397 bytes gzipped     915 bytes uncompressed
                                   32.49% larger              35.96% larger
      ✗ marko (native-for) »   400 bytes gzipped     907 bytes uncompressed
                                   33.00% larger              35.39% larger
              ✗ handlebars »   531 bytes gzipped    1631 bytes uncompressed
                                   49.53% larger              64.07% larger

                      reverse-helper
                    ✓ dust »   147 bytes gzipped     312 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   227 bytes gzipped     441 bytes uncompressed
                                   35.24% larger              29.25% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1514 bytes uncompressed
                                      (smallest)               0.73% larger
                   ✗ marko »   604 bytes gzipped    1503 bytes uncompressed
                                    9.93% larger                 (smallest)

                      simple-1
                   ✓ react »   395 bytes gzipped     850 bytes uncompressed
                                      (smallest)               5.29% larger
                    ✗ dust »   413 bytes gzipped     884 bytes uncompressed
                                    4.36% larger               8.94% larger
                   ✗ marko »   486 bytes gzipped     950 bytes uncompressed
                                   18.72% larger              15.26% larger
                     ✗ dot »   494 bytes gzipped     805 bytes uncompressed
                                   20.04% larger                 (smallest)
                    ✗ jade »   523 bytes gzipped    1124 bytes uncompressed
                                   24.47% larger              28.38% larger
              ✗ handlebars »   620 bytes gzipped    1498 bytes uncompressed
                                   36.29% larger              46.26% larger
                ✗ nunjucks »   631 bytes gzipped    1428 bytes uncompressed
                                   37.40% larger              43.63% larger
                    ✗ swig »   757 bytes gzipped    3380 bytes uncompressed
                                   47.82% larger              76.18% larger
                     ✗ pug »  1048 bytes gzipped    2312 bytes uncompressed
                                   62.31% larger              65.18% larger

                      simple-2
                    ✓ dust »   267 bytes gzipped     639 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   315 bytes gzipped     737 bytes uncompressed
                                   15.24% larger              13.30% larger

                      ui-components
                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   271 bytes gzipped     544 bytes uncompressed
                                   24.72% larger              43.01% larger
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
