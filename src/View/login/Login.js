import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import loading from '../../assest/loading.gif';
import '../login/login.css';


function Login(props) {

    const ref = useRef(null);
    const dispatch = useDispatch();
    const selectFlag = useSelector(state => state.flag)

    useEffect(() => {
        dispatch({
            type: 'REQUEST_API_LOGIN',
            data: {}
        })
    })

    const onFinish = (values) => {
        dispatch({
            type: 'LOGIN_REQUEST',
            data: {
                user: values.usernames,
                password: values.passwords,
                flag: true,
            },
            openNotificationUserPassword,
            loginLoading
        })

    };
    notification.config({
        placement: 'topRight',
        // top: 50,
        duration: 2.5,
        rtl: false,
    });

    const openNotificationUserPassword = (type) => {
        notification[type]({
            message: 'Sai tài khoản hoặc mật khẩu',

        });
    };

    function loginLoading() {
        const getElementLoading = ref.current;
        selectFlag ? getElementLoading.style.display = "none" : getElementLoading.style.display = "block"

    }

    return (

        <div className='container__login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='login__loading'>
                <div className='overflow' ref={ref} >
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
                    <Link to="/signup">Đăng ký ngay!</Link>
                </Form.Item>
            </Form>

        </div >
    );
}

export default Login;