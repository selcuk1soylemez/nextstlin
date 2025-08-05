import React from 'react';

export default function AccountInvoicesPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}>
        <h4 className="info-widget-title fw-18 flex">Invoices</h4>
        <p>“Documents viewing/ download facility is not available now due to some technical issue & will be resume very soon”</p>

        <form action="#" method="post" className="cart-main cart-main-detail"> 
            <p className="weight-500 fw-18">Payer Account</p>
            <p className="fw-14">3202701, MY02 eChannel Test Acct, 1, Jalan Satu, Petaling Jaya, Selangor, 46100, Malaysia</p>
        </form>

        <div className="info-widget" style={{minHeight: 'inherit'}}>
            <h4 className="info-widget-title fw-18 flex">Advanced Filter And Search</h4>
            <div className="row ">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Bill to account lists: <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF"> </option>
                        <option value="AL"> </option> 
                    </select>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Start date</label>
                    <input className="email" placeholder="" type="text" required />
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">End date</label>
                    <input className="email" placeholder="" type="text" required />
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Payment status <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF"> </option>
                        <option value="AL"> </option> 
                    </select>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Document type <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF"> </option>
                        <option value="AL"> </option> 
                    </select>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-small btn--primary nextBtn mt34" type="button">Apply Filters</button>
                </div>
            </div>
            <p className="info-widget-title fw-18 flex weight-500">Search by reference number</p>
            <div className="row ">
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Type of number<span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF"> </option>
                        <option value="AL"> </option> 
                    </select>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Reference number <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF"> </option>
                        <option value="AL"> </option> 
                    </select>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-small btn--primary nextBtn mt34" type="button">Find invoices</button>
                </div>
            </div>
        </div>

        <form action="#" method="post" className="cart-main">  
            <table className="shop_table cart">
                <thead className="row_item-wrap-title-main">
                    <tr>
                        <th>Select All</th>
                        <th>Issue Date.</th>
                        <th>Invoice number Amount (inc. GST)</th> 
                        <th>Invoice number</th>
                        <th>Amount outstanding (inc. GST)</th>
                        <th>Payment status</th>
                        <th>Payment due</th>
                        <th>Document Type</th>
                        <th>Related Documents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row_item fw-14"> 
                        <td><div className="cart-product__item"></div></td>
                        <td><div className="cart-product__item"><p className="fw-14">01/12/23</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">0130021287</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">£82.69</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">£82.69</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">Outstanding</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">31/01/24</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">Invoice</p></div></td> 
                        <td className="product-remove"><a href="#" className="" title="">Show documents</a></td>
                    </tr> 
                </tbody>
            </table>  
            <div className="flex align-end">
                <a href="#" className="btn btn-small btn--rounded" tabIndex={0}>
                    <span className="text">Query selected Invoices</span>
                </a>
                <a href="#" className="btn btn-small btn--primary ml-auto">
                    <span className="text">Pay selected invoices</span>
                </a>
            </div>
        </form>
    </div>
  );
}