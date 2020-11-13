import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import LoginLayout from 'Components/Layouts/Login/LoginLayout';
import Link from 'next/link';
import React, { useState } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const Login: React.FC = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(formValue);
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
        <Form.Item rules={[{ required: true, message: 'Please input your Email' }]}>
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
            onChange={handleOnChange}
            value={formValue.email}
          />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Please input your Password' }]}>
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={formValue.password}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
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
