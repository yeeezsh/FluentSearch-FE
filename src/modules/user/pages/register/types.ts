import { FormProps } from 'antd/lib/form/Form';
import { InternalNamePath } from 'antd/lib/form/interface';

export type FormRegister = { email: string; password: string };
export type FormRegisterError = {
  values: FormRegister;
  errorFields: {
    name: InternalNamePath;
    errors: string[];
  }[];
};
export type FormErrorValue = FormProps['onFinishFailed'];
export type FormFinishValue = FormProps['onFinish'];
