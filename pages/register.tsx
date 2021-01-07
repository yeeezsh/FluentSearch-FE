import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormCenterLayout from 'Components/Layouts/FormCenter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { P } from 'Styles/Global.styled';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

export type FormRegister = { name: string; email: string; password: string };
export type FormRegisterError = { values: FormRegister; errorFields: [] };

const HeaderLogo: React.FC = () => (
  <Row justify="center" align="middle">
    <Col span={8}>
      <Image src={'assets/images/03-logo.svg'} width={200} height={120} />
    </Col>
  </Row>
);

const LoginButton: React.FC = () => (
  <Form.Item>
    <Button id="registerBtn" type="primary" htmlType="submit" block>
      Register
    </Button>
  </Form.Item>
);

interface Props {
  onSubmit?: (form: FormRegister) => void;
  onError?: (form: FormRegisterError) => void;
}

const Login: React.FC<Props> = (props) => {
  const [form] = useForm<FormRegister>();

  const onFinish = (values) => {
    props.onSubmit && props.onSubmit(values);
    console.log('Success:', values);
  };

  const onError = (formValue) => {
    console.log('Error: ', formValue);
    props.onError && props.onError(formValue);
  };

  return (
    <FormCenterLayout>
      <HeaderLogo />
      <Row justify="center">
        <Col span={16} xl={14}>
          <Form
            {...layout}
            id="registerForm"
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onError}
            size="large"
            layout="vertical">
            <Form.Item
              name={'name'}
              rules={[{ required: true, message: 'Please input your Name' }]}>
              <Input
                id="name"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="name"
              />
            </Form.Item>
            <Form.Item
              name={'email'}
              rules={[
                { type: 'email', required: true, message: 'Please input your Email' },
              ]}>
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
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
            <LoginButton />
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
                Already have an account?
                <Link href="/login">
                  <a> Log in</a>
                </Link>
              </P>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </FormCenterLayout>
  );
};

export default Login;
