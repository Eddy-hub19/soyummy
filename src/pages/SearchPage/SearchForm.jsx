import * as React from 'react';
// test
import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Title } from 'components/Title/Title';

const SearchForm = props => {
  const [keyword, setKeyword] = React.useState('');
  const [searchType, setSearchType] = React.useState('title');

  const handleSearchTypeChange = event => {
    console.log(event.target.value);
    setSearchType(event.target.value);
  };

  const handleInputChange = event => {
    event.preventDefault();
    setKeyword(event.currentTarget.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('submitF');
    props.handleSubmit({ keyword, searchType });
  };

  return (
    <div>
      <Title>Search</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={keyword}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
         example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
        <Button type="submit" styled={styled}>
          Search
        </Button>
      </Form>
      <DropdownWrapper>
        <TitleDropdpwn>Search by:</TitleDropdpwn>
        <FormControl>
          <Select
            sx={{
              color: 'rgba(0, 0, 0, 0.5)',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(217, 217, 217, 0.2)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: `rgba(217, 217, 217, 0.2)`,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(217, 217, 217, 0.2)',
              },
              width: '198px',
            }}
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="ingredient">Ingredient</MenuItem>
          </Select>
        </FormControl>
      </DropdownWrapper>
    </div>
  );
};

export default SearchForm;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  position: absolute;

  color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.btnTextLight
      : p.styled === 'olive'
      ? p.theme.colors.btnTextLight
      : p.styled === 'other'
      ? p.theme.colors.mainBtnText
      : p.styled === 'transparent'
      ? p.theme.colors.mainDark
      : 'white'};

  padding: 35px 16px;
  min-width: 60px;

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  background-color: ${p => p.theme.colors.mainAccent};
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 42px 16px;
    min-width: 130px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: 67px 23px;
    min-width: 160px;
    top: -36px;
    right: 465px;
  }
`;

export const Input = styled.input`
  border: ${p => p.theme.borders.searchInput};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  width:182px;
  height:53px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size:16px;
  line-height: ${p => p.theme.lineHeights.subheader};
  border-radius: 18px 44px;
  border: none;
  background-color: transparent;
  padding-left: 32px;
  color: ${p => p.theme.colors.disabledGrey};
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width:201px;
    height:57px
  }
  @media screen and (min-width: 1440px) {
 width:350px;
 height:71px
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex;
  border-radius: 30px, 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

// export const SearchWrapper = styled.div`
//   width: 295px;
//   height: 52px;
//   background-color: ${p => p.theme.colors.mainSearchInput};
//   border-top-left-radius: 30px;
//   border-top-right-radius: 80px;
//   border-bottom-left-radius: 80px;
//   border-bottom-right-radius: 30px;
//   margin: 0 24px 83px;
//   border: ${p => p.theme.borders.mainSearchInput};
//   color: ${p => p.theme.colors.disabledGrey};
//   font-family: ${p => p.theme.fonts.main};
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 18px;
//   position: relative;
//   @media (min-width: 768px) {
//     width: 369px;
//     height: 59px;
//     font-size: 16px;
//     line-height: 24px;
//     margin: 0 0 195px;
//   }
//   @media (min-width: 1440px) {
//     width: 510px;
//     height: 71px;
//     font-size: 16px;
//     line-height: 24px;
//   }
// `;

// export const Title = styled.h2`
//   font-family: ${p => p.theme.fonts.main};
//   font-size: 44px;
//   font-weight: ${p => p.theme.fontWeights[2]};
//   line-height: 44px;
//   letter-spacing: ${p => p.theme.letterSpacings.content};
//   color: ${p => p.theme.colors.sectionHeader};
// `;

export const TitleDropdpwn = styled.label`
  font-family: ${p => p.theme.fonts.main};
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: 24px;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.sectionHeader};
  text-align: center;

  @media (min-width: 1440px) {
    position: absolute;
    top: 17px;
    left: 550px;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  left: 70px;
  margin-bottom: 90px;
`;
