import { Meta, Story } from '@storybook/react';
import NumberCard from 'Modules/dashboard/components/DashboardCard/NumberCard';
import { NumberCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import { Row, Col } from 'antd';
import { DashboardWrapper, CardWrapper } from 'Modules/dashboard/pages/styled';

export default {
  title: 'FluentSearch/DashboardCard/NumberCard',
  component: NumberCard,
} as Meta;

const NumberCardStory: Story<NumberCardProps> = (args) => (
  <>
    <GlobalStyle />
    <DashboardWrapper>
      <CardWrapper>
        <Row justify="start">
          <Col md={4}>
            <NumberCard {...args} />
          </Col>
        </Row>
      </CardWrapper>
    </DashboardWrapper>
  </>
);

export const Default = NumberCardStory.bind({});
Default.args = {
  cardName: 'NumberCard',
  largeNumber: 123000,
  todayNumber: 123000,
};
