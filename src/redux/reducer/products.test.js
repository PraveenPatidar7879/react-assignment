import productsReducer from './products';

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      products: [],
    };

    const state = productsReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle ADD_PRODUCT action', () => {
    const initialState = {
      products: [],
    };

    const action = {
      type: 'ADD_PRODUCT',
      payload: { name: 'New Product' },
    };

    const state = productsReducer(initialState, action);

    // Replace 'New Product' with the expected product name
    expect(state.products).toEqual([{ name: 'New Product' }]);
  });

  it('should handle unknown action type', () => {
    const initialState = {
      products: [{ name: 'Existing Product' }],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'Some data',
    };

    const state = productsReducer(initialState, action);

    // Verify that state remains unchanged for unknown actions
    expect(state).toEqual(initialState);
  });
});
