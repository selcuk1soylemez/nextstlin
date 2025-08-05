import React from 'react';
import Link from 'next/link';
// Sepet sayfasında oluşturduğumuz ve checkout'ta yeniden kullandığımız form mantığı bileşenini TEKRAR KULLANACAĞIZ.
import CartWizardLogic from '../cart/CartWizardLogic';

export default function PaymentPage() {
  return (
    <>
      <div className="header-spacer"></div>
      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="stepwizard">
                          <div className="stepwizard-row setup-panel">
                              <div className="stepwizard-step">
                                  <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
                                  <p>Alışveriş Sepeti</p>
                              </div>
                              <div className="stepwizard-step">
                                  <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled>2</a>
                                  <p>Teslimat Detayları</p>
                              </div>
                              <div className="stepwizard-step btn-active">
                                  <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled>3</a>
                                  <p>Sipariş Onayı</p>
                              </div> 
                          </div>
                      </div>
                  </div>
              </div>
              <form action="#" method="post" className="cart-main">
                  <div className="row">
                      <div className="col-lg-5 col-sm-12">
                          <h4 className="info-widget-title weight-500 fw-18 flex">Delivery Information</h4>
                          <p className="weight-500 fw-14">Delivery Address</p>
                          <p className="fw-14">Account No. (3000102432),GDPR_0300102432 GDPR_STREET, GDPR_CITY, 9974 SL, Nederland</p>
                      </div>
                      <div className="col-lg-6 col-lg-offset-1 col-sm-12">
                          <h4 className="info-widget-title weight-500 fw-18 flex mb20">Payment Summary</h4>
                          <table className="shop_table cart">
                              <tbody>
                                  <tr>
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600"> Product Total (incl. charges & delivery, excl. VAT)</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-600">1600.00 TL</p></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600"> Delivery (excl. VAT)</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-600">0 TL</p></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600"> VAT</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-600">200 TL</p></td>
                                      <td></td>
                                  </tr>
                                  <tr className="fw-24">
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-500">Grand Total</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-500">1800.00 TL</p></td>
                                      <td></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 col-sm-12">
                          <div> 
                              <h4 className="info-widget-title weight-500 fw-24 flex mb30">Payment method</h4>
                              <div className="info-widget auto bg-border-color w-full mb30"> 
                                  <div className="row">
                                      <div className="col-lg-4"><p className="weight-500 fw-14 mb0">Please indicate your purchase order number if necessary</p></div>
                                      <div className="col-lg-4"><p className="fw-14 mb0">2320152 19/Dec/2023</p></div>
                                      <div className="col-lg-4 text-right"><a className="btn btn-small btn--rounded mb0"><span className="text">Modify the reference</span></a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-12 ">
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
                                              {/* --- DÜZELTİLMİŞ KOD --- */}
                                              <div className="cart-product-content">
                                                  <h5 className="cart-product-title fw-14">Linde Fuel Resettable FBA Linde Fuel Resettable FBA "DS-1000" UNF9/16RH (for regulator)</h5>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="product-quantity"><p className="fw-14 weight-600 mb0">3150LND00010</p></td>
                                      <td className="product-subtotal"><h5 className="total amount mb0">587.00 TL</h5></td>
                                      <td className="product-quantity"></td>
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal"><h5 className="total amount mb0">791.00 TL</h5></td>
                                      <td className="product-remove"></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-5 ">
                          <table className="shop_table cart">
                              <thead className="cart-product-wrap-title-main fw-14 weight-500">
                                  <tr>
                                      <th className="product-quantity">Additional charges</th>
                                      <th className="product-quantity"></th>
                                      <th className="product-quantity"></th>
                                      <th className="product-subtotal"></th>
                                  </tr>
                              </thead>
                              <tbody> 
                                  <tr className="cart_item"><td className="product-quantity"><p className="fw-14 weight-600 mb0">ADR surcharge excl. VAT</p></td><td className="product-subtotal"><h5 className="total amount mb0">200.90 TL</h5></td><td className="product-quantity"></td></tr>
                                  <tr className="cart_item"><td className="product-quantity"><p className="fw-14 weight-600 mb0">Minimum delivery fee</p></td><td className="product-subtotal"><h5 className="total amount mb0">0.90 TL</h5></td><td className="product-quantity"></td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div className="info-widget auto bg-border-color w-full mb30"> 
                      <div className="row">
                          <div className="col-lg-6 col-sm-12">
                              <p className="weight-500 fw-18 mb10">Delivery of gas orders</p>
                              <p className="weight-600 fw-18 mb30">All orders placed before 10 am can be scheduled for the next delivery day.</p>
                              <p className="weight-500 fw-18 mb10">Rushorders</p>
                              <p className="weight-600 fw-18 mb30">For rush orders or orders outside your standard delivery days please contact our customer service at +31 (0)88 262 62 62</p>
                              <p className="weight-500 fw-18 mb10">More information regarding your order</p>
                              <p className="weight-600 fw-18 mb30">If you require more information about your order, including but not limited to prices, please contact our customer service team on +31 (0)88 262 62 62</p>
                          </div>
                          <div className="col-lg-6 col-sm-12"> 
                              <table className="shop_table cart weight-500">  
                                  <tbody>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">Gas cylinder(s)</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">1600.00 TL</p></td><td></td></tr>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">+ Transport fee (gas)</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">0 TL</p></td><td></td></tr>
                                      <tr className="mb30"><td className="product-thumbnail"><div className="cart-product-content mb30"><p className="fw-14 weight-600">= Subtotal (gas) excl. VAT</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right mb30"><p className="fw-14 weight-600">200 TL</p></td><td></td></tr>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">Total incl. shipping costs excl. VAT</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">200 TL</p></td><td></td></tr>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">ADR surcharge excl. VAT</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">200 TL</p></td><td></td></tr>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">Minimum delivery fee</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">200 TL</p></td><td></td></tr>
                                      <tr><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">VAT</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-600">200 TL</p></td><td></td></tr>
                                      <tr className="fw-24"><td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-500">Grand total incl. VAT</p></div></td><td className="product-quantity"></td><td className="product-subtotal text-right"><p className="fw-14 weight-500">1800.00 TL</p></td><td></td></tr>
                                  </tbody>
                              </table>
                              <p className="fw-14 weight-600">
                                  £1,341.77 will be charged to your "Payment on account" when you submit this order.Depending on the contractual agreements, administration costs per invoice and / or costs for empty return orders may be charged.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-5 ">
                          <div className="info-widget auto bg-border-color mb30"> 
                              <p className="mb10 display-block weight-500">Offer as PDF</p>
                              <p className="fw-14 weight-600">Download an offer as PDF Document and continue checkout later</p>
                              <div className="fw-14 weight-600">
                                  <a href="#!" className="link-arrow fw-18">Download PDF</a>
                              </div> 
                          </div>
                      </div>
                  </div>
                  <div className="checkbox mb30 color-primary">
                      <input id="remember2" type="checkbox" name="remember2" value="remember2" />
                      <label htmlFor="remember2">I accept the the <span className="line-u">General Terms & Conditions</span> (print)</label>
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-12 align-end text-right">
                          <a className="btn btn-small btn--primary" href="payment.html">
                              <span className="text">Ödemeyi ve Siparişi Onayla</span>
                          </a>
                      </div>
                  </div>
              </form>
          </div>
      </div>
      <CartWizardLogic />
    </>
  );
}