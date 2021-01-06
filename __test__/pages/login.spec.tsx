import LoginLayout from 'Components/Layouts/Login';
import { mount, shallow } from 'enzyme';
import Login from 'Pages/login';
import React from 'react';

describe('Pages/Login test', () => {
  it('Render correcly', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });

  it('Home should be exisiting', () => {
    const wrap = shallow(<Login />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain Login Layout', () => {
    const wrap = mount(<Login />);
    expect(wrap.exists(LoginLayout)).toBe(true);
  });

  it('Should have email & password field / submit btn', () => {
    const wrap = mount(<Login />);
    const emailField = wrap.find('#email');
    const passwordField = wrap.find('#password');
    const submitButton = wrap.find('#loginBtn');

    expect(emailField.exists()).toBe(true);
    expect(passwordField.exists()).toBe(true);
    expect(submitButton.exists()).toBe(true);
  });

  it('Should call onError when fill only email', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));
    const wrap = mount(<Login onSubmit={onSubmit} onError={onError} />);

    wrap.find('#loginBtn').at(0).simulate('submit');
  });

  it('Should call onSubmit when fullfill', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(1));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));

    const wrap = mount(<Login onSubmit={onSubmit} onError={onError} />);
    const emailField = wrap.find('input[id="email"]');
    const passwordField = wrap.find('input[id="password"]');

    emailField.simulate('change', { target: { value: 'Hello' } });
    passwordField.simulate('change', { target: { value: '1234' } });

    wrap.find('#loginBtn').at(0).simulate('submit');
  });

  it('Should call onSubmitOAuth and send OAuthEnum.Facebook via callback', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));
    const onSumitOAuth = jest.fn(() => expect(onSumitOAuth).toBeCalledTimes(1));
    const wrap = mount(
      <Login onSubmit={onSubmit} onError={onError} onSubmitOAuth={onSumitOAuth} />,
    );

    wrap.find('#fbBtn').at(0).simulate('click');
  });
});
