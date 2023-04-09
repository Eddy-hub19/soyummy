import { Pagination } from '@mui/material';
import { Wrapper } from './Paginator.styled';

export const Paginator = ({ count, page, handleChange }) => {
  return (
    <Wrapper>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
