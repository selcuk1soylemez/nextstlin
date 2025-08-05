import React from 'react';
import Link from 'next/link';

export default function AccountProfileCustomerPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="row mb30">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="flex align-end mb20">
                    <h4 className="info-widget-title fw-24 flex">
                        Add a customer number to your account
                    </h4> 
                </div> 

                <form action="#" method="post" className="cart-main mb20">    
                    <p className="fw-14 weight-500">You can easily register with an invoice or via the number of a delivery document (less than 6 months old).</p> 
                    <p className="fw-14">Please note: you are now at the Linde Gas Benelux webshop and you need a delivery document/invoice from this entity. If you want to create an account for Linde Gas Healthcare, please click here.</p> 
                </form>

                <div className="row mb30"> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="radio-group horizontal mb30">
                            <label className="radio-button">
                                <input type="radio" className="radio-button__input" id="choice1-1" name="choice1" />
                                <span className="radio-button__control"></span>
                                <span className="radio-button__label">Linde delivery documents</span>
                            </label>
                            <label className="radio-button">
                                <input type="radio" className="radio-button__input" id="choice1-2" name="choice1" />
                                <span className="radio-button__control"></span>
                                <span className="radio-button__label">Linde invoice</span>
                            </label>
                        </div>
                    </div>
                </div>
                    
                <div className="row mb30">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="mb10 display-block">Linde account number</label>
                        <input className="email" placeholder="" type="text" required />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <label className="mb10 display-block">Linde delivery document</label>
                        <input className="email" placeholder="" type="text" required />
                    </div> 
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <button className="btn btn-small btn--primary mt34" type="button">Confirm</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="info-widget bg-border-color" style={{minHeight: 'inherit'}}>
                    <h4 className="info-widget-title fw-24 flex">
                     <span>No documents?</span></h4>
                    <div className="fw-14 weight-600 mb30">
                        <p>In order to add another customer number to your account, you need a reference number from a Linde Gas Benelux document. This enables us to ensure that you are using the correct Linde Gas Benelux account for ordering and managing cylinders.</p>
                    </div>
                    <div className="fw-14 weight-600 mb20">
                        <p>If you do not have a document at hand, we recommend that you contact our customer service via the online contact form</p>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  );
}