import { Meta, Story } from '@storybook/react';
import ProgressCard from 'Modules/dashboard/components/DashboardCard/ProgressCard/index';
import { ProgressCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import { Row, Col } from 'antd';
import { DashboardWrapper, CardWrapper } from 'Modules/dashboard/pages/styled';

export default {
  title: 'FluentSearch/DashboardCard/ProgressCard',
  component: ProgressCard,
} as Meta;

const ProgressCardStory: Story<ProgressCardProps> = (args) => (
  <>
    <GlobalStyle />
    <DashboardWrapper>
      <CardWrapper>
        <Row justify="start">
          <Col md={4}>
            <ProgressCard {...args} />
          </Col>
        </Row>
      </CardWrapper>
    </DashboardWrapper>
  </>
);

export const Default = ProgressCardStory.bind({});
Default.args = {
  cardName: 'cardName',
  progress: 75,
  doneNumber: 125300,
  totalNumber: 125300,
};
