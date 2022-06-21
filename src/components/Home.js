import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Col, Row, Button } from 'antd';
import '../styles/home.css'


const { Header, Footer, Sider, Content } = Layout;



function Home(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT_REQUEST',

        })
    }
    return (
        <div className='container-menu'>
            <Layout className='layout__menu-home'>
                <Header className='header__menu-home'>

                    <Row>
                        <Col className='header__menu-left' span={12}>col</Col>
                        <Col className='header__menu-right' span={12}>

                            <Button onClick={handleLogout} >Logout</Button>
                        </Col>
                    </Row>

                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default Home;