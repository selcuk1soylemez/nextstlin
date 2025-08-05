// D:\linde-nextjs-Api-test\src\app\urunler\page.tsx (FİLTRE BÖLÜMÜ EKLENMİŞ SON HALİ)

import React from 'react';
import Link from 'next/link';
import { getProductsByGroup, IProductGroupResult } from '@/lib/api';

interface UrunlerPageProps {
  searchParams: { t?: string; id?: string; };
}

export default async function UrunlerPage({ searchParams }: UrunlerPageProps) {
  const { t, id } = searchParams;
  let productData: IProductGroupResult | null = null;

  if (t === 'group' && id) {
    productData = await getProductsByGroup(t, id);
  }

  // API'den gelen verileri alıyoruz, eğer veri yoksa boş değerler kullanıyoruz
  const pageTitle = productData?.name || "Ürünler";
  const pageDescription = productData?.description || "Bu gruba ait ürünler listeleniyor.";
  const products = productData?.products || [];

  return (
    <div className="content-wrapper">
      <div className="header-spacer"></div>

      {/* Stunning Header */}
      <div className="stunning-header left tiny">
        <div className="stunning-header-content">
          <ul className="breadcrumbs">
            <li className="breadcrumbs-item">
              <Link href="/">AnaSayfa</Link>
            </li>
            <li className="breadcrumbs-item">
              {/* parentUrl API'de mevcut, gerekirse kullanılabilir */}
              <Link href={productData?.parentUrl || '#'}>{productData?.parent || 'Gazlar'}</Link>
            </li>
            <li className="breadcrumbs-item active">
              <span>{pageTitle}</span>
            </li>
          </ul>
          <h1 className="stunning-header-title">{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
      </div>

      <div className="container">
        <div className="row"> {/* Orijinal HTML'de fazladan bir row vardı, onu kaldırdım. Bu ana row. */}
          
          {/* FİLTRELEME BÖLÜMÜ (Orijinal HTML'den alındı) */}
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 pull-left mobileFilter-firstpos">
            <div className="collapse in" id="filters" aria-expanded="true">
              <div className="margin_30_5">
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <h6>Kategoriler</h6>
                    {/* Bu kısım API'den gelen filtre verileriyle doldurulabilir */}
                    <ul>
                      <li>
                        <label className="container_check">Azot <small>25</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      {/* Diğer statik filtreler... */}
                    </ul>
                  </div>
                  <div className="col-md-12 col-lg-12 margin_30_5">
                    <h6>Şişe Kapasitesi</h6>
                    <ul>
                      <li>
                        <label className="container_check">12x50l <small>25</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/* Diğer filtre grupları buraya eklenebilir */}
                  <div>
                    <br />
                    <a href="#" className="btn btn-small btn-primary btn-full">
                      <span className="text">Filtreleri Temizle</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ÜRÜN LİSTESİ BÖLÜMÜ */}
          <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 pull-right no-gutter">
            <div className="products-grid-control">
              <div className="showing">
                {products.length} ürün
              </div>
              <div className="sort">
                <p>Sıralama</p>
                <select>
                  <option data-display="Top products">Popüler ürünler</option>
                  <option value="1">Fiyata göre: Düşükten yükseğe</option>
                  <option value="2">Fiyata göre: Yüksekten düşüğe</option>
                </select>
              </div>
            </div>

            <div className="row">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="product-item big">
                      <Link href={`/urun?id=${product.itemId}`}>
                        <span className="product-reference">Ref No: {product.itemId}</span>
                        <p className="product-name">{product.name}</p>
                        <p className="product-desc">{product.description || ''}</p>
                        <img src={product.picture} alt={product.name} className="img-round no-border" />
                        <div className="price-value">
                          {product.price.price ? (
                            <>
                              {product.price.price}
                              <span>{product.price.currency} + KDV</span>
                              <div className="bar">{product.hacim} [{product.basinc}]</div>
                            </>
                          ) : (
                            <>
                              &nbsp;
                              <span>&nbsp;</span>
                              <div className="bar">&nbsp;</div>
                            </>
                          )}
                        </div>
                      </Link>
                      <label className="container_check">Karşılaştır
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <a href="#small-dialog-1" className="btn btn-small add popup-with-zoom-anim">
                        <span className="text">Sepete Ekle</span>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-lg-12">
                  <p>Bu gruba ait ürün bulunamadı.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}