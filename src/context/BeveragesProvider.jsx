import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BeverageContext = createContext();

const BeverageProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkID, setDrinkID] = useState('');
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!drinkID) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
        const { data } = await axios.get(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipe();
  }, [drinkID]);

  const getBeverage = async (datas) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.beverage}&c=${datas.category}`;
      const { data } = await axios.get(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleModalClick = () => {
    setModal(!modal);
  };

  const onHandleDrinkId = (id) => {
    setDrinkID(id);
  };

  return (
    <BeverageContext.Provider
      value={{
        getBeverage,
        drinks,
        onHandleModalClick,
        modal,
        onHandleDrinkId,
        recipe,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
};

export { BeverageProvider };

export default BeverageContext;
