import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import loading from '../assest/loading.gif';
import '../styles/login.css';


function Login(props) {

    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('login values', values);
        dispatch({
            type: 'LOGIN_REQUEST',
            data: {
                user: values.usernames,
                password: values.passwords,
                flag: true,
            },
        })

    };
    notification.config({
        placement: 'topRight',
        // top: 50,
        duration: 4,
        rtl: false,
    });
    const openNotificationUser = (type) => {
        notification[type]({
            message: 'Sai tài khoản',

        });
    };

    const openNotificationPassword = (type) => {
        notification[type]({
            message: 'Sai mật khẩu',

        });
    }


    return (

        <div className='container__login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='login__loading'>
                <div className='overflow' >
                    <img src={loading} alt='loading' className='img__loading' />
                </div>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                style={{
                    width: '330px',
                }}
            >

                <Form.Item
                    name="usernames"
                    rules={[
                        {
                            required: true,
                            message: 'Tài khoản trống',
                        },
                    ]}
                    style={{ marginTop: '30px' }}
                >
                    <Input prefix={<UserOutlined
                        className="site-form-item-icon" />}
                        placeholder="Tài khoản"
                        style={{ borderRadius: '30px', height: '40px' }} />
                </Form.Item>
                <Form.Item
                    name="passwords"
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu trống',
                        },
                    ]}

                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Mật khẩu"
                        style={{ borderRadius: '30px', height: '40px' }}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link to="/forgotpassword" className="login-form-forgot" style={{ float: 'right' }}
                    >
                        Quên mật khẩu
                    </Link>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%', height: '40px', marginBottom: '20px' }}

                    >
                        Đăng nhập
                    </Button>
                    OR <Link to="/signup">Đăng ký ngay!</Link>
                </Form.Item>
            </Form>

        </div >
    );
}

export default Login;