import { Button } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import img1 from '../../assest/nat-2.jpg';
import img2 from '../../assest/nat-3.jpg';
import img3 from '../../assest/nat-4.jpg';
import img4 from '../../assest/nat-5.jpg';
import img5 from '../../assest/nat-6.jpg';
import img9 from '../../assest/nat-9.jpg';
import './about.css';


function About(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const infoAbout = useSelector(state => state.about);
    const selectorId = useSelector(state => {
        let data = state.id;
        if (data) {
            return data.id;
        } else {
            return false;
        }
    })

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT_REQUEST',
            data: false,
            redirectToLogin
        }
        )
    }
    const redirectToLogin = () => {
        navigate('/')
    }

    useEffect(() => {
        dispatch({
            type: 'REQUEST_API_ABOUT',
            data: selectorId,
        })
        if (selectorId === false) {
            return navigate('*')
        }
    }, [])

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
            <div className='about__img-cover'>

            </div>
            <div className='container__info-header'>
                <div className='about__img-avatar'>
                    <img src={infoAbout.imgcover} />
                </div>

                <div className='title-name'>

                    <h1 className='about__title-name'>

                        <span className='about__name-main'>

                            <span>{infoAbout.name}</span>
                        </span>
                        <span className='about__name-sub'>
                            <div className='total-img'>
                                <img src={img1} className='img1 avatar' />
                                <img src={img2} className='img2 avatar' />
                                <img src={img3} className='img3 avatar' />
                                <img src={img4} className='img4 avatar' />
                                <img src={img5} className='img5 avatar' />
                            </div>
                        </span>
                        <span className='about__name-sub'>

                            {infoAbout.title}
                        </span>
                        <span className='about__name-sub'>
                            {moment(infoAbout.date).format('DD/MM/YYYY')}
                        </span>
                    </h1>
                </div>

            </div>

        </div>
    );
}

export default About;