
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ProductApi from './api/productApi';
import About from './View/about/about';
import Contact from './View/contact/contact';
import ErrorPage from './View/error/errorpage';
import ForgotPassword from './View/forgot-password/ForgotPassword';
import Navigation from './View/home/navigation';
import Login from './View/login/Login';
import SignUp from './View/signup/SignUp';

function App() {
  const flagRedux = useSelector(state => {
    return state.flag
  })

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const fetchContentList = async () => {

      try {
        const response = await ProductApi.getAll();

        setProductList(response)


      } catch (error) {
        console.log('failed fetch content', error);
      }
    }
    fetchContentList();
  }, [])
  // console.log(productList.map(p => p.avatar));
  return (
    <div className="App">

      <div>
        {productList.map(p => {
          return (
            <p key={p.id}>{p.email} <img src={p.avatar} alt={p.avatar} /></p>
          )
        })}
        {/* {productList.map((p, index) => {

          return (
            <p key={p.id}>{p.email}-{p}</p>
          )
        })} */}
      </div>


      <Routes>
        {flagRedux ? <Route path='*' element={<Navigation />} /> : <Route path='/' element={<Login />} />}

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
