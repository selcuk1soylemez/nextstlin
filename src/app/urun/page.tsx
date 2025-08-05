// D:\linde-nextjs-Api-test\src\app\product-detail\page.tsx

import React from 'react';
import Link from 'next/link';
import { getProductDetail } from '@/lib/api';
import ProductDetailClient from './ProductDetailClient'; // Az önce oluşturduğumuz istemci bileşeni

interface ProductDetailPageProps {
  searchParams: {
    id?: string;
  };
}

export default async function ProductDetailPage({ searchParams }: ProductDetailPageProps) {
  const productId = searchParams.id;
  
  if (!productId) {
    return (
      <div className="content-wrapper">
        <div className="container text-center pt120 pb120">
          <h1>Ürün bulunamadı.</h1>
          <p>Lütfen geçerli bir ürün ID'si ile tekrar deneyin.</p>
        </div>
      </div>
    );
  }

  const product = await getProductDetail(productId);

  if (!product) {
    return (
      <div className="content-wrapper">
        <div className="container text-center pt120 pb120">
          <h1>Ürün detayları yüklenemedi.</h1>
          <p>ID: {productId} olan ürün bulunamadı veya bir hata oluştu.</p>
        </div>
      </div>
    );
  }

  // API'den gelen veriyi kullanarak HTML yapısını dolduruyoruz
  return (
    <>
      <div className="content-wrapper">
        <div className="header-spacer"></div>

        {/* Breadcrumb - İsteğe bağlı olarak dinamik hale getirilebilir */}
        <div className="stunning-header left tiny">
          <div className="stunning-header-content">
            <ul className="breadcrumbs">
              <li className="breadcrumbs-item"><Link href="/">AnaSayfa</Link></li>
              <li className="breadcrumbs-item active"><span>{product.name}</span></li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="product-details">
              {/* Resim Galerisi (Swiper) */}
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="product-details-thumb">
                  <div className="swiper-container" data-effect="fade">
                    <div className="swiper-wrapper">
                      {/* API'den birden fazla resim gelirse burada map ile dönebiliriz. Şimdilik tek resim. */}
                      <div className="product-details-img-wrap swiper-slide">
                        <img src={product.picture} alt={product.name} data-swiper-parallax="-10" />
                      </div>
                      {/* Örnek ikinci resim */}
                      <div className="product-details-img-wrap swiper-slide">
                         <img src={product.picture} alt={product.name} data-swiper-parallax="-10" />
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>

              {/* Ürün Bilgileri ve Form */}
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="product-details-info">
                  <h3 className="product-details-info-title">{product.name}</h3>
                  <p className="product-details-info-text">{product.description}</p>
                  
                  {/* Fiyat Bilgileri */}
                  <div className="product-details-info-price-wrapper">
                    {product.priceInfo && (
                       <div className="product-details-info-price">
                          <span className="nor">Fiyat:</span>
                          <strong>{product.priceInfo.price} {product.priceInfo.currency}</strong>
                          <strong>+KDV</strong>
                       </div>
                    )}
                    <a href="#" className="btn btn-small btn--primary">
                      <span className="text">Sepete Ekle</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Açıklama ve Doküman Tabları */}
        <div className="container-fluid">
          <div className="row">
            <div className="product-description">
              <div className="container">
                <ul className="product-description-control" role="tablist">
                  <li role="presentation" className="active">
                    <a href="#product-description" role="tab" data-toggle="tab" className="description control-item">Ürün Ayrıntıları</a>
                  </li>
                  <li role="presentation">
                    <a href="#product-reviews" role="tab" data-toggle="tab" className="reviews control-item">Dökümanlar</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="product-description">
                    {/* API'den gelen özellikler varsa burada listelenir */}
                    {product.properties && (
                       <ul className="list list--secondary mb60">
                       {product.properties.map(prop => (
                         <li key={prop.key}>
                           <label>{prop.key}:</label>
                           <label>{prop.value}</label>
                         </li>
                       ))}
                     </ul>
                    )}
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="product-reviews">
                     {/* API'den gelen dokümanlar varsa burada listelenir */}
                     {product.documents && product.documents.map(doc => (
                       <a key={doc.url} href={doc.url} className="btn btn-small btn-border c-primary" target="_blank" rel="noopener noreferrer">
                         <span className="text">{doc.name}</span>
                         <img src="/img/download.svg" alt="indir" />
                       </a>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benzer Ürünler (Slick) - Bu kısım için ayrı bir API çağrısı gerekebilir */}
        {/* Şimdilik statik HTML olarak bırakıyorum */}
        <div className="container-fluid">
            <div className="row">
                <div className="container">
                    <div className="heading align-center mt60">
                        <h5 className="h3 heading-title">Benzer Ürünler</h5> 
                    </div>
                    <div className="widget products text-center">
                        <div className="products-slick">
                            {/* Bu ürünler dinamik olarak gelmeli */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Script'leri çalıştıracak istemci bileşenini sayfanın sonuna ekliyoruz */}
      <ProductDetailClient product={product} />
    </>
  );
}