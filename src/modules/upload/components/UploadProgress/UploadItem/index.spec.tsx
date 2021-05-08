import React from 'react';
import UploadItem from '.';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { ProgressBar } from './styled';

describe('Component/UploadItem test', () => {
  const mockFile = { file: { label: 'hello', progress: 10, total: 100 } };
  it('Should match snapshots', () => {
    const wrap = renderer.create(<UploadItem file={mockFile} />).toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('UploadItem should have file props with file', () => {
    const wrap = mount(<UploadItem file={mockFile} />);
    expect(wrap.props().file).toBe(mockFile);
  });

  it('UploadItem progress should be changed equals to input file progress', () => {
    const wrap = shallow(<UploadItem file={mockFile} />);
    const progressBar = wrap.find(ProgressBar);
    expect(progressBar.props().width).toBe(mockFile.file.progress);
  });
});
