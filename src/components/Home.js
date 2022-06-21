import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Col, Row, Button } from 'antd';
import '../styles/home.css'
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';


const { Header, Footer, Sider, Content } = Layout;



function Home(props) {
    // const dispatch = useDispatch();
    // const handleLogout = () => {
    //     dispatch({
    //         type: 'LOGOUT_REQUEST',

    //     })
    // }
    return (
        <div className='container-menu'>
            <Layout className='layout__menu-home'>
                <Header className='header__menu-home'>

                    <Row>
                        <Col className='header__menu-left' span={12}>col</Col>
                        <Col className='header__menu-right' span={12}>

                            <Button >Logout</Button>
                        </Col>

                    </Row>

                </Header>
                <Content> <Link to="/login">Signup</Link>
                    <Routes>
                        <Route to='/login' element={Login} />
                    </Routes></Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default Home;