import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { loadData } from './services/requests';

import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

import './App.css';

function App() {
  const [ store, setStore ] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await loadData();
      setStore(response);
    })();
  },[]);

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/cart' component={CartPage} />
    </Switch>
  );
}

export default App;
