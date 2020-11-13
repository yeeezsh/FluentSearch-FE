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

const Login: React.FC = () => {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <LoginLayout>
      <Form
        {...layout}
        form={form}
        name="login"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        layout="vertical">
        <Form.Item
          name={'email'}
          rules={[{ required: true, message: 'Please input your Email' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>

        <Form.Item
          name={'password'}
          rules={[{ required: true, message: 'Please input your Password' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
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
