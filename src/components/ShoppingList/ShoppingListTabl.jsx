import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchShoppingList,
  deleteShoppingListItem,
} from '../../redux/shoplist/shoplistOperation';
import {
  getShoppingList,
  getShoppingListRefreshStatus,
} from '../../redux/shoplist/shoplistSelectors';
import { Loader } from 'components/Loader/Loader';
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
  const dispatcher = useDispatch();
  const storageItems = useSelector(getShoppingList);
  const isRefreshing = useSelector(getShoppingListRefreshStatus);

  const [shopItems, setShopItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    dispatcher(fetchShoppingList());
    setShopItems(storageItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatcher]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  useEffect(() => {
    setShopItems(storageItems);
  }, [storageItems]);

  const deleteItem = e => {
    if (e.target.id) {
      dispatcher(deleteShoppingListItem(e.target.id));
    }

    if (e.target.parentNode.id) {
      dispatcher(deleteShoppingListItem(e.target.parentNode.id));
    }

    if (e.target.parentNode.parentNode.id) {
      dispatcher(deleteShoppingListItem(e.target.parentNode.parentNode.id));
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Thumb>
          {shopItems.length > 0 ? (
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
          ) : (
            <EmptyPlaceholder text="Your shopping list is empty." />
          )}
        </Thumb>
      )}
    </>
  );
};

export default ShoppingListTabl;
