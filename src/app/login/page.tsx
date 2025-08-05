// D:\linde-nextjs-Api-test\src\app\login\page.tsx

'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter(); 

  const [customerCode, setCustomerCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // rememberMe için state eklendi
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fillTestCredentials = () => {
    setCustomerCode('12460-240');
    setEmail('test@test.com');
    setPassword('123123');
    setRememberMe(true);
  };

  const handleLogin = async (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      // Endpoint ve body, cURL komutuna göre güncellendi
      const response = await fetch('/api-proxy/api/Account/login', { // <-- URL GÜNCELLENDİ
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'text/plain',
        },
        body: JSON.stringify({ // <-- BODY GÜNCELLENDİ
          email,
          customerCode,
          password,
          rememberMe, 
        }),
      });

      const data = await response.json();

      if (data.hasError || !response.ok) {
        setError(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      } else {
        console.log("Giriş Başarılı! Yanıt:", data);
        // Token'ın `data.result.token` içinde geldiğini varsayıyoruz.
        // Eğer farklıysa, konsol çıktısına göre güncellenmeli.
        localStorage.setItem('authToken', data.result.token); 
        router.push('/account'); 
      }
    } catch (err) {
      console.error("Login Error:", err);
      // SyntaxError hatası almamak için yanıtı kontrol edelim
      if (err instanceof SyntaxError) {
        setError("API'den beklenmedik bir yanıt alındı. Lütfen sunucu loglarını kontrol edin.");
      } else {
        setError('Giriş yapılırken bir sunucu hatası oluştu.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="container">
          <div className="contact-form medium-padding40">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="contacts">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="widget login bg-border-color">
                        <h4 className="login-title">Mevcut Müşteri</h4>
                        
                        <div style={{ padding: '15px', backgroundColor: '#f4f4f4', border: '1px solid #ddd', marginBottom: '20px', borderRadius: '4px' }}>
                          <h5 style={{ marginTop: '0', marginBottom: '10px', fontSize: '14px' }}>Test Bilgileri</h5>
                          <p style={{margin: '0 0 5px'}}>Email: <strong>test@test.com</strong></p>
                          <p style={{margin: '0 0 5px'}}>Müşteri Kodu: <strong>12460-240</strong></p>
                          <p style={{margin: '0 0 10px'}}>Şifre: <strong>123123</strong></p>
                          <button type="button" className="btn btn-small" onClick={fillTestCredentials}>
                            <span className="text">Bilgileri Doldur</span>
                          </button>
                        </div>

                        {error && (
                          <div className="alert alert-danger" style={{fontSize: '13px', padding: '10px'}}>
                            {error}
                          </div>
                        )}

                        <form onSubmit={handleLogin} noValidate>
                          <label>E-posta</label>
                          <input className="email" placeholder="E-posta adresiniz..." type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} />
                          <label>Müşteri Kodu</label>
                          <input className="email" placeholder="Müşteri kodunuz..." type="text" value={customerCode} onChange={(e) => setCustomerCode(e.target.value)} required disabled={loading} />
                          <label>Parola</label>
                          <input className="password" placeholder="Parolanız..." type="password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading} />
                          <div className="remember-wrap">
                            <div className="checkbox">
                              <input id="remember" type="checkbox" name="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                              <label htmlFor="remember">Beni Hatırla</label>
                            </div>
                          </div>
                          <div className="login-btn-wrap">
                            <div className="btn btn-small btn--primary" onClick={handleLogin} style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}>
                              <span className="text">{loading ? 'Giriş Yapılıyor...' : 'Oturum aç'}</span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* ... diğer sütunlar ... */}
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="widget login bg-border-color">
                        <h4 className="login-title">Yeni Müşteri</h4>
                        <ul>
                          <li>Buy from BOC Linde Thailand eShop any time</li>
                          <li>Track order status</li>
                          <li>View cylinder holding inventory</li>
                          <li>Check invoice, account balance and make payment online</li>
                        </ul>
                        <div className="login-btn-wrap">
                          <Link href="/register" className="btn btn-small btn--primary">
                            <span className="text">Kayıt Ol</span>
                          </Link>
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="widget login bg-border-color">
                        <h4 className="login-title">Guest Checkout</h4>
                        <p>Checkout without having to sign in or register</p>
                        <div className="login-btn-wrap">
                          <Link href="/guest-checkout" className="btn btn-small btn--primary">
                            <span className="text">Checkout as guest</span>
                          </Link>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}