# Frontend

This is a different module, as this is for the frontend.
This means most of the code in here is written in TypeScript,
and intentend for end-use in the browser.
It defines the webapp, which calls the backend services.

## Running

There are a few yarn scripts created for you.

- `yarn build`: This builds the project into `./build`.
- `yarn serve`: Build and serve the production build.
- `yarn watch`: This starts a Parcel development web server on `http://localhost:1234`.
- `yarn swap-watch`: Use Telepresence to swap the frontend from the cluster, and start a dev server.
- `yarn swap-serve`: Use Telepresence to swap the frontend from the cluster, and start a production server.
- `yarn lint`: Lint the application against the preset rules.

## Debugging

### VSCode

Install the [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug) extention.
Now start a development server with `yarn watch`.
Head over to the `Run` tab in VSCode, a `Debug Frontend (Firefox)` launch task has already been created.
Run this to start Firefox with the debugger attached.
Now you can set breakpoints to your liking, where firefix will break when hit.
