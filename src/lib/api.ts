// lib/api.ts içindeki getProductDetail fonksiyonu

export async function getProductDetail(productId: string): Promise<IProductDetail | null> {
  const apiUrl = `https://linde-v2-api.wdtajans.com/api/Product/product-detail?id=${productId}&languageCode=tr`;
  console.log('API ÇAĞRISI YAPILIYOR:', apiUrl); // Hata ayıklama için bu satır önemli

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.status}`);
    }
    const data: ApiResponse<IProductDetail> = await response.json();
    if (data.hasError || !data.result) {
      console.error("API'den hata:", data.message);
      return null;
    }
    return data.result;
  } catch (error) {
    console.error("Fonksiyon hatası:", error);
    return null;
  }
}