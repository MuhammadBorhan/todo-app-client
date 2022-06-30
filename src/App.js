import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import Register from './componants/Login/Register';
import NotFound from './componants/notFound/NotFound';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<PrivateRoute><About></About></PrivateRoute>}></Route>
        <Route path='/about' element={<PrivateRoute><About></About></PrivateRoute>}></Route>
        <Route path='/todo' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
