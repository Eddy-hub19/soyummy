import { useEffect, useState } from 'react';
import { CheckBox, CheckBoxLabel, Switcher } from './ThemeSwitch.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getMode } from 'redux/themeR/themeSelector';
import { setTheme } from 'redux/themeR/themeSlice';

export const ThemeSwitch = () => {
  const selectedMode = useSelector(getMode);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(selectedMode.mode ?? 'light');

  const changeTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);
  };

  useEffect(() => {
    dispatch(setTheme({ mode }));
    window.localStorage.setItem('theme', mode);
  }, [dispatch, mode]);
  return (
    <>
      <Switcher>
        <CheckBox
          id="theme-switcher"
          type="checkbox"
          checked={mode === 'dark'}
          onChange={changeTheme}
        />
        <CheckBoxLabel mode={mode} htmlFor="theme-switcher" />
      </Switcher>
    </>
  );
};
