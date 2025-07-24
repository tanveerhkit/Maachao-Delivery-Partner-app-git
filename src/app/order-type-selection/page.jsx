'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OrderTypeSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Select the orders you would like to deliver</h3>
        <div style={{ marginBottom: 24 }}>
          <div onClick={() => setSelected('food')} style={{ border: selected === 'food' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', background: '#fff', cursor: 'pointer' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', color: '#FFA500' }}>BEST FOR YOU</div>
              <div style={{ fontSize: 18 }}>Food, Grocery & Parcels</div>
              <div style={{ fontSize: 12, color: '#888' }}>All orders in your selected and nearby areas</div>
            </div>
            <div style={{ width: 48, height: 48, background: '#eee', borderRadius: 12 }} />
          </div>
          <div onClick={() => setSelected('instamart')} style={{ border: selected === 'instamart' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', background: '#fff', cursor: 'pointer' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18 }}>Instamart Grocery</div>
              <div style={{ fontSize: 12, color: '#888' }}>Quick orders within 4kms from same Swiggy store</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>₹4900 Joining bonus</div>
            </div>
            <div style={{ width: 48, height: 48, background: '#eee', borderRadius: 12 }} />
          </div>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/work-timings-selection')} disabled={!selected}>Continue</button>
      </div>
    </div>
  );
} 