const initialStore = {
  user: { id: 1, name: 'Buzz' },
  products: [
    { id: 1, title: 'Racket' },
    { id: 2, title: 'Bag pack' }
  ]
}

const storeReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export { initialStore }
export default storeReducer;