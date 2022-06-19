import React from 'react';
import {block} from '../data/produts.js'
import ProductList from "./components/ProductList";

export default () => {

  return (
    <div className="block">
      <h2 className="block__title">{block.title}</h2>
      <ProductList initialProducts={block.products}/>
    </div>
  )
}
