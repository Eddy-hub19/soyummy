import * as React from "react";
import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Title } from "components/Title/Title";
import store from "store";
import { Button, Input, Form, TitleDropdpwn, DropdownWrapper } from "../SearchForm/SearchForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchForm = (props) => {
  const [keyword, setKeyword] = React.useState(props.query ?? "");
  const [searchType, setSearchType] = React.useState(props.type ?? "");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setKeyword(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.handleSubmit({ keyword, searchType });
    if (keyword.length === 0) {
      toast.error("Oops... You did not enter anything to search ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const theme = store.get("theme");

  return (
    <div>
      <Title>Search</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          localTheme={theme}
          type="text"
          name="name"
          placeholder="Enter the text"
          value={keyword}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
         example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ></Input>
        <Button type="submit" styled={styled}>
          Search
        </Button>
        <ToastContainer />
      </Form>
      <DropdownWrapper>
        <TitleDropdpwn>Search by:</TitleDropdpwn>

        <Select
          sx={{
            color: "rgb(189, 189, 189);",
            backgroundColor: "#D9D9D9;",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(217, 217, 217, 0.2)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: `rgba(217, 217, 217, 0.2)`,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(217, 217, 217, 0.2)",
            },

            width: "198px",
          }}
          value={searchType}
          onChange={handleSearchTypeChange}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="ingredient">Ingredient</MenuItem>
        </Select>
      </DropdownWrapper>
    </div>
  );
};

export default SearchForm;

export const Text = styled.div``;
