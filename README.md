templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:


* [dustjs-linkedin](https://github.com/linkedin/dustjs)
* [handlebars](https://github.com/wycats/handlebars.js)
* [jade](https://github.com/visionmedia/jade)
* [raptor-templates](https://github.com/raptorjs3/raptor-templates)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Run Benchmarks](#run-benchmarks)
- [Adding a New Comparison Group](#adding-a-new-comparison-group)
- [Adding a New Template Engine](#adding-a-new-template-engine)
- [Current Results](#current-results)
    - [Performance](#performance)
    - [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
    - [Raptor Templates](#raptor-templates)
    - [Dust](#dust)
- [Contribute](#contribute)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Adding a New Comparison Group

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

# Adding a New Template Engine

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.


# Current Results


## Performance

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                  ✓ raptor »    2,576 op/s (fastest)
                    ✗ dust »      763 op/s (70.38% slower)

                  ✓ raptor »  191,542 op/s (fastest)
                    ✗ dust »   43,954 op/s (77.05% slower)

     ✓ raptor (native-for) »   74,540 op/s (fastest)
                  ✗ raptor »   71,733 op/s (3.77% slower)
              ✗ handlebars »   64,552 op/s (13.40% slower)
                    ✗ dust »   46,398 op/s (37.75% slower)

     ✓ raptor (native-for) »  225,864 op/s (fastest)
              ✗ handlebars »  216,699 op/s (4.06% slower)
                  ✗ raptor »  208,477 op/s (7.70% slower)
                    ✗ dust »   79,154 op/s (64.96% slower)

                  ✓ raptor »  294,460 op/s (fastest)
                    ✗ dust »  241,357 op/s (18.03% slower)

     ✓ raptor (native-for) »   35,274 op/s (fastest)
                  ✗ raptor »   29,444 op/s (16.53% slower)
                    ✗ dust »   10,724 op/s (69.60% slower)

     ✓ raptor (native-for) »  126,811 op/s (fastest)
              ✗ handlebars »  125,599 op/s (0.96% slower)
                  ✗ raptor »  123,882 op/s (2.31% slower)
                    ✗ dust »  105,435 op/s (16.86% slower)
                    ✗ jade »   60,726 op/s (52.11% slower)

                  ✓ raptor »  208,220 op/s (fastest)
                    ✗ dust »  115,406 op/s (44.57% slower)
```
<!-- </performance> -->

## Compiled Size
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
                    ✗ dust »   388 bytes gzipped    1056 bytes uncompressed
                                   36.08% larger              60.89% larger

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
                    ✗ dust »   256 bytes gzipped     493 bytes uncompressed
                                   29.69% larger              51.32% larger
                    ✗ jade »   328 bytes gzipped     617 bytes uncompressed
                                   45.12% larger              61.10% larger
              ✗ handlebars »   444 bytes gzipped     936 bytes uncompressed
                                   59.46% larger              74.36% larger

                      simple-2
                  ✓ raptor »   217 bytes gzipped     431 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   276 bytes gzipped     718 bytes uncompressed
                                   21.38% larger              39.97% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine:

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

Pull Requests welcome!
