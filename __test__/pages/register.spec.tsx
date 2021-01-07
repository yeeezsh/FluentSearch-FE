import FormCenter from 'Components/Layouts/FormCenter/index';
import { mount, shallow } from 'enzyme';
import Register from 'Pages/register';
import React from 'react';

describe('Pages/Register test', () => {
  it('Render correctly', () => {
    const wrap = <Register />;
    expect(wrap).toMatchSnapshot();
  });

  it('Register should be exisiting', () => {
    const wrap = shallow(<Register />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain FormCenter Layout', () => {
    const wrap = shallow(<Register />);
    expect(wrap.exists(FormCenter)).toBe(true);
  });

  it('Should have name, email & password field / register btn', () => {
    const wrap = mount(<Register />);
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
    const wrap = mount(<Register onSubmit={onSubmit} onError={onError} />);

    const emailField = wrap.find('input[id="email"]');
    emailField.simulate('change', { target: { value: 'Hello@email.com' } });
    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onError when fill only name', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));
    const wrap = mount(<Register onSubmit={onSubmit} onError={onError} />);

    const nameField = wrap.find('input[id="name"]');
    nameField.simulate('change', { target: { value: 'John Doe' } });
    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onError when fill only password', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));
    const wrap = mount(<Register onSubmit={onSubmit} onError={onError} />);

    const passwordField = wrap.find('input[id="password"]');
    passwordField.simulate('change', { target: { value: '12312432' } });
    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onError when not email type', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));

    const wrap = mount(<Register onSubmit={onSubmit} onError={onError} />);
    const nameField = wrap.find('input[id="name"]');
    const emailField = wrap.find('input[id="email"]');
    const passwordField = wrap.find('input[id="password"]');

    nameField.simulate('change', { target: { value: 'John Doe' } });
    emailField.simulate('change', { target: { value: 'Hello' } });
    passwordField.simulate('change', { target: { value: '1234' } });
    wrap.find('#registerBtn').at(0).simulate('submit');
  });

  it('Should call onSubmit when fullfill', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(1));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));

    const wrap = mount(<Register onSubmit={onSubmit} onError={onError} />);
    const nameField = wrap.find('input[id="name"]');
    const emailField = wrap.find('input[id="email"]');
    const passwordField = wrap.find('input[id="password"]');

    nameField.simulate('change', { target: { value: 'John Doe' } });
    emailField.simulate('change', { target: { value: 'Hello@email.com' } });
    passwordField.simulate('change', { target: { value: '1234' } });
    wrap.find('#registerBtn').at(0).simulate('submit');
  });
});
