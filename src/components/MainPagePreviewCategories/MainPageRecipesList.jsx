import { MainPageRecipesListItem } from './MainPageRecipesListItem';
import { SeeAllButton } from './SeeAllButton';
//============================================================//

export const MainPageRecipesList = ({ recipes }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li key={Object.keys(recipes)[0]} style={{ marginBottom: 100 }}>
        <h4>Breakfast</h4>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {/* Recipe item */}
          {recipes.breakfast.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton />
      </li>

      <li key={Object.keys(recipes)[1]} style={{ marginBottom: 100 }}>
        <h4>Miscellaneous</h4>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          {recipes.miscellaneous.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton />
      </li>

      <li key={Object.keys(recipes)[2]} style={{ marginBottom: 100 }}>
        <h4>Chicken</h4>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          {recipes.chicken.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton />
      </li>

      <li key={Object.keys(recipes)[3]} style={{ marginBottom: 100 }}>
        <h4>Desserts</h4>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          {recipes.desserts.map(recipe => {
            return <MainPageRecipesListItem recipe={recipe} key={recipe._id} />;
          })}
        </ul>

        <SeeAllButton />
      </li>
    </ul>
  );
};
