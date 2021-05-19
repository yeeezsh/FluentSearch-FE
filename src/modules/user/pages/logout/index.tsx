import { userActions } from 'Modules/user/reducers/userReducer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'src/common/generated/generated-types';

const LogoutPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutMutation, { data, loading, error }] = useLogoutMutation();

  useEffect(() => {
    logoutMutation();
    if (!error) {
      dispatch(userActions.deleteUser());
      localStorage.removeItem('user');
      router.push('/');
    }
  }, [data, loading, error, dispatch, router]);
  return <div></div>;
};

export default LogoutPage;
