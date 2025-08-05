// D:\linde-nextjs-Api-test\src\app\gaz-ekipmanlari\page.tsx

import React from 'react';
import Link from 'next/link';

// API'den gelecek ekipman tipi verisi için tip tanımı
interface EquipmentType {
  name: string;
  picture: string | null;
  url: string;
  description: string | null; // Açıklama alanı da null olabilir
}

// API yanıtının genel yapısı
interface ApiResponse {
  hasError: boolean;
  message: string;
  result: EquipmentType[];
}

// Sunucu tarafında veriyi çekecek fonksiyon
async function fetchEquipmentTypes(): Promise<EquipmentType[]> {
  try {
    const response = await fetch('https://linde-v2-api.wdtajans.com/api/Product/equipment-type-list', {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error(`API Hatası: ${response.status}`);
    const data: ApiResponse = await response.json();
    if (data.hasError) throw new Error(data.message);
    return data.result || [];
  } catch (error) {
    console.error("Ekipman tipleri çekilirken hata oluştu:", error);
    return [];
  }
}

// Sayfa Bileşeni (Server Component)
export default async function GazEkipmanlariPage() {
  const equipmentTypes = await fetchEquipmentTypes();

  return (
    <div className="content-wrapper">
      <div className="header-spacer"></div>
      
      {/* Sayfa Başlığı */}
      <div className="stunning-header tiny">
        <div className="stunning-header-content">
          <ul className="breadcrumbs">
            <li className="breadcrumbs-item"><Link href="/">AnaSayfa</Link></li>
            <li className="breadcrumbs-item active"><span>Gaz Ekipmanları</span></li>
          </ul>
        </div>
      </div>

      <div className="container">
        {/* pt120 ve pb120 class'ları ile üstten ve alttan boşluk veriyoruz */}
        <div className="row pt120 pb120">
          <div className="col-lg-12">
            <div className="heading align-center">
                <h4 className="h1 heading-title">Gaz Ekipmanları</h4>
                <div className="heading-line">
                    <span className="short-line"></span>
                    <span className="long-line"></span>
                </div>
            </div>
          </div>
          
          {/* Ekipman Kartları */}
          {equipmentTypes.length > 0 ? (
            equipmentTypes.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                {/* categories.html'deki "servises-item" yapısını kullanıyoruz */}
                <div className="servises-item">
                  <div className="servises-item__thumb">
                    <Link href={item.url}>
                      {(item.picture && item.picture.trim() !== "") ? (
                        <img src={item.picture} alt={item.name} />
                      ) : (
                        <img src="/img/placeholder.png" alt={item.name} />
                      )}
                    </Link>
                  </div>
                  <div className="servises-item__content">
                    <h4 className="servises-title">{item.name}</h4>
                    {item.description && <p className="servises-text">{item.description}</p>}
                  </div>
                  <Link className="button read-more" href={item.url}>
                    ÜRÜNLERİ GÖR
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-xs-12 text-center">
              <p>Gösterilecek ekipman türü bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}