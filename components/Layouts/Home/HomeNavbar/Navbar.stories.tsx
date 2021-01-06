// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar/HomeNavbar';
import React from 'react';
import 'antd/dist/antd.css';

export default {
  title: 'FluentSearch/Navbar',
  component: HomeNavbar,
} as Meta;

const NavbarStory: Story = (args): JSX.Element => <HomeNavbar {...args} />;

// LoggedIn && LoggedOut

export const LoggedOut = NavbarStory.bind({});
