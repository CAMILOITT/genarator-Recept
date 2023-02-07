import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        {/* <div className="container__logoMachine"> */}
            {/* <img src={Machine} alt="machine chef" /> */}
        {/* </div> */}
        <div className="container__infoApp">
          <h1 style={{ color: 'orange' }}>COOK.AI</h1>
          <p>
            Nuestra plataforma utiliza IA para generar recetas personalizadas en
            función de sus preferencias, ingredientes disponibles. Ya sea que
            esté buscando una comida rápida y fácil para la noche o un plato
            elaborado para una cena especial, COOK.AI lo tiene cubierto.
          </p>
          <Link
            to="/generator"
            style={{
              fontWeight: 'bold',
              padding: '10px 15px',
              background: 'orange',
              display: 'block',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            generar receta
          </Link>
        </div>
      </main>

      <footer className="footer">este es el pie de pagina</footer>
    </div>
  );
}
