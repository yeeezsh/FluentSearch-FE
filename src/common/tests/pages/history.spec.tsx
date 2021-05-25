import { ApolloProvider } from '@apollo/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shallow, ShallowWrapper } from 'enzyme';
import HistoryPage from 'Modules/history/pages';
import historyReducer from 'Modules/history/reducer/historyReducer';
import instantSearchReducer from 'Modules/photos/reducers/instantSearchReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';

const rootReducer = combineReducers({
  history: historyReducer,
  instantSearch: instantSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/History test', () => {
  let wrap: ShallowWrapper;
  beforeEach(() => {
    wrap = shallow(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <HistoryPage />
        </Provider>
      </ApolloProvider>,
    );
  });

  it('HistoryPage should be exisiting', () => {
    expect(wrap.dive().exists(HistoryPage)).toBe(true);
  });
});
