// D:\linde-nextjs-Api-test\src\app\components\PayBlock.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PayBlock() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="pay-block">
      <img src="/img/icon-link.svg" className="sign-in" alt="Hızlı Ödeme" />
      {isLoggedIn ? (
        <Link href="/payment">Hızlı Ödeme</Link>
      ) : (
        <Link href="/login">Hızlı Ödeme</Link>
      )}
    </div>
  );
}