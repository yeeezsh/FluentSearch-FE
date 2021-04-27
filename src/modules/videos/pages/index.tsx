import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React from 'react';
import { PageWrapper } from 'Styles/global';

const ViewVideoPage: React.FC = () => {
  return (
    <LayoutWithSearch title="History">
      <PageWrapper></PageWrapper>
    </LayoutWithSearch>
  );
};

export default ViewVideoPage;
