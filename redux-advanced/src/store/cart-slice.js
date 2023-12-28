import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    // 장바구니 추가
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++; // 1개씩 증가
      if (!existingItem) {
        // 기존 아이템이 없는 경우
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quatity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // 기존 아이템이 있는 경우
        existingItem.quatity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    // 장바구니 제거
    removeItemFromCart(state, action) {
      // payload로 id값을 받는다.
      const id = action.payload;

      // 기존 아이템에서 id값이 일치하는 항목을 찾는다.
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--; // 1개씩 감소

      if (existingItem.quatity === 1) {
        // 1개일 경우 전부 제거한다. -> 일치하지 않는 id만 필터링하는 방법으로 삭제처리
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // 1개 이상일 경우 하나만 제거한다.
        existingItem.quatity--;

        // 해당 항목의 총 가격을 업데이트
        //existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
