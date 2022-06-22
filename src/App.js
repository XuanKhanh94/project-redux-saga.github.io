
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import ErrorPage from './components/errorpage';
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
      {/* <Routes>
        {flagRedux ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Login />} />}
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path="*" element={<Home />} />

      </Routes> */}


      <Routes>
        {flagRedux ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Login />} />}
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />

        <Route element={<Home />}>

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
