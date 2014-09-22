require('marko')
    .load('hello.marko')
    .stream({ name: 'Frank' })
    .pipe(process.stdout);