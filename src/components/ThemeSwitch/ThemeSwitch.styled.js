import styled from 'styled-components';

export const Switcher = styled.div`
  position: relative;
  margin-top: 8px;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 61px;
  height: 27px;
  border-radius: 50px;
  background: #efefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin: 3px;
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50px;
  width: 61px;
  height: 27px;
  &:checked + ${CheckBoxLabel} {
    background: #8baa36;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      margin-left: 37px;
      transition: 0.5s;
    }
  }
`;
