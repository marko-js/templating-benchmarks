templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[raptor-templates](https://github.com/raptorjs3/raptor-templates) | HTML | ✔ | ✔ | ✔
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Raptor Templates](#raptor-templates)
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
                  ✓ raptor »    2,700 op/s (fastest)
                    ✗ dust »    1,186 op/s (56.07% slower)

                      if-expression
                  ✓ raptor »  211,787 op/s (fastest)
                    ✗ dust »   63,508 op/s (70.01% slower)

                      projects-escaped
     ✓ raptor (native-for) »   75,536 op/s (fastest)
                  ✗ raptor »   72,477 op/s (4.05% slower)
              ✗ handlebars »   62,955 op/s (16.66% slower)
                    ✗ dust »   60,891 op/s (19.39% slower)

                      projects-unescaped
     ✓ raptor (native-for) »  248,180 op/s (fastest)
              ✗ handlebars »  243,262 op/s (1.98% slower)
                  ✗ raptor »  223,374 op/s (10.00% slower)
                    ✗ dust »  160,028 op/s (35.52% slower)

                      reverse-helper
                    ✓ dust »  321,036 op/s (fastest)
                  ✗ raptor »  310,189 op/s (3.38% slower)

                      search-results
     ✓ raptor (native-for) »   34,947 op/s (fastest)
                  ✗ raptor »   29,007 op/s (17.00% slower)
                    ✗ dust »   19,301 op/s (44.77% slower)

                      simple-1
                     ✓ dot »  204,614 op/s (fastest)
     ✗ raptor (native-for) »  152,712 op/s (25.37% slower)
                  ✗ raptor »  145,385 op/s (28.95% slower)
              ✗ handlebars »  143,841 op/s (29.70% slower)
                    ✗ dust »  126,876 op/s (37.99% slower)
                ✗ nunjucks »   82,131 op/s (59.86% slower)
                    ✗ swig »   79,585 op/s (61.10% slower)
                    ✗ jade »   46,839 op/s (77.11% slower)
                  ✗ plates »   10,677 op/s (94.78% slower)

                      simple-2
                  ✓ raptor »  211,822 op/s (fastest)
                    ✗ dust »  163,913 op/s (22.62% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                  ✓ raptor »   435 bytes gzipped     862 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   494 bytes gzipped    1511 bytes uncompressed
                                   11.94% larger              42.95% larger

                      if-expression
                  ✓ raptor »   248 bytes gzipped     413 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   380 bytes gzipped     952 bytes uncompressed
                                   34.74% larger              56.62% larger

                      projects-escaped
                  ✓ raptor »   210 bytes gzipped     324 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ raptor (native-for) »   235 bytes gzipped     351 bytes uncompressed
                                   10.64% larger               7.69% larger
                    ✗ dust »   271 bytes gzipped     604 bytes uncompressed
                                   22.51% larger              46.36% larger
              ✗ handlebars »   519 bytes gzipped    1377 bytes uncompressed
                                   59.54% larger              76.47% larger

                      projects-unescaped
                  ✓ raptor »   207 bytes gzipped     309 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ raptor (native-for) »   233 bytes gzipped     336 bytes uncompressed
                                   11.16% larger               8.04% larger
                    ✗ dust »   278 bytes gzipped     636 bytes uncompressed
                                   25.54% larger              51.42% larger
              ✗ handlebars »   497 bytes gzipped    1430 bytes uncompressed
                                   58.35% larger              78.39% larger

                      reverse-helper
                  ✓ raptor »   132 bytes gzipped     177 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   135 bytes gzipped     308 bytes uncompressed
                                    2.22% larger              42.53% larger

                      search-results
                  ✓ raptor »   497 bytes gzipped    1136 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ raptor (native-for) »   537 bytes gzipped    1189 bytes uncompressed
                                    7.45% larger               4.46% larger
                    ✗ dust »   552 bytes gzipped    1581 bytes uncompressed
                                    9.96% larger              28.15% larger

                      simple-1
                  ✓ raptor »   180 bytes gzipped     240 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ raptor (native-for) »   202 bytes gzipped     267 bytes uncompressed
                                   10.89% larger              10.11% larger
                     ✗ dot »   228 bytes gzipped     309 bytes uncompressed
                                   21.05% larger              22.33% larger
                    ✗ dust »   256 bytes gzipped     493 bytes uncompressed
                                   29.69% larger              51.32% larger
                    ✗ jade »   328 bytes gzipped     617 bytes uncompressed
                                   45.12% larger              61.10% larger
                ✗ nunjucks »   384 bytes gzipped     695 bytes uncompressed
                                   53.13% larger              65.47% larger
              ✗ handlebars »   427 bytes gzipped     814 bytes uncompressed
                                   57.85% larger              70.52% larger
                    ✗ swig »   464 bytes gzipped    1306 bytes uncompressed
                                   61.21% larger              81.62% larger

                      simple-2
                  ✓ raptor »   217 bytes gzipped     431 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   276 bytes gzipped     718 bytes uncompressed
                                   21.38% larger              39.97% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Raptor Templates

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `raptor-templates` | ~1.2KB gzipped (2.7KB uncompressed) |
| `raptor-templates` +<br>`raptor-render-context` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

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
    │   └── template.rhtml
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.rhtml
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.rhtml
    │   └── template.rhtml
    └── group4
        ├── data.json
        ├── template.dust
        └── template.rhtml
```

## Adding a New Template Engine

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
