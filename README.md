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
                   ✓ marko »    4,606 op/s (fastest)
                    ✗ dust »      488 op/s (89.41% slower)

                      if-expression
                   ✓ marko »  595,460 op/s (fastest)
                     ✗ pug »  489,484 op/s (17.80% slower)
                    ✗ jade »   73,919 op/s (87.59% slower)

                      projects-escaped
                   ✓ marko »  106,996 op/s (fastest)
      ✗ marko (native-for) »  103,780 op/s (3.01% slower)
              ✗ handlebars »   65,694 op/s (38.60% slower)
                    ✗ dust »   37,028 op/s (65.39% slower)

                      projects-unescaped
      ✓ marko (native-for) »  468,052 op/s (fastest)
                   ✗ marko »  405,141 op/s (13.44% slower)
              ✗ handlebars »  172,530 op/s (63.14% slower)
                    ✗ dust »  127,281 op/s (72.81% slower)

                      reverse-helper
                   ✓ marko »  570,097 op/s (fastest)
                    ✗ dust »  387,780 op/s (31.98% slower)

                      search-results
                   ✓ marko »   46,678 op/s (fastest)
                    ✗ dust »   15,523 op/s (66.74% slower)

                      simple-1
                     ✓ pug »  411,312 op/s (fastest)
                   ✗ marko »  363,510 op/s (11.62% slower)
                     ✗ dot »  299,272 op/s (27.24% slower)
              ✗ handlebars »  151,100 op/s (63.26% slower)
                    ✗ dust »  138,700 op/s (66.28% slower)
                    ✗ jade »   89,398 op/s (78.27% slower)
                ✗ nunjucks »   56,938 op/s (86.16% slower)
                    ✗ swig »   54,621 op/s (86.72% slower)
                     ✗ vue »   16,216 op/s (96.06% slower)
                   ✗ react »    3,823 op/s (99.07% slower)

                      simple-2
                   ✓ marko »  426,036 op/s (fastest)
                    ✗ dust »  160,431 op/s (62.34% slower)

                      ui-components
                   ✓ marko »  204,337 op/s (fastest)
                   ✗ react »    3,600 op/s (98.24% slower)
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
                   ✗ marko »   667 bytes gzipped    1887 bytes uncompressed
                                   26.69% larger              26.97% larger

                      if-expression
                   ✓ marko »   344 bytes gzipped     680 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   388 bytes gzipped    1049 bytes uncompressed
                                   11.34% larger              35.18% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   61.99% larger              68.19% larger

                      projects-escaped
                    ✓ dust »   262 bytes gzipped     554 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   432 bytes gzipped    1182 bytes uncompressed
                                   39.35% larger              53.13% larger
      ✗ marko (native-for) »   445 bytes gzipped    1182 bytes uncompressed
                                   41.12% larger              53.13% larger
              ✗ handlebars »   558 bytes gzipped    1594 bytes uncompressed
                                   53.05% larger              65.24% larger

                      projects-unescaped
                    ✓ dust »   268 bytes gzipped     586 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   419 bytes gzipped    1125 bytes uncompressed
                                   36.04% larger              47.91% larger
      ✗ marko (native-for) »   433 bytes gzipped    1125 bytes uncompressed
                                   38.11% larger              47.91% larger
              ✗ handlebars »   535 bytes gzipped    1626 bytes uncompressed
                                   49.91% larger              63.96% larger

                      reverse-helper
                    ✓ dust »   147 bytes gzipped     312 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   246 bytes gzipped     524 bytes uncompressed
                                   40.24% larger              40.46% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1514 bytes uncompressed
                                      (smallest)               0.59% larger
                   ✗ marko »   597 bytes gzipped    1505 bytes uncompressed
                                    8.88% larger                 (smallest)

                      simple-1
                   ✓ react »   395 bytes gzipped     850 bytes uncompressed
                                      (smallest)               5.53% larger
                    ✗ dust »   413 bytes gzipped     884 bytes uncompressed
                                    4.36% larger               9.16% larger
                   ✗ marko »   485 bytes gzipped     956 bytes uncompressed
                                   18.56% larger              16.00% larger
                     ✗ dot »   491 bytes gzipped     803 bytes uncompressed
                                   19.55% larger                 (smallest)
                    ✗ jade »   524 bytes gzipped    1116 bytes uncompressed
                                   24.62% larger              28.05% larger
                ✗ nunjucks »   599 bytes gzipped    1367 bytes uncompressed
                                   34.06% larger              41.26% larger
              ✗ handlebars »   617 bytes gzipped    1492 bytes uncompressed
                                   35.98% larger              46.18% larger
                    ✗ swig »   756 bytes gzipped    3378 bytes uncompressed
                                   47.75% larger              76.23% larger
                     ✗ pug »  1047 bytes gzipped    2304 bytes uncompressed
                                   62.27% larger              65.15% larger

                      simple-2
                    ✓ dust »   267 bytes gzipped     639 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   311 bytes gzipped     739 bytes uncompressed
                                   14.15% larger              13.53% larger

                      ui-components
                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   274 bytes gzipped     559 bytes uncompressed
                                   25.55% larger              44.54% larger
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
