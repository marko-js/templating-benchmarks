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
                   ✓ marko »    4,427 op/s (fastest)
                    ✗ dust »    1,212 op/s (72.62% slower)

                      if-expression
                     ✓ pug »  322,537 op/s (fastest)
                   ✗ marko »  231,385 op/s (28.26% slower)
                     ✗ ejs »  108,881 op/s (66.24% slower)
                    ✗ jade »   66,543 op/s (79.37% slower)

                      projects-escaped
      ✓ marko (native-for) »   67,184 op/s (fastest)
                   ✗ marko »   64,788 op/s (3.57% slower)
              ✗ handlebars »   54,151 op/s (19.40% slower)
                    ✗ dust »   34,313 op/s (48.93% slower)

                      projects-unescaped
      ✓ marko (native-for) »  183,801 op/s (fastest)
                   ✗ marko »  177,620 op/s (3.36% slower)
              ✗ handlebars »  162,085 op/s (11.81% slower)
                    ✗ dust »  102,799 op/s (44.07% slower)

                      reverse-helper
                    ✓ dust »  227,821 op/s (fastest)
                   ✗ marko »  220,692 op/s (3.13% slower)

                      search-results
                   ✓ marko »   38,255 op/s (fastest)
                    ✗ dust »   15,106 op/s (60.51% slower)

                      simple-0
                     ✓ es6 »  295,259 op/s (fastest)
                  ✗ lodash »  204,434 op/s (30.76% slower)
                   ✗ marko »  170,363 op/s (42.30% slower)
                    ✗ dust »  165,545 op/s (43.93% slower)

                      simple-1
                     ✓ pug »  264,197 op/s (fastest)
                     ✗ dot »  190,031 op/s (28.07% slower)
                   ✗ marko »  158,590 op/s (39.97% slower)
              ✗ handlebars »  115,701 op/s (56.21% slower)
                    ✗ dust »   85,372 op/s (67.69% slower)
                    ✗ jade »   65,644 op/s (75.15% slower)
                     ✗ ejs »   61,470 op/s (76.73% slower)
                    ✗ swig »   47,641 op/s (81.97% slower)
                ✗ nunjucks »   45,035 op/s (82.95% slower)
                     ✗ vue »   15,161 op/s (94.26% slower)
                   ✗ react »    3,730 op/s (98.59% slower)

                      simple-2
                   ✓ marko »  173,641 op/s (fastest)
                    ✗ dust »  123,038 op/s (29.14% slower)

                      ui-components
                   ✓ marko »   91,699 op/s (fastest)
                   ✗ react »    3,278 op/s (96.43% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                    ✓ dust »   488 bytes gzipped    1362 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   775 bytes gzipped    2307 bytes uncompressed
                                   37.03% larger              40.96% larger

                      if-expression
                    ✓ jade »   387 bytes gzipped    1049 bytes uncompressed
                                      (smallest)               3.43% larger
                   ✗ marko »   462 bytes gzipped    1104 bytes uncompressed
                                   16.23% larger               8.24% larger
                     ✗ ejs »   480 bytes gzipped    1013 bytes uncompressed
                                   19.38% larger                 (smallest)
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   57.24% larger              52.62% larger

                      projects-escaped
                    ✓ dust »   261 bytes gzipped     547 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   551 bytes gzipped    1619 bytes uncompressed
                                   52.63% larger              66.21% larger
              ✗ handlebars »   565 bytes gzipped    1564 bytes uncompressed
                                   53.81% larger              65.03% larger
      ✗ marko (native-for) »   571 bytes gzipped    1641 bytes uncompressed
                                   54.29% larger              66.67% larger

                      projects-unescaped
                    ✓ dust »   266 bytes gzipped     579 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   541 bytes gzipped    1566 bytes uncompressed
                                   50.83% larger              63.03% larger
              ✗ handlebars »   543 bytes gzipped    1596 bytes uncompressed
                                   51.01% larger              63.72% larger
      ✗ marko (native-for) »   561 bytes gzipped    1588 bytes uncompressed
                                   52.58% larger              63.54% larger

                      reverse-helper
                    ✓ dust »   147 bytes gzipped     311 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   361 bytes gzipped     950 bytes uncompressed
                                   59.28% larger              67.26% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1501 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   711 bytes gzipped    1931 bytes uncompressed
                                   23.49% larger              22.27% larger

                      simple-0
                    ✓ dust »   172 bytes gzipped     233 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   325 bytes gzipped     759 bytes uncompressed
                                   47.08% larger              69.30% larger

                      simple-1
                   ✓ react »   392 bytes gzipped     842 bytes uncompressed
                                      (smallest)               7.01% larger
                    ✗ dust »   412 bytes gzipped     868 bytes uncompressed
                                    4.85% larger               9.79% larger
                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
                                   20.16% larger                 (smallest)
                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
                                   24.90% larger              29.84% larger
                     ✗ ejs »   585 bytes gzipped    1204 bytes uncompressed
                                   32.99% larger              34.97% larger
                   ✗ marko »   597 bytes gzipped    1370 bytes uncompressed
                                   34.34% larger              42.85% larger
                ✗ nunjucks »   604 bytes gzipped    1367 bytes uncompressed
                                   35.10% larger              42.72% larger
              ✗ handlebars »   621 bytes gzipped    1489 bytes uncompressed
                                   36.88% larger              47.41% larger
                    ✗ swig »   782 bytes gzipped    3334 bytes uncompressed
                                   49.87% larger              76.51% larger
                     ✗ pug »  1046 bytes gzipped    2303 bytes uncompressed
                                   62.52% larger              66.00% larger

                      simple-2
                    ✓ dust »   267 bytes gzipped     635 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   437 bytes gzipped    1153 bytes uncompressed
                                   38.90% larger              44.93% larger

                      ui-components
                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   386 bytes gzipped     990 bytes uncompressed
                                   47.15% larger              68.69% larger
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
