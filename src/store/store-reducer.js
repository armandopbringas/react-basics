const types = {
  authLogin: 'auth - login',
  authLogout: 'auth - logout',
  productDeleteAll: 'product - delete all',
  productChange: 'product - change'
}

const initialStore = {
  user: { id: 1, name: 'Buzz' },
  products: [
    { id: 1, title: 'Racket' },
    { id: 2, title: 'Bag pack' }
  ]
}

const storeReducer = (state, action) => {
  switch(action.type) {
    case types.authLogout: return { ...state, user: null }
    case types.authLogin: return { ...state, user: action.payload }
    case types.productChange: return { ...state, products: [{ id: 3, title: 'Product #3' }] }
    case types.productDeleteAll: return { ...state, products: [] }
    default: return state;
  }
}

export { initialStore, types }
export default storeReducer;