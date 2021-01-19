// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';
import 'antd/dist/antd.css';
import SideMenu, { SideMenuProps } from '.';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/SideMenu',
  component: SideMenu,
} as Meta;

const SideMenuStory: Story<SideMenuProps> = (args): JSX.Element => (
  <>
    <GlobalStyle />
    <SideMenu {...args} />
  </>
);

export const Default = SideMenuStory.bind({});
Default.args = {
  visible: true,
};
