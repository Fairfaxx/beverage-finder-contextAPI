import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BeverageContext = createContext();

const BeverageProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const getBeverage = async (datas) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.beverage}&c=${datas.category}`;
      const { data } = await axios.get(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BeverageContext.Provider value={{ getBeverage, drinks }}>
      {children}
    </BeverageContext.Provider>
  );
};

export { BeverageProvider };

export default BeverageContext;
