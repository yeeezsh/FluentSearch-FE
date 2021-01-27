import { Meta } from '@storybook/react';
import TaskPage from 'Modules/task/pages/';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/TaskPage',
  component: TaskPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <TaskPage />
  </>
);
