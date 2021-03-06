# mag-examples

[Mag](https://github.com/mahnunchik/mag) is the streaming logger for NodeJS

## Examples

This repository contains examples of using **mag** logger.

You can find them in the following branches:

* **[simple](https://github.com/mahnunchik/mag-examples/tree/simple)** - simplest replacement of console
* **[module](https://github.com/mahnunchik/mag-examples/tree/module)** - module using mag as logger
* **[app](https://github.com/mahnunchik/mag-examples/tree/app)** - example of application that uses the module above
* **[app-formatted-output](https://github.com/mahnunchik/mag-examples/tree/app-formatted-output)** - mag-hub, log levels, and collored output (full example of mag power)

## How to run example?

To run each of examples, do the following:

```
$ git checkout %example%
$ make
$ npm start
```
Where `%example%` is one of the following: `simple`, `module`, `app`, `app-formatted-output`.

Invocation of `make` does clean installation of dependencies:
```
rm -rf ./node_modules
npm install --production
```

## License

MIT
