import { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useBeverage from '../hooks/useBeverage';
import useCategories from '../hooks/useCategories';

const FormComponent = () => {
  const [finder, setFinder] = useState({
    beverage: '',
    category: '',
  });

  const onHandleChange = (e) => {
    setFinder({
      ...finder,
      [e.target.name]: e.target.value,
    });
  };

  const { getBeverage } = useBeverage();

  const [alertErrorMsg, setAlertErrorMsg] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(finder).includes('')) {
      setAlertErrorMsg('All fields are required');
      setTimeout(() => {
        setAlertErrorMsg('');
      }, 5000);
      return;
    }

    getBeverage(finder);
  };

  const { categories } = useCategories();
  return (
    <Form onSubmit={onHandleSubmit}>
      {alertErrorMsg && (
        <Alert
          variant="danger"
          className="text-center text-uppercase fw-bolder"
        >
          {alertErrorMsg}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="name">
              Search for your favorite Beverage
            </Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Eg. Tequila, Beer or just a Pepsi"
              name="beverage"
              value={finder.beverage}
              onChange={onHandleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="category">
              Search for your favorite Beverage
            </Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={finder.category}
              onChange={onHandleChange}
            >
              <option>-- Select Category --</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="w-100 text-uppercase mt-3"
            type="submit"
          >
            Search Drinks!
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
