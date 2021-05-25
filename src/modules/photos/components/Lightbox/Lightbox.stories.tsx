import React from 'react';
import { Meta, Story } from '@storybook/react';
import Lightbox from '.';
import { LightboxPropsType } from './types';
import { GlobalStyle } from 'Styles/global';
import { mock } from './constants';

export default {
  title: 'FluentSearch/Lightbox',
  component: Lightbox,
} as Meta;

const LightboxStory: Story<LightboxPropsType> = (args) => (
  <>
    <GlobalStyle />
    <Lightbox {...mock} {...args} />
  </>
);

export const Default = LightboxStory.bind({});
Default.args = {};
