import { userActions } from 'Modules/user/reducers/userReducer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'src/common/generated/generated-types';

const LogoutPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutMutation, { error }] = useLogoutMutation();

  useEffect(() => {
    logoutMutation();
    if (!error) {
      dispatch(userActions.deleteUser());
      localStorage.removeItem('user');
      router.push('/');
    }
  }, []);

  return <div></div>;
};

export default LogoutPage;
