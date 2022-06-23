import { Button, Col, Layout, Menu, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../home/home.css';


const { Header, Footer, Content } = Layout;



function Home(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT_REQUEST',

        })
    }



    return (
        <div className='container'>
            <div className='container__menu'>

                <div className='menu__navbar'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <Button onClick={handleLogout}>Logout</Button>

                </div>
            </div>
            <div className='container__content'>
                <div>
                    <div span={24}>
                        <div className='image__top-content'></div>
                        <div className='text-box'>

                            <h1 className='heading-primary'>
                                <span className='heading-primary-main'>mylife</span>
                                <span className='heading-primary-sub'>no money no happy</span>
                            </h1>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
}

export default Home;