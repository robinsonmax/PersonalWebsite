import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rick from './Rick';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path={["/rick", "/jake"]}>
            <Rick/>
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.register();