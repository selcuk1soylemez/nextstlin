import React from 'react';

export default function AccountProfileCheckoutPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}>
        <div className="flex align-end mb30">
            <h4 className="info-widget-title fw-24 flex">
                Checkout preferences
            </h4>
        </div> 
         
        <form action="#" method="post" className="cart-main">   
            <p className="fw-14">Your current checkout Preferences</p>
            <p className="fw-14"><strong>Order Type :</strong> Delivery</p>
            <p className="fw-14"><strong>Payment Method :</strong> Linde Account</p>
        </form>
        
        <div className="flex align-end"> 
            <a href="#" className="btn btn-small btn--primary ml-auto">
                <span className="text">Set Checkout Preferences</span>
            </a>
        </div>
    </div>
  );
}