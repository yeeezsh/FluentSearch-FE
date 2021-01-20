import { Meta, Story } from '@storybook/react';
import ProgressCard from 'Modules/dashboard/components/DashboardCard/ProgressCard';
import { ProgressCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/DashboardCard/ProgressCard',
  component: ProgressCard,
} as Meta;

const ProgressCardStory: Story<ProgressCardProps> = (args) => (
  <>
    <GlobalStyle />
    <ProgressCard {...args} />
  </>
);

export const Default = ProgressCardStory.bind({});
Default.args = {
  cardName: 'cardName',
  progress: 75,
  doneNumber: 125300,
  totalNumber: 125300,
};
