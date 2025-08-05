import React from 'react';

export default function AccountProfileDeliveryPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}>
        <div className="flex align-end mb30">
            <h4 className="info-widget-title fw-24 flex">
                Delivery information
            </h4>
            <a href="#" className="btn btn-small btn--rounded ml-auto ">
                <span className="text">Add new address</span>
            </a>
            <a href="#" className="btn btn-small btn--rounded" tabIndex={0}>
                <span className="text">Request to assign additional</span>
            </a>
        </div> 
         
        <form action="#" method="post" className="cart-main">  
            <p className="weight-500 fw-18">Your default delivery address</p>
            <p className="fw-14">3202701 ,MY02 eChannel Test Acct1, Jalan SatuPetaling Jaya, Selangor, 46100, Malaysia</p>
        </form>

        <form action="#" method="post" className="cart-main"> 
            <label className="mb10 display-block">Billing address: </label>
            <select className="white" required name="country1">
                <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                <option value="AL"></option> 
            </select>
        </form>

        <form action="#" method="post" className="cart-main"> 
            <label className="mb10 display-block">Delivery address: </label>
            <select className="white" required name="country2">
                <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                <option value="AL"></option> 
            </select>
        </form>

        <div className="flex align-end">
            <a href="#" className="btn btn-small btn--rounded  ml-auto" tabIndex={0}>
                <span className="text">Edit Address</span>
            </a>
            <a href="#" className="btn btn-small btn--primary ">
                <span className="text">Set as Default</span>
            </a>
        </div>
    </div>
  );
}