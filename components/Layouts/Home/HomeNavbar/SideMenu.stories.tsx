// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import SideMenu, { SideMenuProps } from 'Components/Layouts/Home/HomeNavbar/SideMenu';
import React from 'react';
import 'antd/dist/antd.css';

export default {
  title: 'FluentSearch/SideMenu',
  component: SideMenu,
} as Meta;

const SideMenuStory: Story<SideMenuProps> = (args): JSX.Element => <SideMenu {...args} />;

// LoggedIn && LoggedOut

export const LoggedOut = SideMenuStory.bind({});
LoggedOut.args = {
  visible: true,
};
