import { NavigateTo } from "./NavigateBtn.styled";

export const NavigateBtn = ({ navigate, text, styled, location }) => {
  return (
    <NavigateTo location={location} styled={styled} to={navigate}>
      {text}
    </NavigateTo>
  );
};
