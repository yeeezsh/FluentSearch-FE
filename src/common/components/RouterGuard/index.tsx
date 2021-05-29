import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoresState } from '../../stores';

const LOGIN_URL = '/login';

const RouterGuard: React.FC = (props) => {
  const { children } = props;
  const router = useRouter();
  const [valid, setValid] = useState<boolean>(true);
  const auth = useSelector((state: StoresState) => state.user.authenticated);

  useEffect(() => {
    const user = localStorage.getItem('user');
    auth || user ? setValid(true) : setValid(false);
  }, []);

  if (!valid) {
    router.push(LOGIN_URL);
  }

  return <>{children}</>;
};

export default RouterGuard;
