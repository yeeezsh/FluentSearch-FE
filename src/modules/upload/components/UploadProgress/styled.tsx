import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 400px;
  overflow: scroll;
  max-height: 400px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  h5 {
    background-color: var(--secondary-color);
    margin: 0;
    color: white;
    padding: 20px;
  }
`;
