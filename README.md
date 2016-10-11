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

- Node.js v6.0.0
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
                   ✓ marko »    4,952 op/s (fastest)
                    ✗ dust »      977 op/s (80.27% slower)

                      if-expression
                   ✓ marko »  417,340 op/s (fastest)
                     ✗ pug »  255,761 op/s (38.72% slower)
                    ✗ jade »   35,241 op/s (91.56% slower)

                      projects-escaped
      ✓ marko (native-for) »  101,188 op/s (fastest)
                   ✗ marko »   93,283 op/s (7.81% slower)
              ✗ handlebars »   52,683 op/s (47.94% slower)
                    ✗ dust »   41,828 op/s (58.66% slower)

                      projects-unescaped
      ✓ marko (native-for) »  418,245 op/s (fastest)
                   ✗ marko »  399,888 op/s (4.39% slower)
              ✗ handlebars »  150,854 op/s (63.93% slower)
                    ✗ dust »   82,640 op/s (80.24% slower)

                      reverse-helper
                   ✓ marko »  497,304 op/s (fastest)
                    ✗ dust »  260,478 op/s (47.62% slower)

                      search-results
                   ✓ marko »   43,343 op/s (fastest)
                    ✗ dust »   10,717 op/s (75.27% slower)

                      simple-1
                   ✓ marko »  237,885 op/s (fastest)
                     ✗ pug »  232,903 op/s (2.09% slower)
                     ✗ dot »  209,090 op/s (12.10% slower)
              ✗ handlebars »  120,581 op/s (49.31% slower)
                    ✗ dust »   38,494 op/s (83.82% slower)
                    ✗ jade »   37,203 op/s (84.36% slower)
                ✗ nunjucks »   27,635 op/s (88.38% slower)
                     ✗ vue »   10,082 op/s (95.76% slower)
                    ✗ swig »    6,853 op/s (97.12% slower)
                   ✗ react »    5,497 op/s (97.69% slower)

                      simple-2
                   ✓ marko »  367,742 op/s (fastest)
                    ✗ dust »  100,594 op/s (72.65% slower)

                      ui-components
                   ✓ marko »   85,643 op/s (fastest)
                   ✗ react »    5,281 op/s (93.83% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   463 bytes gzipped     905 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    5.32% larger              34.75% larger

                      if-expression
                   ✓ marko »   272 bytes gzipped     454 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   388 bytes gzipped    1057 bytes uncompressed
                                   29.90% larger              57.05% larger
                     ✗ pug »   907 bytes gzipped    2147 bytes uncompressed
                                   70.01% larger              78.85% larger

                      projects-escaped
                   ✓ marko »   238 bytes gzipped     364 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   259 bytes gzipped     392 bytes uncompressed
                                    8.11% larger               7.14% larger
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    9.16% larger              35.35% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   56.96% larger              76.53% larger

                      projects-unescaped
                   ✓ marko »   242 bytes gzipped     367 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   262 bytes gzipped     395 bytes uncompressed
                                    7.63% larger               7.09% larger
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    9.70% larger              38.32% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   54.34% larger              76.67% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              36.45% larger
                   ✗ marko »   158 bytes gzipped     204 bytes uncompressed
                                    4.43% larger                 (smallest)

                      search-results
                   ✓ marko »   531 bytes gzipped    1185 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    2.57% larger              22.19% larger

                      simple-1
                   ✓ marko »   378 bytes gzipped     620 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   395 bytes gzipped     850 bytes uncompressed
                                    4.30% larger              27.06% larger
                    ✗ dust »   414 bytes gzipped     893 bytes uncompressed
                                    8.70% larger              30.57% larger
                     ✗ dot »   506 bytes gzipped     821 bytes uncompressed
                                   25.30% larger              24.48% larger
                    ✗ jade »   523 bytes gzipped    1124 bytes uncompressed
                                   27.72% larger              44.84% larger
              ✗ handlebars »   615 bytes gzipped    1467 bytes uncompressed
                                   38.54% larger              57.74% larger
                ✗ nunjucks »   634 bytes gzipped    1433 bytes uncompressed
                                   40.38% larger              56.73% larger
                    ✗ swig »   763 bytes gzipped    3707 bytes uncompressed
                                   50.46% larger              83.27% larger
                     ✗ pug »  1053 bytes gzipped    2317 bytes uncompressed
                                   64.10% larger              73.24% larger

                      simple-2
                   ✓ marko »   246 bytes gzipped     469 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    8.21% larger              27.62% larger

                      ui-components
                   ✓ marko »   168 bytes gzipped     200 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   17.65% larger              35.48% larger
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
