import React from 'react';
import Link from 'next/link';

export default function KvkkPage() {
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
                      <span>KVKK</span> 
                  </li>              
              </ul>
          </div>
      </div>

      <div className="container">
          <div className="contact-form medium-padding40">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="heading">
                          <h4 className="heading-title">KVKK</h4>
                          <div className="heading-line"> 
                              <span className="long-line"></span>
                          </div>
                          <p className="heading-text">Kişisel verilerin kullanılması kanunu.</p>
                      </div>
                  </div>
              </div>      

              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                      <p>
                      Linde Gaz A.Ş. gizliliğinizi korumaya ve saygı göstermeye kendini adamıştır. Kişisel bilgileriniz hakkında kim olduğunuzu veya kişisel bilgileriniz hakkında herhangi bir bilgiyi bize bildirmeden bizi internet sitemizden ziyaret edebilirsiniz. Nakliye ve faturalandırma amacıyla, gerektiğinde, kişisel bilgileriniz güvenli bir sunucuya depolanır ve asla üçüncü bir tarafa satılamaz veya rızanız olmadan sizinle iletişime geçmek için kullanılamaz.
                      </p>
                      <p>
                      İnternet aracılığıyla size karşılık vermemiz gereken bir kişisel bilgi vermek ya da bir emri işleme koymayı seçerseniz, bu bilgileri nasıl kullanacağımızı size bildirmek bizim sorumluluğumuzdur. Bize, bu bilgilerin sizinle daha fazla temas kurmak için temel oluşturmasını istemediğinizi söylüyorsanız, talebinize saygı göstereceğiz.
                      </p>
                      <p>
                      Linde Gaz Market tarafından toplanan bilgiler, yetkili Linde Gaz A.Ş. çalışanı tarafından üç ana amaç için dahili olarak kullanılır. Öncelikle hangi alanların, özelliklerin ve ürünlerin en popüler olduğunu görerek sitemizi nasıl iyileştireceğimizi belirlemek için bilgi topluyoruz. İkincisi, siteyi müşterilerimiz için kişiselleştirmek için bilgi topluyoruz. Örneğin, gelecekte, geçmişte sevdiğiniz şeyleri temel alarak beğendiğiniz ürünleri veya özellikleri önerebiliriz. Son olarak, ziyaretçilerimizin ziyaret ettiği alanları takip ediyoruz. Bu verilerin, eğilimlerin ve istatistiklerin 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel veri olarak değerlendirilmesi halinde söz konusu 6698 sayılı Kişisel Verilerin Korunması Kanununa uygun şekilde hareket edeceğiz.
                      </p>
                      <p>
                      Taahhüdümüzü bilgilerinize sunarız.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid">
          <div className="row bg-border-color medium-padding80">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12"></div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}