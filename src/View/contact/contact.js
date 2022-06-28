import { Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './contact.css';

function Contact(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectorId = useSelector(state => state.id.id);
    console.log('selectorId', selectorId);
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
    }, []);


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
                        {response.map(p => {
                            return (
                                <img key={p.id} src={p.img} />
                            )
                        })}

                    </div>
                    <div className='contact-input-form'>
                        <div className='title-info-contact'>
                            <span><i className="fa-solid fa-location-dot"></i>
                                {response.map(p => {
                                    return (
                                        <span key={p.id}> {p.city} - {p.country}</span>
                                    )
                                })}
                            </span>
                            <span><i className="fa-solid fa-phone"></i>
                                {response.map(p => {
                                    return (
                                        <span key={p.id}>Phone: {p.phonenumber}</span>
                                    )
                                })}
                            </span>
                            <span><i className="fa-solid fa-envelope"></i>
                                {response.map(p => {
                                    return (
                                        <span key={p.id}>Email: {p.email}</span>
                                    )
                                })}
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