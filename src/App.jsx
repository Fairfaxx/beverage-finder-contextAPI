import { Container } from 'react-bootstrap';
import FormComponent from './components/FormComponent';
import DrinksList from './components/DrinksList';
import { BeverageProvider } from './context/BeveragesProvider';
import { CategoriesProvider } from './context/CategoriesProvider';
import { ModalDrink } from './components/ModalDrink';

function App() {
  return (
    <CategoriesProvider>
      <BeverageProvider>
        <header className="py-5">
          <h1>Beverage Finder!</h1>
        </header>
        <Container className="mt-5">
          <FormComponent />
          <DrinksList />

          <ModalDrink />
        </Container>
      </BeverageProvider>
    </CategoriesProvider>
  );
}

export default App;
