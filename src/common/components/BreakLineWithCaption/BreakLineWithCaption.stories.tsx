// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
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
