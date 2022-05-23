import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
