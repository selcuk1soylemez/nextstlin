'use client';

import { useEffect } from 'react';

// TypeScript'e jQuery'nin global olarak var olduğunu söylüyoruz
declare const $: any;

const RegisterFormLogic = () => {
  useEffect(() => {
    // Bu kod, sayfa yüklendikten sonra SADECE tarayıcıda çalışır.
    
    var navListItems = $('div.setup-panel div a'),
        navList = $('div.setup-panel div'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navList.click(function (e) {
        e.preventDefault();
        var $target = $($(this).find('a').attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            // navListItems.removeClass('btn-primary').addClass('btn-default'); // Bu satır orijinalde yoktu, belki eklemek gerekir
            $item.find('a').addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],input[type='password'],textarea"), // Form elemanlarını genişlettik
            isValid = true;

        $(".form-group").removeClass("has-error"); // Bu class HTML'de yok, ama mantık olarak kalabilir
        for(var i=0; i<curInputs.length; i++){
            // Orijinal HTML'de `required` attribute'u kullanılmadığı için bu kontrolü şimdilik basitleştiriyoruz.
            // İleride form doğrulaması eklenirse burası güncellenir.
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    // İlk adımı tetikle
    $('div.setup-panel div a.btn-primary').trigger('click');

  }, []); // Boş dizi, bu kodun sadece bir kez çalışmasını sağlar.

  return null; // Bu bileşen ekranda bir şey göstermez.
};

export default RegisterFormLogic;