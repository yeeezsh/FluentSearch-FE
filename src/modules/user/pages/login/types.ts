import { FormProps } from 'antd/lib/form/Form';

export type FormLogin = { email: string; password: string };
export type FormLoginError = { values: FormLogin; errorFields: any[] };
export type FormErrorValue = FormProps['onFinishFailed'];
export type FormFinishValue = FormProps['onFinish'];
