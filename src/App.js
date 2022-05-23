import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
