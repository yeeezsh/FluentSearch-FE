import UploadProgress from '.';
import renderer from 'react-test-renderer';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import UploadItem from './UploadItem';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);

const mockGroupState = [
  { label: 'individual1', progress: 1, total: 1 },
  { label: 'group1', progress: 4, total: 10 },
];

const mockTotalState = 2;

describe('Components/UploadProgress test ', () => {
  const store = mockStore({
    upload: {
      present: {
        group: mockGroupState,
        total: mockTotalState,
      },
    },
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should match snapshot', () => {
    const wrap = renderer
      .create(
        <Provider store={store}>
          <UploadProgress />
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('total > 0 should render upload item', () => {
    const wrap = mount(
      <Provider store={store}>
        <UploadProgress />
      </Provider>,
    );
    expect(wrap.find(UploadItem)).toHaveLength(2);
  });
});
