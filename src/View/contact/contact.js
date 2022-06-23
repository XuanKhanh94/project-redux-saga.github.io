import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './contact.css';
import img1 from '../../assest/nat-2.jpg';
import img2 from '../../assest/nat-3.jpg';
import img3 from '../../assest/nat-4.jpg';
import img4 from '../../assest/nat-5.jpg';
import img5 from '../../assest/nat-6.jpg';

function Contact(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT_REQUEST',
            data: false,
            redirectToLogin
        })
    }
    const redirectToLogin = () => {
        navigate('/')
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
            <div>
                <div>
                    <h3>WHERE IS WORK</h3>
                    <span>Everywhere is work</span>
                </div>
                <div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <span>Ho Chi Minh, Viet Nam</span>
                        <span>Phone: 09xxxxxx</span>
                        <span>Email: xuankhanh379@gmail.com</span>
                        <div>
                            <span>Swing by for a cup of  or leave me a note:</span>
                            <div>
                                <div>
                                    <Input />
                                    <Input />
                                    <Input />
                                </div>
                                <Button>Send message</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;