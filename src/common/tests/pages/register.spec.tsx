import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import { mount, shallow } from 'enzyme';
import React from 'react';
import RegisterPage from 'Modules/user/pages/register';

describe('Pages/Register test', () => {
  it('Render correctly', () => {
    const wrap = <RegisterPage />;
    expect(wrap).toMatchSnapshot();
  });

  it('RegisterPage should be exisiting', () => {
    const wrap = shallow(<RegisterPage />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain FormCenter Layout', () => {
    const wrap = shallow(<RegisterPage />);
    expect(wrap.exists(FormCenterLayout)).toBe(true);
  });

  it('Should have name, email & password field / register btn', () => {
    const wrap = mount(<RegisterPage />);
    const nameField = wrap.find('#name');
    const emailField = wrap.find('#email');
    const passwordField = wrap.find('#password');
    const registerButton = wrap.find('#registerBtn');

    expect(nameField.exists()).toBe(true);
    expect(emailField.exists()).toBe(true);
    expect(passwordField.exists()).toBe(true);
    expect(registerButton.exists()).toBe(true);
  });

  it('Should call onError when fill only email', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

    const wrap = mount(<RegisterPage onSubmit={onSubmit} onError={onError} />);
    const emailField = wrap.find('input[id="email"]');
    emailField.simulate('change', { target: { value: 'Hello@email.com' } });

    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onError when not a email', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

    const wrap = mount(<RegisterPage onSubmit={onSubmit} onError={onError} />);
    const emailField = wrap.find('input[id="email"]');
    emailField.simulate('change', { target: { value: 'Hello' } });

    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onSubmit when fullfill', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(1));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));

    const wrap = mount(<RegisterPage onSubmit={onSubmit} onError={onError} />);
    const emailField = wrap.find('input[id="email"]');
    const passwordField = wrap.find('input[id="password"]');
    const nameField = wrap.find('input[id="name"]');

    emailField.simulate('change', { target: { value: 'Hello' } });
    passwordField.simulate('change', { target: { value: '1234' } });
    nameField.simulate('change', { target: { value: 'John Doe' } });

    wrap.find('#registerBtn').at(0).simulate('submit');
  });
});
