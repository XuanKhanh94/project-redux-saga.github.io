
import { useSelector } from 'react-redux';
import { Route, Routes, } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const flagRedux = useSelector(state => {
    return state.flag
  })
  return (
    <div className="App">
      {/* <ForgotPassword /> */}

      <Routes>
        {flagRedux ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Login />} />}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
