templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

* [raptor-templates](https://github.com/raptorjs3/raptor-templates)
* [dustjs-linkedin](https://github.com/linkedin/dustjs)
* [jade](https://github.com/visionmedia/jade)

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

```
                      template: friends
                 dust »      743 op/s
               raptor »    2,083 op/s

                      ✓  raptor
                      ✗  dust (64.33% slower)

                      template: if-expression
                 dust »   46,990 op/s
               raptor »  176,147 op/s

                      ✓  raptor
                      ✗  dust (73.32% slower)

                      template: reverse-helper
                 dust »  229,402 op/s
               raptor »  294,757 op/s

                      ✓  raptor
                      ✗  dust (22.17% slower)

                      template: search-results
                 dust »   10,994 op/s
  raptor (native-for) »   25,863 op/s
               raptor »   22,473 op/s

                      ✓  raptor (native-for)
                      ✗  raptor (13.11% slower)
                      ✗  dust (57.49% slower)

                      template: simple-1
                 dust »  102,644 op/s
                 jade »   60,422 op/s
               raptor »  119,477 op/s

                      ✓  raptor
                      ✗  dust (14.09% slower)
                      ✗  jade (49.43% slower)

                      template: simple-2
                 dust »  115,118 op/s
               raptor »  194,303 op/s

                      ✓  raptor
                      ✗  dust (40.75% slower)
```

## Compiled Size

```
                      friends
                 dust » 498 bytes gzipped (1512 bytes uncompressed)
               raptor » 446 bytes gzipped (931 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (10.44% larger)

                      if-expression
                 dust » 385 bytes gzipped (1051 bytes uncompressed)
               raptor » 251 bytes gzipped (434 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (34.81% larger)

                      reverse-helper
                 dust » 138 bytes gzipped (302 bytes uncompressed)
               raptor » 132 bytes gzipped (189 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (4.35% larger)

                      search-results
                 dust » 556 bytes gzipped (1575 bytes uncompressed)
  raptor (native-for) » 546 bytes gzipped (1228 bytes uncompressed)
               raptor » 505 bytes gzipped (1175 bytes uncompressed)

                      ✓  raptor
                      ✗  raptor (native-for) (7.51% larger)
                      ✗  dust (9.17% larger)

                      simple-1
                 dust » 255 bytes gzipped (493 bytes uncompressed)
                 jade » 328 bytes gzipped (617 bytes uncompressed)
               raptor » 183 bytes gzipped (252 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (28.24% larger)
                      ✗  jade (44.21% larger)

                      simple-2
                 dust » 275 bytes gzipped (718 bytes uncompressed)
               raptor » 221 bytes gzipped (473 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (19.64% larger)
```

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
