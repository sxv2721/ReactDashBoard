import React from 'react';
import Products from './components/Products';
import ToDo from './components/ToDo';
import './styles.scss';

const ProductToDoList = () => (
    <section className="productsToDo">
        <Products />
        <ToDo />
    </section>
);

export default ProductToDoList;