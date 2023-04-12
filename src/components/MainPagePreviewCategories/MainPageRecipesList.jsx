import { OtherButton } from 'pages/SearchPage/SearchPage/SearchPage.styled';
import { List, TitlePageCategory } from './MainPageRecipesList.styled';
import { MainPageRecipesListItem } from './MainPageRecipesListItem';
import { SeeAllButton } from './SeeAllButton';
import { NavLink } from 'react-router-dom';
//============================================================//

export const MainPageRecipesList = ({ recipes }) => {
  return (
    <div style={{ margin: '0 auto' }}>
      <ul style={{ listStyle: 'none' }}>
        <li key={Object.keys(recipes)[0]} style={{ marginBottom: 100 }}>
          <TitlePageCategory>Breakfast</TitlePageCategory>

          <List>
            {/* Recipe item */}
            {recipes.breakfast.map(recipe => {
              return (
                <MainPageRecipesListItem recipe={recipe} key={recipe._id} />
              );
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[0]}`} />
        </li>

        <li key={Object.keys(recipes)[1]} style={{ marginBottom: 100 }}>
          <TitlePageCategory>Miscellaneous</TitlePageCategory>
          <List>
            {recipes.miscellaneous.map(recipe => {
              return (
                <MainPageRecipesListItem recipe={recipe} key={recipe._id} />
              );
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[1]}`} />
        </li>

        <li key={Object.keys(recipes)[2]} style={{ marginBottom: 100 }}>
          <TitlePageCategory>Chicken</TitlePageCategory>
          <List>
            {recipes.chicken.map(recipe => {
              return (
                <MainPageRecipesListItem recipe={recipe} key={recipe._id} />
              );
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[2]}`} />
        </li>

        <li key={Object.keys(recipes)[3]} style={{ marginBottom: 100 }}>
          <TitlePageCategory>Desserts</TitlePageCategory>
          <List>
            {recipes.desserts.map(recipe => {
              return (
                <MainPageRecipesListItem recipe={recipe} key={recipe._id} />
              );
            })}
          </List>

          <SeeAllButton adress={`/categories/${Object.keys(recipes)[3]}`} />
        </li>

        <OtherButton
          type="button"
          style={{ margin: '30px auto', display: 'block' }}
        >
          <NavLink style={{color: 'black'}} to={`/categories/pork`}>Other categories</NavLink>
        </OtherButton>
      </ul>
    </div>
  );
};
