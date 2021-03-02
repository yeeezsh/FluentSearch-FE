import { AxiosError } from 'axios';
import adapter from 'Services/adapter.service';
import { FormRegister } from '../pages/register/types';
import { MSG_INTERNAL_ERROR } from './default.msg';

export async function Register(
  userData: FormRegister,
): Promise<{ success: boolean; msg?: string }> {
  try {
    const url = '';
    await adapter.instance.post(url, userData);
    return { success: true };
  } catch (err) {
    const error = err as AxiosError;
    const status = error.response?.status;
    if (status == 401)
      return {
        success: false,
      };
    return {
      success: false,
      msg: MSG_INTERNAL_ERROR,
    };
  }
}
