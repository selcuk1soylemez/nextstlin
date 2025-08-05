import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <div className="header-spacer"></div>

      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="container">
                      <div className="row">
                          <div className="contacts">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                  <div className="widget login bg-border-color">
                                      <h4 className="login-title">Existing Customer</h4>
                                      <p>Register here if you have:</p>
                                      <ul>
                                          <li>Existing Linde Malaysia trading account</li>
                                          <li>Linde invoice or delivery note number on hand</li>
                                          <li>No eShop account yet</li>
                                      </ul>
                                      <div className="login-btn-wrap">
                                          <Link href="/register-existing" className="btn btn-small btn--primary">
                                              <span className="text">Register existing customer</span>
                                          </Link>
                                      </div> 
                                  </div>
                              </div>
                              
                              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                  <div className="widget login bg-border-color">
                                      <h4 className="login-title">New to Linde</h4>
                                      <p>Register here if you have:</p>
                                      <ul>
                                          <li>No trading account with Linde Malaysia</li>
                                          <li>No Prior Transactions with Linde Malaysia</li>
                                          <li>Intention to trade with Linde Malaysia</li>
                                      </ul>
                                      <div className="login-btn-wrap">
                                          <Link href="/register-new" className="btn btn-small btn--primary">
                                              <span className="text">Open new account</span>
                                          </Link>
                                      </div> 
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
      </div>
    </>
  );
}