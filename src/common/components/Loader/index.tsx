import React from 'react';
import { Loading } from './styled';

export const Loader = (): JSX.Element => {
  return (
    <Loading>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
};
