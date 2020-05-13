/* 
TODO decide if it's better to have a simpler state object such as:
[
  {
    beerId: 1,
    quantity: 2
  }
]

but the trade off would mean having to extract individual beers from 
the main beers in the beers reducer to render details in the basket, question is, which is more performant vs memory usage?
(negligible for this app in particular but still worth thinking about)
*/

export default function basket(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_ITEM':
      if (payload.beer) {
        const index = state.findIndex(item => item.id === payload.beer.id);
        if (index >= 0) {
          const newBasket = [...state];
          newBasket[index].quantity += 1;
          return newBasket;
        } else {
          const newBasket = [...state];
          newBasket.push({ ...payload.beer, quantity: 1 });
          return newBasket;
        }
      }
      return state;
    case 'REMOVE_ITEM':
      if (payload.beer) {
        const index = state.findIndex(item => item.id === payload.beer.id);
        if (index >= 0) {
          const newBasket = [...state];
          const newQuantity = newBasket[index].quantity - 1;
          if (newQuantity === 0) {
            newBasket.splice(index, 1);
          } else {
            newBasket[index].quantity = Math.max(0, newBasket[index].quantity - 1);
          }
          return newBasket;
        }
      }
      return state;
    case 'REMOVE_ALL':
      return [];
    case 'REMOVE_ALL_OF_TYPE':
      if (payload.beer) {
        const index = state.findIndex(item => item.id === payload.beer.id);
        if (index >= 0) {
          const newBasket = [...state];
          newBasket.splice(index, 1);
          return newBasket;
        }
      }
      return state;
    default:
      return state
  }
}