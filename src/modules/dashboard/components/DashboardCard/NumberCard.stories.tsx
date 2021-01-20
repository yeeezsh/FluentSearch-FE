import { Meta, Story } from '@storybook/react';
import NumberCard from 'Modules/dashboard/components/DashboardCard/NumberCard';
import { NumberCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/DashboardCard/NumberCard',
  component: NumberCard,
} as Meta;

const NumberCardStory: Story<NumberCardProps> = (args) => (
  <>
    <GlobalStyle />
    <NumberCard {...args} />
  </>
);

export const Default = NumberCardStory.bind({});
Default.args = {
  cardName: 'NumberCard',
  largeNumber: 123000,
  todayNumber: 123000,
};
