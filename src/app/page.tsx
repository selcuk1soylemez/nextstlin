import React from 'react';
import Link from 'next/link';

// API'den gelen bir kategori objesinin yapısını tanımlıyoruz.
interface CategoryType {
  name: string;
  url: string;
}

// API'den genel yanıtın yapısı
interface ApiResponse {
  hasError: boolean;
  message: string;
  result: CategoryType[];
}

// Ana kategori listesini çeken, çalıştığı kanıtlanmış sunucu fonksiyonu
async function getCategoryList(): Promise<CategoryType[]> {
  try {
    const apiEndpoint = `${process.env.API_BASE_URL}/Product/product-type-list`;
    const res = await fetch(apiEndpoint, {
      cache: 'no-store',
      headers: { 'Accept': 'text/plain' },
    });
    if (!res.ok) {
      console.error("API isteği başarısız oldu.");
      return [];
    }
    const data: ApiResponse = await res.json();
    if (!data.hasError && Array.isArray(data.result)) {
      return data.result;
    }
    return [];
  } catch (error) {
    console.error("getCategoryList fonksiyonunda hata:", error);
    return [];
  }
}

export default async function HomePage() {
  const mainCategories = await getCategoryList();

  // Sizin orijinal, tam ve bozulmamış kodunuzun tamamı burada.
  return (
    <>
      <div className="header-spacer"></div>

      <div className="container-full-width">
        <div className="swiper-container main-slider" data-effect="fade" data-autoplay="4000">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: 'url(/assets/bg_home_schweissen3.jpg)' }}>
              <div className="container table full-height"><div className="row table-cell"><div className="col-lg-8 table-cell"></div><div className="col-lg-4 table-cell"><div className="slider-content"><h3 className="slider-content-title" data-swiper-parallax="-100">Propan ve İtici Gazlar</h3><h6 className="slider-content-text" data-swiper-parallax="-200">farklı uygulamalar için</h6><div className="main-slider-btn-wrap" data-swiper-parallax="-300"><a href="products.html" className="btn btn-small  btn--primary" data-swiper-parallax="-300"><span className="text">Ürünler</span><i className="fa fa-right-arrow"></i></a></div></div></div></div></div>
            </div>
            <div className="swiper-slide thumb-left" style={{ backgroundImage: 'url(/assets/bg_home_schweissen5.jpg)' }}>
              <div className="container table full-height"><div className="row table-cell"><div className="col-lg-8 table-cell"></div><div className="col-lg-4 table-cell"><div className="slider-content"><h3 className="slider-content-title" data-swiper-parallax="-100">Kesme ve kaynak gazları</h3><h6 className="slider-content-text" data-swiper-parallax="-200">farklı uygulamalar için</h6><div className="main-slider-btn-wrap" data-swiper-parallax="-300"><a href="products.html" className="btn btn-small  btn--primary" data-swiper-parallax="-300"><span className="text">Ürünler</span><i className="fa fa-right-arrow"></i></a></div></div></div></div></div>
            </div>
            <div className="swiper-slide main-slider-bg-dark" style={{ backgroundImage: 'url(/assets/bg_home_schweissen3.jpg)' }}>
              <div className="container table full-height"><div className="row table-cell"><div className="col-lg-8 table-cell"></div><div className="col-lg-4 table-cell"><div className="slider-content"><h3 className="slider-content-title" data-swiper-parallax="-100">Propan ve İtici Gazlar</h3><h6 className="slider-content-text" data-swiper-parallax="-200">farklı uygulamalar için</h6><div className="main-slider-btn-wrap" data-swiper-parallax="-300"><a href="products.html" className="btn btn-small  btn--primary" data-swiper-parallax="-300"><span className="text">Ürünler</span><i className="fa fa-right-arrow"></i></a></div></div></div></div></div>
            </div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(/assets/bg_home_schweissen5.jpg)' }}>
              <div className="container table full-height"><div className="row table-cell"><div className="col-lg-8 table-cell"></div><div className="col-lg-4 table-cell"><div className="slider-content"><h3 className="slider-content-title" data-swiper-parallax="-100">Propan ve İtici Gazlar</h3><h6 className="slider-content-text" data-swiper-parallax="-200">farklı uygulamalar için</h6><div className="main-slider-btn-wrap" data-swiper-parallax="-300"><a href="products.html" className="btn btn-small  btn--primary" data-swiper-parallax="-300"><span className="text">Ürünler</span><i className="fa fa-right-arrow"></i></a></div></div></div></div></div>
            </div>
            <div className="swiper-slide main-slider-bg-dark" style={{ backgroundImage: 'url(/assets/bg_home_schweissen3.jpg)' }}>
              <div className="container table full-height"><div className="row table-cell"><div className="col-lg-8 table-cell"></div><div className="col-lg-4 table-cell"><div className="slider-content"><h3 className="slider-content-title" data-swiper-parallax="-100">Propan ve İtici Gazlar</h3><h6 className="slider-content-text" data-swiper-parallax="-200">farklı uygulamalar için</h6><div className="main-slider-btn-wrap" data-swiper-parallax="-300"><a href="products.html" className="btn btn-small  btn--primary" data-swiper-parallax="-300"><span className="text">Ürünler</span><i className="fa fa-right-arrow"></i></a></div></div></div></div></div>
            </div>
          </div>
          <svg className="btn-next btn-next-black"><use xlinkHref="#arrow-right"></use></svg>
          <svg className="btn-prev btn-prev-black"><use xlinkHref="#arrow-left"></use></svg>
          <div className="slider-slides"><a href="#" className="slides-item"><div className="content"><div className="text-wrap"><h4 className="slides-title">Propan ve İtici</h4></div><div className="slides-number">01</div></div></a><a href="#" className="slides-item"><div className="content"><div className="text-wrap"><h4 className="slides-title">Kesme Gazları</h4></div><div className="slides-number">02</div></div></a><a href="#" className="slides-item"><div className="content"><div className="text-wrap"><h4 className="slides-title">Helyum ve Balon Gazı</h4></div><div className="slides-number">03</div></div></a><a href="#" className="slides-item"><div className="content"><div className="text-wrap"><h4 className="slides-title">İlaç Gazları</h4></div><div className="slides-number">04</div></div></a><a href="#" className="slides-item"><div className="content"><div className="text-wrap"><h4 className="slides-title">Tıbbi Gazlar</h4></div><div className="slides-number">05</div></div></a></div>
        </div>
      </div>

      <div className="container">
          <div className="row medium-padding80">
              <div className="recent-case align-center"><div className="col-lg-12"><div className="row"><div className="case-item-wrap"><div className="col-lg-4 col-md-4 col-sm-6 col-xs-12"><div className="case-item white"><div className="case-item__thumb"><img src="/img/8bd374124d1bfc1364dde7f117f406cf.png" alt="" /></div><div className="case-item-abs"><h6 className="case-item__title">Gas Equipment</h6><span>Buy Now <img src="/img/arrow-right-circle-whıte.svg" alt="" /></span></div><div className="case-item-abs2"><p>Argoshield, Specshield and many more</p></div><a href="#"></a></div></div><div className="col-lg-4  col-md-4 col-sm-6 col-xs-12"><div className="case-item"><div className="case-item__thumb"><img src="/img/345f33121ee80c71392f6a3c00b4c92c.png" alt="" /></div><div className="case-item-abs"><h6 className="case-item__title">Welding Gas Mixtures</h6><span>Buy Now <img src="/img/arrow-right-circle.svg" alt="" /></span></div><div className="case-item-abs2"><p>Argoshield, Specshield and many more</p></div><a href="#"></a></div></div><div className="col-lg-4  col-md-4 col-sm-6 col-xs-12"><div className="case-item case-item-half"><div className="case-item-box"><h6 className="case-item__title">Linde eShop Quick Pay</h6></div><div className="case-item__thumb mouseover poster-3d lightbox shadow animation-disabled" data-offset="5"><img src="/img/promo3.jpg" alt="our case" /></div><a href="#"></a></div><div className="case-item case-item-half"><div className="case-item__thumb mouseover poster-3d lightbox shadow animation-disabled" data-offset="5"><img src="/img/promo4.jpg" alt="our case" /></div><div className="case-item-box"><h6 className="case-item__title">Linde eShop Mobile Apps</h6></div><a href="#"></a></div></div></div></div></div></div>
          </div>
      </div>

      <div className="pushtop-50">
        <div className="container">
          <div className="widget products text-center drag-this-up pushtop-180"> 
            <h3>Popüler ürünler</h3>
            <div className="products-slick"><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_leuchtendesgruen_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/wasserstoff_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog" className="btn btn-small add popup-with-zoom-anim"><span className="text">Temsilciye Danış</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_schwarz_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_leuchtendesgruen_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_leuchtendesgruen_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/wasserstoff_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog" className="btn btn-small add popup-with-zoom-anim"><span className="text">Temsilciye Danış</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_schwarz_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div><div className="product-item"><a href="product-detail.html"><img src="/assets/schulter_leuchtendesgruen_10_tn.jpg" alt="" className="img-round" /><p className="product-name">HiQ BASELINE C 106/1, Brass-N2, Ar, He</p><div className="price-value">489,00<span>TL + KDV</span><div className="bar">10l [200 bar]</div></div></a><a href="#small-dialog-1" className="btn btn-small  add popup-with-zoom-anim"><span className="text">Sepete Ekle</span></a></div></div>
          </div>
        </div>
      </div>
      
      <div className="pushtop-50 widget"><div className="container"><div className="row"><div className="our-video js-equal-child"><div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding"><img src="/img/9dc0b08f83c3146a14e1451f23e7ddcf.png" alt="" className="img-round" /></div><div className="col-lg-4 col-md-3  col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="heading"><h4 className="h1 heading-title">Manage MyAccount</h4><p className="heading-text">Access account invoices and make payments online anytime</p></div></div></div><div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="button"><a href="#!" className="heading-title">Retrieve Invoices</a></div></div></div></div></div></div></div>

      <div className="pushtop-50 widget"><div className="container"><div className="row"><div className="our-video js-equal-child"><div className="col-lg-4 col-md-3  col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="heading"><h4 className="h1 heading-title">Where is my order</h4><p className="heading-text">Made an order recently? Track your order status here.</p></div></div></div><div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="button"><a href="#!" className="heading-title">Track My Order</a></div></div></div><div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding"><img src="/img/c62d976d8056ea2e30d8d9bade39da80.png" alt="" className="img-round" /></div></div></div></div></div>
      
      <div className="pushtop-50 o-hidden"><div className="row"><div className="container"><div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="heading"><h4 className="h1 heading-title">Quick Links</h4></div></div></div><div className="row"><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Help & Support</h5><p className="text">Frequently asked questions and answers</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Store Finder</h5><p className="text">Operating from over 50 locations across the UK</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Healthcare</h5><p className="text">Medical gases & services for the healthcare sector</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Cylinder Weights & Sizes</h5><p className="text">Quick reference downloads for colours, weights, & dimensions</p></div></div></div></div><div className="row"><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Find your Welding Gas</h5><p className="text">Frequently asked questions and answers</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Safety Data Sheets</h5><p className="text">Operating from over 50 locations across the UK</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Live Chat</h5><p className="text">Medical gases & services for the healthcare sector</p></div></div></div><div className="col-lg-3 col-md-3 col-sm-12 col-sx-12"><div className="info-box--standard"><div className="info-box-content"><h5 className="info-box-title">Buy Online</h5><p className="text">Quick reference downloads for colours, weights, & dimensions</p></div></div></div></div></div></div></div>

      {/* =================================================================== */}
      {/* "ÖNERİLEN KATEGORİLER" BÖLÜMÜ (DEĞİŞİKLİK SADECE BURADA)           */}
      {/* =================================================================== */}
      <div className="categories-bg">
          <div className="widget categories pushtop-180 drag-this-up">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="heading">
                              <h4 className="h1 heading-title">Önerilen Kategoriler</h4> 
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {/* KONTROL: Eğer API'den veri geldiyse, kategorileri listele */}
                      {mainCategories.length > 0 ? (
                        mainCategories.map((category, index) => (
                          <div key={index} className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <Link href={category.url}>
                                    <img src={`/img/cat/cat${index + 1}.png`} alt={category.name} />
                                  </Link>
                                  <h6>{category.name}</h6>
                              </div> 
                          </div>
                        ))
                      ) : (
                        // Eğer API'den veri gelmediyse, orijinal statik içeriği göster.
                        <>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat1.png" alt="" /></a>
                                  <h6>Hardgoods and gas accessories</h6>
                              </div> 
                          </div>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat2.png" alt="" /></a>
                                  <h6>Welding, cutting and inerting</h6>
                              </div> 
                          </div>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat3.png" alt="" /></a>
                                  <h6>Order dry ice</h6>
                              </div> 
                          </div>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat4.png" alt="" /></a>
                                  <h6>Food preservation</h6>
                              </div> 
                          </div>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat5.png" alt="" /></a>
                                  <h6>Cryogenic hardware</h6>
                              </div> 
                          </div>
                          <div className="col-lg-4 col-md-4 text-center"> 
                              <div className="category-box">
                                  <a href="products.html"><img src="/img/cat/cat6.png" alt="" /></a>
                                  <h6>Refrigerant gases</h6>
                              </div> 
                          </div>
                        </>
                      )}
                  </div>
              </div>
          </div>
      </div>
      {/* ==================== Dinamik Bölüm Sonu ========================= */}

      <div className="links-boxes">
          <div className="container pt100 pb100">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="heading">
                          <h4 className="h1 heading-title">Customer portal</h4> 
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="link-box--standard" data-mh="link-boxes" ><div className="link-box-content center"><img src="/img/icon-list-check.png" alt="image" /><h5 className="link-box-title">Handige links</h5></div><ul><li><a href="#">Register</a></li><li><a href="#">Order Gas</a></li><li><a href="#">Data sheets</a></li><li><a href="#">FAQs</a></li><li><a href="#">Contact</a></li></ul></div></div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="link-box--standard" data-mh="link-boxes" ><div className="link-box-content center"><img src="/img/icon-user.png" alt="image" /><h5 className="link-box-title">My account</h5></div><ul><li><a href="#">Orders & deliveries</a></li><li><a href="#">Cylinder stock</a></li><li><a href="#">Invoices</a></li><li><a href="#">Purchase overview</a></li><li><a href="#">Template orders</a></li></ul></div></div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="link-box--standard" data-mh="link-boxes" ><div className="link-box-content center"><img src="/img/icon-manage.png" alt="image" /><h5 className="link-box-title">Re-order</h5></div><ul><li><a href="#">Recent ordered products</a></li><li><a href="#">Previous placed order</a></li><li><a href="#">Cylinder balance</a></li><li><a href="#">Quick order</a></li><li><a href="#">Standard orders</a></li></ul></div></div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="link-box--standard" data-mh="link-boxes" ><div className="link-box-content center"><img src="/img/icon-credit-card.png" alt="image" /><h5 className="link-box-title">My profile</h5></div><ul><li><a href="#">Contact details</a></li><li><a href="#">Delivery details</a></li><li><a href="#">Credit card</a></li><li><a href="#">e-billing</a></li><li><a href="#">Add customer number</a></li></ul></div></div>
              </div>
          </div>
      </div>

      <div className="container info-boxes pt100 pb100">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="info-box--standard" data-mh="info-boxes" ><div className="info-box-image"><img src="/img/icon-clipboard-tick.png" alt="image" /></div><div className="info-box-content center"><h5 className="info-box-title">Gas Plans</h5><p className="text">Only use 1 or 2 cylinders a year? Get a deal with a gas plan today.</p></div></div></div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="info-box--standard" data-mh="info-boxes" ><div className="info-box-image"><img src="/img/icon-order-tracking.png" alt="image" /></div><div className="info-box-content center"><h5 className="info-box-title">Product Selector</h5><p className="text">Not sure what you need? Try our product selector tool.</p></div></div></div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="info-box--standard" data-mh="info-boxes" ><div className="info-box-image"><img src="/img/icon-user.png" alt="image" /></div><div className="info-box-content center"><h5 className="info-box-title">My Account</h5><p className="text">Conveniently manage your Linde account online at any time.</p></div></div></div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"><div className="info-box--standard" data-mh="info-boxes" ><div className="info-box-image"><img src="/img/icon-credit-card.png" alt="image" /></div><div className="info-box-content center"><h5 className="info-box-title">Pay Invoice</h5><p className="text">Pay your Linde invoices online. All major cards accepted.</p></div></div></div>
        </div>
      </div>

      <div className="pushtop-50 widget">
              <div className="container">
              <div className="row">
                  <div className="our-video js-equal-child">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding"><img src="/img/def1a5f154582ade1e0598da0357c044.png" alt="" className="img-round" /></div>
                      <div className="col-lg-4 col-md-3  col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="heading"><h4 className="h1 heading-title">Open a Linde Account</h4><p className="heading-text">Buy gas & equipment using a Credit Card or with Linde Credit Terms.</p></div></div></div>
                      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="button"><a href="#!" className="heading-title">Get Started</a></div></div></div>
                  </div>
              </div>
          </div>
      </div>

      <div className="pushtop-50 widget">
        <div className="container">
          <div className="row">
            <div className="our-video js-equal-child">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding"><img src="/img/6e8c33f11d057fc60a8cc3e25783ccf8.png" alt="" className="img-round" /></div>
              <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="heading"><h4 className="h1 heading-title">TradeMate™ rewards</h4><p className="heading-text">Rewarding loyal customers with special trade pricing and other exclusive benefits</p></div></div></div>
              <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 no-padding"><div className="content theme-module centered-on-mobile p30" style={{minHeight: '577px'}}><div className="button"><a href="#!" className="heading-title">Learn more</a></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}