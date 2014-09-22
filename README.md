templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/raptorjs3/marko) | HTML | ✔ | ✔ | ✔
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
                  ✓ marko »    2,498 op/s (fastest)
                    ✗ dust »    1,238 op/s (50.44% slower)

                      if-expression
                  ✓ marko »  194,311 op/s (fastest)
                    ✗ dust »   65,076 op/s (66.51% slower)

                      projects-escaped
     ✓ marko (native-for) »   76,182 op/s (fastest)
                  ✗ marko »   73,479 op/s (3.55% slower)
              ✗ handlebars »   64,066 op/s (15.90% slower)
                    ✗ dust »   60,290 op/s (20.86% slower)

                      projects-unescaped
              ✓ handlebars »  229,905 op/s (fastest)
     ✗ marko (native-for) »  208,228 op/s (9.43% slower)
                  ✗ marko »  191,329 op/s (16.78% slower)
                    ✗ dust »  163,019 op/s (29.09% slower)

                      reverse-helper
                    ✓ dust »  328,690 op/s (fastest)
                  ✗ marko »  290,700 op/s (11.56% slower)

                      search-results
     ✓ marko (native-for) »   32,618 op/s (fastest)
                  ✗ marko »   27,994 op/s (14.18% slower)
                    ✗ dust »   18,850 op/s (42.21% slower)

                      simple-1
                     ✓ dot »  208,381 op/s (fastest)
     ✗ marko (native-for) »  152,013 op/s (27.05% slower)
              ✗ handlebars »  150,315 op/s (27.87% slower)
                  ✗ marko »  138,900 op/s (33.34% slower)
                    ✗ dust »  133,786 op/s (35.80% slower)
                    ✗ swig »   83,204 op/s (60.07% slower)
                ✗ nunjucks »   83,178 op/s (60.08% slower)
                    ✗ jade »   45,051 op/s (78.38% slower)
                  ✗ plates »   10,716 op/s (94.86% slower)

                      simple-2
                  ✓ marko »  206,443 op/s (fastest)
                    ✗ dust »  165,539 op/s (19.81% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                  ✓ marko »   437 bytes gzipped     866 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   494 bytes gzipped    1511 bytes uncompressed
                                   11.54% larger              42.69% larger

                      if-expression
                  ✓ marko »   250 bytes gzipped     417 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   380 bytes gzipped     952 bytes uncompressed
                                   34.21% larger              56.20% larger

                      projects-escaped
                  ✓ marko »   213 bytes gzipped     330 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ marko (native-for) »   238 bytes gzipped     357 bytes uncompressed
                                   10.50% larger               7.56% larger
                    ✗ dust »   271 bytes gzipped     604 bytes uncompressed
                                   21.40% larger              45.36% larger
              ✗ handlebars »   519 bytes gzipped    1377 bytes uncompressed
                                   58.96% larger              76.03% larger

                      projects-unescaped
                  ✓ marko »   215 bytes gzipped     330 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ marko (native-for) »   241 bytes gzipped     357 bytes uncompressed
                                   10.79% larger               7.56% larger
                    ✗ dust »   278 bytes gzipped     636 bytes uncompressed
                                   22.66% larger              48.11% larger
              ✗ handlebars »   497 bytes gzipped    1430 bytes uncompressed
                                   56.74% larger              76.92% larger

                      reverse-helper
                    ✓ dust »   135 bytes gzipped     308 bytes uncompressed
                                      (smallest)              35.71% larger
                  ✗ marko »   139 bytes gzipped     198 bytes uncompressed
                                    2.88% larger                 (smallest)

                      search-results
                  ✓ marko »   501 bytes gzipped    1140 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ marko (native-for) »   541 bytes gzipped    1193 bytes uncompressed
                                    7.39% larger               4.44% larger
                    ✗ dust »   552 bytes gzipped    1581 bytes uncompressed
                                    9.24% larger              27.89% larger

                      simple-1
                  ✓ marko »   184 bytes gzipped     244 bytes uncompressed
                                      (smallest)                 (smallest)
     ✗ marko (native-for) »   205 bytes gzipped     271 bytes uncompressed
                                   10.24% larger               9.96% larger
                     ✗ dot »   228 bytes gzipped     309 bytes uncompressed
                                   19.30% larger              21.04% larger
                    ✗ dust »   254 bytes gzipped     453 bytes uncompressed
                                   27.56% larger              46.14% larger
                    ✗ jade »   328 bytes gzipped     617 bytes uncompressed
                                   43.90% larger              60.45% larger
                ✗ nunjucks »   384 bytes gzipped     695 bytes uncompressed
                                   52.08% larger              64.89% larger
              ✗ handlebars »   427 bytes gzipped     814 bytes uncompressed
                                   56.91% larger              70.02% larger
                    ✗ swig »   464 bytes gzipped    1306 bytes uncompressed
                                   60.34% larger              81.32% larger

                      simple-2
                  ✓ marko »   220 bytes gzipped     435 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   276 bytes gzipped     718 bytes uncompressed
                                   20.29% larger              39.42% larger
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

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
