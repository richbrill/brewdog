export const addItem = beer => ({ type: 'ADD_ITEM', payload: { beer } });
export const removeItem = beer => ({ type: 'REMOVE_ITEM', payload: { beer } });
export const removeAll = () => ({ type: 'REMOVE_ALL' });
export const removeAllOfType = beer => ({ type: 'REMOVE_ALL_OF_TYPE', payload: { beer } });
