import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { OAuthEnum } from 'Models/oauth/enum';
import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { P } from 'Styles/global';
import { layout } from './constants';
import { Props } from './interfaces';
import { FormErrorValue, FormFinishValue, FormLogin } from './types';

const HeaderLogo: React.FC = () => (
  <Row justify="center" align="middle">
    <Col span={8}>
      <Image src={'assets/images/03-logo.svg'} width={200} height={120} />
    </Col>
  </Row>
);

const LoginButton: React.FC = () => (
  <Form.Item>
    <Button id="loginBtn" type="primary" htmlType="submit" block>
      Log in
    </Button>
  </Form.Item>
);

const LoginWithFacebookButton: React.FC<{ onSubmit: Props['onSubmitOAuth'] }> = (
  props,
) => (
  <Form.Item>
    <Button
      onClick={() => props.onSubmit && props.onSubmit(OAuthEnum.Facebook)}
      id="fbBtn"
      style={{ backgroundColor: '#3b5998', color: '#ffffff' }}
      block>
      Login with Facebook
    </Button>
  </Form.Item>
);

const LoginPage: React.FC<Props> = (props) => {
  const [form] = useForm<FormLogin>();

  const onFinish: FormFinishValue = (values) => {
    props.onSubmit && props.onSubmit(values);
    console.log('Success:', values);
  };

  const onError: FormErrorValue = (formValue) => {
    console.log('Error: ', formValue);
    props.onError &&
      props.onError({
        errorFields: formValue.errorFields,
        values: (formValue as unknown) as FormLogin,
      });
  };

  return (
    <FormCenterLayout>
      <HeaderLogo />
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
            <LoginWithFacebookButton onSubmit={props.onSubmitOAuth} />
            <Form.Item>
              <P>
                Haven&apos;t an account?
                <Link href="/register">
                  <a> Register</a>
                </Link>
              </P>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </FormCenterLayout>
  );
};

export default LoginPage;
