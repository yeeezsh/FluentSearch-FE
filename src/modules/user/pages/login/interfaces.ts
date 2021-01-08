import { OAuthType } from 'Models/oauth/type';
import { FormLogin, FormLoginError } from './types';

export interface Props {
  onSubmit?: (form: FormLogin) => void;
  onError?: (form: FormLoginError) => void;
  onSubmitOAuth?: (type: OAuthType) => void;
}
