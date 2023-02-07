import { useState } from 'react';

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
    <div>
      <span>Se produjo un error, inténtalo de nuevo</span>
      <button
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

