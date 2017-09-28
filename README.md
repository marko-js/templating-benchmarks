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
                   ✓ marko »    4,780 op/s (fastest)
                    ✗ dust »      868 op/s (81.84% slower)

                      if-expression
                   ✓ marko »  603,718 op/s (fastest)
                     ✗ pug »  495,798 op/s (17.88% slower)
                    ✗ jade »   73,946 op/s (87.75% slower)

                      projects-escaped
                   ✓ marko »  116,897 op/s (fastest)
      ✗ marko (native-for) »  114,487 op/s (2.06% slower)
              ✗ handlebars »   64,465 op/s (44.85% slower)
                    ✗ dust »   41,080 op/s (64.86% slower)

                      projects-unescaped
      ✓ marko (native-for) »  476,404 op/s (fastest)
                   ✗ marko »  416,648 op/s (12.54% slower)
              ✗ handlebars »  182,510 op/s (61.69% slower)
                    ✗ dust »  123,418 op/s (74.09% slower)

                      reverse-helper
                   ✓ marko »  571,518 op/s (fastest)
                    ✗ dust »  361,126 op/s (36.81% slower)

                      search-results
                   ✓ marko »   47,645 op/s (fastest)
                    ✗ dust »   15,447 op/s (67.58% slower)

                      simple-0
                   ✓ marko »  472,020 op/s (fastest)
                     ✗ es6 »  466,638 op/s (1.14% slower)
                  ✗ lodash »  291,743 op/s (38.19% slower)
                    ✗ dust »  250,187 op/s (47.00% slower)

                      simple-1
                     ✓ pug »  415,779 op/s (fastest)
                   ✗ marko »  363,983 op/s (12.46% slower)
                     ✗ dot »  299,093 op/s (28.06% slower)
              ✗ handlebars »  161,886 op/s (61.06% slower)
                    ✗ dust »  135,315 op/s (67.46% slower)
                    ✗ jade »   88,483 op/s (78.72% slower)
                ✗ nunjucks »   56,782 op/s (86.34% slower)
                    ✗ swig »   54,721 op/s (86.84% slower)
                     ✗ vue »   15,601 op/s (96.25% slower)
                   ✗ react »    3,874 op/s (99.07% slower)

                      simple-2
                   ✓ marko »  437,265 op/s (fastest)
                    ✗ dust »  154,719 op/s (64.62% slower)

                      ui-components
                   ✓ marko »  199,304 op/s (fastest)
                   ✗ react »    3,621 op/s (98.18% slower)
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

                      simple-0
                    ✓ dust »   173 bytes gzipped     234 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   213 bytes gzipped     345 bytes uncompressed
                                   18.78% larger              32.17% larger

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
