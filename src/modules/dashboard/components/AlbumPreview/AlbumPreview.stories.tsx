import { Meta, Story } from '@storybook/react';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';
import { AlbumPreviewProps } from './types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import { CardWrapper, DashboardWrapper } from 'Modules/dashboard/pages/styled';
import { Col, Row } from 'antd';

export default {
  title: 'FluentSearch/AlbumPreview',
  component: AlbumPreview,
} as Meta;

const ModelCardStory: Story<AlbumPreviewProps> = (args) => (
  <>
    <GlobalStyle />
    <DashboardWrapper>
      <CardWrapper>
        <Row justify="start">
          <Col md={5}>
            <AlbumPreview {...args} />
          </Col>
        </Row>
      </CardWrapper>
    </DashboardWrapper>
  </>
);

const LabelList: Array<string> = ['label1', 'label2', 'label3'];

export const Default = ModelCardStory.bind({});
Default.args = {
  src: 'https://i.pinimg.com/564x/86/1c/a6/861ca60c3a2813c8e3250b9af138ada0.jpg',
  albumName: 'albumName',
  albumLength: 10000,
  label: LabelList,
  link: '/',
};
