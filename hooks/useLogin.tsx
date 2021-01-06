import { FormLogin } from 'Pages/login';

// interface useLoginProps {
//   onFinish?: (form: FormLogin) => void;
//   onError?: (form: FormLoginError) => void;
// }

export type UseLoginProps = [(form: FormLogin) => void, any];

const useLogin = (): UseLoginProps => {
  const onFinish = (form) => {
    onSubmit && onSubmit(form);
    console.log('Success:', form);
  };

  const onError = (form) => {
    console.log('Error: ', form);
    onError && onError(form);
  };

  const onSubmit = (form) => {
    console.log('Submit: ', form);
  };

  return [onFinish, onError];
};

export default useLogin;
