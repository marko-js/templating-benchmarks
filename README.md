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
                   ✓ marko »    4,937 op/s (fastest)
                    ✗ dust »      946 op/s (80.84% slower)

                      if-expression
                   ✓ marko »  409,111 op/s (fastest)
                     ✗ pug »  262,027 op/s (35.95% slower)
                    ✗ jade »   37,352 op/s (90.87% slower)

                      projects-escaped
                   ✓ marko »  105,960 op/s (fastest)
      ✗ marko (native-for) »  105,499 op/s (0.44% slower)
              ✗ handlebars »   60,820 op/s (42.60% slower)
                    ✗ dust »   40,638 op/s (61.65% slower)

                      projects-unescaped
      ✓ marko (native-for) »  418,753 op/s (fastest)
                   ✗ marko »  392,843 op/s (6.19% slower)
              ✗ handlebars »  155,105 op/s (62.96% slower)
                    ✗ dust »   79,291 op/s (81.06% slower)

                      reverse-helper
                   ✓ marko »  449,786 op/s (fastest)
                    ✗ dust »  254,783 op/s (43.35% slower)

                      search-results
                   ✓ marko »   43,029 op/s (fastest)
                    ✗ dust »   10,648 op/s (75.25% slower)

                      simple-1
                   ✓ marko »  282,663 op/s (fastest)
                     ✗ pug »  268,094 op/s (5.15% slower)
                     ✗ dot »  249,954 op/s (11.57% slower)
              ✗ handlebars »  128,057 op/s (54.70% slower)
                    ✗ dust »   93,681 op/s (66.86% slower)
                    ✗ swig »   93,675 op/s (66.86% slower)
                    ✗ jade »   36,756 op/s (87.00% slower)
                ✗ nunjucks »   30,315 op/s (89.28% slower)
                   ✗ react »    5,849 op/s (97.93% slower)

                      simple-2
                   ✓ marko »  359,847 op/s (fastest)
                    ✗ dust »   99,837 op/s (72.26% slower)

                      ui-components
                   ✓ marko »   87,270 op/s (fastest)
                   ✗ react »    5,308 op/s (93.92% slower)
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
