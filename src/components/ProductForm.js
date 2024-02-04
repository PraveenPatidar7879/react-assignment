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
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Product List</h1>
        </header>
        <div style={styles.content}>
          <input
            type="text"
            value={newProductName}
            onChange={this.handleInputChange}
            placeholder="Enter product name"
            style={styles.input}
          />
          <button onClick={this.handleAddProduct} style={styles.button}>
            Add Product
          </button>
          <ul style={styles.list}>
            {products.map((product, index) => (
              <li key={index} style={styles.listItem}>
                {product.name}
              </li>
            ))}
          </ul>
        </div>
        <footer style={styles.footer}>
        </footer>
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

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  content: {
    marginTop: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '5px',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};
