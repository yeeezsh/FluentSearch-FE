import React from 'react';
import { useQuery } from '@apollo/client';
import { Query } from './types';
import { GET_USER } from './query';

const Users: React.FC = () => {
  const { data, loading, error } = useQuery<Query>(GET_USER);
  return <div>{data}</div>;
};

export default Users;
