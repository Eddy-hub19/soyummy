import { NavLinkBtnSeeAll } from "./MainPageRecipesList.styled";
import { scrollToTop } from "utils/scrollUp";

export const SeeAllButton = ({ adress }) => {
  return (
    //"See all" button wrapper
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {/* "See all" button*/}
      <NavLinkBtnSeeAll className={"btnSeeAll"} to={adress} onClick={scrollToTop}>
        See all
      </NavLinkBtnSeeAll>
    </div>
  );
};
