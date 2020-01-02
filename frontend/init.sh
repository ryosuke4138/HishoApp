#!/bin/bash
mkdir -p src/{components,containers,actions,reducers}
npm install --save prop-types redux react-redux redux-logger
npm install --save react-router-dom history react-router-redux
npm install --save redux-thunk fetch-jsonp qs
npm install --save material-ui