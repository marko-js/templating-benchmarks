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
                      friends
                  ✓ raptor »    1,696 op/s (fastest)
                    ✗ dust »      737 op/s (56.54% slower)

                      if-expression
                  ✓ raptor »  198,830 op/s (fastest)
                    ✗ dust »   45,127 op/s (77.30% slower)

                      projects-escaped
     ✓ raptor (native-for) »   76,153 op/s (fastest)
                  ✗ raptor »   71,162 op/s (6.55% slower)
              ✗ handlebars »   64,944 op/s (14.72% slower)
                    ✗ dust »   47,198 op/s (38.02% slower)

                      projects-unescaped
     ✓ raptor (native-for) »  244,322 op/s (fastest)
              ✗ handlebars »  226,970 op/s (7.10% slower)
                  ✗ raptor »  205,984 op/s (15.69% slower)
                    ✗ dust »   75,758 op/s (68.99% slower)

                      reverse-helper
                  ✓ raptor »  313,428 op/s (fastest)
                    ✗ dust »  222,446 op/s (29.03% slower)

                      search-results
     ✓ raptor (native-for) »   35,484 op/s (fastest)
                  ✗ raptor »   28,111 op/s (20.78% slower)
                    ✗ dust »   10,900 op/s (69.28% slower)

                      simple-1
              ✓ handlebars »  176,625 op/s (fastest)
                  ✗ raptor »  174,789 op/s (1.04% slower)
     ✗ raptor (native-for) »  169,773 op/s (3.88% slower)
                    ✗ dust »  130,088 op/s (26.35% slower)
                    ✗ jade »   66,135 op/s (62.56% slower)
                  ✗ plates »   26,724 op/s (84.87% slower)

                      simple-2
                  ✓ raptor »  222,140 op/s (fastest)
                    ✗ dust »  110,580 op/s (50.22% slower)
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
                    ✗ dust »   256 bytes gzipped     493 bytes uncompressed
                                   29.69% larger              51.32% larger
                    ✗ jade »   328 bytes gzipped     617 bytes uncompressed
                                   45.12% larger              61.10% larger
              ✗ handlebars »   427 bytes gzipped     814 bytes uncompressed
                                   57.85% larger              70.52% larger

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
