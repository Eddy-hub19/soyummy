import { OtherButton } from "pages/SearchPage/SearchPage/SearchPage.styled";
import { ItemRecipe, List, TitlePageCategory } from "./MainPageRecipesList.styled";
import { MainPageRecipesListItem } from "./MainPageRecipesListItem";
import { SeeAllButton } from "./SeeAllButton";
import { NavLink } from "react-router-dom";

export const MainPageRecipesList = ({ recipes }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ul style={{ listStyle: "none" }}>
        <ItemRecipe key={Object.keys(recipes)[0]}>
          <TitlePageCategory>Breakfast</TitlePageCategory>

          <List>
            {/* Recipe item */}
            {recipes.breakfast.map((recipe) => {
              return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[0]}`} />
        </ItemRecipe>

        <ItemRecipe key={Object.keys(recipes)[1]}>
          <TitlePageCategory>Miscellaneous</TitlePageCategory>
          <List>
            {recipes.miscellaneous.map((recipe) => {
              return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[1]}`} />
        </ItemRecipe>

        <ItemRecipe key={Object.keys(recipes)[2]}>
          <TitlePageCategory>Chicken</TitlePageCategory>
          <List>
            {recipes.chicken.map((recipe) => {
              return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[2]}`} />
        </ItemRecipe>

        <ItemRecipe key={Object.keys(recipes)[3]}>
          <TitlePageCategory>Desserts</TitlePageCategory>
          <List>
            {recipes.desserts.map((recipe) => {
              return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[3]}`} />
        </ItemRecipe>

        <NavLink to={`/categories/beef`}>
          <OtherButton type="button" style={{ margin: "0 auto 118px", display: "block" }}>
            Other categories
          </OtherButton>
        </NavLink>
      </ul>
    </div>
  );
};
