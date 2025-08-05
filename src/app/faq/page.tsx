import React from 'react';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <>
      <div className="header-spacer"></div>

      <div className="stunning-header tiny">
          <div className="stunning-header-content">
              <ul className="breadcrumbs">
                  <li className="breadcrumbs-item">
                      <Link href="/">AnaSayfa</Link>
                  </li>
                  <li className="breadcrumbs-item active">
                      <span>SSS</span> 
                  </li>              
              </ul>
          </div>
      </div>

      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="heading">
                          <h4 className="heading-title">Sıkça Sorulan Sorular</h4>
                          <div className="heading-line"> 
                              <span className="long-line"></span>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row medium-padding80 bg-border-color contacts-shadow">
                  <div className="container">
                      <div className="row">
                          <ul className="accordion" id="accordion">
                              <li className="accordion-panel">
                                  <div className="panel-heading">
                                      <a href="#toggleSample" className="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
                                          <span className="icon">
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                          </span>
                                          <span className="ovh">Online gazları nasıl satın alabilirim?</span>
                                      </a>
                                  </div>
                                  <div id="toggleSample" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                      <div className="panel-info">
                                          Endüstriyel gazlarınızı çevrimiçi olarak satın alabilmek için önce web mağazamızda bir kullanıcı hesabına ihtiyacınız var. Zaten bir Linde Gas müşterisi veya yeni bir müşteri olup olmadığınıza bakılmaksızın , çevrimiçi mağazaya bir kez kaydolmanız gerekir . Lütfen "Linde Gas web mağazasına nasıl kayıt olabilirim?" daha önce tarif edilmiştir.
                                      </div>
                                  </div>
                              </li>
                              <li className="accordion-panel">
                                  <div className="panel-heading">
                                      <a href="#toggleSecond" className="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
                                          <span className="icon">
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                          </span>
                                          <span className="ovh">Linde Gas web mağazasına nasıl kayıt olabilirim?</span>
                                      </a>
                                  </div>
                                  <div id="toggleSecond" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                      <div className="panel-info">
                                          Önce sağ üst köşedeki "Kayıt Ol" u tıklayın . Daha sonra yeni bir müşteri veya mevcut bir müşteri olarak kaydolma seçeneğine sahipsiniz.
                                      </div>
                                  </div>
                              </li>
                              <li className="accordion-panel">
                                  <div className="panel-heading">
                                      <a href="#toggleThird" className="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
                                          <span className="icon">
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                          </span>
                                          <span className="ovh">Kayıt olurken şifrem neden kabul edilmiyor?</span>
                                      </a>
                                  </div>
                                  <div id="toggleThird" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                      <div className="panel-info">
                                         Önce sağ üst köşedeki "Kayıt Ol" u tıklayın . Daha sonra yeni bir müşteri veya mevcut bir müşteri olarak kaydolma seçeneğine sahipsiniz.
                                      </div>
                                  </div>
                              </li>
                              <li className="accordion-panel">
                                  <div className="panel-heading">
                                      <a href="#toggleFourth" className="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
                                          <span className="icon">
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                          </span>
                                          <span className="ovh">Ürünler için neden diğer fiyatlar gösteriliyor?</span>
                                      </a>
                                  </div>
                                  <div id="toggleFourth" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                      <div className="panel-info">
                                          Önce sağ üst köşedeki "Kayıt Ol" u tıklayın . Daha sonra yeni bir müşteri veya mevcut bir müşteri olarak kaydolma seçeneğine sahipsiniz.
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="heading pt80">
                  <h5 className="heading-title">İletişim Formu</h5>
                  <div className="heading-line"> 
                      <span className="long-line"></span>
                  </div> 
              </div>

              <form className="contact-form" method="post" action="">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label>İsim Soyisim</label>
                          <input name="permalink" className="input-standard-grey" defaultValue="" type="text" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label>E-posta Adresi</label>
                          <input name="name" className="input-standard-grey" placeholder="" type="text" required />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <label>Mesajınız</label>
                          <textarea name="message" className="input-standard-grey" placeholder=""></textarea>
                      </div>
                  </div>
                  <div className="notification success closeable">
                      <p>Mesajınız bize iletilmiştir. İlgili birim inceleyerek size geridönüş yapacaktır. <br/> <strong>Linde Gaz</strong> </p>
                      <a className="close" href="#"></a>
                  </div>
                  <div className="row">
                      <div className="submit-block table">
                          <div className="col-lg-3 table-cell">
                              <button className="btn btn-small btn--primary">
                                  <span className="text">Gönder</span>
                              </button>
                          </div>
                          <div className="col-lg-5 table-cell">
                              <div className="submit-block-text"></div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    </>
  );
}