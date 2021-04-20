import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { OAuthEnum } from 'Models/oauth/enum';
import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { P } from 'Styles/global';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption/index';
import { layout } from 'Modules/user/models/constants';
import { Props } from './interfaces';
import { FormErrorValue, FormFinishValue, FormLogin } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, requestLogin } from 'Modules/user/reducers/userReducer/actions';
import userReducer, { userActions } from 'Modules/user/reducers/userReducer';
import { StoresState } from 'Stores/index';
import { Router, useRouter } from 'next/router';

const HeaderLogo: React.FC = () => (
  <Row justify="center" align="middle">
    <Col span={8}>
      <Image src={'assets/images/03-logo.svg'} width={200} height={120} />
    </Col>
  </Row>
);

const LoginButton: React.FC = () => (
  <Form.Item>
    <Button id="login-btn" type="primary" htmlType="submit" block>
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
      id="fb-btn"
      style={{ backgroundColor: '#3b5998', color: '#ffffff' }}
      block>
      Login with Facebook
    </Button>
  </Form.Item>
);

const LoginPage: React.FC<Props> = (props) => {
  const [form] = useForm<FormLogin>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: StoresState) => state.user.authenticated);
  const router = useRouter();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const onFinish: FormFinishValue = (values) => {
    props.onSubmit && props.onSubmit(values);
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
            id="login-form"
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
              <Input id="email" prefix={<MailOutlined />} placeholder="email" />
            </Form.Item>
            <Form.Item
              name={'password'}
              rules={[{ required: true, message: 'Please input your Password' }]}>
              <Input
                id="password"
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <LoginButton />
            <BreakLineWithCaption>or</BreakLineWithCaption>
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
