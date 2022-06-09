import './App.css';
import { Route, Routes } from 'react-router-dom';
import Pokedex from './views/Pokedex/Pokedex';
import Detail from './views/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path=":name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
