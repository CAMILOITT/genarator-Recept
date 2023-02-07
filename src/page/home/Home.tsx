import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='container'>
      <main className='main'>
        <h1 className='main__title'>COOK.AI</h1>
        <p>
          Nuestra plataforma utiliza IA para generar recetas personalizadas en
          función de sus preferencias, ingredientes disponibles. Ya sea que esté
          buscando una comida rápida y fácil para la noche o un plato elaborado
          para una cena especial, COOK.AI lo tiene cubierto.
        </p>
        <Link to='/generator' className='main__link'>
          generar receta
        </Link>
      </main>

      <footer className='footer'>hecho con amor</footer>
    </div>
  );
}
