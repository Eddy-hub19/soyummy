import { scrollToTop } from 'utils/scrollUp';
import { Link, FooterNavContent } from './FooterNav.styled';

export const FooterNav = () => {
  return (
    <FooterNavContent>
      <Link to="/search?query=&type=ingredient" onClick={scrollToTop}>
        Ingredients
      </Link>
      <Link to="/add" onClick={scrollToTop}>
        Add recipes
      </Link>
      <Link to="/my?page=1" onClick={scrollToTop}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={scrollToTop}>
        Favorites
      </Link>
      <Link to="/shopping-list" onClick={scrollToTop}>
        Shopping list
      </Link>
    </FooterNavContent>
  );
};
