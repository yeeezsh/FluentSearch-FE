import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import { PageWrapper } from 'Styles/global';

const ViewVideoPage: React.FC = () => {
  return (
    <LayoutWithSearch border={false}>
      <PageWrapper></PageWrapper>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
