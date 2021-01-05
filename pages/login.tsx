import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import LoginLayout from 'Components/Layouts/Login/LoginLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { P } from 'Styles/Global.styled';

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
      <Row justify="center">
        <Col span={8}>
          <Image src={'/03-logo.svg'} width={200} height={120} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16} xl={14}>
          <Form
            {...layout}
            id="loginForm"
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onError}
            size="large"
            layout="vertical">
            <Form.Item
              name={'email'}
              rules={[
                { type: 'email', required: true, message: 'Please input your Email' },
              ]}>
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
            <Row justify="center">
              <Col span={10}>
                <hr />
              </Col>
              <Col span={4}>
                <P>or</P>
              </Col>
              <Col span={10}>
                <hr />
              </Col>
            </Row>

            <Form.Item>
              <P>
                Haven&apos;t an account?
                <Link href="/">
                  <a> Register</a>
                </Link>
              </P>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default Login;
