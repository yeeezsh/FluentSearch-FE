import { ApolloProvider } from '@apollo/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shallow } from 'enzyme';
import instantSearchReducer from 'Modules/photos/reducers/instantSearchReducer';
import TaskPage from 'Modules/task/pages';
import taskReducer from 'Modules/task/reducer/taskReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';

const rootReducer = combineReducers({
  task: taskReducer,
  instantSearch: instantSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/Task test', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <TaskPage />
        </ApolloProvider>
      </Provider>,
    );
  });

  it('TaskPage should be exisiting', () => {
    expect(wrap.exists()).toBe(true);
  });
});
