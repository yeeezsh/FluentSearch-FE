import styled from 'styled-components';
import { AvatarWrapperProps } from './types';

export const AvatarWrapper = styled.img<AvatarWrapperProps>`
  border-radius: 50%;
  ${(props) =>
    props.selected &&
    `
    border: 3px solid red;
  `}
`;
