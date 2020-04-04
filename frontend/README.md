# Frontend

This is a different module, as this is for the frontend.
This means most of the code in here is written in TypeScript,
and intentend for end-use in the browser.
It defines the webapp, which calls the backend services.

## Running

There are a few npm scripts created for you.

- `npm run build`: This builds the project into `./build`.
- `npm run watch`: This starts a Parcel development web server on `http://localhost:1234`.
- `npm run swap-watch`: This swaps the frontend deployment in the local cluster with a development server.

## Debugging

### VSCode

Install the [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug) extention.
Now start a development server with `npm run watch`.
Head over to the `Run` tab in VSCode, a `Debug Frontend (Firefox)` launch task has already been created.
Run this to start Firefox with the debugger attached.
Now you can set breakpoints to your liking, where firefix will break when hit.
