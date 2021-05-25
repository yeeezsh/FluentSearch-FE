import React from 'react';
import UploadItem from '.';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

describe('Component/UploadItem test', () => {
  const mockFile = { file: { label: 'hello', progress: 10, total: 100 } };
  const mockFileComplete = { file: { label: 'hello', progress: 100, total: 100 } };
  it('Should match snapshots', () => {
    const wrap = renderer.create(<UploadItem file={mockFile} />).toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('UploadItem should have file props with file', () => {
    const wrap = mount(<UploadItem file={mockFile} />);
    expect(wrap.props().file).toBe(mockFile);
  });

  it('UploadItem progress should show spin when progress not equal total', () => {
    const wrap = shallow(<UploadItem file={mockFile} />);
    const wrapWithSpin = wrap.find(Spin).exists();
    expect(wrapWithSpin).toBe(true);
  });

  it('UploadItem progress should show checkcircle icon when progress equal total', () => {
    const wrap = shallow(<UploadItem file={mockFileComplete} />);
    const wrapWithCheckCircle = wrap.find(CheckCircleOutlined).exists();
    expect(wrapWithCheckCircle).toBe(true);
  });
});
