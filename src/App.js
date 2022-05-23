import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Products from './Pages/Products/AvailableProducts';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import AvailableProducts from './Pages/Products/AvailableProducts';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/availableProducts' element={<AvailableProducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
