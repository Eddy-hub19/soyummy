import { ButtonSkew } from "components/ButtonSkew/ButtonSkew";
import { SubTitle } from "components/SubTitle/SubTitle";
import { RecepieSection } from "pages/AddRecipe/addRecipe.styled";

export const AddRecipeSubmit = ({ inputs, handleChange, localTheme }) => {
  return (
    <RecepieSection localTheme={localTheme}>
      <SubTitle text="Recipe Preparation" />
      <textarea
        name="instructions"
        value={inputs.instructions}
        placeholder="Enter recipe (min 50 characters)"
        onChange={handleChange}
      ></textarea>
      <ButtonSkew type="submit" text="Add" styled="black" />
    </RecepieSection>
  );
};
