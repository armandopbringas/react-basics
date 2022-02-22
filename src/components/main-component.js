import { useContext } from 'react';
import { StoreContext } from '../store/store-provider';

const MainComponent = () => {
  const [ store, dispatch ] = useContext(StoreContext);
  const { user, products } = store;

  return (
    <>
      <div>
        <h2>Main component</h2>
        <h4>User: {user.name}</h4>
        <button>Login</button>
        <button>Logout</button>
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
        <button>Change</button>
        <button>Delet all</button>
      </div>
    </>
  );
}
 
export default MainComponent;