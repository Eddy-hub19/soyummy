import { Container, Thumb } from "./ShoppingList.styled";
import { Title } from "components/Title/Title";
import ShoppingListTabl from "components/ShoppingList/ShoppingListTabl";

const ShoppingList = () => {
  return (
    <Thumb>
      <Container>
        <Title>Shopping List</Title>
        <ShoppingListTabl />
      </Container>
    </Thumb>
  );
};

export default ShoppingList;
