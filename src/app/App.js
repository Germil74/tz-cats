import React from 'react';
// import {block}from '../data/produts.js'


export default () => {

  console.log()
  return (
          <div className="block">
            <h2 className="block__title">Ты сегодня покормил кота?</h2>
            <div className="block__products">
              <div className="block__product-wrap">
                <div className="product">
                  <div className="product__card-substrate">
                    <div className="product__card">
                      <p className="product__description">
                        Сказочное заморское яство
                      </p>
                      <h3 className="product__title">Нямушка</h3>
                      <h4 className="product__subtitle">с фуа-гра</h4>
                      <ul className="product__features">
                        <li className="product__feature">10 порций</li>
                        <li className="product__feature">мышь в подарок</li>
                      </ul>
                      <div className="product__wiegth">
                        <div className="product__wiegth-inner">
                          <span className="product__wiegth-number">0,5</span>
                          <span className="product__wiegth-string">кг</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__footer">
                  <span className="product__footer-text"
                  >Чего сидишь? Порадуй котэ,
                  </span>
                    <a href="#" className="product__footer-action">купи. </a>
                  </div>
                </div>
              </div>
              <div className="block__product-wrap">
                <div className="product selected">
                  <div className="product__card-substrate">
                    <div className="product__card">
                      <p className="product__description">
                        Сказочное заморское яство
                      </p>
                      <h3 className="product__title">Нямушка</h3>
                      <h4 className="product__subtitle">с рыбой</h4>
                      <ul className="product__features">
                        <li className="product__feature">40 порций</li>
                        <li className="product__feature">2 мышь в подарок</li>
                      </ul>
                      <div className="product__wiegth">
                        <div className="product__wiegth-inner">
                          <span className="product__wiegth-number">2</span>
                          <span className="product__wiegth-string">кг</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__footer">
                    <span className="product__footer-text"
                    >Головы щучьи с чесноком да свежайшая сёмгушка.</span
                    >
                  </div>
                </div>
              </div>
              <div className="block__product-wrap">
                <div className="product disabled">
                  <div className="product__card-substrate">
                    <div className="product__card">
                      <p className="product__description">
                        Сказочное заморское яство
                      </p>
                      <h3 className="product__title">Нямушка</h3>
                      <h4 className="product__subtitle">с курой</h4>
                      <ul className="product__features">
                        <li className="product__feature">100 порций</li>
                        <li className="product__feature">5 мышей в подарок</li>
                        <li className="product__feature">заказчик доволен</li>
                      </ul>
                      <div className="product__wiegth">
                        <div className="product__wiegth-inner">
                          <span className="product__wiegth-number">5</span>
                          <span className="product__wiegth-string">кг</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__footer">
                    <span className="product__footer-text"
                    >Печалька, с курой закончился.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

  )
}
