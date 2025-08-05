import React from 'react';

export default function AccountProfileEbillingPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="flex align-end mb20">
            <h4 className="info-widget-title fw-24 flex">eBilling</h4> 
        </div> 
        <form action="#" method="post" className="cart-main mb20">    
            <p className="fw-14">This page displays billing address which are already signed up for eBilling and also provides option to sign up for ebilling. To sign up for eBilling or edit the existing email address please click 'Edit eBilling' link.</p> 
        </form>
        <div className="flex align-end mb20">
            <a href="#" className="btn btn-small btn--rounded ml-auto" tabIndex={0}>
                <span className="text">Edit eBilling</span>
            </a> 
        </div>
        <form action="#" method="post" className="cart-main">  
            <table className="shop_table cart">
                <thead className="row_item-wrap-title-main">
                    <tr>
                        <th>Address</th>
                        <th>Existing email</th>
                        <th>New email address</th> 
                        <th>Confirm new Email</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr className="row_item fw-14"> 
                        <td><div className="cart-product__item"><p className="fw-14">GDPR_0003401385 GDPR_0003401385, GDPR_CITY, 08, 1131 HW, Nederland</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">ana.sortino@linde.com</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14"></p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14"></p></div></td>
                    </tr> 
                </tbody>
            </table>  
        </form>
        <div className="flex align-end mb20">
            <a href="#" className="btn btn-small btn--primary ml-auto" tabIndex={0}>
                <span className="text">Save & request changes</span>
            </a> 
        </div>
    </div>
  );
}