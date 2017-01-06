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
                   ✓ marko »    4,189 op/s (fastest)
                    ✗ dust »      891 op/s (78.73% slower)

                      if-expression
                   ✓ marko »  484,902 op/s (fastest)
                     ✗ pug »  329,156 op/s (32.12% slower)
                    ✗ jade »   46,313 op/s (90.45% slower)

                      projects-escaped
                   ✓ marko »   85,067 op/s (fastest)
      ✗ marko (native-for) »   78,859 op/s (7.30% slower)
              ✗ handlebars »   51,333 op/s (39.66% slower)
                    ✗ dust »   39,322 op/s (53.78% slower)

                      projects-unescaped
      ✓ marko (native-for) »  359,350 op/s (fastest)
                   ✗ marko »  329,002 op/s (8.45% slower)
              ✗ handlebars »  120,664 op/s (66.42% slower)
                    ✗ dust »   76,390 op/s (78.74% slower)

                      reverse-helper
                   ✓ marko »  727,591 op/s (fastest)
                    ✗ dust »  291,301 op/s (59.96% slower)

                      search-results
                   ✓ marko »   37,146 op/s (fastest)
                    ✗ dust »    9,510 op/s (74.40% slower)

                      simple-1
                     ✓ pug »  322,989 op/s (fastest)
                   ✗ marko »  298,512 op/s (7.58% slower)
                     ✗ dot »  255,678 op/s (20.84% slower)
              ✗ handlebars »  112,951 op/s (65.03% slower)
                    ✗ dust »   96,367 op/s (70.16% slower)
                    ✗ swig »   51,885 op/s (83.94% slower)
                    ✗ jade »   46,434 op/s (85.62% slower)
                ✗ nunjucks »   34,109 op/s (89.44% slower)
                     ✗ vue »    9,896 op/s (96.94% slower)
                   ✗ react »    4,782 op/s (98.52% slower)

                      simple-2
                   ✓ marko »  360,695 op/s (fastest)
                    ✗ dust »   95,576 op/s (73.50% slower)

                      ui-components
                   ✓ marko »   89,409 op/s (fastest)
                   ✗ react »    4,281 op/s (95.21% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                    ✓ dust »   489 bytes gzipped    1387 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   598 bytes gzipped    1527 bytes uncompressed
                                   18.23% larger               9.17% larger

                      if-expression
                   ✓ marko »   326 bytes gzipped     634 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   388 bytes gzipped    1057 bytes uncompressed
                                   15.98% larger              40.02% larger
                     ✗ pug »   907 bytes gzipped    2147 bytes uncompressed
                                   64.06% larger              70.47% larger

                      projects-escaped
                    ✓ dust »   262 bytes gzipped     563 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   366 bytes gzipped     822 bytes uncompressed
                                   28.42% larger              31.51% larger
      ✗ marko (native-for) »   377 bytes gzipped     814 bytes uncompressed
                                   30.50% larger              30.84% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   52.62% larger              63.70% larger

                      projects-unescaped
                    ✓ dust »   268 bytes gzipped     595 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   360 bytes gzipped     795 bytes uncompressed
                                   25.56% larger              25.16% larger
      ✗ marko (native-for) »   370 bytes gzipped     787 bytes uncompressed
                                   27.57% larger              24.40% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   49.43% larger              62.17% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   183 bytes gzipped     384 bytes uncompressed
                                   17.49% larger              16.41% larger

                      search-results
                    ✓ dust »   545 bytes gzipped    1523 bytes uncompressed
                                      (smallest)               3.74% larger
                   ✗ marko »   587 bytes gzipped    1466 bytes uncompressed
                                    7.16% larger                 (smallest)

                      simple-1
                   ✓ react »   395 bytes gzipped     850 bytes uncompressed
                                      (smallest)               3.41% larger
                    ✗ dust »   414 bytes gzipped     893 bytes uncompressed
                                    4.59% larger               8.06% larger
                   ✗ marko »   468 bytes gzipped     910 bytes uncompressed
                                   15.60% larger               9.78% larger
                     ✗ dot »   506 bytes gzipped     821 bytes uncompressed
                                   21.94% larger                 (smallest)
                    ✗ jade »   523 bytes gzipped    1124 bytes uncompressed
                                   24.47% larger              26.96% larger
              ✗ handlebars »   615 bytes gzipped    1467 bytes uncompressed
                                   35.77% larger              44.04% larger
                ✗ nunjucks »   634 bytes gzipped    1433 bytes uncompressed
                                   37.70% larger              42.71% larger
                    ✗ swig »   763 bytes gzipped    3707 bytes uncompressed
                                   48.23% larger              77.85% larger
                     ✗ pug »  1053 bytes gzipped    2317 bytes uncompressed
                                   62.49% larger              64.57% larger

                      simple-2
                    ✓ dust »   268 bytes gzipped     648 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   292 bytes gzipped     693 bytes uncompressed
                                    8.22% larger               6.49% larger

                      ui-components
                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   239 bytes gzipped     466 bytes uncompressed
                                   14.64% larger              33.48% larger
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
