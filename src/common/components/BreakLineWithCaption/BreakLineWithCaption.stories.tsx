import { Meta, Story } from '@storybook/react';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption';
import { GlobalStyle } from 'Styles/global';
import React from 'react';

export default {
  title: 'FluentSearch/BreakLineWithCaption',
  component: BreakLineWithCaption,
} as Meta;

type PropType = {
  children?: HTMLCollection | string;
};

const BreakLineWithCaptionStory: Story<PropType> = (args) => (
  <div style={{ marginTop: '30px' }}>
    <GlobalStyle />
    <BreakLineWithCaption {...args} />
  </div>
);

export const Default = BreakLineWithCaptionStory.bind({});
Default.args = {
  children: 'or',
};
