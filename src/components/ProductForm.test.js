import { render, fireEvent } from '@testing-library/react';
import ProductForm from './ProductForm';
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders product list with items', () => {
  const initialState = {
    products: {
      products: [
        { name: 'Product1' },
        { name: 'Product2' },
      ],
    },
  };

  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );

  expect(getByText('Product1')).toBeInTheDocument();
  expect(getByText('Product2')).toBeInTheDocument();
});

test('calls addProduct when "Add Product" button is clicked', () => {
  const store = mockStore({ products: { products: [] } });

  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );

  const input = getByPlaceholderText('Enter product name');
  fireEvent.change(input, { target: { value: 'NewProduct' } });

  const addButton = getByText('Add Product');
  fireEvent.click(addButton);

  expect(store.getActions()).toContainEqual({
    type: 'ADD_PRODUCT_ASYNC',
    payload: { name: 'NewProduct' },
  });
});
