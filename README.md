# AppRun

AppRun is a lightweight library for developing applications using the [elm](http://elm-lang.org/) style
[model-view-update architecture](https://guide.elm-lang.org/architecture/)
based on the [event publication and subscription pattern](docs/event-pubsub.md)


## Why
As mainly a business application developer, I wanted a library that has everything included and is lightweight.

  * router
  * state management
  * virtual dom
  * event system
  * component

And allows me to:

  * have as little ceremony code as possible
  * avoid having business logic locked down by framework/library
  * use with other framework/libraries freely

AppRun is intended to be such a library. Its use of the [event publication and subscription pattern](docs/event-pubsub.md) makes AppRun elegant and different to other frameworks/libraries.

In the [Demo App](https://yysun.github.io/apprun/) built with AppRun,

* The [Todo](https://yysun.github.io/apprun/#todo) component was written 90 in lines.
* The [Hacker News](https://yysun.github.io/apprun/#hacker-news) component was written in 230 line.


## Quick Start

To give it a try, include AppRun in your html.
```
<script src="https://unpkg.com/apprun@latest/dist/apprun.js"</script>
```

No other ceremony, you can start write code of model, view and update right away.

```
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Counter</title>
</head>
<body>
<script src="https://unpkg.com/apprun@latest/dist/apprun.js"</script>
  <div id="my-app"></div>
  <script>
    const model = 0;

    const view = (model) => {
      return `<div>
        <h1>${model}</h1>
        <button onclick='app.run("-1")'>-1</button>
        <button onclick='app.run("+1")'>+1</button>
      </div>`;
    };

    const update = {
      '+1': (model) => model + 1,
      '-1': (model) => model - 1
    };

    const element = document.getElementById('my-app');
    app.start(element, model, view, update);
  </script>
</body>
</html>
```

Or try it online: [AppRun - Counter](https://jsfiddle.net/ap1kgyeb/2).

## Install

If interested, you can install AppRun from npm and initialize a TypeScript and webpack configured project:
```
npm install apprun
apprun --init
npm start

```

## Explore More

To explore more about AppRun, read the following docs.

* [Event Pub and Sub](docs/event-pubsub.md)
* [Model-view-update Architecture](docs/concept.md)
* [Component](docs/component.md)
* [JSX vs HTML](docs/jsx-html.md)
* [TypeScript and webpack](docs/build.md)


## Contribute

You can launch the webpack dev-server and the demo app from the _demo_ folder by npm commands:
```
npm install
npm start
```

You can run the unit tests from the _tests_ folder.
```
npm test
```
Unit tests can serve as the functional specifications.

Finally, to build optimized js files to dist folder by run:
```
npm run build
```

Have fun and send pull requests.

## License

MIT

Copyright (c) 2015-2017 Yiyi Sun