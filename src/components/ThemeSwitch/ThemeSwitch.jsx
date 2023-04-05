import { CheckBox, CheckBoxLabel, Switcher } from './ThemeSwitch.styled';

const ThemeSwitch = () => {
  return (
    <>
      <Switcher>
        <CheckBox id="theme-switcher" type="checkbox" />
        <CheckBoxLabel htmlFor="theme-switcher" />
      </Switcher>
    </>
  );
};

export default ThemeSwitch;
