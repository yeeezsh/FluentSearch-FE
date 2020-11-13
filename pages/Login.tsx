import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import LoginLayout from 'Components/Layouts/Login/LoginLayout';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    console.log(email);
    dispatch({
      type: 'setEmail',
      payload: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginLayout>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical">
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
            onChange={handleEmailChange}
            value={email}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link href="/">Forgot password</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link href="/">register now!</Link>
        </Form.Item>
      </Form>
    </LoginLayout>
  );
};

export default Login;
