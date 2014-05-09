require('raptor-templates')
    .load('hello.rhtml')
    .stream({ name: 'Frank' })
    .pipe(process.stdout);