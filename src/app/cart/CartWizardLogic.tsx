'use client';

import { useEffect } from 'react';

declare const $: any;

const CartWizardLogic = () => {
  useEffect(() => {
    // Bu kod, sayfa yüklendikten sonra SADECE tarayıcıda çalışır.
    
    var navListItems = $('div.setup-panel div a'),
        navList = $('div.setup-panel div');

    // Bu script sadece tıklama olayını tanımlar.
    // Başlangıçta hangi adımın aktif olacağı zaten HTML/JSX içinde `btn-active` sınıfıyla belirlenmiş durumda.
    navList.click(function (e) {
        e.preventDefault();
        var $item = $(this);

        if (!$item.hasClass('disabled')) {
            // Tıklama olayı şimdilik herhangi bir eylem gerçekleştirmiyor çünkü sayfa değişimi
            // "Siparişi Tamamla" butonu ile Link bileşeni üzerinden yapılacak.
            // Bu mantık, ileride tüm adımlar tek sayfada yönetilirse önem kazanacak.
        }
    });

  }, []); // Boş dizi, bu kodun sadece bir kez çalışmasını sağlar.

  return null; // Bu bileşen ekranda bir şey göstermez.
};

export default CartWizardLogic;