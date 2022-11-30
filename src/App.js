import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Results from './components/flightResults/Results';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
