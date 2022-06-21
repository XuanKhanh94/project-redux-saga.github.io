import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../styles/signup.css';


const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch({
            type: 'SEND_REQUEST_REGISTER',
            data: {
                id: uuidv4(),
                username: values.username,
                password: values.password,

            }, handleSubmit

        })


    };



    const handleSubmit = () => {
        navigate('/')


    };

    return (
        <div className='container__signup'>

            <Form
                name="register"
                onFinish={() => {
                    form.validateFields().then(values => {
                        dispatch({
                            type: 'SEND_REQUEST_REGISTER',
                            data: {
                                id: uuidv4(),
                                username: values.username,
                                password: values.password,

                            }, handleSubmit

                        })
                    }).catch(err => { console.log(err); })
                }}
                form={form}
                scrollToFirstError
                initialValues={{
                    username: '',
                    name: '',
                }}

                style={{ width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        placeholder='Nhập tài khoản'
                        style={{ borderRadius: '30px', height: '40px', width: '350px' }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
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
                            message: 'Vui lòng nhập lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('Mật khẩu không trùng nhau!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder='Nhập lại mật khẩu'
                        style={{ borderRadius: '30px', height: '40px', width: '350px' }} />
                </Form.Item>

                <Form.Item
                    style={{ marginLeft: '0' }}
                >
                    <Button type="primary" htmlType="submit"
                        style={{ height: '40px', width: '300px', borderRadius: '6px' }}

                    // onClick={handleSubmit}
                    >
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUp;