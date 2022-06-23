
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './View/error/errorpage';
import ForgotPassword from './View/forgot-password/ForgotPassword';
import About from './View/about/about';
import Contact from './View/contact/contact';
import Navigation from './View/home/navigation';
import Login from './View/login/Login';
import SignUp from './View/signup/SignUp';

function App() {
  const flagRedux = useSelector(state => {
    return state.flag
  })
  return (
    <div className="App">




      <Routes>
        {flagRedux ? <Route path='/' element={<Navigation />} /> : <Route path='/' element={<Login />} />}

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>




    </div>

    // </div>
  );
}

export default App;
