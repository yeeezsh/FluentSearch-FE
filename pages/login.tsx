import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import LoginLayout from 'Components/Layouts/Login/LoginLayout';
import Link from 'next/link';
import React from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

export type FormLogin = { email: string; password: string };
export type FormLoginError = { values: FormLogin; errorFields: [] };

interface Props {
  onSubmit?: (form: FormLogin) => void;
  onError?: (form: FormLoginError) => void;
}

const Login: React.FC<Props> = (props) => {
  const [form] = useForm<FormLogin>();

  const onFinish = (values) => {
    props.onSubmit && props.onSubmit(values);
    console.log('Success:', values);
  };

  const onError = (form) => {
    console.log('Error: ', form);
    props.onError && props.onError(form);
  };

  return (
    <LoginLayout>
      <Form
        {...layout}
        id="loginForm"
        form={form}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onError}
        layout="vertical">
        <Form.Item
          name={'email'}
          rules={[{ required: true, message: 'Please input your Email' }]}>
          <Input
            id="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>

        <Form.Item
          name={'password'}
          rules={[{ required: true, message: 'Please input your Password' }]}>
          <Input
            id="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button id="loginBtn" type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Link href="/">register now!</Link>
        </Form.Item>
      </Form>
    </LoginLayout>
  );
};

export default Login;
