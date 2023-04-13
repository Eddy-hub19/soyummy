import {ChooseBlock, ChooseText, ChooseSpan, ChooseLink, RightArrow} from "./SeeRecipes.styled"


export const SeeRecipes = () => {
  return (
    <ChooseBlock>
      <ChooseText>
        <ChooseSpan>Delicious and healthy</ChooseSpan> way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </ChooseText>
      <ChooseLink to="/recipes/640cd5ac2d9fecf12e889863">See recipes
        <RightArrow
          width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
          <path
              d="M1.5 6H13.5M13.5 6L9 1.5M13.5 6L9 10.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
      </RightArrow>
      </ChooseLink>
    </ChooseBlock>
  );
};
