'use client';
import { useRouter } from 'next/navigation';

export default function LanguageSelection() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
      <div style={{ background: '#FFA500', width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 120, height: 120, background: '#fff', borderRadius: '50%' }} /> {/* Placeholder for image */}
      </div>
      <div style={{ marginTop: -60, background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', width: 340 }}>
        <h2 style={{ textAlign: 'center' }}>Select a language to continue</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '24px 0' }}>
          <button style={{ padding: 16, border: '2px solid #FFA500', borderRadius: 8, background: '#fff', fontWeight: 'bold' }}>English</button>
          <button style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8, background: '#fff' }}>हिन्दी</button>
          <button style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8, background: '#fff' }}>मराठी</button>
          <button style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8, background: '#fff' }}>ಕನ್ನಡ</button>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/mobile-entry')}>Confirm</button>
      </div>
    </div>
  );
} 