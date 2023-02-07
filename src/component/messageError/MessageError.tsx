import './MessageError.css'
export default function MessageError({
  sendIngredients,
  ingredients,
}: {
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
    <div className='messageError'>
      <span className='messageError__message'>
        Se produjo un error, inténtalo de nuevo
      </span>
      <button
        className='messageError__btn'
        onClick={() =>
          sendIngredients(
            ingredients.promptIngredients,
            ingredients.typeFood,
            ingredients.addMoreIngredients
          )
        }
      >
        intentar de nuevo
      </button>
    </div>
  );
}
