import { Button, Form, Row, Col } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';

const FormComponent = () => {
  const { categories } = useCategories();
  return (
    <Form>
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
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="category">
              Search for your favorite Beverage
            </Form.Label>
            <Form.Select id="category" name="category">
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
          <Button variant="danger" className="w-100 text-uppercase mt-3">
            Search Drinks!
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
