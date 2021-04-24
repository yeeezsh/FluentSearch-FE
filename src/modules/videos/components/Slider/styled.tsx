import styled from 'styled-components';
export const SliderWrapper = styled.div`
  position: relative;

  input[type='range'] {
    overflow: hidden;
    width: 80px;
    -webkit-appearance: none;
    background-color: #9a905d;
    width: 100%;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    height: 0.5rem;
    outline: none;
    opacity: 0.7;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 1em;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 0.75em;
    -webkit-appearance: none;
    height: 1em;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -100rem 0 0 100 rem #43e5f7;
  }

  input[type='range']::-moz-range-thumb {
    width: 0.75em;
    -webkit-appearance: none;
    height: 1em;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -100rem 0 0 100rem #43e5f7;
    cursor: pointer;
  }

  input[type='range']:hover {
    opacity: 1;
  }

  /*FF*/
  input[type='range']::-moz-range-progress {
    background-color: #43e5f7;
  }

  input[type='range']::-moz-range-track {
    background-color: #9a905d;
  }

  /*IE*/
  input[type='range']::-ms-fill-lower {
    background-color: #43e5f7;
  }

  input[type='range']::-ms-fill-upper {
    background-color: #9a905d;
  }
`;
