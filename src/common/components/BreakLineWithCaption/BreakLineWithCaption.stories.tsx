import { Meta, Story } from '@storybook/react';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/BreakLineWithCaption',
  component: BreakLineWithCaption,
} as Meta;

type PropType = {
  children?: HTMLCollection | string;
};

const BreakLineWithCaptionStory: Story<PropType> = (args) => (
  <div style={{ marginTop: '55px' }}>
    <GlobalStyle /> <BreakLineWithCaption {...args} />
  </div>
);

export const Default = BreakLineWithCaptionStory.bind({});
Default.args = {
  children: 'or',
};
