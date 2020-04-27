import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { loadData } from './services/requests';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ store, setStore ] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await loadData();
      setStore(response);
      setIsLoading(false);
    })();
  },[]);

  return (
    <>
      <Nav />
      {
        isLoading ?
          'Loading...' :
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <HomePage {...props} items={store} />}
            />
            <Route exact path='/cart' component={CartPage} />
          </Switch>
      }
    </>
  );
}

export default App;
