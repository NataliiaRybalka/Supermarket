import React, { useState } from 'react';

import { MainContext } from '.';
import { httpRequest } from '../helpers';

export default function MainContextProvider({children}) {
  const { request } = httpRequest();

  const [categories, setCategories] = useState([]);
  const [fruits, setFruits] = useState([]);

  const getAllCategories = async () => {
    const data = await request('http://localhost:5000/categories');

    setCategories(data);
  }

  const getAllFruits = async () => {
    const data = await request('http://localhost:5000/fruits');

    setFruits(data);
  }

  return (
    <MainContext.Provider value={{
      categories,
      getAllCategories,
      fruits,
      getAllFruits
    }}>
      {children}
    </MainContext.Provider>
  )
}
