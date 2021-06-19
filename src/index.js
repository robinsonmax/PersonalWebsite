import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rick from './Rick';
import Oliver from './Oliver';
import MothersDayCard from './MothersDayCard';
import ECard from './eCard';
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
          <Route path={"/mum"}>
            <MothersDayCard/>
          </Route>
          <Route path={"/dad"}>
            <ECard
              background="https://maxrobinson.net/img/fathersday.fw.png"
              title="Happy Fathers Day!"
              message="From Max"/>
          </Route>
          <Route path={"/oliver"}>
            <Oliver/>
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