// D:\linde-nextjs-Api-test\src\app\product-detail\ProductDetailClient.tsx

'use client'; // Bu bileşenin bir İstemci Bileşeni olduğunu belirtir

import { useEffect } from 'react';
import { IProductDetail } from '@/lib/api'; // api.ts'deki tip tanımımız

// Dışarıdan JQuery'i global olarak kullanabilmek için tanımlıyoruz
declare const $: any;

interface ProductDetailClientProps {
  product: IProductDetail;
  // Benzer ürünler için de bir prop ekleyebiliriz, şimdilik product yeterli
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  
  useEffect(() => {
    // Bu kod, bileşen tarayıcıya yüklendikten sonra çalışır.
    
    // 1. Swiper Slider'ı (Ürün Galerisi) Başlat
    if ($ && $.fn.swiper) {
      const swiper = new ($ as any).Swiper('.swiper-container', {
        // Orijinal tasarımdaki ayarlar
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });
    }

    // 2. Slick Slider'ı (Benzer Ürünler) Başlat
    if ($ && $.fn.slick) {
        $('.products-slick').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
        });
    }

    // 3. Diğer jQuery tabanlı event'ler veya eklentiler varsa burada başlatılabilir
    // Örneğin Magnific Popup gibi...
    if ($ && $.fn.magnificPopup) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }


  }, [product]); // product değiştiğinde useEffect'in tekrar çalışmasını sağlar

  // Bu bileşen görsel bir şey döndürmez, sadece script'leri çalıştırır.
  // Sayfanın HTML yapısı ana page.tsx dosyasında olacak.
  // Bu nedenle null döndürüyoruz.
  return null;
}