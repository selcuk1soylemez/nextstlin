import React from 'react';

export default function AccountProfileGoodsPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="flex align-end mb30">
            <h4 className="info-widget-title fw-24 flex">
                Goods acceptance times
            </h4> 
        </div> 
         
        <form action="#" method="post" className="cart-main cart-main-detail"> 
            <label className="mb10 display-block">Select customer account: </label>
            <select className="white" required name="country1">
                <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                <option value="AL"></option> 
            </select>
        </form>

        <form action="#" method="post" className="cart-main cart-main-detail"> 
            <label className="mb10 display-block">Select delivery address: </label>
            <select className="white" required name="country2">
                <option value="AF">(200060609), GDPR_0003401385 GDPR_0003401385, GDPR_STREET 1, GDPR_CITY, 08, 1131 HW, Nederland</option>
                <option value="AL"></option> 
            </select>
        </form> 

        <form action="#" method="post" className="cart-main-detail mb30"> 
            <label className="mb10 display-block weight-500">Welcome, MY02 eChannel S4 UAT. </label>
            <table className="cart">  
                <tbody>
                    <tr className="row_item fw-14"> 
                        <td><p className="fw-14 weight-500">Monday</p></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                    </tr> 
                    <tr className="row_item fw-14"> 
                        <td><p className="fw-14 weight-500">Tuesday</p></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                    </tr> 
                    <tr className="row_item fw-14"> 
                        <td><p className="fw-14 weight-500">Wednesday</p></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                    </tr> 
                    <tr className="row_item fw-14"> 
                        <td><p className="fw-14 weight-500">Thursday</p></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                        <td><div className="cart-product-content"><p className="fw-14">07:00 - 16:00</p></div></td>
                    </tr> 
                </tbody>
            </table>
            <div className="flex align-end mb30"> 
                <a href="#" className="btn btn-small btn--primary ml-auto">
                    <span className="text">Edit goods acceptance times</span>
                </a>
            </div>
        </form>

        <div className="flex align-end mb30"> 
            <a href="#" className="btn btn-small btn--primary ml-auto">
                <span className="text">Add goods recipient</span>
            </a>
        </div>
    </div>
  );
}