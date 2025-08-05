import React from 'react';
import Link from 'next/link';
import RegisterFormLogic from './RegisterFormLogic'; // Script'i çalıştıracak bileşeni import ediyoruz

export default function RegisterNewPage() {
  return (
    <>
      <div className="header-spacer"></div>

      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="heading">
                          <h4 className="heading-title">Register existing customer</h4>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="container">
                      <div className="stepwizard">
                          <div className="stepwizard-row setup-panel">
                              <div className="stepwizard-step">
                                  <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
                                  <p>Contact Details</p>
                              </div>
                              <div className="stepwizard-step">
                                  <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled>2</a>
                                  <p>Complete personal details</p>
                              </div>
                              <div className="stepwizard-step">
                                  <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled>3</a>
                                  <p>Confirmation</p>
                              </div>
                          </div>
                      </div>
                      <form role="form" className="mb30">
                          <div className="row setup-content" id="step-1">
                              <div className="col-lg-8">
                                  <h3 className="weight-500 mb30">Find your account</h3>
                                  <p className="weight-500 mb0 fw-18">
                                      Sign up with either Linde delivery note or invoice.<br />
                                      Registration using different documents will result in full or limited access to My Account.
                                  </p>
                                  <p className="fw-14">
                                      Linde invoice: ordering products, view order & deliveries, view cylinder holdings, view & pay invoice / account balance, add new ship-to address.
                                  </p>
                                  <br />
                                  <div className="radio-group horizontal mb30">
                                      <label className="radio-button">
                                          <input type="radio" className="radio-button__input" id="choice1-1" name="choice1" />
                                          <span className="radio-button__control"></span>
                                          <span className="radio-button__label">Linde Delivery Note</span>
                                      </label>
                                      <label className="radio-button">
                                          <input type="radio" className="radio-button__input" id="choice1-2" name="choice1" />
                                          <span className="radio-button__control"></span>
                                          <span className="radio-button__label">Linde Invoice</span>
                                      </label>
                                  </div>
                                  <div className="row mb30">
                                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                          <label>Linde Account Number <span className="req">*</span></label>
                                          <input className="email" placeholder="" type="text" required />
                                      </div>
                                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                          <label>Linde Delivery Note Number <span className="req">*</span></label>
                                          <input className="email" placeholder="" type="text" required />
                                      </div>
                                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                          <button className="btn btn-small btn--primary nextBtn mt34" type="button">Find My Account</button>
                                      </div>
                                  </div>
                                  <h3 className="weight-500 mb30">Register with Linde Delivery Note</h3>
                                  <p className="weight-600 mb0 fw-18">
                                      Register with Linde Delivery Note to manage your shipment, cylinders holding and many more functions.
                                  </p><br />
                                  <div className="check-list horizontal">
                                      <ul>
                                          <li>View order & deliveries</li>
                                          <li>View cylinder holdings</li>
                                      </ul>
                                  </div>
                                  <div className="info-widget" style={{ minHeight: 'inherit' }}>
                                      <h4 className="info-widget-title fw-24">Find Linde Delivery Note Number</h4>
                                      <div className="row">
                                          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                              <img src="/img/register-info.png" className="img-full" alt="register info" />
                                          </div>
                                          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                              <p>Register an online account for existing customer with a Linde Turkey delivery note number.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4">
                                  <div className="info-widget bg-border-color" style={{ minHeight: 'inherit' }}>
                                      <h4 className="info-widget-title fw-24 flex">
                                          <img src="/img/icon-info.svg" className="info-widget-icon" alt="info icon" /> <span>Help.. I Don't have any of these document</span>
                                      </h4>
                                      <div className="fw-14 weight-600 mb30">
                                          <p>Kindly contact us if you are an existing Linde Turkey customer but do not have any of the documents and/or require more assistance to your account.</p>
                                      </div>
                                      <div className="fw-14 weight-600 mb20">
                                          <p>Linde Customer Care Centre:<br />1800 883 888</p>
                                      </div>
                                      <div className="fw-14 weight-600 mb20">
                                          <p>Linde Turkey Email:<br /><a href="mailto://csc.lg.my@linde.com" className="fc-primary">csc.lg.my@linde.com</a></p>
                                      </div>
                                      <div className="fw-14 weight-600 mb20">
                                          <p>Operating hours:<br />Mon-Sat: 8am - 6pm<br />Sunday & Public Holidays: Close</p>
                                      </div>
                                      <div className="fw-14 weight-600">
                                          <p>If you are not an existing Linde Malaysia customer, you can create a new account with us.</p>
                                      </div>
                                      <div className="fw-14 weight-600">
                                          <Link href="/register-new" className="link-arrow fw-18">Sign up as new customer</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="row setup-content" id="step-2">
                              <div className="p15">
                                  <h4 className="weight-500 fw-32">Complete personal Details</h4>
                                  <p className="mb30 fw-14">Please Choose account type*</p>
                                  <div className="radio-group-switch mb30">
                                      <input type="radio" id="option-one" name="selector" /><label htmlFor="option-one"><img src="/img/icon-order-tracking.svg" alt="" /> Personal</label>
                                      <input type="radio" id="option-two" name="selector" /><label htmlFor="option-two"><img src="/img/icon-list-task.svg" alt="" /> Business</label>
                                  </div>
                                  <h4 className="weight-500 fw-32">Personal Details</h4>
                                  <p className="fw-14 mb30">IC No. / Business Registration No*</p>
                                  <div className="row">
                                    {/* Form alanları */}
                                  </div>
                                  {/* Diğer form alanları... */}
                                  <div className="mb30 flex align-end">
                                      <button className="btn btn-small btn--primary nextBtn mt34" type="button">Complete and Sign up</button>
                                  </div>
                              </div>
                          </div>

                          <div className="row setup-content" id="step-3">
                              <div className="col-xs-12">
                                  <div className="col-md-12">
                                      <h3 className="weight-500">Registration confirmed</h3><br />
                                      <p className="fw-14">Thank you so much! You have successfully registered in the Abelló Linde online store. Your information must be verified before you can access the web store. A confirmation email will be sent to you as soon as access has been granted.</p>
                                      <div className="form-group info-boxer">
                                          <p className="weight-500 fw-14 mb0">Your email address: cbarnett@rawnet.com</p>
                                          <p className="weight-500 fw-14 mb0">Account number: 1570044488</p>
                                      </div>
                                      <p className="fw-14">Now you are part of the community of online customers who enjoy our extensive online gas catalog and excellent service.Before continuing, we recommend that you take a look at the video that we have prepared exclusively to help you make your first purchase a success.</p>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <RegisterFormLogic />
    </>
  );
}