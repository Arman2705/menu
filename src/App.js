import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Newsletter from './components/Newsletter';

dkjsds

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/newsletter' element={<Newsletter />} />
      <Route path='*' element={<div>Not found</div>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
