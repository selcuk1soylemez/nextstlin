import React from 'react';

export default function ContactPage() {
  return (
    <>
      <div className="header-spacer"></div>

      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="heading">
                          <h4 className="heading-title">Make an Enquiry</h4> 
                      </div>
                  </div>
              </div>  

              <form className="contact-form" method="post" action="">
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <label>Select query area</label>
                          <select><option> </option><option value="1">Satış Destek</option><option value="2">Finans</option><option value="3">İnsan Kaynakları</option></select>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <label>Select your query type</label>
                          <select><option> </option><option value="1">Yes</option><option value="2">No</option><option value="3">Don't Know</option></select>
                      </div>
                  </div>

                  <label>Are you an existing Linde account holder?*</label>
                  <div className="radio-group mb30">
                      <label className="radio-button"><input type="radio" className="radio-button__input" id="choice1-1" name="choice1" /><span className="radio-button__control"></span><span className="radio-button__label">Yes</span></label>
                      <label className="radio-button"><input type="radio" className="radio-button__input" id="choice1-2" name="choice1" /><span className="radio-button__control"></span><span className="radio-button__label">No</span></label>
                      <label className="radio-button"><input type="radio" className="radio-button__input" id="choice1-3" name="choice1" /><span className="radio-button__control"></span><span className="radio-button__label">Don't Know</span></label>
                  </div>

                  <div className="row mb30"><div className="col-lg-12"><div className="heading"><h4 className="heading-title fw-24">Your Enquiry</h4></div></div></div>  
                  <div className="row"><div className="col-lg-12"><label>Please enter your enquiry below *</label><textarea name="message" className="" placeholder=""></textarea></div></div>
                  <div className="row mb30"><div className="col-lg-12"><div className="heading"><h4 className="heading-title fw-24">Your details</h4></div></div></div>  
                  <div className="row"><div className="col-lg-4"><label>Şirket İsmi</label><input className="email" placeholder="" type="text" /></div></div> 
                  <div className="row">
                      <div className="col-lg-4"><label>Ünvan <span className="req">*</span></label><select className="white" required name="country"><option value="AF">Bay</option><option value="AL">Bayan</option></select></div>
                      <div className="col-lg-4"><label>İsim <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4"><label>Soyisim <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4"><label>Telefon Numarası <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4"><label>E-posta (Oturum Açma Kimliği) <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4"><label>E-posta adresini onaylayınız<span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                  </div> 
                  <div className="row"><div className="col-lg-4"><label>Mobil Telefon <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div></div>
                  <div className="row">
                      <div className="col-lg-4"><label>Adres 1 <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4"><label>Adres 2 <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4"><label>Adres 3 <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                  </div>
                  <div className="row"> 
                      <div className="col-lg-4"><label>Şehir <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                      <div className="col-lg-4">
                          <label>Ülke <span className="req">*</span></label>
                          {/* --- DÜZELTİLMİŞ SELECT --- */}
                          <select className="white" required name="country" defaultValue="TR">
                              <option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="TR">Turkey</option>{/* Diğer ülkeler */}
                          </select>
                      </div>
                      <div className="col-lg-4"><label>Posta Kodu <span className="req">*</span></label><input className="email" placeholder="" type="text" /></div>
                  </div> 
                  <div className="row mb30"><div className="col-lg-12"><div className="heading"><h4 className="heading-title fw-24">Opt-in</h4></div></div></div>  
                  <div className="row mb30">
                      <div className="col-lg-4"><label>Please select your business type/industry <span className="req">*</span></label><select className="white" required><option> </option></select></div> 
                      <div className="col-lg-4"><label>How did you find this website <span className="req">*</span></label><select className="white" required><option> </option></select></div> 
                  </div>
                  <div className="row mb30">
                      <div className="col-lg-12">
                          <div className="checkbox mb30 color-primary">
                              <input id="remember2" type="checkbox" name="remember2" value="remember2" />
                              <label htmlFor="remember2">Tick here to sign up to Linde emails...</label>
                          </div>
                      </div>
                  </div>
                  <div className="row mb30"><div className="col-lg-12"><div className="heading"><h4 className="heading-title fw-24">Upload Document</h4></div></div></div> 
                  <div className="row"><div className="col-lg-12"><p>Please click the button below to upload a file</p></div></div>
                  <div className="row mb30">
                      <div className="table">
                          <div className="col-lg-3 table-cell"><a className="btn btn-small btn--rounded mt34" type="button">Upload file</a></div>
                          <div className="col-lg-5 table-cell"><div className="submit-block-text"></div></div>
                      </div>
                  </div>
                  <div className="flex align-end mb30">
                      <a href="#" className="btn btn-small btn--primary ml-auto"><span className="text">Submit</span></a>
                  </div>
              </form>
          </div>
      </div>
    </>
  );
}