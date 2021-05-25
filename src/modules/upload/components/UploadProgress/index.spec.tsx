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
          <UploadProgress group={mockGroupState} total={mockGroupState.length} />
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('should render upload item when the group is not empty', () => {
    const wrap = mount(
      <Provider store={store}>
        <UploadProgress group={mockGroupState} total={mockGroupState.length} />
      </Provider>,
    );
    expect(wrap.find(UploadItem)).toHaveLength(2);
  });

  it('should not render any upload item when empty group or total', () => {
    const wrap = mount(
      <Provider store={store}>
        <UploadProgress group={[]} total={0} />
      </Provider>,
    );
    expect(wrap.find(UploadItem)).toHaveLength(0);
  });
});
