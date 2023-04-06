import { CheckBox, CheckBoxLabel, Switcher } from './ThemeSwitch.styled';

export const ThemeSwitch = () => {
  return (
    <>
      <Switcher>
        <CheckBox id="theme-switcher" type="checkbox" />
        <CheckBoxLabel htmlFor="theme-switcher" />
      </Switcher>
    </>
  );
};
