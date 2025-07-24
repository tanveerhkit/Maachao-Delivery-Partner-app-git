'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WorkTimingsSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Select your preferred work timings</h3>
        <div style={{ marginBottom: 24 }}>
          <div onClick={() => setSelected('all')} style={{ border: selected === 'all' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', background: '#fff', cursor: 'pointer' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>Full time | All days</div>
              <div style={{ fontSize: 12, color: '#888' }}>6 days a week</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>Upto ₹6,000 weekly earnings</div>
            </div>
          </div>
          <div onClick={() => setSelected('weekends')} style={{ border: selected === 'weekends' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', background: '#fff', cursor: 'pointer' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>Full time | Weekends only</div>
              <div style={{ fontSize: 12, color: '#888' }}>Fri, Sat & Sun</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>Upto ₹6,000 weekly earnings</div>
            </div>
          </div>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/profile-photo-upload')} disabled={!selected}>Continue</button>
      </div>
    </div>
  );
} 