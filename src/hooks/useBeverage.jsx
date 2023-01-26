import { useContext } from 'react';
import BeverageContext from '../context/BeveragesProvider';

const useBeverage = () => {
  return useContext(BeverageContext);
};

export default useBeverage;
