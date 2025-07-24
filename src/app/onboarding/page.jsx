'use client';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Become a delivery partner in 3 easy steps!</h3>
        <div style={{ marginBottom: 24 }}>
          <div style={{ border: '2px solid #FFA500', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>STEP 1</div>
              <div style={{ fontSize: 18 }}>Work Settings</div>
            </div>
            <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 'bold' }} onClick={() => router.push('/city-selection')}>Start now</button>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 16, opacity: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>STEP 2</div>
              <div style={{ fontSize: 18 }}>Profile</div>
              <div style={{ fontSize: 12, color: '#888' }}>Upload Aadhar, PAN & Bank details</div>
            </div>
            <div style={{ width: 40, height: 40, background: '#eee', borderRadius: '50%' }} />
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 16, opacity: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>STEP 3</div>
              <div style={{ fontSize: 18 }}>Order Swiggy delivery kit</div>
            </div>
            <div style={{ width: 40, height: 40, background: '#eee', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </div>
  );
} 