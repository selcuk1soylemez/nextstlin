import React from 'react';
import Link from 'next/link';
// Adım-adım sihirbazının mantığını yönetecek istemci bileşenini import ediyoruz.
import CartWizardLogic from './CartWizardLogic';

export default function CartPage() {
  return (
    <>
      <div className="header-spacer"></div> 

      <div className="container-fluid">
          <div className="row medium-padding80">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="stepwizard">
                              <div className="stepwizard-row setup-panel">
                                  <div className="stepwizard-step btn-active">
                                      <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
                                      <p>Alışveriş Sepeti</p>
                                  </div>
                                  <div className="stepwizard-step">
                                      <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled>2</a>
                                      <p>Teslimat Detayları</p>
                                  </div>
                                  <div className="stepwizard-step">
                                      <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled>3</a>
                                      <p>Sipariş Onayı</p>
                                  </div> 
                              </div>
                          </div>
      
                          <div className="cart">
                              <h1 className="cart-title weight-500 ">Alışveriş Sepeti</h1>
                          </div>

                          <form action="#" method="post" className="cart-main cart-main-detail"> 
                              <div className="row mb0">
                                  <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                      <label className="mt10 weight-500 display-block">Order category </label> 
                                  </div> 
                                  <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                      <input className="email mb0" placeholder="Material no." type="text" required />
                                  </div>
                                  <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                      <input className="email mb0" placeholder="" type="number" required />
                                  </div> 
                                  <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                      <button className="btn btn-small btn--rounded mb0" type="button">Add to cart</button>
                                  </div>
                              </div>
                          </form>
      
                          <form action="#" method="post" className="cart-main">
                                <table className="shop_table cart">
                                    <thead className="cart-product-wrap-title-main fw-14 weight-500">
                                        <tr>
                                            <th className="product-quantity">Equipment & Safety Products</th>                                 
                                            <th className="product-quantity">Part Number</th>
                                            <th className="product-quantity">Unit Price</th>
                                            <th className="product-subtotal">Quantity</th>
                                            <th className="product-subtotal">Return</th>
                                            <th className="product-subtotal">Total Price</th>
                                            <th className="product-remove"> </th>
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        <tr className="cart_item">
                                            <td className="product-thumbnail">
                                                <div className="cart-product__item">
                                                    <a href="#"><img src="/assets/schulter_schwarz_10_tn.jpg" alt="product" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" /></a>
                                                    <div className="cart-product-content">
                                                        <h5 className="cart-product-title">Linde Fuel Resettable FBA Linde Fuel Resettable FBA "DS-1000" UNF9/16RH (for regulator)</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-quantity"><p className="fw-14 weight-600 mb0">3150LND00010</p></td>
                                            <td className="product-subtotal"><h5 className="total amount mb0">587.00 TL</h5></td>
                                            <td className="product-quantity"><input title="Qty" className="email input-text qty text mb0" type="number" defaultValue="2" /></td>
                                            <td className="product-quantity"><input title="Qty" className="email input-text qty text mb0" type="number" defaultValue="2" /></td>
                                            <td className="product-subtotal"><h5 className="total amount mb0">791.00 TL</h5></td>
                                            <td className="product-remove"><a href="#" className="product-del remove" title="Remove this item"><img src="/img/icon-bin.svg" alt="delete" /></a></td>
                                        </tr>
                                        <tr className="cart_item">
                                            <td className="product-thumbnail">
                                                <div className="cart-product__item">
                                                    <a href="#"><img src="/assets/wasserstoff_10_tn.jpg" alt="product" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" /></a>
                                                    <div className="cart-product-content">
                                                        <h5 className="cart-product-title">Asetilen</h5>
                                                        <p className="cart-author">Tüp (50 Litre)</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-quantity"><p className="fw-14 weight-600 mb0">3150LND00010</p></td>
                                            <td className="product-subtotal"><h5 className="total amount mb0">791.00 TL</h5></td>
                                            <td className="product-quantity"><input title="Qty" className="email input-text qty text mb0" type="number" defaultValue="2" /></td>
                                            <td className="product-quantity"><input title="Qty" className="email input-text qty text mb0" type="number" defaultValue="2" /></td>
                                            <td className="product-subtotal"><h5 className="total amount mb0">791.00 TL</h5></td>
                                            <td className="product-remove"><a href="#" className="product-del remove" title="Remove this item"><img src="/img/icon-bin.svg" alt="delete"/></a></td>
                                        </tr>     
                                    </tbody>
                                </table>
                          </form>

                          <div className="row mb30">
                              <div className="col-lg-6 col-sm-12"> 
                                  <div className="info-widget" style={{minHeight: 'inherit'}}> 
                                      <h4 className="info-widget-title fw-18">Promotion Code</h4> 
                                      <div className="row"> 
                                          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12"> 
                                              <input className="email mb0" placeholder="Enter your code" type="text" required />
                                          </div> 
                                          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                              <button className="btn btn-small btn--rounded" type="button">Submit</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                  <div className="info-widget" style={{minHeight: 'inherit'}}> 
                                      <div className="row">
                                          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                              <h4 className="info-widget-title fw-18 mb0">You pay total</h4> 
                                              <p className="fw-14">(excl. of all taxes)</p>
                                          </div>
                                          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 align-end text-right">
                                              <h5 className="total amount mb0">791.00 TL</h5>
                                          </div> 
                                      </div>  
                                      <div className="row">
                                          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                              <h4 className="info-widget-title fw-14 mb0">Delivery & Surcharges</h4> 
                                              <a className="fw-14 weight-600 line-u color-primary" href="#">More Information</a>
                                          </div>
                                      </div>  
                                  </div>
                              </div>
                          </div> 

                          <div className="cart-total">
                              <Link href="/" className="link-arrow-left">Alışverişe Devam Et</Link>
                              <Link href="/checkout" className="btn btn-small btn--primary btn-hover-shadow">
                                  <span className="text">Siparişi Tamamla</span>
                              </Link>
                          </div>     
                          
                          <form action="#" method="post" className="cart-main">
                              <table className="shop_table cart">
                                  <thead className="cart-product-wrap-title-main fw-14 weight-500">
                                      <tr>
                                          <th colSpan={7} className="product-quantity">Do you need a delivery and connection service?</th>     
                                      </tr>
                                  </thead>
                                  <tbody>  
                                      <tr className="cart_item">
                                          <td className="product-thumbnail">
                                              <div className="cart-product__item">
                                                  <a href="#"><img src="/assets/wasserstoff_10_tn.jpg" alt="product" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" /></a>
                                                  <div className="cart-product-content">
                                                      <h5 className="cart-product-title">Asetilen</h5>
                                                      <p className="cart-author">Tüp (50 Litre)</p>
                                                  </div>
                                              </div>
                                          </td>
                                          <td className="product-quantity"><p className="fw-14 weight-600 mb0">3150LND00010</p></td>
                                          <td className="product-subtotal"></td>
                                          <td className="product-quantity"><input title="Qty" className="email input-text qty text mb0" type="number" defaultValue="2" /></td>
                                          <td className="product-quantity"></td>
                                          <td className="product-subtotal"></td>
                                          <td className="product-remove"></td>                                        
                                      </tr>                                       
                                  </tbody>
                              </table>
                              <div className="flex">
                                  <button className="btn btn-small btn--rounded ml-auto" type="button">Sepete Ekle</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid">
        {/* Önerilen Ürünler Bölümü */}
      </div>
      
      <CartWizardLogic />
    </>
  );
}