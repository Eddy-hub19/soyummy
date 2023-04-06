import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../images/AddRecipe/chevron-down.svg';
import PropTypes from 'prop-types';
import { StyledErrow, StyledList } from './SelectList.styled';

const SelectList = ({
  list = [],
  option = '',
  selectedOption = '',
  selectContent = '',
  scrollbar = '',
  setOption,
  activeItemClass = '',
  wrapperOption = '',
  itemList = '',
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    const onClick = e => {
      inputEl.current.contains(e.target) || setIsActive(!isActive);
    };

    if (isActive) {
      document.addEventListener('click', onClick);
    }
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [isActive]);

  return (
    <>
      <div
        ref={inputEl}
        className={`${selectedOption}`}
        onClick={e => setIsActive(!isActive)}
      >
        <span className={wrapperOption}>{option}</span>
        <StyledErrow>
          <Arrow width="20px" height="20px" />
        </StyledErrow>
      </div>
      {isActive && (
        <ul className={`${selectContent} ${scrollbar}`}>
          {list.map((value, index) => (
            <StyledList
              key={value + '' + index}
              onClick={e => {
                setOption(value);
                setIsActive(false);
              }}
              className={`${
                value === option ? activeItemClass : ''
              } ${itemList}`}
            >
              {value}
            </StyledList>
          ))}
        </ul>
      )}
    </>
  );
};

SelectList.propTypes = {
  list: PropTypes.array,
  option: PropTypes.string,
  selectedOption: PropTypes.string,
  selectContent: PropTypes.string,
  scrollbar: PropTypes.string,
  activeItemClass: PropTypes.string,
  wrapperOption: PropTypes.string,
  setOption: PropTypes.func,
  itemList: PropTypes.string,
};

export default SelectList;
