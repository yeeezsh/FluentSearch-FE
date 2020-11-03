import { shallow } from 'enzyme';
import Home from '../index';

describe('Home', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
