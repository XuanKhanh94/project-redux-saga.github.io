import { Button, Checkbox, Form, Input } from 'antd';
import '../styles/signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useNavigate } from 'react-router-dom';
import Login from './Login';

// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const selectorRegister = useSelector(state => state.users);
    // console.log(selectorRegister);
    const flagRedux = useSelector(state => state.flag)

    const onFinish = (values) => {
        dispatch({
            type: 'SEND_REQUEST_REGISTER',
            data: {
                username: values.email,
                password: values.password,

            }
        })

    };
    const handleSubmit = () => {
        navigate('/')
    };
    return (
        <div className='container__signup'>

            <Form
                // {...formItemLayout}
                name="register"
                onFinish={onFinish}

                scrollToFirstError

                style={{ width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        placeholder='Nhập email'
                        style={{ borderRadius: '30px', height: '40px', width: '350px' }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        placeholder='Nhập mật khẩu'
                        style={{ borderRadius: '30px', height: '40px', width: '350px' }}
                    />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder='Nhập lại mật khẩu'
                        style={{ borderRadius: '30px', height: '40px', width: '350px' }} />
                </Form.Item>

                <Form.Item
                    //  {...tailFormItemLayout}
                    style={{ marginLeft: '0' }}
                >
                    <Button type="primary" htmlType="submit"
                        style={{ height: '40px', width: '30 0px', borderRadius: '6px' }}

                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUp;