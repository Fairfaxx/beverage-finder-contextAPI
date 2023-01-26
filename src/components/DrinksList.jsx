import { Row } from 'react-bootstrap';
import useBeverage from '../hooks/useBeverage';
import { Drinks } from './Drinks';

const DrinksList = () => {
  const { drinks } = useBeverage();
  return (
    <>
      <Row className="mt-5">
        {drinks.map((drink) => (
          <Drinks key={drink.idDrink} drink={drink} />
        ))}
      </Row>
    </>
  );
};

export default DrinksList;
