import { FormProps } from 'antd/lib/form/Form';

export type FormLogin = { email: string; password: string };
//TODO: define error fields
export type FormLoginError = { values: FormLogin; errorFields: unknown[] };
export type FormErrorValue = FormProps['onFinishFailed'];
export type FormFinishValue = FormProps['onFinish'];
