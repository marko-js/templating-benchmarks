templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML | ✔ | ✔ | ✔
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
                   ✓ marko »    2,877 op/s (fastest)
                    ✗ dust »      808 op/s (71.92% slower)

                      if-expression
                   ✓ marko »  304,633 op/s (fastest)
                    ✗ dust »   48,105 op/s (84.21% slower)

                      projects-escaped
      ✓ marko (native-for) »   86,162 op/s (fastest)
                   ✗ marko »   80,020 op/s (7.13% slower)
              ✗ handlebars »   50,934 op/s (40.89% slower)
                    ✗ dust »   33,381 op/s (61.26% slower)

                      projects-unescaped
      ✓ marko (native-for) »  301,733 op/s (fastest)
                   ✗ marko »  300,871 op/s (0.29% slower)
              ✗ handlebars »  125,762 op/s (58.32% slower)
                    ✗ dust »   75,857 op/s (74.86% slower)

                      reverse-helper
                   ✓ marko »  440,843 op/s (fastest)
                    ✗ dust »  256,473 op/s (41.82% slower)

                      search-results
      ✓ marko (native-for) »   36,505 op/s (fastest)
                   ✗ marko »   32,536 op/s (10.87% slower)
                    ✗ dust »   11,336 op/s (68.95% slower)

                      simple-1
                     ✓ dot »  203,176 op/s (fastest)
      ✗ marko (native-for) »  190,609 op/s (6.19% slower)
                   ✗ marko »  178,322 op/s (12.23% slower)
                    ✗ dust »   87,875 op/s (56.75% slower)
              ✗ handlebars »   71,929 op/s (64.60% slower)
                    ✗ swig »   52,927 op/s (73.95% slower)
                    ✗ jade »   43,379 op/s (78.65% slower)
                ✗ nunjucks »   29,190 op/s (85.63% slower)
                  ✗ plates »   10,291 op/s (94.93% slower)

                      simple-2
                   ✓ marko »  275,953 op/s (fastest)
                    ✗ dust »   93,964 op/s (65.95% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   472 bytes gzipped     915 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    3.48% larger              34.03% larger

                      if-expression
                   ✓ marko »   285 bytes gzipped     476 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   392 bytes gzipped    1043 bytes uncompressed
                                   27.30% larger              54.36% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   269 bytes gzipped     406 bytes uncompressed
                                    8.18% larger               6.65% larger
              ✗ handlebars »   548 bytes gzipped    1540 bytes uncompressed
                                   54.93% larger              75.39% larger

                      projects-unescaped
                   ✓ marko »   249 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    7.09% larger              36.30% larger
      ✗ marko (native-for) »   273 bytes gzipped     406 bytes uncompressed
                                    8.79% larger               6.65% larger
              ✗ handlebars »   521 bytes gzipped    1556 bytes uncompressed
                                   52.21% larger              75.64% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              23.05% larger
                   ✗ marko »   169 bytes gzipped     247 bytes uncompressed
                                   10.65% larger                 (smallest)

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
      ✗ marko (native-for) »   575 bytes gzipped    1242 bytes uncompressed
                                    6.78% larger               4.27% larger

                      simple-1
                   ✓ marko »   216 bytes gzipped     293 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   237 bytes gzipped     320 bytes uncompressed
                                    8.86% larger               8.44% larger
                    ✗ dust »   249 bytes gzipped     462 bytes uncompressed
                                   13.25% larger              36.58% larger
                    ✗ jade »   337 bytes gzipped     664 bytes uncompressed
                                   35.91% larger              55.87% larger
                     ✗ dot »   353 bytes gzipped     523 bytes uncompressed
                                   38.81% larger              43.98% larger
              ✗ handlebars »   418 bytes gzipped     818 bytes uncompressed
                                   48.33% larger              64.18% larger
                ✗ nunjucks »   448 bytes gzipped     910 bytes uncompressed
                                   51.79% larger              67.80% larger
                    ✗ swig »   544 bytes gzipped    2557 bytes uncompressed
                                   60.29% larger              88.54% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger
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
