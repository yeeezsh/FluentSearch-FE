/* eslint-disable @typescript-eslint/no-unused-vars */
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import Home from 'Pages/index';
import React from 'react';
import styled from 'styled-components';

export default {
  title: 'FluentSearch/Home',
  component: Home,
} as Meta;

export const HomePage = () => <Home />;
