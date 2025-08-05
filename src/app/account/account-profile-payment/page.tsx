import React from 'react';

export default function AccountProfilePaymentPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="flex align-end mb20">
            <h4 className="info-widget-title fw-24 flex">
                Card Information</h4> 
        </div> 
        <form action="#" method="post" className="cart-main mb20">   
            <p className="fw-14 weight-500">Your default card:</p>
            <p className="fw-14">Visa XXXX-XXXX-XXXX-1111</p> 
        </form>
        <div className="flex align-end mb20">
            <a href="#" className="btn btn-small btn--rounded ml-auto" tabIndex={0}>
                <span className="text">Add new card</span>
            </a> 
        </div>
        <form action="#" method="post" className="cart-main"> 
            <label className="mb10 display-block">Your saved cards:: </label>
            <select className="white" required name="country">
                <option value="AF">Visa XXXX-XXXX-XXXX-1111</option>
                <option value="AL"></option> 
            </select>
        </form>
        <div className="flex align-end mb20"> 
            <a href="#" className="btn btn-small btn--primary ml-auto">
                <span className="text">Set as Default</span>
            </a>
        </div>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <form action="#" method="post" className="cart-main"> 
                    <label className="mb10 display-block">Brand </label>
                    <select className="white" required name="country">
                        <option value="AF">Please select</option>
                        <option value="AL"></option> 
                    </select>
                    <label className="mb10 display-block">Enter Card Number</label>
                    <input name="permalink" className="no-margin" defaultValue=" " type="text" />
                    <label className="mb10 display-block">Enter Expiry Date</label>
                    <input name="permalink" className="no-margin" defaultValue=" " type="text" />
                    <label className="mb10 display-block">Enter Card Holder</label>
                    <input name="permalink" className="no-margin" defaultValue=" " type="text" />
                    <label className="mb10 display-block">Enter CVV</label>
                    <input name="permalink" className="no-margin" defaultValue=" " type="text" />
                </form>
                <div className="flex align-end mb20"> 
                    <a href="#" className="btn btn-small btn--primary ml-auto">
                        <span className="text">Payment</span>
                    </a>
                </div>
            </div>
        </div>
        <p className="fw-14">
            This section containing your payment data is provided by PAYRETO Solutions GmbH. All card data entered are controlled and processed via the Secure Payment Gateway of PAYRETO Solutions GmbH
        </p>
    </div>
  );
}