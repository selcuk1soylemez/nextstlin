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
  const router = useRouter();

  useEffect(() => {
    const fetchUserName = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
        return;
      }
      
      try {
        // !!! LÜTFEN 'DOGRU_PROFIL_ENDPOINTI_BURAYA' KISMINI GÜNCELLEYİN !!!
        const response = await fetch('/api-proxy/api/Account/DOGRU_PROFIL_ENDPOINTI_BURAYA', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
          throw new Error(`API isteği başarısız! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.hasError) {
          console.error('API Error:', data.message);
        } else {
          setUser(data.result);
        }
      } catch (error) {
        console.error('Kullanıcı adı çekilirken bir hata oluştu:', error);
        // Hata durumunda kullanıcıyı login'e yönlendirmek daha güvenli olabilir
        localStorage.removeItem('authToken');
        router.push('/login');
      }
    };

    fetchUserName();
  }, [router]);

  return (
    // ... JSX kısmı aynı ...
    <>
      <div className="row setup-content">
        <div className="info-widget bg-border-color" style={{ minHeight: 'inherit' }}>
          <h4 className="info-widget-title fw-24 flex">
            Welcome, {user ? `${user.firstName} ${user.lastName}` : '...'}
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
            <li><Link href="/account/freq"><img src="/img/icon-account-1.svg" alt="" /> <span>Frequently Ordered</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-2.svg" alt="" /> <span>Account Balance and Statements</span></Link></li>
            <li><Link href="/account/orders"><img src="/img/icon-account-3.svg" alt="" /> <span>Order Tracking</span></Link></li>
            <li><Link href="/account/recurring"><img src="/img/icon-account-4.svg" alt="" /> <span>Recurring Order</span></Link></li>
            <li><Link href="/account/reorder"><img src="/img/icon-account-5.svg" alt="" /> <span>Re-Order Gas & Cylinder Holdings</span></Link></li>
            <li><Link href="/account/invoices"><img src="/img/icon-account-6.svg" alt="" /> <span>Invoices</span></Link></li>
            <li><Link href="/account/template"><img src="/img/icon-account-7.svg" alt="" /> <span>Order Template</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-8.svg" alt="" /> <span>Liquid Gas Online</span></Link></li>
            <li><Link href="/account/purchase"><img src="/img/icon-account-purchase.svg" alt="" /> <span>Purchase overview</span></Link></li>
            <li><Link href="/account/cylinders"><img src="/img/icon-account-5.svg" alt="" /> <span>Cylinder stock</span></Link></li>
            <li><Link href="/account/download"><img src="/img/icon-account-download.svg" alt="" /> <span>Download documents</span></Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}```

#### 2. Düzeltilecek Dosya: `account/profile/page.tsx`

```typescript
// D:\linde-nextjs-Api-test\src\app\account\profile\page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ... UserProfile interface tanımı aynı ...

export default function ProfilePage() {
  // ... state tanımları aynı ...

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        // !!! LÜTFEN 'DOGRU_PROFIL_ENDPOINTI_BURAYA' KISMINI GÜNCELLEYİN !!!
        const response = await fetch('/api-proxy/api/Account/DOGRU_PROFIL_ENDPOINTI_BURAYA', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
          throw new Error(`API isteği başarısız! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.hasError) {
          setError(data.message);
        } else {
          setProfile(data.result);
        }
      } catch (err: any) {
        setError(err.message || 'Bir sunucu hatası oluştu.');
        // Hata durumunda kullanıcıyı login'e yönlendirebiliriz
        localStorage.removeItem('authToken');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [router]);
  
  // ... JSX kısmı aynı ...
  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!profile) return <div>Profil bilgileri bulunamadı.</div>;

  return (
      <div className="setup-content">
        <h4 className="info-widget-title fw-24 weight-500 flex">My profile</h4>
        <div className="fw-14 weight-600 mb30">
          <p>Your personal contact and account settings are displayed below.</p>
        </div>
        
        <div className="info-widget" style={{ minHeight: 'inherit' }}>
          <ul className="account-links">
            <li><a className="active" href="/account/profile"><img src="/img/icon-account-contact.svg" alt="" /> <span>Contact information</span></a></li>
            <li><Link href="#!"><img src="/img/icon-account-delivery.svg" alt="" /> <span>Delivery information</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-checkout.svg" alt="" /> <span>Checkout preferences</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-goods.svg" alt="" /> <span>Goods acceptance times</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-payment.svg" alt="" /> <span>Payment card information</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-ebilling.svg" alt="" /> <span>eBilling</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-5.svg" alt="" /> <span>Interests</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-profile.svg" alt="" /> <span>Communication preferences</span></Link></li>
            <li><Link href="#!"><img src="/img/icon-account-contact.svg" alt="" /> <span>Add another customer number</span></Link></li>
          </ul>
        </div>
  
        <div className="info-widget" style={{ minHeight: 'inherit', marginTop: '30px' }}>
          <h4 className="info-widget-title fw-18 flex">Contact information</h4>
          <form className="cart-main">
            <table className="shop_table cart">
              <tbody>
                <tr className="row_item fw-14 weight-500">
                  <td><p>Ad Soyad</p></td>
                  <td><p>Ünvan</p></td>
                  <td><p>Şirket Adı</p></td>
                  <td><p>E-posta Adresi</p></td>
                  <td><p>Telefon</p></td>
                  <td><p>Cep Telefonu</p></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="row_item fw-14">
                  <td><p>{profile.firstName} {profile.lastName}</p></td>
                  <td><p>{profile.jobTitle || '-'}</p></td>
                  <td><p>{profile.companyName || '-'}</p></td>
                  <td><p>{profile.email}</p></td>
                  <td><p>{profile.phoneNumber || '-'}</p></td>
                  <td><p>{profile.phoneNumber || '-'}</p></td>
                </tr>
              </tfoot>
            </table>
          </form>
          <div className="flex align-end" style={{ marginTop: '20px' }}>
            <a href="#" className="btn btn-small btn--primary ml-auto">
              <span className="text">Edit contact information</span>
            </a>
            <a href="#" className="btn btn-small btn--rounded" tabIndex={0}>
              <span className="text">Change password</span>
            </a>
          </div>
        </div>
      </div>
    );
}