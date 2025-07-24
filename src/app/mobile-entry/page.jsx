'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MobileEntry() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
      <div style={{ background: '#FFA500', width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 120, height: 120, background: '#fff', borderRadius: '50%' }} /> {/* Placeholder for image */}
      </div>
      <div style={{ marginTop: -60, background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', width: 340 }}>
        <input
          type="tel"
          placeholder="Enter your 10 digit mobile number"
          value={mobile}
          onChange={e => setMobile(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
          style={{ width: '100%', padding: 16, fontSize: 16, borderRadius: 8, border: '1px solid #ccc', marginBottom: 24 }}
        />
        <button
          style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }}
          onClick={() => router.push('/otp-verification')}
          disabled={mobile.length !== 10}
        >
          Get Started
        </button>
      </div>
    </div>
  );
} 