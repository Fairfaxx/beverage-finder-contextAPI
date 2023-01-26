import { Container } from 'react-bootstrap';
import FormComponent from './components/FormComponent';
import { CategoriesProvider } from './context/CategoriesProvider';

function App() {
  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Beverage Finder!</h1>
      </header>
      <Container className="mt-5">
        <FormComponent />
      </Container>
    </CategoriesProvider>
  );
}

export default App;
