import { PayloadAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import { initUserState } from './actions';

const mockStore = configureStore();

describe('user reducer test', () => {
  const initialState = {
    id: '',
    username: '',
    displayName: '',
    authenticated: false,
  };

  const store = mockStore(initialState);

  it('it should define initial state correctly', () => {
    const expectedInitialState = {
      id: '',
      username: '',
      displayName: '',
      authenticated: false,
    };

    expect(store.getState()).toEqual(expectedInitialState);
  });

  it('initial action should dispatch correctly', () => {
    const expectedPayload: PayloadAction = { type: 'USER/INIT', payload: undefined };

    store.dispatch(initUserState());
    const action = store.getActions();
    expect(action).toEqual([expectedPayload]);
  });
});
