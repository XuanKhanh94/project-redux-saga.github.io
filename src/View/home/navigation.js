import { Route, Routes } from 'react-router-dom';
import About from '../about/about';
import Contact from '../contact/contact';
import Home from './Home';

function Navigation(props) {
    return (
        <div>
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            {/* <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li> */}
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Navigation;