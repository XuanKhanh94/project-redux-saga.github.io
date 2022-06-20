import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import '../styles/login.css'


function Login(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectorFlag = useSelector(state => { return state.flag })
    console.log('selectorFlag', selectorFlag);
    const onFinish = (values) => {
        dispatch({
            type: 'LOGIN_REQUEST',
            data: {
                user: values.usernames,
                password: values.passwords
            },
        })

    };

    const handleLogin = (e) => {
        // if (useSelector === true) {
        //     e.preventDefault();
        //     navigate('/home')
        // }
        // selectorFlag ? navigate('/home') : navigate('/')
    }
    return (

        <div className='container__login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                        placeholder="Email"
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
                        onClick={handleLogin}
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