import { useStore, useDispatch } from '../store/store-provider';
import { types } from '../store/store-reducer';

const MainComponent = () => {
  const { user, products } = useStore();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Main component</h2>
        <h4>User: {user?.name}</h4>
        <button onClick={() => dispatch({
          type: types.authLogin,
          payload: { id: 1, name: 'Buzz'}
        })}>
          Login
        </button>
        <button onClick={() => dispatch({ type: types.authLogout })}>
          Logout
        </button>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: types.productChange})}>Change</button>
        <button onClick={() => dispatch({ type: types.productDeleteAll})}>Delet all</button>
      </div>
    </>
  );
}
 
export default MainComponent;