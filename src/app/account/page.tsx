// D:\linde-nextjs-Api-test\src\app\account\page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface UserProfile {
  firstName: string;
  lastName: string;
}

export default function AccountDashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserName = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
        return;
      }
      
      try {
        const endpoint = '/api-proxy/api/Account/profile';
        const response = await fetch(endpoint, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // --- GELİŞMİŞ HATA AYIKLAMA ---
        // Yanıtın durum kodunu ve metnini konsola yazdır
        console.log(`API Response Status: ${response.status} ${response.statusText}`);

        // Yanıt başarılı değilse, gövdeyi metin olarak okumayı dene
        if (!response.ok) {
          const responseBodyAsText = await response.text();
          console.error("API Error Body (as text):", responseBodyAsText);
          
          // Ekranda gösterilecek hata mesajını oluştur
          let errorMessage = `API Hatası: ${response.status} ${response.statusText}.`;
          if (responseBodyAsText) {
            errorMessage += ` Sunucu yanıtı: ${responseBodyAsText}`;
          } else {
            errorMessage += " Sunucudan boş yanıt alındı.";
          }
          setError(errorMessage);
          
          // Token geçersizse, kullanıcıyı dışarı at
          if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('authToken');
            router.push('/login');
          }
          
          setLoading(false);
          return; // .json() çağırmadan fonksiyondan çık
        }

        // Yanıt başarılı ise (200 OK), JSON olarak ayrıştır
        const data = await response.json();
        
        if (data.hasError) {
          setError(data.message);
        } else {
          setUser(data.result);
        }

      } catch (error) {
        console.error('Fetch işlemi sırasında kritik hata:', error);
        setError('Sunucuya bağlanırken bir ağ hatası oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, [router]);
  
  // ... (return JSX kısmı aynı) ...
  return (
    <>
      {loading && <div>Yükleniyor...</div>}
      {error && (
        <div className="alert alert-danger" style={{margin: '20px'}}>
          <h4>Bir Sorun Oluştu</h4>
          <p style={{whiteSpace: 'pre-wrap'}}>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <>
          <div className="row setup-content">
            <div className="info-widget bg-border-color" style={{ minHeight: 'inherit' }}>
              <h4 className="info-widget-title fw-24 flex">
                Welcome, {user ? `${user.firstName} ${user.lastName}` : 'Kullanıcı'}
              </h4>
              <div className="fw-14 weight-600 mb30">
                <p>You can edit your contact information,delivery addresses,payment card and many other profile related settings on your profile page</p>
              </div>
              <div className="fw-14 weight-600">
                <Link href="/account/profile" className="link-arrow fw-18">Go to profile</Link>
              </div>
            </div>
          </div>

          <div className="row setup-content" style={{ marginTop: '30px' }}>
            <div className="info-widget" style={{ minHeight: 'inherit' }}>
              <h4 className="info-widget-title fw-18 flex">Open services for My Account</h4>
              <ul className="account-links">
                {/* ... linkler ... */}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}