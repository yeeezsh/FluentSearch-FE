import { mount, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HistoryPage from 'Modules/history/pages';
import { PurpleTable } from 'Styles/global';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import historyReducer from 'Modules/history/reducer/historyReducer';
import instantSearchReducer from 'Modules/photos/reducers/instantSearchReducer';
import { ApolloProvider } from '@apollo/client';
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
