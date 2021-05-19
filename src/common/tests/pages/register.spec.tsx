import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import { mount, shallow } from 'enzyme';
import React from 'react';
import RegisterPage from 'Modules/user/pages/register';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from 'Stores/index';
import { ApolloProvider } from '@apollo/client';
import { client } from 'Services/client';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [];
describe('Pages/Register test', () => {
  it('Render correctly', () => {
    const wrap = renderer
      .create(
        <Provider store={store}>
          <MockedProvider mocks={mocks}>
            <RegisterPage />
          </MockedProvider>
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('RegisterPage should be exisiting', () => {
    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage />
        </MockedProvider>
      </Provider>,
    );
    expect(wrap.exists(RegisterPage)).toBe(true);
  });

  it('Should contain FormCenter Layout', () => {
    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage />
        </MockedProvider>
      </Provider>,
    );
    expect(wrap.exists(FormCenterLayout)).toBe(true);
  });

  it('Should have name, email & password field / register btn', () => {
    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage />
        </MockedProvider>
      </Provider>,
    );
    const nameField = wrap.find('#name');
    const emailField = wrap.find('#email');
    const passwordField = wrap.find('#password');
    const registerButton = wrap.find('#register-btn');

    expect(nameField.exists()).toBe(true);
    expect(emailField.exists()).toBe(true);
    expect(passwordField.exists()).toBe(true);
    expect(registerButton.exists()).toBe(true);
  });

  it('Should call onError when fill only email', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage onSubmit={onSubmit} onError={onError} />
        </MockedProvider>
      </Provider>,
    );
    const emailField = wrap.find('input[id="email"]');
    emailField.simulate('change', { target: { value: 'Hello@email.com' } });

    wrap.find('#register-btn').at(0).simulate('submit');
  });

  it('Should call onError when not fulfill', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage onSubmit={onSubmit} onError={onError} />
        </MockedProvider>
      </Provider>,
    );
    const nameField = wrap.find('input[id="name"]');
    const emailField = wrap.find('input[id="email"]');

    nameField.simulate('change', { target: { value: 'John Doe' } });
    emailField.simulate('change', { target: { value: 'Hello@email.com' } });

    wrap.find('#register-btn').at(0).simulate('submit');
  });

  it('Should call onError when not a email', () => {
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage onSubmit={onSubmit} onError={onError} />
        </MockedProvider>
      </Provider>,
    );
    const emailField = wrap.find('input[id="email"]');
    emailField.simulate('change', { target: { value: 'Hello' } });

    wrap.find('#register-btn').at(0).simulate('submit');
  });

  it('Should call onSubmit when fullfill', () => {
    const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(1));
    const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));

    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <RegisterPage onSubmit={onSubmit} onError={onError} />
        </MockedProvider>
      </Provider>,
    );
    const emailField = wrap.find('input[id="email"]');
    const passwordField = wrap.find('input[id="password"]');
    const nameField = wrap.find('input[id="name"]');

    emailField.simulate('change', { target: { value: 'Hello' } });
    passwordField.simulate('change', { target: { value: '1234' } });
    nameField.simulate('change', { target: { value: 'John Doe' } });

    wrap.find('#register-btn').at(0).simulate('submit');
  });
});
