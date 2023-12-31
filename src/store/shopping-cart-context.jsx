import { createContext, useState } from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products';

// 자동완성 기능을 위해 default값으로 empty dummy data or function을 설정
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// CartContextProvider라는 component 함수 생성 및 공유
// context 데이터를 관리하고 앱에 제공하는 장바구니 쪽 context와 state 관련된 함수
// App.jsx 내에 있던 모든 state와 context 값의 관리 코드를 가져온다.
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items, // state items 배열
    addItemToCart: handleAddItemToCart, // context를 통해 함수 자체를 노출
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  // 렌더링이 가능한 component를 반환해야 한다.
  // CartContext.Provider는 특정 값을 묶어주는 역할만 해야 한다.
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
