import './Loading.css';
import LoadingFood from '../../assets/Recurso1.svg';

const loading = {
  drink: {
    src: '',
  },
  eat: { src: '' },
  soup: { src: '' },
};

const message = [
  'Cocinando con inteligencia artificial...',
  'Generando recetas únicas para ti...',
  'Buscando la mejor combinación para ti...',
  'Inspirándose en sabores de todo el mundo...',
];

export default function Loading() {
  return (
    <div className='loading'>
      <img src={LoadingFood} alt='image loading' className='loading__load' />
      <span className='loading__message'>
        {message[Math.floor(Math.random() * message.length)]}
      </span>
    </div>
  );
}
