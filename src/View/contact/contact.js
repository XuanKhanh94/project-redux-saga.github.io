import { Button } from 'antd';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './contact.css';
import loading from '../../assest/loading.gif';


function Contact(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = useRef();
    const selectorId = useSelector(state => {
        let data = state.id;
        if (data) {
            return data.id
        } else {
            return false
        }

    });

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

    const response = useSelector(state => state.contact)

    useEffect(() => {

        dispatch({
            type: 'REQUEST_API_CONTACT',
            data: selectorId
        })
        if (selectorId === false) {
            navigate('*')
        }
    }, []);

    function loginLoading() {
        const getElementLoading = ref.current;
        ' abc' ? getElementLoading.style.display = "none" : getElementLoading.style.display = "block"

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
                <div className='login__loading'>
                    <div className='overflow' ref={ref} >
                        <img src={loading} alt='loading' className='img__loading' />
                    </div>
                </div>
                <div className='title-contact'>
                    <h3>WHERE IS WORK</h3>
                    <span>{response.country}</span>
                </div>
                <div className='contact-info'>
                    <div>
                        <img src={response.img} />

                    </div>
                    <div className='contact-input-form'>
                        <div className='title-info-contact'>
                            <span><i className="fa-solid fa-location-dot"></i>
                                <span> {response.city}</span>
                            </span>
                            <span><i className="fa-solid fa-phone"></i>

                                <span>{response.phonenumber}</span>
                            </span>
                            <span><i className="fa-solid fa-envelope"></i>

                                <span>{response.email}</span>

                            </span>
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
                            <button className="contact-right contact-btn" type="submit">
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