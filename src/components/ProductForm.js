import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProductName: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newProductName: e.target.value });
  };

  handleAddProduct = () => {
    const { addProduct } = this.props;
    const { newProductName } = this.state;
    addProduct({ name: newProductName.trim() });
    this.setState({ newProductName: '' });

  };

  render() {
    const { products } = this.props;
    const { newProductName } = this.state;

    return (
      <div>
        <h1>Add Product1</h1>
        <input
          type="text"
          value={newProductName}
          onChange={this.handleInputChange}
          placeholder="Enter product name"
        />
        <button onClick={this.handleAddProduct}>Add Product</button>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch({ type: 'ADD_PRODUCT_ASYNC', payload: product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
