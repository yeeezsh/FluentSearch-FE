import { Meta, Story } from '@storybook/react';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption';
import React from 'react';

export default {
  title: 'FluentSearch/BreakLineWithCaption',
  component: BreakLineWithCaption,
  argTypes: {
    child: { Text },
  },
} as Meta;

type PropType = {
  children?: HTMLCollection | string;
};

const BreakLineWithCaptionStory: Story<PropType> = (args) => (
  <BreakLineWithCaption {...args} />
);

export const Default = BreakLineWithCaptionStory.bind({});
Default.args = {
  children: 'or',
};
