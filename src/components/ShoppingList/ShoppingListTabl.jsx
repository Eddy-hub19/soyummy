import { useState, useEffect } from 'react';

import {
  getShoppingListAPI,
  removeShoppingListAPI,
} from 'service/API/ShoppingListAPI';
import icons from 'images/sprite.svg';
import defaultImg from '../../images/default.jpg';
import { EmptyPlaceholder } from 'pages/EmptyPlaceholder/EmptyPlaceholder';

import {
  Table,
  TableItem,
  TableFirstCol,
  TableSecondThirdCol,
  BoxForImage,
  ItemName,
  ItemNumber,
  DeleteBtn,
  Image,
  Thumb,
} from './shoppingListTabl.styled.js';

const ShoppingListTabl = () => {
  const [shopItems, setShopItems] = useState([]);

  try {
    useEffect(() => {
      async function fetchData() {
        const response = await getShoppingListAPI();
        setShopItems(response);
      }

      fetchData();
    }, [shopItems]);
  } catch (error) {
    console.log(error);
  }

  const deleteItem = e => {
    try {
      async function remove() {
        if (e.target.id) {
          await removeShoppingListAPI(e.target.id);
          // const response = await removeShoppingListAPI(e.target.id);
        }

        if (e.target.parentNode.id) {
          await removeShoppingListAPI(e.target.parentNode.id);
          // const response = await removeShoppingListAPI(e.target.parentNode.id);
        }

        if (e.target.parentNode.parentNode.id) {
          await removeShoppingListAPI(e.target.parentNode.parentNode.id);
          // const response = await removeShoppingListAPI(
          //   e.target.parentNode.parentNode.id
          // );
        }
      }

      remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Thumb>
      {shopItems.length === 0 ? (
        <EmptyPlaceholder text="Your shopping list is empty." />
      ) : (
        <Table>
          <TableItem key="0">
            <TableFirstCol>Products</TableFirstCol>
            <TableSecondThirdCol>Number</TableSecondThirdCol>
            <TableSecondThirdCol>Remove</TableSecondThirdCol>
          </TableItem>
          {shopItems.map(({ _id, nameIngredient, weight, image }) => {
            return (
              <TableItem key={_id}>
                <TableFirstCol>
                  <BoxForImage>
                    <Image
                      src={image || defaultImg}
                      alt={`product ${nameIngredient}`}
                    />
                  </BoxForImage>
                  <ItemName>{nameIngredient}</ItemName>
                </TableFirstCol>
                <TableSecondThirdCol>
                  <ItemNumber>{weight}</ItemNumber>
                </TableSecondThirdCol>
                <TableSecondThirdCol>
                  <DeleteBtn type="button" id={_id} onClick={deleteItem}>
                    <svg width="20" height="20">
                      <use href={icons + '#icon-cross'}></use>
                    </svg>
                  </DeleteBtn>
                </TableSecondThirdCol>
              </TableItem>
            );
          })}
        </Table>
      )}
    </Thumb>
  );
};

export default ShoppingListTabl;

// "nameIngredient": "Chicken",
// "weight": "100",
// "image": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png",
// "recipeId": "640cd5ac2d9fecf12e8897fc"
