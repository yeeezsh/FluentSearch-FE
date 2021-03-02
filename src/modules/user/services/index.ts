import { AxiosError } from 'axios';
import { userActions } from '../reducers/userReducer';
import { UserState } from '../reducers/userReducer/types';
import { MSG_BAD_PASSWORD, MSG_INTERNAL_ERROR } from './default.msg';
import adapter from 'Services/adapter.service';
import { FormLogin } from '../pages/login/types';
import { store } from 'Stores/index.ts';

export function DeleteCredential(): void {
  localStorage.removeItem('user');
  store.dispatch(userActions.deleteUser());
  return;
}

export const SaveCredential = (data: UserState): boolean => {
  try {
    store.dispatch(userActions.setUser(data));
    const duplicated = localStorage.getItem('user');
    if (duplicated) localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(data));

    return true;
  } catch (err) {
    return false;
  }
};

export function RestoreUser(): void {
  const user = localStorage.getItem('user');
  if (!user) throw Error('User need login');
  store.dispatch(userActions.setUser(JSON.parse(user)));
}

export async function RequestToLogin(
  userData: FormLogin,
): Promise<{ auth: boolean; msg?: string }> {
  try {
    const url = '/users/auth/requestor';
    const response = await adapter.instance.post(url, userData);
    SaveCredential(response.data);
    return { auth: true };
  } catch (err) {
    const error = err as AxiosError;
    const status = error.response?.status;
    if (status == 401)
      return {
        auth: false,
        msg: MSG_BAD_PASSWORD,
      };
    return {
      auth: false,
      msg: MSG_INTERNAL_ERROR,
    };
  }
}

export async function UserLogout(): Promise<void> {
  DeleteCredential();
  await adapter.instance.get('/users/auth/logout');
  return;
}
