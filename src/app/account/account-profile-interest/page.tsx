import React from 'react';

export default function AccountProfileInterestPage() {
  return (
    <div className="info-widget" style={{minHeight: 'inherit'}}> 
        <div className="flex align-end mb20">
            <h4 className="info-widget-title fw-24 flex">
                Interests
            </h4> 
        </div> 

        <form action="#" method="post" className="cart-main mb20">    
            <p className="fw-14">The following questions are optional, but filling them in will allow us to provide you with a more personal experience Please select all options that apply.</p> 
        </form>

        <div className="row mb30"> 
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <label className="mb10 display-block">Your job title <span className="req">*</span></label>
                <select className="white" required name="job_title">
                    <option value="">Select</option>
                    <option value="">Select</option> 
                </select>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <label className="mb10 display-block">Your industry sector <span className="req">*</span></label>
                <select className="white" required name="industry_sector">
                    <option value="">Select</option>
                    <option value="">Select</option> 
                </select>
            </div> 
        </div>

        <div className="row mb30"> 
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <label className="mb10 display-block">What products are you interested in? </label>
                <div className="mb30">
                    <div className="remember-wrap mb30">
                       <div className="checkbox">
                           <input id="remember2" type="checkbox" name="remember2" value="remember2" />
                           <label htmlFor="remember2">Gas</label>
                       </div>
                       <div className="checkbox">
                           <input id="remember3" type="checkbox" name="remember3" value="remember3" />
                           <label htmlFor="remember3">Equipment</label>
                       </div>
                       <div className="checkbox">
                        <input id="remember4" type="checkbox" name="remember4" value="remember4" />
                        <label htmlFor="remember4">Safety & PPE</label>
                    </div>
                   </div>
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