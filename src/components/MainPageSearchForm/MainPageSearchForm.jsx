//====================================================//
import * as React from 'react';
import { StyledLinkBtn, Input, Form } from './MainPageSearchForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainPageSearchForm = ({ keyword }) => {
  const [rKeyword, setRKeyword] = React.useState(keyword ?? '');

  const onSubmit = event => {
    event.preventDefault();
    if (rKeyword.length === 0) {
      toast.error('Oops... You did not enter anything to search ', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      return;
    }
    window.location.href = `/soyummy/search?query=${rKeyword}`;
  };

  const handleInputChange = event => {
    setRKeyword(event.target.value);
    console.log(rKeyword);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={keyword}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
         example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ></Input>
        <StyledLinkBtn to={`/search?query=${rKeyword}`} onClick={onSubmit}>
          Search
        </StyledLinkBtn>
        <ToastContainer />
      </Form>
    </div>
  );
};
