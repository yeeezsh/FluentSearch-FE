import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption/index';
import { P } from 'Styles/global';
import { layout } from 'Modules/user/models/constants';
import { Props } from './interfaces';
import { FormErrorValue, FormFinishValue, FormRegister } from './types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Loading } from 'Components/Loader/styled';
import { useCreateUserMutation } from '../../../../common/generated/generated-types';

const HeaderLogo: React.FC = () => (
  <Row justify="center" align="middle">
    <Col span={8}>
      <Image src={'assets/images/03-logo.svg'} width={200} height={120} />
    </Col>
  </Row>
);

const RegisterButton: React.FC = () => (
  <Form.Item>
    <Button id="register-btn" type="primary" htmlType="submit" block>
      Register
    </Button>
  </Form.Item>
);

const RegisterPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = useForm<FormRegister>();
  const [createAccountMutation, { data, loading, error }] = useCreateUserMutation({
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (!error && data) {
      router.push('/login');
    }
  }, [data, loading, error, dispatch]);

  const onFinish: FormFinishValue = (values: FormRegister) => {
    props.onSubmit && props.onSubmit(values);
    createAccountMutation({
      variables: {
        UserRegisterInput: {
          mainEmail: values.email,
          name: values.name,
          password: values.password,
        },
      },
    });
  };

  const onError: FormErrorValue = (formValue) => {
    props.onError &&
      props.onError({
        errorFields: formValue.errorFields,
        values: (formValue as unknown) as FormRegister,
      });
  };

  return loading ? (
    <Loading />
  ) : (
    <FormCenterLayout>
      <HeaderLogo />
      <Row justify="center">
        <Col span={16} xl={14}>
          <Form
            {...layout}
            id="register-form"
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onError}
            size="large"
            layout="vertical">
            <Form.Item
              name={'name'}
              rules={[{ required: true, message: 'Please input your name' }]}>
              <Input id="name" prefix={<UserOutlined />} placeholder="name" />
            </Form.Item>
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
            <RegisterButton />
            <BreakLineWithCaption>or</BreakLineWithCaption>
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

export default RegisterPage;
