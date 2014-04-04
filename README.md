templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

* [raptor-templates](https://github.com/raptorjs3/raptor-templates)
* [dustjs-linked](https://github.com/linkedin/dustjs)
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
                 dust »      627 op/s
               raptor »    1,916 op/s

                      ✓  raptor
                      ✗  dust (67.28% slower)

                      template: if-expression
                 dust »   41,944 op/s
               raptor »  153,948 op/s

                      ✓  raptor
                      ✗  dust (72.75% slower)

                      template: reverse-helper
                 dust »  200,877 op/s
               raptor »  249,668 op/s

                      ✓  raptor
                      ✗  dust (19.54% slower)

                      template: search-results
                 dust »    9,398 op/s
  raptor (native-for) »   23,260 op/s
               raptor »   20,127 op/s

                      ✓  raptor (native-for)
                      ✗  raptor (13.47% slower)
                      ✗  dust (59.60% slower)

                      template: simple-1
                 dust »   92,285 op/s
                 jade »   51,656 op/s
               raptor »  101,770 op/s

                      ✓  raptor
                      ✗  dust (9.32% slower)
                      ✗  jade (49.24% slower)

                      template: simple-2
                 dust »   97,084 op/s
               raptor »  137,864 op/s

                      ✓  raptor
                      ✗  dust (29.58% slower)
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
               raptor » 256 bytes gzipped (435 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (33.51% larger)

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

# Contribute

Pull Requests welcome!