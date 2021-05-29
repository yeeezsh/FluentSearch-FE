import AllPhotosPage from 'Modules/photos/pages';
import { GetServerSideProps } from 'next';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';
import { PageGetRecentFilesComp, ssrGetRecentFiles } from '../common/generated/page';

const AllPhotos: PageGetRecentFilesComp = (props) => {
  return (
    <RouterGuard>
      <AllPhotosPage props={props} />
    </RouterGuard>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = localStorage.getItem('user');
  let owner = '';
  if (user) {
    const userData = JSON.parse(user);
    owner = userData._id;
  }

  const data = await ssrGetRecentFiles.getServerPage(
    {
      variables: {
        owner: owner,
      },
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
