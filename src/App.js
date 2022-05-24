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
import RequireAuth from './Pages/Authentication/RequireAuth';
import OrderDetails from './Pages/Products/OrderDetails';
import Reviews from './Pages/Reviews';
import Blogs from './Pages/Blogs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<RequireAuth><Products /></RequireAuth>} />
          <Route path='/availableProducts' element={<AvailableProducts />} />
          <Route path='/orderdetails' element={<RequireAuth><OrderDetails /></RequireAuth>} />

          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<MyOrder />} />
            <Route path='review' element={<MyReview />} />
            <Route path='profile' element={<MyProfile />} />
          </Route>

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/blogs' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
