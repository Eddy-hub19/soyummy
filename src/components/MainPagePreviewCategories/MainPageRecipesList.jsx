import { TitlePageCategory } from './MainItem.styled';
import { MainPageRecipesListItem } from './MainPageRecipesListItem';
import { SeeAllButton } from './SeeAllButton';
//============================================================//

export const MainPageRecipesList = ({ recipes }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li key={Object.keys(recipes)[0]} style={{ marginBottom: 100 }}>
        <TitlePageCategory>Breakfast</TitlePageCategory>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* Recipe item */}
          {recipes.breakfast.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton adress={`/categories/${Object.keys(recipes)[0]}`} />
      </li>

      <li key={Object.keys(recipes)[1]} style={{ marginBottom: 100 }}>
        <TitlePageCategory>Miscellaneous</TitlePageCategory>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          {recipes.miscellaneous.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton adress={`/categories/${Object.keys(recipes)[1]}`} />
      </li>

      <li key={Object.keys(recipes)[2]} style={{ marginBottom: 100 }}>
        <TitlePageCategory>Chicken</TitlePageCategory>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          {recipes.chicken.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton adress={`/categories/${Object.keys(recipes)[2]}`} />
      </li>

      <li key={Object.keys(recipes)[3]} style={{ marginBottom: 100 }}>
        <TitlePageCategory>Desserts</TitlePageCategory>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          {recipes.desserts.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton adress={`/categories/${Object.keys(recipes)[3]}`} />
      </li>
    </ul>
  );
};
