import { Meta, Story } from '@storybook/react';
import ModelCard from 'Modules/dashboard/components/DashboardCard/ModelCard';
import { ModelCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/ModelCard',
  component: ModelCard,
} as Meta;

const ModelCardStory: Story<ModelCardProps> = (args) => (
  <>
    <GlobalStyle />
    <ModelCard {...args} />
  </>
);

export const Default = ModelCardStory.bind({});
Default.args = {
  cardName: 'cardName',
  model: 'resNet',
  largeNumber: '10000',
};
