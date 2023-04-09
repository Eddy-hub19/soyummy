import { NavigateTo } from './NavigateBtn.styled';

// import { useDispatch } from 'react-redux';

// import { addToMyRecipes } from 'redux/myRecipes/myRecipesOperation';

export const NavigateBtn = ({ navigate, text, styled, location }) => {
  // const r = {
  //   imgURL: '',
  //   title: '!!!!!!! Chicken Enchilada Casserole 124124124124',
  //   category: 'Beef',
  //   area: 'Italian',
  //   instructions: 'Инструкции приготовления',
  //   description:
  //     'A Mexican-inspired casserole made with shredded chicken, enchilada sauce, tortillas, and cheese.',
  //   thumb:
  //     'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/smb2tdq5ltv4usbnvmt2.jpg',
  //   preview:
  //     'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/smb2tdq5ltv4usbnvmt2.jpg',
  //   time: '60 min',
  //   popularity: null,
  //   favorites: [],
  //   likes: [],
  //   youtube: '',
  //   tags: [],
  //   ingredients: [
  //     {
  //       ingredient: '640c2dd963a319ea671e36cb',
  //       measure: '3 Cups',
  //     },
  //   ],
  //   owner: '642dbbdc817376e23cb1f298',
  //   // _id: '123c84b13097081b142b85a1',
  //   createdAt: '2023-04-08T16:08:19.510Z',
  //   updatedAt: '2023-04-08T16:08:19.510Z',
  //   __v: 0,
  // };

  // const dispatch = useDispatch();
  // const handleDeleteBtnClick = () => {
  //   dispatch(addToMyRecipes(r));
  // };

  return (
    // <button typeof="button" onClick={handleDeleteBtnClick}>
    //   ADD
    // </button>
    <NavigateTo location={location} styled={styled} to={navigate}>
      {text}
    </NavigateTo>
  );
};
