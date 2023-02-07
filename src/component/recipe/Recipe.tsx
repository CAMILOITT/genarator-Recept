import './Recipe.css';

export default function Recipe({
  instructions,
  sendIngredients,
  ingredients,
}: {
  instructions: string;
  sendIngredients: (
    promptIngredients: string,
    typeFood: string,
    addMoreIngredients: string
  ) => void;
  ingredients: {
    promptIngredients: string;
    typeFood: string;
    addMoreIngredients: string;
  };
}) {
  return (
    <section className="recipe">
      <p className="recipe__instructions">{instructions}</p>
      <button
        onClick={() =>
          sendIngredients(
            ingredients.promptIngredients,
            ingredients.typeFood,
            ingredients.addMoreIngredients
          )
        }
        className="recipe__btn"
      >
        Generate nueva receta
      </button>
    </section>
  );
}
