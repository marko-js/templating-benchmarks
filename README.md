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
                   ✓ marko »    4,166 op/s (fastest)
                    ✗ dust »      812 op/s (80.51% slower)

                      if-expression
                   ✓ marko »  530,165 op/s (fastest)
                     ✗ pug »  331,756 op/s (37.42% slower)
                    ✗ jade »   42,380 op/s (92.01% slower)

                      projects-escaped
      ✓ marko (native-for) »  101,834 op/s (fastest)
                   ✗ marko »  100,794 op/s (1.02% slower)
              ✗ handlebars »   56,701 op/s (44.32% slower)
                    ✗ dust »   40,939 op/s (59.80% slower)

                      projects-unescaped
      ✓ marko (native-for) »  482,533 op/s (fastest)
                   ✗ marko »  453,447 op/s (6.03% slower)
              ✗ handlebars »  138,242 op/s (71.35% slower)
                    ✗ dust »   92,244 op/s (80.88% slower)

                      reverse-helper
                   ✓ marko »  647,571 op/s (fastest)
                    ✗ dust »  322,467 op/s (50.20% slower)

                      search-results
                   ✓ marko »   41,992 op/s (fastest)
                    ✗ dust »   10,424 op/s (75.18% slower)

                      simple-1
                     ✓ pug »  364,950 op/s (fastest)
                   ✗ marko »  345,324 op/s (5.38% slower)
                     ✗ dot »  266,017 op/s (27.11% slower)
              ✗ handlebars »  130,998 op/s (64.11% slower)
                    ✗ dust »   98,432 op/s (73.03% slower)
                    ✗ swig »   87,621 op/s (75.99% slower)
                    ✗ jade »   47,118 op/s (87.09% slower)
                ✗ nunjucks »   36,522 op/s (89.99% slower)
                     ✗ vue »    9,524 op/s (97.39% slower)
                   ✗ react »    4,930 op/s (98.65% slower)

                      simple-2
                   ✓ marko »  435,509 op/s (fastest)
                    ✗ dust »  112,961 op/s (74.06% slower)

                      ui-components
                   ✓ marko »   87,183 op/s (fastest)
                   ✗ react »    4,487 op/s (94.85% slower)
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
                    ✗ jade »   388 bytes gzipped    1049 bytes uncompressed
                                   12.11% larger              36.13% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   62.32% larger              68.66% larger

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
                                      (smallest)               6.00% larger
                    ✗ dust »   413 bytes gzipped     884 bytes uncompressed
                                    4.36% larger               9.62% larger
                   ✗ marko »   486 bytes gzipped     950 bytes uncompressed
                                   18.72% larger              15.89% larger
                     ✗ dot »   489 bytes gzipped     799 bytes uncompressed
                                   19.22% larger                 (smallest)
                    ✗ jade »   524 bytes gzipped    1116 bytes uncompressed
                                   24.62% larger              28.41% larger
                ✗ nunjucks »   608 bytes gzipped    1385 bytes uncompressed
                                   35.03% larger              42.31% larger
              ✗ handlebars »   620 bytes gzipped    1498 bytes uncompressed
                                   36.29% larger              46.66% larger
                    ✗ swig »   756 bytes gzipped    3378 bytes uncompressed
                                   47.75% larger              76.35% larger
                     ✗ pug »  1047 bytes gzipped    2304 bytes uncompressed
                                   62.27% larger              65.32% larger

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
