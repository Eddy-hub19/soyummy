import icons from 'images/sprite.svg';
import defaultImg from '../../images/default.jpg';

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
} from './shoppingListTabl.styled.js';

const ShoppingListTabl = () => {
  return (
    <>
      <Table>
        <TableItem>
          <TableFirstCol>Products</TableFirstCol>
          <TableSecondThirdCol>Number</TableSecondThirdCol>
          <TableSecondThirdCol>Remove</TableSecondThirdCol>
        </TableItem>

        <TableItem>
          <TableFirstCol>
            <BoxForImage>
              <Image src={defaultImg} alt="product" />
            </BoxForImage>
            <ItemName>Salmon</ItemName>
          </TableFirstCol>
          <TableSecondThirdCol>
            <ItemNumber>5</ItemNumber>
          </TableSecondThirdCol>
          <TableSecondThirdCol>
            <DeleteBtn>
              <svg width="20" height="20">
                <use href={icons + '#icon-cross'}></use>
              </svg>
            </DeleteBtn>
          </TableSecondThirdCol>
        </TableItem>
        <TableItem>
          <TableFirstCol>
            <BoxForImage>
              <Image src={defaultImg} alt="product" />
            </BoxForImage>
            <ItemName>Salmon</ItemName>
          </TableFirstCol>
          <TableSecondThirdCol>
            <ItemNumber>5</ItemNumber>
          </TableSecondThirdCol>
          <TableSecondThirdCol>
            <DeleteBtn>
              <svg width="20" height="20">
                <use href={icons + '#icon-cross'}></use>
              </svg>
            </DeleteBtn>
          </TableSecondThirdCol>
        </TableItem>
      </Table>
    </>
  );
};

export default ShoppingListTabl;
