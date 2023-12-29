import { createContext } from 'react';

// 자동완성 기능을 위해 default값으로 empty dummy data or function을 설정
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});
