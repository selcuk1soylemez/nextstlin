// D:\linde-nextjs-Api-test\src\app\components\TopBarContact.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopBarContact() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="top-bar-contact">
      <div className="contact-item">
        <a href="#">Acil Durum Olay Müdahalesi</a>
      </div>
      <div className="contact-item">
        <Link href="/contact">İletişim</Link>
      </div>
      <div className="contact-item">
        {isLoggedIn ? (
          <Link href="/account">Hesabım</Link>
        ) : (
          <Link href="/login">Giriş Yap / Kayıt Ol</Link>
        )}
      </div>
      <div className="contact-item">
        <a href="#!">İlgilendiklerim</a>
      </div>
    </div>
  );
}