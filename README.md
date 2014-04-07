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
                 dust »      603 op/s
               raptor »    1,944 op/s

                      ✓  raptor
                      ✗  dust (68.98% slower)

                      template: if-expression
                 dust »   39,357 op/s
               raptor »  184,252 op/s

                      ✓  raptor
                      ✗  dust (78.64% slower)

                      template: projects-escaped
                 dust »   46,871 op/s
           handlebars »   62,801 op/s
  raptor (native-for) »   73,843 op/s
               raptor »   69,784 op/s

                      ✓  raptor (native-for)
                      ✗  raptor (5.50% slower)
                      ✗  handlebars (14.95% slower)
                      ✗  dust (36.53% slower)

                      template: projects-unescaped
                 dust »   74,589 op/s
           handlebars »  205,668 op/s
  raptor (native-for) »  208,926 op/s
               raptor »  186,859 op/s

                      ✓  raptor (native-for)
                      ✗  handlebars (1.56% slower)
                      ✗  raptor (10.56% slower)
                      ✗  dust (64.30% slower)

                      template: reverse-helper
                 dust »  201,919 op/s
               raptor »  272,216 op/s

                      ✓  raptor
                      ✗  dust (25.82% slower)

                      template: search-results
                 dust »   10,499 op/s
  raptor (native-for) »   34,485 op/s
               raptor »   28,644 op/s

                      ✓  raptor (native-for)
                      ✗  raptor (16.94% slower)
                      ✗  dust (69.55% slower)

                      template: simple-1
                 dust »   90,401 op/s
           handlebars »  116,768 op/s
                 jade »   57,565 op/s
  raptor (native-for) »  117,696 op/s
               raptor »  109,854 op/s

                      ✓  raptor (native-for)
                      ✗  handlebars (0.79% slower)
                      ✗  raptor (6.66% slower)
                      ✗  dust (23.19% slower)
                      ✗  jade (51.09% slower)

                      template: simple-2
                 dust »  105,442 op/s
               raptor »  193,197 op/s

                      ✓  raptor
                      ✗  dust (45.42% slower)
```

## Compiled Size

```
                      friends
                 dust » 494 bytes gzipped (1511 bytes uncompressed)
               raptor » 435 bytes gzipped (862 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (11.94% larger)

                      if-expression
                 dust » 388 bytes gzipped (1056 bytes uncompressed)
               raptor » 248 bytes gzipped (413 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (36.08% larger)

                      projects-escaped
                 dust » 271 bytes gzipped (604 bytes uncompressed)
           handlebars » 519 bytes gzipped (1377 bytes uncompressed)
  raptor (native-for) » 235 bytes gzipped (351 bytes uncompressed)
               raptor » 210 bytes gzipped (324 bytes uncompressed)

                      ✓  raptor
                      ✗  raptor (native-for) (10.64% larger)
                      ✗  dust (22.51% larger)
                      ✗  handlebars (59.54% larger)

                      projects-unescaped
                 dust » 278 bytes gzipped (636 bytes uncompressed)
           handlebars » 497 bytes gzipped (1430 bytes uncompressed)
  raptor (native-for) » 233 bytes gzipped (336 bytes uncompressed)
               raptor » 207 bytes gzipped (309 bytes uncompressed)

                      ✓  raptor
                      ✗  raptor (native-for) (11.16% larger)
                      ✗  dust (25.54% larger)
                      ✗  handlebars (58.35% larger)

                      reverse-helper
                 dust » 135 bytes gzipped (308 bytes uncompressed)
               raptor » 132 bytes gzipped (177 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (2.22% larger)

                      search-results
                 dust » 552 bytes gzipped (1581 bytes uncompressed)
  raptor (native-for) » 537 bytes gzipped (1189 bytes uncompressed)
               raptor » 497 bytes gzipped (1136 bytes uncompressed)

                      ✓  raptor
                      ✗  raptor (native-for) (7.45% larger)
                      ✗  dust (9.96% larger)

                      simple-1
                 dust » 256 bytes gzipped (493 bytes uncompressed)
           handlebars » 444 bytes gzipped (936 bytes uncompressed)
                 jade » 328 bytes gzipped (617 bytes uncompressed)
  raptor (native-for) » 202 bytes gzipped (267 bytes uncompressed)
               raptor » 180 bytes gzipped (240 bytes uncompressed)

                      ✓  raptor
                      ✗  raptor (native-for) (10.89% larger)
                      ✗  dust (29.69% larger)
                      ✗  jade (45.12% larger)
                      ✗  handlebars (59.46% larger)

                      simple-2
                 dust » 276 bytes gzipped (718 bytes uncompressed)
               raptor » 217 bytes gzipped (431 bytes uncompressed)

                      ✓  raptor
                      ✗  dust (21.38% larger)
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
