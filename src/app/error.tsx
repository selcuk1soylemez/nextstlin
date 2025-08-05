// src/app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container text-center py-5">
      <h2>Bir hata oluştu!</h2>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()}
        className="btn btn-primary mt-3"
      >
        Tekrar Dene
      </button>
    </div>
  );
}