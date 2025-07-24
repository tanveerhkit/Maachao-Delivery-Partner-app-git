'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VehicleSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Select vehicle type</h3>
        <div style={{ marginBottom: 24 }}>
          <div onClick={() => setSelected('petrol')} style={{ border: selected === 'petrol' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', cursor: 'pointer', background: '#fff' }}>
            <div style={{ flex: 1 }}>Petrol motorcycle</div>
            <div style={{ width: 48, height: 32, background: '#eee', borderRadius: 8 }} />
          </div>
          <div onClick={() => setSelected('electric')} style={{ border: selected === 'electric' ? '2px solid #FFA500' : '1px solid #ccc', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', cursor: 'pointer', background: '#fff' }}>
            <div style={{ flex: 1 }}>Electric Vehicle</div>
            <div style={{ width: 48, height: 32, background: '#eee', borderRadius: 8 }} />
          </div>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/order-type-selection')} disabled={!selected}>Continue</button>
      </div>
    </div>
  );
} 