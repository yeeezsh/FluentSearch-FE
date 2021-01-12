import { FormRegister, FormRegisterError } from './types';

export interface Props {
  onSubmit?: (form: FormRegister) => void;
  onError?: (form: FormRegisterError) => void;
}
