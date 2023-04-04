import { NavLink } from 'react-router-dom';
import foto from './foto.jpg';
//============================================================//

const CATEGORIES = [
  {
    categoryTitle: 'Breakfast',
    recipes: [
      'Banana Pancakes',
      'Ham hock colcannon',
      'Polish Pancakes',
      'Boxty Breakfasth',
    ],
  },
  {
    categoryTitle: 'Miscellaneous',
    recipes: [
      'Banana Pancakes',
      'Ham hock colcannon',
      'Polish Pancakes',
      'Boxty Breakfasth',
    ],
  },
  {
    categoryTitle: 'Chicken',
    recipes: [
      'Banana Pancakes',
      'Ham hock colcannon',
      'Polish Pancakes',
      'Boxty Breakfasth',
    ],
  },
  {
    categoryTitle: 'Desserts',
    recipes: [
      'Banana Pancakes',
      'Ham hock colcannon',
      'Polish Pancakes',
      'Boxty Breakfasth',
    ],
  },
];

export const PreviewCategories = () => {
  return (
    <div>
      <p>Preview categories</p>

      {/*CATEGORIES LIST */}
      <ul style={{ listStyle: 'none' }}>
        {CATEGORIES.map(category => {
          console.log(category);
          return (
            //CATEGORY
            <li>
              <h4>{category.categoryTitle}</h4>
              {/* LIST OF RECIPES */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {category.recipes.map(recipe => {
                  return (
                    // RECIPE
                    <li>
                      <NavLink to="">
                        <img src={foto} alt="foto" />
                        <h6>{recipe}</h6>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
