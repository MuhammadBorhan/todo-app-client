import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import SingleTask from './componants/About/SingleTask';
import Calendar from './componants/calendar/Calendar';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import Register from './componants/Login/Register';
import NotFound from './componants/notFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/singletask/:id' element={<SingleTask></SingleTask>}></Route>
        <Route path='/todo' element={<Home></Home>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
