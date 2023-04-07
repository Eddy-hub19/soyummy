import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import ShoppingListTabl from 'components/ShoppingList/ShoppingListTabl';

const ShoppingList = () => {
  return (
    <Container>
      <Title>Shopping List</Title>
      <ShoppingListTabl />
    </Container>
  );
};

export default ShoppingList;
