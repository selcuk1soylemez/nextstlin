import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <div className="header-spacer"></div>

      <div className="stunning-header left tiny">
          <div className="stunning-header-content">
              <ul className="breadcrumbs">
                  <li className="breadcrumbs-item">
                      <Link href="/">AnaSayfa</Link>
                  </li>
                  <li className="breadcrumbs-item">
                      <a href="#">Gazlar</a>
                  </li>
                  <li className="breadcrumbs-item active">
                      <span>Argon</span> 
                  </li>
              </ul>
              <h1 className="stunning-header-title">Argon</h1>
              <p>
                  Kesme, kaynak veya atıl gaz olarak kullanılmak üzere çeşitli saflıklarda argon sunuyoruz.
              </p>
          </div>
      </div>

      <div className="container">
          <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 pull-left mobileFilter-firstpos">
                  {/* FİLTRELEME BÖLÜMÜ */}
                  <div className="collapse in" id="filters" aria-expanded="true">
                      <div className="margin_30_5">
                          <div className="row">
                              <div className="col-md-12 col-lg-12">
                                  <h6>Kategoriler</h6>
                                  <ul>
                                      <li><label className="container_check">Azot <small>25</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">Asetilen <small>13</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">Corgon <small>32</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">Etilen <small>12</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">Hidrojen <small>12</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                  </ul>
                              </div>
                              <div className="col-md-12 col-lg-12 margin_30_5">
                                  <h6>Şişe Kapasitesi</h6>
                                  <ul>
                                      <li><label className="container_check">12x50l <small>25</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">20l <small>133</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">10l <small>32</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">501 <small>12</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                  </ul>
                              </div>
                              <div className="col-md-12 col-lg-12 margin_30_5">
                                  <h6>Doldurma Basıncı</h6>
                                  <ul>
                                      <li><label className="container_check">300 bar <small>12</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">200 bar <small>11</small><input type="checkbox"/><span className="checkmark"></span></label></li>                   
                                  </ul>
                              </div>
                              <div className="col-md-12 col-lg-12 margin_30_5">
                                  <h6>Teslim Şekli</h6>
                                  <ul>
                                      <li><label className="container_check">Demetler <small>12</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">Çelik Şişe <small>11</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">GENIE® <small>3</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                      <li><label className="container_check">LIPAC®duo <small>6</small><input type="checkbox"/><span className="checkmark"></span></label></li>
                                  </ul>
                              </div>
                              <div>
                                  <br/>
                                  <a href="#" className="btn btn-small btn-primary btn-full">
                                      <span className="text">Filtreleri Temizle</span>
                                  </a>
                              </div>
                          </div> 
                      </div>
                  </div>
              </div>

              <div className="col-sm-12 col-xs-12 col-md-9  col-lg-9 pull-right no-gutter">
                  <div className="products-grid-control">
                      <div className="showing">22 ürün</div>
                      <div className="sort">
                          <p>Sıralama</p>
                          <select><option data-display="Top products">Top products</option></select>
                       </div>
                  </div>

                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              {/* --- MODERN LINK KULLANIMI --- */}
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">Azot 2.8</p>  
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>  
                                  <img src="/assets/schulter_schwarz_10_tn.jpg" alt="" className="img-round no-border"/> 
                                  <div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog-1" className="btn btn-small add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a>
                          </div>
                      </div>
              
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">Asetilen</p>
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>
                                  <img src="/assets/wasserstoff_10_tn.jpg" alt="" className="img-round no-border"/>
                                  <div className="price-value"> <span> </span><div className="bar"> </div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog" className="btn btn-small add popup-with-zoom-anim"><span className="text">Temsilciye Danış</span></a>
                          </div>
                      </div>
              
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">Azot 2.8</p>   
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>   
                                  <img src="/assets/schulter_acetlyen_kastanienbraun_tn.jpg" alt="" className="img-round no-border"/>
                                  <div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog-1" className="btn btn-small add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a>                 
                          </div>
                      </div>
                  </div>
                  
                  <div className="row pb120">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">CORGON® 18</p>
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>
                                  <img src="/assets/schulter_leuchtendesgruen_10_tn.jpg" alt="" className="img-round no-border"/>
                                  <div className="price-value"> <span> </span><div className="bar"> </div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog" className="btn btn-small add popup-with-zoom-anim"><span className="text">Temsilciye Danış</span></a>
                          </div>
                      </div>
              
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">Asetilen</p>
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>
                                  <img src="/assets/schulter_rot_10_tn.jpg" alt="" className="img-round no-border"/> 
                                  <div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog-1" className="btn btn-small add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a>
                          </div>
                      </div>
              
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="product-item big">
                              <Link href="/product-detail">
                                  <span className="product-reference">Reference No. : IP_0024</span>
                                  <p className="product-name">Azot 2.8</p>
                                  <p className="product-desc">A part of the premium range of shielding gases...</p>
                                  <img src="/assets/schulter_weiss_10_tn.jpg" alt="" className="img-round no-border"/> 
                                  <div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div>
                              </Link>
                              <label className="container_check">Compare<input type="checkbox"/><span className="checkmark"></span></label>
                              <a href="#small-dialog-1" className="btn btn-small add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}