// import { ReactComponent as DefaultIngredient } from 'images/svg-before sprite/paperbag.svg';

const IngredientsItem = ({ image, title, key, weight, description }) => {
    return (
        <div>
            <div>
                <img src={image} alt={`${title} ingredient`} width={40} height={30} />
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <p>{weight}</p>
            <input type={"checkbox"}/>
            </div>
    );
}
export default IngredientsItem;