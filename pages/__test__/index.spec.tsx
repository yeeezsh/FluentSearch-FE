import { shallow } from 'enzyme';
import Home from 'Pages/index';

describe('Home', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
