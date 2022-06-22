import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, Space, Dropdown } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'
import '../styles/home.css';
import About from './about';
import Contact from './contact';
import ErrorPage from './errorpage';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';


const { Header, Footer, Sider, Content } = Layout;



function Home(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT_REQUEST',

        })
    }
    const items = [
        {
            label: (
                <NavLink to='/'
                    className='btn-logout'
                    rel="noopener noreferrer">
                    Home
                </NavLink>
            ),
            key: 'mail',
        },
        {
            label: (
                <NavLink to='/about'
                    className='btn-logout'
                    rel="noopener noreferrer">
                    About
                </NavLink>
            ),
            key: 'app',
        },
        {
            label: (
                <NavLink to='/contact'
                    className='btn-logout'
                    rel="noopener noreferrer">
                    Contact
                </NavLink>
            ),
            key: 'SubMenu',

        },
        {
            label: (
                <Button onClick={handleLogout}
                    className='btn-logout'
                    rel="noopener noreferrer">
                    Logout
                </Button>
            ),
            key: 'alipay',
        },
    ];




    return (
        <div className='container-menu'>
            <Layout className='layout__menu-home'>
                <Header className='header__menu-home'>

                    <Row>
                        <Col className='header__nav' span={24}>

                            <div className='container__navbar'>
                                {/* <nav>
                                    <Link to='/'>Home</Link>
                                    <Link to='/about'>about</Link>
                                    <Link to='/contact'>contact</Link>
                                </nav>
                                 */}
                                <Menu
                                    // onClick={onClick} selectedKeys={[current]}
                                    mode="horizontal" items={items} />
                                {/* <Button onClick={handleLogout} className='btn-logout'>Logout</Button> */}

                            </div>


                        </Col>

                    </Row>

                </Header>
                <Content className='container__content'>
                    <Row>
                        <Col span={24}>
                            <div className='image__top-content'></div>
                            <div className='text-box'>

                                <h1 className='heading-primary'>
                                    <span className='heading-primary-main'>mylife</span>
                                    <span className='heading-primary-sub'>no money no happy</span>
                                </h1>
                            </div>
                        </Col>
                    </Row>



                </Content>
                <Footer>Footer</Footer>
            </Layout>



        </div>
    );
}

export default Home;