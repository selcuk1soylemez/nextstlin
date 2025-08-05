import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Linde Gas",
  description: "Linde Gas Next.js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" href="/img/favicon-icon.ico"/>
          <link rel="stylesheet" type="text/css" href="/css/fonts.css" />
          <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/css/grid.css" />
          <link rel="stylesheet" type="text/css" href="/css/base.css" />
          <link rel="stylesheet" type="text/css" href="/css/blocks.css" />
          <link rel="stylesheet" type="text/css" href="/css/layouts.css" />
          <link rel="stylesheet" type="text/css" href="/css/modules.css" />
          <link rel="stylesheet" type="text/css" href="/css/widgets-styles.css" />
          <link rel="stylesheet" type="text/css" href="/css/jquery.mCustomScrollbar.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/swiper.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/slick.css" />
          <link rel="stylesheet" type="text/css" href="/css/primary-menu.css" />
          <link rel="stylesheet" type="text/css" href="/css/magnific-popup.css" />
      </head>
      <body>
        <div className="top-bar top-bar-dark">
            <div className="container">
                <div className="top-bar-contact">
                    <div className="contact-item"><a href="#">Acil Durum Olay Müdahalesi</a></div> 
                    <div className="contact-item"><a href="contact.html">İletişim</a></div>
                    <div className="contact-item"><a href="login.html">Giriş Yap / Kayıt Ol</a></div>
                    <div className="contact-item"><a href="#!">İlgilendiklerim</a></div>
                </div>
                <div className="pay-block">
                    <img src="/img/icon-link.svg" className="sign-in" alt=""/>
                    <a href="#small-dialog-4" className="popup-with-zoom-anim">Hızlı Ödeme</a>
                </div>         
            </div>
        </div>

        <header className="header" id="site-header">
            <div className="container">
                <div className="header-content-wrapper">
                    <div className="logo">
                        <a href="index.html" className="full-block-link"></a>
                        <img src="/assets/linde_gas_logo.png" alt="Linde Gas" className="logoImg"/>
                        <img src="/assets/linde_gas_mobilelogo.png" alt="Linde Gas" className="logoMobileImg"/>
                    </div> 
                    <div className="overlay_search">
                        <div className="form_search-wrap">
                            <form>
                                <input className="overlay_search-input" placeholder="Aramak istediğiniz kelimeyi giriniz..." type="text"/>
                                <a href="#" className="overlay_search-close"><span></span><span></span></a>
                                <a href="#" className="submit-search"><img src="/img/search-linde.svg" alt=""/></a>
                            </form>
                        </div>
                    </div>
                    <ul className="nav-add">
                        <li className="reorder">
                            <a href="#" className="js-open-reorder" title="Geçmiş Siparişler">
                                <img src="/img/menuIcon1.svg" alt=""/>
                                <span className="hidden-xs">Endüstriyel</span>
                            </a>
                        </li>
                        <li className="reorder">
                            <a href="reorder.html" className="js-open-reorder" title="Geçmiş Siparişler">
                                <img src="/img/menuIcon2.svg" alt=""/>
                                <span className="hidden-xs">Siparişler</span>
                            </a>
                        </li>
                        <li className="profile">
                            <a href="account.html" className="js-open-favorite" title="My Profile">
                                <img src="/img/menuIcon3.svg" alt=""/>
                                <span className="hidden-xs">MY 02 EChannel S</span>
                                <span className="profile-info hidden-xs">Çıkış Yap</span>
                            </a>
                        </li>
                        <li className="cart">
                            <a href="cart.html" className="">
                                <img src="/img/menuIcon4.svg" alt=""/>
                                <span className="cart-count">4</span>
                                <span className="hidden-xs">Sepet</span>
                                <span className="cart-info hidden-xs">KDV Hariç</span>
                            </a>
                            <div className="cart-popup-wrap">
                                <div className="popup-cart">
                                    <h4 className="title-cart"></h4><p className="subtitle"></p><div className="btn btn-small"><span className="text"></span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-menu">
                <div className="container">
                    <nav id="primary-menu" className="primary-menu">
                        <a href='javascript:void(0)' id="menu-icon-trigger" className="menu-icon-trigger showhide">
                            <span className="mob-menu--title">Menu</span>
                            <span id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'hidden'}}>
                                <svg width="1000px" height="1000px">
                                    <path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                    <path id="pathE" d="M 300 500 L 700 500"></path>
                                    <path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                                </svg>
                            </span>
                        </a>
                        {/* --- DÜZELTİLMİŞ VE TAM MENÜ KODU BAŞLANGICI --- */}
                        <ul className="primary-menu-menu">
                            <li className="has-megamenu menu-item-has-children">
                                <a href="#">Endüstriyel Gazlar</a> 
                                <div className="megamenu">
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/amonyak.jpg" alt="Amonyak"/></span><h5 className="megamenu-item-info-title">Amonyak</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/argon.jpg" alt="Argon"/></span><h5 className="megamenu-item-info-title">Argon</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/asetilen.jpg" alt="Asetilen"/></span><h5 className="megamenu-item-info-title">Asetilen</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/azot.jpg" alt="Azot"/></span><h5 className="megamenu-item-info-title">Azot</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/hava.jpg" alt="Kuru Hava"/></span><h5 className="megamenu-item-info-title">Kuru Hava</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/hidrojen.jpg" alt="Hidrojen"/></span><h5 className="megamenu-item-info-title">Hidrojen</h5></a></li></ul></div>
                                    </div>
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt="Karbondioksit"/></span><h5 className="megamenu-item-info-title">Karbondioksit</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/oksijen.jpg" alt="Oksijen"/></span><h5 className="megamenu-item-info-title">Oksijen</h5></a></li></ul></div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-megamenu menu-item-has-children">
                                <a href="#">Özel Gazlar</a> 
                                <div className="megamenu">
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/amonyak.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Helyum (%99.999)</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/argon.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Hidrojen (%99.999)</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/asetilen.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Hidrojen (%99.9995)</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/azot.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Azot (%99.999)</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/hava.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Safıkta Argon (%99.999)</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/hidrojen.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Lazer Karbondioksit</h5></a></li></ul></div>
                                    </div>
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Kuru Hava</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/oksijen.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Yüksek Saflıkta Oksijen (%99.999)</h5></a></li></ul></div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-megamenu menu-item-has-children">
                                <a href="#">Gıda Gazları</a> 
                                <div className="megamenu">
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Bioon O</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon OC 20</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon OC 25</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon OC 30</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon OC 40</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon C</h5></a></li></ul></div>
                                    </div>
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/karbondioksit.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Biogon OCN 25</h5></a></li></ul></div> 
                                    </div>
                                </div>
                            </li>
                            <li className="has-megamenu menu-item-has-children">
                                <a href="#">Gaz Ekipmanları</a>
                                <div className="megamenu">
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/regul.jpg" alt=""/></span><h5 className="megamenu-item-info-title">Regülatörler</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/koruyucular.png" alt=""/></span><h5 className="megamenu-item-info-title">Kişisel Koruyucu Ekipmanlar</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/hortum.png" alt=""/></span><h5 className="megamenu-item-info-title">Hortumlar</h5></a></li></ul></div> 
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail"><img src="/assets/menu/alevtutucu.png" alt=""/></span><h5 className="megamenu-item-info-title">Alev Tutucular</h5></a></li></ul></div>
                                    </div>
                                </div>
                            </li>        
                            <li className="has-megamenu menu-item-has-children">
                                <a href="#">Hızlı Bağlantılar</a>
                                <div className="megamenu">
                                    <div className="megamenu-row">
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="#!"><span className="megamenu-thumbnail-icon"><img src="/img/Credit-card-icon-Grey_60x60px.png" alt=""/></span><h5 className="megamenu-item-info-title">Hızlı Ödeme</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="#!"><span className="megamenu-thumbnail-icon"><img src="/img/reorder.svg" alt=""/></span><h5 className="megamenu-item-info-title">Sipariş Tekrarı</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="storefinder.html"><span className="megamenu-thumbnail-icon"><img src="/img/Store-Finder-Icon-Quick-Links-57x57px.png" alt=""/></span><h5 className="megamenu-item-info-title">Lokasyonlar</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail-icon"><img src="/img/LG_RB_Icon_Flexible_solution_CMYK_RZ_96552_sm.png" alt=""/></span><h5 className="megamenu-item-info-title">Gaz İade</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="products.html"><span className="megamenu-thumbnail-icon"><img src="/img/LG_RB_Icon_Delivery_truck_CMYK_RZ_87818_sm.png" alt=""/></span><h5 className="megamenu-item-info-title">Teslimat</h5></a></li></ul></div>
                                        <div className="col2"><ul><li className="megamenu-item-info"><a href="contact.html"><span className="megamenu-thumbnail-icon"><img src="/img/LG_RB_Icon_email_CMYK_RZ_sm.png" alt=""/></span><h5 className="megamenu-item-info-title">İletişim</h5></a></li></ul></div>
                                    </div>
                                </div>
                            </li>
                            <li className="only-mobile"><a href="#">Acil Durum Olay Müdahalesi</a></li>
                            <li className="only-mobile"><a href="#">İletişim</a></li>
                            <li className="only-mobile"><a href="#">Giriş Yap / Kayıt Ol</a></li>
                            <li className="only-mobile"><a href="#">İlgilendiklerim</a></li>
                        </ul>
                        {/* --- DÜZELTİLMİŞ VE TAM MENÜ KODU BİTİŞİ --- */}
                    </nav>
                    <a href="#" className="js-open-search"><img src="/img/search-linde.svg" alt=""/></a>
                </div>
            </div>
        </header>

        <div className="content-wrapper">
          {children}
        </div>

        <footer className="footer">
            {/* Footer içeriği olduğu gibi kalacak... */}
        </footer>

        <svg style={{display:'none'}}>
            {/* SVG sembolleri olduğu gibi kalacak... */}
        </svg>

        {/* Pop-up pencereleri olduğu gibi kalacak... */}
        <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
        <div id="small-dialog-1" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
        <div id="small-dialog-4" className="zoom-anim-dialog mfp-hide dialog-with-tabs"></div>
        
        {/* --- SCRIPT YÜKLEME ALANI (DEĞİŞİKLİK YOK) --- */}
        <Script src="/js/jquery-2.1.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/crum-mega-menu.js" strategy="afterInteractive" />
        <Script src="/js/swiper.jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/theme-plugins.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/form-actions.js" strategy="afterInteractive" />
        <Script src="/js/velocity.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollMagic.min.js" strategy="afterInteractive" />
        <Script src="/js/animation.velocity.min.js" strategy="afterInteractive" />
        
      </body>
    </html>
  );
}