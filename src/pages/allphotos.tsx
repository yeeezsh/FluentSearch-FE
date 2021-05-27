import AllPhotosPage from 'Modules/photos/pages';
import { GetServerSideProps } from 'next';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';
import { PageGetRecentFilesComp, ssrGetRecentFiles } from '../common/generated/page';

const AllPhotos: PageGetRecentFilesComp = (props) => {
  console.log(props.data);
  return (
    <RouterGuard>
      <AllPhotosPage />
    </RouterGuard>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await ssrGetRecentFiles.getServerPage(
    {
      context: {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    },
    ctx,
  );
  return {
    props: {
      data,
    },
  };
};

export default AllPhotos;
