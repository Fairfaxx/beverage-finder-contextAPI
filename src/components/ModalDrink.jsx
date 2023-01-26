import { Image, Modal } from 'react-bootstrap';
import useBeverage from '../hooks/useBeverage';

export const ModalDrink = () => {
  const { onHandleModalClick, modal, recipe } = useBeverage();
  console.log(recipe);

  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    <Modal show={modal} onHide={onHandleModalClick}>
      <Image
        src={recipe.strDrinkThumb}
        alt={`Image of the ${recipe.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instructions</h2>
          {recipe.strInstructions}
          <h2>Ingredients & Quantities</h2>
          {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>
  );
};
