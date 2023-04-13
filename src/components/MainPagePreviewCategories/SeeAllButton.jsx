import { NavLinkBtnSeeAll } from './MainPageRecipesList.styled';

export const SeeAllButton = ({ adress }) => {
  return (
    //"See all" button wrapper
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {/* "See all" button*/}
      <NavLinkBtnSeeAll className={"btnSeeAll"} to={adress}>See all</NavLinkBtnSeeAll>
    </div>
  );
};
