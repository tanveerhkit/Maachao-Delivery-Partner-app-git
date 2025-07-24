'use client';
import { useRouter } from 'next/navigation';

export default function CitySelection() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Which city would you like to work in?</h3>
        <div style={{ width: '100%', height: 180, background: '#eee', borderRadius: 12, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#888' }}>
          [Map Placeholder]
        </div>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontWeight: 'bold', fontSize: 20 }}>Kanpur</div>
          <div style={{ color: '#1ca672', fontWeight: 'bold', margin: '8px 0' }}>Earn upto ₹3,183 per week!</div>
          <div style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>Upto ₹13,00,000 Insurance cover for you and your family</div>
          <button style={{ background: 'none', color: '#FFA500', border: 'none', marginBottom: 16, cursor: 'pointer' }}>Change city?</button>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/area-selection')}>Continue</button>
      </div>
    </div>
  );
} 