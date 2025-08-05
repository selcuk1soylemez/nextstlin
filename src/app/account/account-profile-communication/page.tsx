import React from 'react';

export default function AccountProfileCommunicationPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="flex align-end mb20">
            <h4 className="info-widget-title fw-24 flex">
                Communication preferences
            </h4> 
        </div> 

        <form action="#" method="post" className="cart-main mb20">    
            <p className="fw-14">If you would like to receive further information about products and services from Linde Gas Benelux, please select how you would like to be contacted below:</p> 
        </form>

        <div className="row mb30"> 
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div className="mb30">
                    <div className="remember-wrap mb30 horizontal">
                       <div className="checkbox">
                           <input id="remember-email" type="checkbox" name="remember-email" value="email" />
                           <label htmlFor="remember-email">Email </label>
                       </div>
                       <div className="checkbox">
                           <input id="remember-phone" type="checkbox" name="remember-phone" value="phone" />
                           <label htmlFor="remember-phone">Phone</label>
                       </div>
                       <div className="checkbox">
                           <input id="remember-sms" type="checkbox" name="remember-sms" value="sms" />
                           <label htmlFor="remember-sms">SMS</label>
                       </div>
                   </div>
                </div>
            </div>
        </div>
              
        <div className="mb30">
            <div className="remember-wrap mb30">
                <div className="checkbox mb30">
                    <input id="remember-news" type="checkbox" name="remember-news" value="news" />
                    <label htmlFor="remember-news">I would like to receive information about offers, coupons and news from Linde Gas Benelux B.V. and its group companies (Linde Gas, Linde Healthcare) </label>
                </div>
                <div className="checkbox">
                    <input id="remember-promo" type="checkbox" name="remember-promo" value="promo" />
                    <label htmlFor="remember-promo">I would like to receive promotions and special offers</label>
                </div> 
            </div>
        </div>
      
        <div className="flex align-end mb20">
            <a href="#" className="btn btn-small btn--primary ml-auto" tabIndex={0}>
                <span className="text">Save changes</span>
            </a> 
        </div>
    </div>
  );
}