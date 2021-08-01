import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../Redux/Actions/productActions';
export const ProductList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  });
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};
