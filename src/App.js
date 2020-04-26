import React, { useState, useEffect } from 'react';

import { loadData } from './services/requests';

import './App.css';

import ItemCard from './components/ItemCard/ItemCard';

import Filters from './components/Filters/Filters';
import Discount from './components/Discount/Discount';

function App() {
  const [ store, setStore ] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await loadData();
      setStore(response);
    })();
  },[]);

  return (
    <div>
      <Filters />
      <Discount discountValue='40'/>
      Hello, World!
    </div>
  );
}

export default App;
