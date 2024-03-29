import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import '../forgot-password/forgotPassword.css';

function ForgotPassword(props) {

    const dispatch = useDispatch();
    const selectorFlag = useSelector(state => state.flag2)

    const idChangePassword = useSelector(state => state.id)
    const navigate = useNavigate();



    const onRequestUser = (values) => {

        dispatch(
            {
                type: 'REQUEST_PROVIDE_PASSWORD',
                data: {
                    userforgotpassword: values.user.email
                }
            })

    };
    const onFinish = (e) => {
        dispatch({
            type: 'REQUEST_CHANGER_PASSWORD',
            data: {
                newpassword: e.password,
                id: idChangePassword,

            }, handleRedirect

        })

    }

    const handleRedirect = () => {
        navigate('/')
    }
    return (
        <div className="form__change-password">

            <Form name="nest-messages input__user-changepassword"
                onFinish={onRequestUser}
            >

                <Form.Item
                    name={['user', 'email']}

                    style={{ marginBottom: '0' }}
                >
                    <Input placeholder='Nhập user' style={{ width: '300px', borderRadius: '100px', height: '40px', marginRight: '8px' }} />
                </Form.Item>

                <Form.Item style={{ display: 'flex', }}>
                    <Button type="primary" htmlType="submit"
                        style={{ borderRadius: '10px', width: '128px', height: '40px' }}
                    >
                        Gửi yêu cầu
                    </Button>
                </Form.Item>
            </Form>

            {selectorFlag ?
                <div className="input__changepassword">

                    <Form
                        name="register"
                        onFinish={onFinish}

                        scrollToFirstError

                        style={{ minWidth: '452px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    >

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                            hasFeedback
                            style={{ marginTop: '30px' }}
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
                                style={{ height: '40px', width: '30 0px', borderRadius: '6px' }}

                            >
                                Xác nhận
                            </Button>
                        </Form.Item>
                    </Form>
                </div>


                : false}
        </div >
    );
}

export default ForgotPassword;