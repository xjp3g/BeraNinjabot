// mini-app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(combineReducers({ /* reducers */ }));

function MiniApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<MiniApp />, document.getElementById('root'));
