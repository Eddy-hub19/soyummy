import { Link } from 'react-router-dom';
import {
  CardImg,
  CardTitle,
  CardDish,
  TooltipWrapper,
} from './CardMeal.styled';
import NoImage from '../../images/default.jpg';
import { scrollToTop } from 'utils/scrollUp';

export const CardMeal = ({ meal }) => {

  return (
    <CardDish>
      <Link to={`/recipes/${meal._id}`} onClick={scrollToTop}>
        <CardImg src={meal.thumb ? meal.thumb : { NoImage }} alt={meal.title} />
        <CardTitle data-tooltip-id={meal._id}>{meal.title}</CardTitle>
        {meal.title.length > 30 && (
          <TooltipWrapper>
            <p>{meal.title}</p>
          </TooltipWrapper>
        )}
      </Link>
    </CardDish>
  );
};
