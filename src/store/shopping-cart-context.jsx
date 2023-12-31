import { createContext, useReducer } from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products';

// 자동완성 기능을 위해 default값으로 empty dummy data or function을 설정
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// component function이 실행될 때마다 실행되지 않도록 외부에 생성
// 업데이트된 state를 반환
function shoppingCartReducer(state, action) {
  // action이 dispatch를 통해 보내진 후에, react가 reducer func를 호출
  // dispatch로 보내는 action과 이 함수가 두번째 파라미터로 받는 action이 동일.
  // 첫번째 파라미터인 state는 useReducer로 관리되는 state의 보장된 최신 상태 스냅샷
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    // 변형된 state를 반환
    return {
      //...state, // 복잡한 state 객체라면, 새로운 state 객체를 만들기 전에 데이터를 잃지 않도록 [변경하기 전의 상태]를 복사해두는 것이 좋다.
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    // 메모리에 있는 old state를 직접 변형하지 않고, ...state.item으로 복사해서 변형하는 것이 좋다.
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state, // 데이터 손실 방지
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  // dispatch를 사용할 때마다 등록한 reducer func가 작동
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM', //reducer 내에서 구분하기 위한 식별 속성
      payload: id, //action이 실행되기 위해 필요한 데이터
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items, // state items 배열
    addItemToCart: handleAddItemToCart, // context를 통해 함수 자체를 노출
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  // 렌더링이 가능한 component를 반환해야 한다.
  // CartContext.Provider는 특정 값을 묶어주는 역할만 해야 한다.
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
