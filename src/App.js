import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

import ItemCard from './components/ItemCard/ItemCard';

function App() {
  const [ store, setStore ] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('/api/cartmart');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await loadData();
      setStore(response);
    })();
  },[]);

  return (
    <div>
      <ItemCard itemData={store[0]}/>
      Hello, World!
    </div>
  );
}

export default App;
