import React, {useRef, useState} from 'react';

const ProductList = ({initialProducts}) => {

  const [products, setProducts] = useState(initialProducts);
  const [productId, setProductId] = useState(null);

  function handlerSelected(id, isDisabled) {
    if (productId === id) {
      setProductId(null);
    } else if (!isDisabled) {
      setProductId(id);
    }

  }

  function handlerMouseLeave(product, productDescription) {
    if (productId) {
      setProducts(() => {
        const newProducts = products.map((product) => {
          if (product.id === productId) product.selected = !product.selected;
          return product;
        });

        return [
          ...newProducts
        ]
      });
    }

    setProductId(null);

    if (product?.selected) {
      const newProducts = products.map((p) => {
        if (p.id === product.id) {
          productDescription.current.textContent = p.description.default;
        }
        return p;
      })
      setProducts([
        ...newProducts
      ]);
    }
  }

  function handlerMouseOver(product, productDescription) {
    if (product?.selected) {
      const newProducts = products.map(p => {
          if (p.id === product.id) {
            productDescription.current.textContent = p.description.selectedHover;
          }
          return p;
        }
      )
      setProducts([
        ...newProducts
      ]);
    }
  }

  return (
    <>
      <div className="block__products">
        {products.map(product => {
          const cls = ['product']
          const productDescription = useRef(null);
          product.selected ? cls.push('selected') : null;
          product.missing ? cls.push('disabled') : null;

          return (
            <div className="block__product-wrap" key={product.id}>
              <div className={cls.join(' ')}
                   onClick={() => handlerSelected(product.id, product.missing)}
                   onMouseLeave={() => handlerMouseLeave(product, productDescription)}
                   onMouseOver={() => handlerMouseOver(product, productDescription)}
              >
                <div className="product__card-substrate">
                  <div className="product__card">
                    <p className="product__description" ref={productDescription}>
                      {product.description.default}
                    </p>
                    <h3 className="product__title">{product.title}</h3>
                    <h4 className="product__subtitle">{product.subtitle}</h4>
                    <ul className="product__features">
                      {product.features.map((feature, idx) => <li className="product__feature"
                                                                  key={idx}>{feature}</li>)}
                    </ul>
                    <div className="product__wiegth">
                      <div className="product__wiegth-inner">
                        <span className="product__wiegth-number">{product.wiegth.number}</span>
                        <span className="product__wiegth-string">{product.wiegth.string}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__footer">
                  {
                    (!product.selected && !product.missing)
                      ? <><span className="product__footer-text"> {product.footer.default.text} </span> <a
                        href="#" className="product__footer-action"
                        onClick={() => handlerSelected(product.id, product.missing)}>
                        {product.footer.default.action} </a> </>
                      : product.selected ? <span className="product__footer-text"> {product.footer.selected} </span> :
                        <span className="product__footer-text"> {product.footer.disabled} </span>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ProductList;
