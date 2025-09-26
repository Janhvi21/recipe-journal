import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar'
import Recipes from './components/Recipes'
import Home from './components/Home';
import Products from './components/Products';
import Ingredients from './components/Ingredients';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </div>
  );
}
export default App
