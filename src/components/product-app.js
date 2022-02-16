import React, { useState } from 'react';

const initialProduct = {
    title: 'Titulo',
    description: 'Descripción',
}

const ProductApp = () => {

    const [product, setProduct] = useState(initialProduct);
    const updateProduct = (property, value) => setProduct({...product, [property]: value });

    return (
      <div>
        <button onClick={() => updateProduct('description', 'Nueva desc')}>
          Update
        </button>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
        <code>{JSON.stringify(product, null, 2)}</code>
      </div>
    )
}

export default ProductApp
