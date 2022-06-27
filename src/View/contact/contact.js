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
            <div className='container-contact'>
                <div className='title-contact'>
                    <h3>WHERE IS WORK</h3>
                    <span>Everywhere is work</span>
                </div>
                <div className='contact-info'>
                    <div>
                        <img src={img1} />
                    </div>
                    <div className='contact-input-form'>
                        <div className='title-info-contact'>
                            <span><i className="fa-solid fa-location-dot"></i> Ho Chi Minh, Viet Nam</span>
                            <span><i className="fa-solid fa-phone"></i>Phone: 09xxxxxx</span>
                            <span><i className="fa-solid fa-envelope"></i>Email: xuankhanh379@gmail.com</span>
                        </div>

                        <p>Swing by for a cup of <i className="fa-solid fa-mug-hot"></i> ,  or leave me a note:</p>
                        <form >
                            <div className="contact-container-input">
                                <div className=" input-contact">
                                    <input className="width-input contact-name" type="text" placeholder="Name" required name="Name" />
                                </div>
                                <div className=" input-contact">
                                    <input className="width-input contact-email" type="text" placeholder="Email" required name="Email" />
                                </div>
                            </div>
                            <input className="width-input contact-message" type="text" placeholder="Message" required name="Message" />
                            <button className="contact-btn" type="submit">
                                <i className="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;