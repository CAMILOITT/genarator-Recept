import { useRef, useState } from 'react';

export default function SelectPrompt({
  handleTypeFood,
  handleAddIngredient,
}: {
  handleTypeFood: (e: React.FormEvent<HTMLInputElement>) => void;
  handleAddIngredient: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  const [positionScroll, setPositionScroll] = useState<string>('typeFood');
  const selectTypeFood = useRef<HTMLDivElement>(null);
  const selectMoreIngredients = useRef<HTMLDivElement>(null);

  return (
    <div className='addIngredient__selectInfo'>
      <div className='selectInfo__configPrompt'>
        <div className='configPrompt__ingredients' ref={selectTypeFood}>
          <label htmlFor='food' className='ingredients__option'>
            <input
              type='radio'
              name='typeFood'
              id='food'
              value='food'
              className='option__inputRadio'
              onChange={(e) => handleTypeFood(e)}
            />
            Comida
          </label>
          <label htmlFor='drink' className='ingredients__option'>
            <input
              type='radio'
              name='typeFood'
              id='drink'
              value='drink'
              className='option__inputRadio'
              onChange={handleTypeFood}
            />
            Bebida
          </label>
          <label htmlFor='dessert' className='ingredients__option'>
            <input
              type='radio'
              name='typeFood'
              id='dessert'
              value='dessert'
              className='option__inputRadio'
              onChange={handleTypeFood}
            />
            Postre
          </label>
        </div>

        <div className='configPrompt__ingredients' ref={selectMoreIngredients}>
          <label htmlFor='addIngredient' className='ingredients__option'>
            <input
              type='radio'
              name='MoreIngredient'
              id='addIngredient'
              className='option__inputRadio'
              value='add Ingredient'
              onChange={handleAddIngredient}
            />
            Añadir mas ingredientes
          </label>
          <label htmlFor='notAddIngredient' className='ingredients__option'>
            <input
              type='radio'
              name='MoreIngredient'
              id='notAddIngredient'
              className='option__inputRadio'
              value='not Add Ingredient'
              onChange={handleAddIngredient}
            />
            No añadir mas ingredientes
          </label>
        </div>
      </div>
      <div className='selectInfo__scroll'>
        <button
          className='scroll__btn scroll__btn-start'
          style={
            positionScroll === 'typeFood'
              ? { background: '#fc9e4f' }
              : { background: 'transparent' }
          }
          onClick={() => {
            setPositionScroll('addMoreIngredient');
            selectTypeFood.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
          type='button'
        ></button>
        <button
          className={'scroll__btn scroll__btn-end'}
          style={
            positionScroll === 'addMoreIngredient'
              ? { background: '#fc9e4f' }
              : { background: 'transparent' }
          }
          onClick={() => {
            setPositionScroll('typeFood');

            selectMoreIngredients.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
          type='button'
        ></button>
      </div>
      <button
        className='selectInfo__btnDelete'
        type='reset'
        onClick={() => {
          setPositionScroll('typeFood');
          selectTypeFood.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }}
      >
        x
      </button>
    </div>
  );
}
