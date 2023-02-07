import { Route, Routes } from 'react-router-dom';
import GenerateRecipe from './page/generateRecipe/GenerateRecipe';
import Home from './page/home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generator" element={<GenerateRecipe />} />
    </Routes>
  );
}
