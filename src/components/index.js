import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, Space, Dropdown } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, Outlet, Route, Routes, useRoutes } from 'react-router-dom'
import '../styles/home.css';
import About from './about';
import Contact from './contact';
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
                >
                    Home
                </NavLink>
            ),
            key: 'mail',
        },
        {
            label: (
                <NavLink to='about'
                    className='btn-logout'
                >
                    About
                </NavLink>
            ),
            key: 'app',
        },
        {
            label: (
                <NavLink to='contact'
                    className='btn-logout'
                >
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


    // const [current, setCurrent] = useState('mail');

    // let element = useRoutes([
    //     {
    //         path: "/",
    //         element: <Home />,
    //         children: [
    //             {
    //                 path: "about",
    //                 element: <About />,
    //             },
    //             // { path: "tasks", element: <DashboardTasks /> },
    //         ],
    //     },
    //     { path: "contact", element: <Contact /> },
    // ]);

    return (
        <div className='container-menu'>


            <Layout className='layout__menu-home'>
                <Header className='header__menu-home'>

                    <Row>
                        <Col className='header__nav' span={24}>

                            <div className='container__navbar'>

                                <Menu
                                    // onClick={onClick} selectedKeys={[current]}
                                    mode="horizontal" items={items} />
                                {/* <Button onClick={handleLogout} className='btn-logout'>Logout</Button> */}

                            </div>


                        </Col>

                    </Row>

                </Header>

                <Content>

                    <Outlet />
                </Content>






                <Footer>Footer</Footer>
            </Layout>

            {/* <Routes>

                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
            </Routes> */}
        </div>
    );
}

export default Home;