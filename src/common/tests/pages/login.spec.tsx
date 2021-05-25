import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import LoginPage from 'Modules/user/pages/login';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from 'Stores/index';
import { OAuthEnum } from '../../models/oauth/enum';

const mocks = [];
let wrap, onSubmit, onError;

describe('Pages/Login test', () => {
  it('Render correctly', () => {
    const wrap = renderer
      .create(
        <Provider store={store}>
          <MockedProvider mocks={mocks}>
            <LoginPage />
          </MockedProvider>
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  describe('login page render component test', () => {
    beforeEach(() => {
      wrap = mount(
        <Provider store={store}>
          <MockedProvider mocks={mocks}>
            <LoginPage />
          </MockedProvider>
        </Provider>,
      );
    });

    it('Should contain FormCenter Layout', () => {
      expect(wrap.exists(FormCenterLayout)).toBe(true);
    });

    it('Should have email & password field / submit btn', () => {
      const emailField = wrap.find('#email');
      const passwordField = wrap.find('#password');
      const submitButton = wrap.find('#login-btn');

      expect(emailField.exists()).toBe(true);
      expect(passwordField.exists()).toBe(true);
      expect(submitButton.exists()).toBe(true);
    });
  });

  describe('onSubmit / onError login button test', () => {
    beforeEach(() => {
      onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
      onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

      wrap = mount(
        <Provider store={store}>
          <MockedProvider mocks={mocks}>
            <LoginPage onSubmit={onSubmit} onError={onError} />
          </MockedProvider>
        </Provider>,
      );
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should call onError when fill only email', () => {
      const emailField = wrap.find('input[id="email"]');
      emailField.simulate('change', { target: { value: 'Hello@email.com' } });

      wrap.find('#login-btn').at(0).simulate('submit');
    });

    it('Should call onError when not a email', () => {
      const emailField = wrap.find('input[id="email"]');
      emailField.simulate('change', { target: { value: 'Hello' } });

      wrap.find('#login-btn').at(0).simulate('submit');
    });

    it('Should call onSubmit when fullfill', () => {
      const emailField = wrap.find('input[id="email"]');
      const passwordField = wrap.find('input[id="password"]');

      emailField.simulate('change', { target: { value: 'Hello@world.com' } });
      passwordField.simulate('change', { target: { value: '1234' } });

      wrap.find('#login-btn').at(0).simulate('submit');
    });
  });

  it('Should call onSubmitOAuth and send OAuthEnum.Facebook via callback', () => {
    const onSumitOAuth = jest.fn((OAuth) => {
      expect(onSumitOAuth).toBeCalledTimes(1);
      expect(OAuth).toEqual(OAuthEnum.Facebook);
    });
    const wrap = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <LoginPage onSubmitOAuth={onSumitOAuth} />
        </MockedProvider>
      </Provider>,
    );

    wrap.find('#fb-btn').at(0).simulate('click');
  });
});
