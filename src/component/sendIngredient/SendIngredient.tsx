import React, { useRef, useState } from 'react';
import SelectPrompt from '../selectPrompt/SelectPrompt';
import './SendIngredient.css';

export default function SendIngredient({
  sendIngredients,
}: {
  sendIngredients: (
    promptIngredients: string,
    typeFood: string,
    addMoreIngredients: string
  ) => void;
}) {
  const [inputIngredient, setInputIngredient] = useState<string>();
  const [btnActive, setBtnActive] = useState<boolean>(false);
  const [typeFood, setTypeFood] = useState<string>();
  const [addMoreIngredient, setAddMoreIngredient] = useState<string>();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputIngredient(e.target.value);
    e.target.value.length > 0 && typeFood && addMoreIngredient
      ? setBtnActive(true)
      : setBtnActive(false);
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputIngredient || !typeFood || !addMoreIngredient) return;
    sendIngredients(inputIngredient, typeFood, addMoreIngredient);
  }

  function handleOnChangeTypeFood(e: React.FormEvent<HTMLInputElement>) {
    setTypeFood(e.currentTarget.value);
    inputIngredient && addMoreIngredient
      ? setBtnActive(true)
      : setBtnActive(false);
  }
  function handleOnChangeAddIngredient(e: React.FormEvent<HTMLInputElement>) {
    setAddMoreIngredient(e.currentTarget.value);
    inputIngredient && typeFood ? setBtnActive(true) : setBtnActive(false);
  }
  return (
    <form onSubmit={handleOnSubmit} className='addIngredient'>
      <input
        type='text'
        name='addIngredient'
        id='infoIngredient'
        value={inputIngredient}
        onChange={handleOnChange}
        className='addIngredient__input'
        placeholder='Ingrese los ingredientes...'
      />

      <button
        type='submit'
        disabled={!btnActive}
        className='addIngredient__btnAdd'
        style={
          btnActive
            ? { background: '#3891A6' }
            : { background: '#F4442E', cursor: 'auto' }
        }
      >
        enviar
      </button>

      <SelectPrompt
        handleTypeFood={handleOnChangeTypeFood}
        handleAddIngredient={handleOnChangeAddIngredient}
      />
    </form>
  );
}
