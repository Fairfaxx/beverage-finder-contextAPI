import { Button, Card, Col } from 'react-bootstrap';
import useBeverage from '../hooks/useBeverage';

export const Drinks = ({ drink }) => {
  const { onHandleModalClick, onHandleDrinkId } = useBeverage();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          src={drink.strDrinkThumb}
          alt={drink.strDrinkThumb}
          variant="top"
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            variant="warning"
            className="text-center text-uppercase mt-2 text-white"
            onClick={() => {
              onHandleModalClick();
              onHandleDrinkId(drink.idDrink);
            }}
          >
            See Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
