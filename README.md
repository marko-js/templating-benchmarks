templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
--------------|--------------|-------
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[raptor-templates](https://github.com/raptorjs3/raptor-templates) | HTML | ✔ | ✔ | ✔

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
                  ✓ raptor »    2,123 op/s (fastest)
                    ✗ dust »      697 op/s (67.17% slower)

                      if-expression
                  ✓ raptor »  207,556 op/s (fastest)
                    ✗ dust »   54,224 op/s (73.88% slower)

                      projects-escaped
     ✓ raptor (native-for) »   81,972 op/s (fastest)
                  ✗ raptor »   78,601 op/s (4.11% slower)
              ✗ handlebars »   63,459 op/s (22.58% slower)
                    ✗ dust »   44,523 op/s (45.69% slower)

                      projects-unescaped
     ✓ raptor (native-for) »  250,509 op/s (fastest)
              ✗ handlebars »  243,243 op/s (2.90% slower)
                  ✗ raptor »  226,052 op/s (9.76% slower)
                    ✗ dust »   78,591 op/s (68.63% slower)

                      reverse-helper
                  ✓ raptor »  333,113 op/s (fastest)
                    ✗ dust »  269,658 op/s (19.05% slower)

                      search-results
     ✓ raptor (native-for) »   35,635 op/s (fastest)
                  ✗ raptor »   29,656 op/s (16.78% slower)
                    ✗ dust »   10,840 op/s (69.58% slower)

                      simple-1
     ✓ raptor (native-for) »  167,566 op/s (fastest)
              ✗ handlebars »  157,048 op/s (6.28% slower)
                  ✗ raptor »  145,858 op/s (12.95% slower)
                    ✗ dust »   89,961 op/s (46.31% slower)
                ✗ nunjucks »   86,974 op/s (48.10% slower)
                    ✗ swig »   84,815 op/s (49.38% slower)
                    ✗ jade »   48,681 op/s (70.95% slower)
                  ✗ plates »   10,829 op/s (93.54% slower)

                      simple-2
                  ✓ raptor »  214,506 op/s (fastest)
                    ✗ dust »  112,629 op/s (47.49% slower)
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
