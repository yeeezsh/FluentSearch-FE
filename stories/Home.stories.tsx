import { Meta } from '@storybook/react/types-6-0';
import HomePage from 'Modules/home/pages';
import React from 'react';

export default {
  title: 'FluentSearch/Pages/Home',
  component: HomePage,
} as Meta;

export const Default = (): JSX.Element => <HomePage />;
