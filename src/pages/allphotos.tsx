import AllPhotosPage from 'Modules/photos/pages';
import { GetServerSideProps } from 'next';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';
import { PageGetRecentFilesComp, ssrGetRecentFiles } from '../common/generated/page';

const AllPhotos: PageGetRecentFilesComp = (props) => {
  const data = props.data;
  return (
    <RouterGuard>
      <AllPhotosPage data={data} />
    </RouterGuard>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetRecentFiles.getServerPage(
    {
      variables: {
        limit: 20,
        skip: 20,
      },
      context: {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    },
    ctx,
  );
};

export default AllPhotos;
