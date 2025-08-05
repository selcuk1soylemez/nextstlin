import React from 'react';
import Link from 'next/link';
// Sepet sayfasında kullandığımız form mantığı bileşenini TEKRAR KULLANACAĞIZ.
import CartWizardLogic from '../cart/CartWizardLogic';

export default function CheckoutPage() {
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
                              <div className="stepwizard-step btn-active">
                                  <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled>2</a>
                                  <p>Teslimat Detayları</p>
                              </div>
                              <div className="stepwizard-step">
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
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">Product Total (incl. charges & delivery, excl. VAT)</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-600">1600.00 TL</p></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">Delivery (excl. VAT)</p></div></td>            
                                      <td className="product-quantity"></td>
                                      <td className="product-subtotal text-right"><p className="fw-14 weight-600">0 TL</p></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><div className="cart-product-content"><p className="fw-14 weight-600">VAT</p></div></td>            
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
                      <div className="col-lg-9 col-sm-12">
                          <div className="cart-main cart-main-detail mb30"> 
                              <label className="mb10 display-block">Customer account</label>
                              <select className="white" required id="country1" name="country1">
                                  <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                              </select>
                              <label className="mb10 display-block">Select the correct delivery address for this order</label>
                              <select className="white" required id="country2" name="country2">
                                  <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                              </select>
                          </div> 
                          <h4 className="weight-600 fw-18 flex mb10">Can't find your delivery address?</h4>
                          <div className="mb30">
                              <a href="#!" className="link-arrow fw-18">Click here for our location finder</a>
                          </div>
                          <div className="mb30">
                              <a href="#!" className="link-arrow fw-18 mb30">Add new delivery address</a>
                          </div>
                          <div className="row mt30 mb30">
                              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                  <label>Preferred delivery date</label>
                                  <select className="white" required id="country3" name="country3" style={{display: 'none'}}>
                                      <option value="AF">Select</option>
                                  </select>                                
                              </div> 
                          </div>
                          <div> 
                              <h4 className="info-widget-title weight-500 fw-24 flex mb30">Delivery Information</h4>
                              <div className="cart-main cart-main-detail mb30"> 
                                  <div className="row">
                                      <div className="col-lg-5">
                                          <p className="weight-500 fw-18">Your PO number / internal purchase number</p>
                                          <p className="fw-14">Max. 35 characters allowed</p>
                                      </div>
                                      <div className="col-lg-7">
                                          <input title="po_number" className="email input-text mt34" type="text" defaultValue="" />
                                      </div>
                                  </div>
                              </div> 
                              <div className="checkbox mb30 color-primary">
                                  <input id="remember2" type="checkbox" name="remember2" value="remember2" />
                                  <label htmlFor="remember2">View products in your order</label>
                              </div>
                              <div className="row">
                                  <div className="col-lg-6 col-sm-12"> 
                                      <p className="weight-600 fw-18 mb30">Do you have a phone number of a contact person on side or special instructions for our driver?</p>
                                      <p className="weight-600 fw-18">Or would you like to add a product that is not available online to your order?</p>
                                      <p className="weight-600 fw-18">Use the text field below to let us know!</p>
                                      <textarea name="message" placeholder=" "></textarea>
                                  </div>
                                  <div className="col-lg-6 col-sm-12">
                                      <p className="weight-500 fw-18 mb10">Delivery of gas orders</p>
                                      <p className="weight-600 fw-18 mb30">All orders placed before 10 am can be scheduled for the next delivery day.</p>
                                      <p className="weight-500 fw-18 mb10">Rushorders</p>
                                      <p className="weight-600 fw-18 mb30">For rush orders or orders outside your standard delivery days please contact our customer service at +31 (0)88 262 62 62</p>
                                      <p className="weight-500 fw-18 mb10">More information regarding your order</p>
                                      <p className="weight-600 fw-18 mb30">If you require more information about your order, including but not limited to prices, please contact our customer service team on +31 (0)88 262 62 62</p>
                                  </div>
                              </div>
                              <hr className="opacity-5 mb30" />
                              <div className="row">
                                  <div className="col-lg-8 col-sm-12">
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
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-12 align-end text-right">
                            <Link className="btn btn-small btn--primary" href="/payment">
                                <span className="text">Ödemeye Devam Et</span>
                            </Link>
                      </div>
                  </div>
              </form>
          </div>
      </div> 
      <CartWizardLogic />
    </>
  );
}