import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product App</h1>
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
