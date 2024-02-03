import { put, takeEvery } from 'redux-saga/effects';

function* addProductSaga(action) {
  yield put({ type: 'ADD_PRODUCT', payload: action.payload });
}

function* watchAddProduct() {
  yield takeEvery('ADD_PRODUCT_ASYNC', addProductSaga);
}

export default watchAddProduct;
