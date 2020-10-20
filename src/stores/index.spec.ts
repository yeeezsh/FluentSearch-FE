import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import { middleware } from '.';

const mockStore = configureStore(middleware);

describe('stores test', () => {
  const initialState = {};
  const store = mockStore(initialState);
  it('it should correctly define initial state', () => {
    const expectedInitial = {};
    expect(store.getState()).toEqual(expectedInitial);
  });

  it('it should defined correctly middleware', () => {
    const expectedMiddleware = [thunk];
    expect(middleware).toEqual(expectedMiddleware);
  });
});
