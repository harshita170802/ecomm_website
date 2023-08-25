// fetchProducts.js
import React, { useState, useEffect } from 'react';

const FetchProducts = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { products })
  );
};

export default FetchProducts;
