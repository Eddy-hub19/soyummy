import { ReactComponent as DefaultIngredient } from 'images/svg-before sprite/paperbag.svg';
import {
  RecipeIngredientsItem,
  ImageWrapper,
  Label,
  RealCheckbox,
  CustomCheckbox,
  Weight,
  TextContainer,
  IngName,
  IngDescr,
} from './IngredientsItem.styled';
import sprite from '../../images/sprite.svg';

const IngredientsItem = ({ image, title, weight, description }) => {
    return (
        <RecipeIngredientsItem>
        <Label>
            <ImageWrapper>
                    {image
                        ? <img src={image} alt={title} />
                        : <DefaultIngredient />
                    }
            
          </ImageWrapper>
          <TextContainer>
            <IngName>{title}</IngName>
            <IngDescr>{description}</IngDescr>
          </TextContainer>
          <Weight>{weight}</Weight>
          <RealCheckbox
            type="checkbox"
            // onChange={addToShoppingList}
            // checked={obj.inShoppingList}
          />
          <CustomCheckbox>
            <svg>
              <use href={sprite + `#icon-pick`} />
            </svg>
          </CustomCheckbox>
        </Label>
        </RecipeIngredientsItem>
    );
}
export default IngredientsItem;