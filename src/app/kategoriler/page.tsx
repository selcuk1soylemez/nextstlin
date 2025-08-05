// D:\linde-nextjs-Api-test\src\app\kategoriler\page.tsx

import React from 'react';
import Link from 'next/link';
import { getCategoriesByParent, ICategory } from '@/lib/api';

interface KategorilerPageProps {
  searchParams: { t?: string; };
}

export default async function KategorilerPage({ searchParams }: KategorilerPageProps) {
  const categoryId = searchParams.t || '';
  let categories: ICategory[] = [];
  if (categoryId) {
    categories = await getCategoriesByParent(categoryId);
  }

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-title text-center">
          <h1 className="title">Kategoriler</h1>
        </div>
        <div className="page-content">
          <div className="categories-wrapper">
            <div className="row">
              {categories.map((category) => (
                <div key={category.url} className="col-md-3 col-sm-6">
                  <div className="category-item">
                    <Link href={category.url}>
                      <div className="category-image">
                        {/* Orijinal <img> etiketini ve class'ını kullanıyoruz */}
                        <img src={category.picture} alt={category.name} className="img-responsive" />
                      </div>
                      <div className="category-title">
                        <h3>{category.name}</h3>
                      </div>
                      <div className="category-description">
                        <p>{category.description}</p>
                      </div>
                      <div className="category-bottom">
                        <span className="btn btn-sm btn-default">
                          Hepsini Göster <i className="icon-right-open-mini" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}