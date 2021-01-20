import { Meta, Story } from '@storybook/react';
import ModelCard from 'Modules/dashboard/components/DashboardCard/ModelCard/index';
import { ModelCardProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import { CardWrapper, DashboardWrapper } from 'Modules/dashboard/pages/styled';
import { Col, Row } from 'antd';

export default {
  title: 'FluentSearch/DashboardCard/ModelCard',
  component: ModelCard,
} as Meta;

const ModelCardStory: Story<ModelCardProps> = (args) => (
  <>
    <GlobalStyle />
    <DashboardWrapper>
      <CardWrapper>
        <Row justify="start">
          <Col md={4}>
            <ModelCard {...args} />
          </Col>
        </Row>
      </CardWrapper>
    </DashboardWrapper>
  </>
);

export const Default = ModelCardStory.bind({});
Default.args = {
  cardName: 'cardName',
  model: 'resNet',
  largeNumber: '10000',
};
