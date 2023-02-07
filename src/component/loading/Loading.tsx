import './Loading.css';
const loading = {
  drink: {
    src: '',
  },
  eat: { src: '' },
  soup: { src: '' },
};

const message = [
  'prueba',
  'prueba1',
  'prueba2',
  'prueba3',
  'prueba4',
  'prueba5',
];

export default function Loading() {
  return (
    <div className="loading">
      <img src="" alt="image loading" />
      <span className="loading__text">cargando...</span>
      <span className="loading__message">
        {message[Math.floor(Math.random() * message.length)]}
      </span>
    </div>
  );
}
