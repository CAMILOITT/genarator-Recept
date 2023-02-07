import './Loading.css';
import LoadingFood from '../../assets/Recurso1.svg';
import { useEffect, useState } from 'react';

const messageLoading = [
  'Cocinando con inteligencia artificial...',
  'Generando recetas únicas para ti...',
  'Buscando la mejor combinación para ti...',
  'Inspirándose en sabores de todo el mundo...',
];

export default function Loading() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const idMessage = setTimeout(() => {
      setMessage(
        messageLoading[Math.floor(Math.random() * messageLoading.length)]
      );
    }, 500);

    return () => {
      clearTimeout(idMessage);
    };
  }, []);

  return (
    <div className='loading'>
      <img src={LoadingFood} alt='image loading' className='loading__load' />
      <span className='loading__message'>{message}</span>
    </div>
  );
}
