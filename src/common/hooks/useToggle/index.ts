import { useState } from 'react';
import { useTogglePropsType } from './types';

function useToggle(): useTogglePropsType {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

export default useToggle;
