import React from 'react';

export default function AccountOrderPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}>

        <h4 className="info-widget-title fw-18 flex">Order Tracking</h4>
        <p>“Documents viewing/ download facility is not available now due to some technical issue & will be resume very soon”</p>

        <form action="#" method="post" className="cart-main cart-main-detail"> 
            <p>Show orders to:</p>
            <input className="text" placeholder="" type="text" defaultValue="3202701, MY02 eChannel Test Acct, 1, Jalan Satu, Petaling Jaya, Selangor, 46100, Malaysia" />
        </form>

        <div className="info-widget" style={{minHeight: 'inherit'}}>
            <h4 className="info-widget-title fw-18 flex">Advanced Filter And Search</h4>
            <div className="row ">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Search for orders: <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="AF">Linde Order No.</option>
                        <option value="AL">Linde Order No.</option> 
                    </select>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block"> </label>
                    <input className="email" placeholder="" type="text" required />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-small btn--primary nextBtn mt34" type="button">Find Order(s)</button>
                </div>
            </div>
            <p className="info-widget-title fw-18 flex weight-500">or filters your orders:</p>
            <div className="row mb30">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Start date</label>
                    <input className="email" placeholder="" type="text" required />
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">End date</label>
                    <input className="email" placeholder="" type="text" required />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Order Status <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="">View All Orders</option>
                        <option value="">View All Orders</option> 
                    </select>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <label className="mb10 display-block">Order category <span className="req">*</span></label>
                    <select className="white" required name="country">
                        <option value="">All</option>
                        <option value=""></option> 
                    </select>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-small btn--primary nextBtn mt34" type="button">Update List</button>
                </div>
            </div>
        </div>

        <form action="#" method="post" className="cart-main">  
            <table className="shop_table cart">
                <thead className="row_item-wrap-title-main">
                    <tr>
                        <th>Order date</th>
                        <th>Linde Ref.</th>
                        <th>Your PO/Ref</th> 
                        <th>Order Type</th>
                        <th>Amount (Exc. GST)</th>
                        <th>Order Status</th>
                        <th>Related Documents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row_item bg-row-color fw-14"> 
                        <td><div className="cart-product__item"><p className="fw-14">01/12/23</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">0130021287</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">TEST USER 01/DEC/2023</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">Web order</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">£2,050.00</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">In process</p></div></td> 
                        <td className="product-remove"><a href="#" className="" title="">Show documents</a></td>
                    </tr> 
                </tbody>
            </table>  
        </form>
     
        <form action="#" method="post" className="cart-main cart-main-detail"> 
            <table className="shop_table cart">
                <thead className="row_item-wrap-title-main">
                    <tr>
                        <th className="product-quantity">Material Code</th>
                        <th className="product-quantity">Description</th>
                        <th className="product-quantity">Order Qty</th>
                        <th className="product-quantity">Delivered Qty </th>
                        <th className="product-subtotal">Delivery Status</th>
                        <th className="product-subtotal">Value</th>
                        <th className="product-subtotal">Ref/PO number</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr className="row_item bg-row-color">
                        <td className="product-thumbnail"><div className="cart-product__item"><p className="fw-14">14374</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">GASMAN OXYGEN SINGLE GAS DETECTOR C/W CHARGER</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">1 per EA</p></div></td>
                        <td className="product-quantity"><p className="fw-14">1</p></td>
                        <td className="product-subtotal"><p className="fw-14">Scheduled</p></td>
                        <td className="product-subtotal"><p className="fw-14">£2,050.00</p></td>
                        <td className="product-subtotal"><p className="fw-14">Test user 01/Dec/2023</p></td>
                    </tr>
                </tbody>
            </table>
            <div className="flex align-end">
                <a href="#" className="btn btn-small btn--rounded" tabIndex={0}>
                    <span className="text">Query for this order</span>
                </a>
                <a href="#" className="btn btn-small btn--rounded" tabIndex={0}>
                    <span className="text">Schedule Order</span>
                </a> 
                <a href="#" className="btn btn-small btn--rounded">
                    <span className="text">Save as Order Template</span>
                </a>
                <a href="#" className="btn btn-small btn--primary ml-auto">
                    <span className="text">Reorder</span>
                </a>
            </div>
        </form>

        <form action="#" method="post" className="cart-main">  
            <table className="shop_table cart">
                <tbody>
                    <tr className="row_item fw-14"> 
                        <td><div className="cart-product__item"><p className="fw-14">01/12/23</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">0130021287</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">TEST USER 01/DEC/2023</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">Web order</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">£2,050.00</p></div></td> 
                        <td><div className="cart-product-content"><p className="fw-14">In process</p></div></td> 
                        <td className="product-remove"><a href="#" className="" title="">Show documents</a></td>
                    </tr> 
                </tbody>
            </table>  
        </form>
    </div>
  );
}