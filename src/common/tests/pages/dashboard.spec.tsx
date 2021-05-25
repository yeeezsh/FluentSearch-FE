import { ApolloProvider } from '@apollo/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shallow } from 'enzyme';
import DashboardPage from 'Modules/dashboard/pages';
import dashboardReducer from 'Modules/dashboard/reducer/dashboardReducer';
import instantSearchReducer from 'Modules/photos/reducers/instantSearchReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  instantSearch: instantSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/Dashboard test', () => {
  it('Dashboard should be exisiting', () => {
    const wrap = shallow(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <DashboardPage />
        </ApolloProvider>
      </Provider>,
    );

    expect(wrap.exists()).toBe(true);
  });
});
