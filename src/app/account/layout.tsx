// D:\linde-nextjs-Api-test\src\app\account\layout.tsx

import React from 'react';
import Link from 'next/link';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-wrapper">
      <div className="header-spacer"></div>
      
      {/* Orijinal account.html'deki breadcrumb yapısı */}
      <div className="stunning-header left tiny mb30">
        <div className="stunning-header-content"> 
          <ul className="breadcrumbs">
            <li className="breadcrumbs-item">
              <Link href="/">AnaSayfa</Link>
            </li> 
            <li className="breadcrumbs-item active">
              {/* Bu kısım ileride dinamik hale getirilebilir */}
              <span>My Account</span> 
            </li>
          </ul> 
        </div>
      </div>

      {/* Sayfaların asıl içeriği bu alana gelecek */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}