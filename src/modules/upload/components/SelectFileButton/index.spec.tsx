import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import React from 'react';
import SelectFileButton from '.';

describe('Component/SelectFileButton test', () => {
  it('Should match snapshot', () => {
    const wrap = renderer
      .create(
        <SelectFileButton
          onChange={() => {
            console.log('test');
          }}
        />,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('SelectFileButton should call onChange with files when input change', () => {
    const onChange = jest.fn();
    const mockFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const expectResult = {
      target: {
        files: [mockFile],
      },
    };

    const wrapButton = shallow(<SelectFileButton onChange={onChange} />);
    wrapButton.find('input').simulate('change', { target: { files: [mockFile] } });
    expect(wrapButton.exists('input')).toBe(true);
    expect(onChange).toHaveBeenCalledWith(expectResult);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
