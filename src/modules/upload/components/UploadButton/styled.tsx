import styled from 'styled-components';

export const UploadBtnWrapper = styled.div`
  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  input[type='file'] + label {
    font-size: 1.25em;
    font-weight: 700;
    color: #5a36cc;
    background-color: #f8f5ff;
    border: 1px solid #d5c8ff;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    padding: 30px 40px 30px 40px;
    text-align: center;
  }

  input[type='file'] + label:hover {
    background-color: #ebe4ff;
  }
`;
