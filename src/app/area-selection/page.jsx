'use client';
import { useRouter } from 'next/navigation';

export default function AreaSelection() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Select the area you want to work in</h3>
        <div style={{ marginBottom: 24 }}>
          <div style={{ border: '2px solid #FFA500', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fffbe6' }}>
            <div>
              <div style={{ fontWeight: 'bold', color: '#FFA500' }}>BEST ZONE</div>
              <div style={{ fontSize: 18 }}>Kakadeo</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>₹4900 Joining bonus</div>
              <div style={{ fontSize: 12, color: '#888' }}>Upto ₹13,000 weekly earnings</div>
            </div>
            <div style={{ fontSize: 12, color: '#888' }}>1 km</div>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
            <div>
              <div style={{ fontSize: 18 }}>Adarsh Nagar</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>₹4900 Joining bonus</div>
              <div style={{ fontSize: 12, color: '#888' }}>Upto ₹6,000 weekly earnings</div>
            </div>
            <div style={{ fontSize: 12, color: '#888' }}>5 km</div>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
            <div>
              <div style={{ fontSize: 18 }}>Swaroop Nagar</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>₹0 Joining bonus</div>
              <div style={{ fontSize: 12, color: '#888' }}>Upto ₹6,000 weekly earnings</div>
            </div>
            <div style={{ fontSize: 12, color: '#888' }}>5 km</div>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 16, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
            <div>
              <div style={{ fontSize: 18 }}>Chawla Market</div>
              <div style={{ color: '#1ca672', fontWeight: 'bold', fontSize: 14 }}>₹4900 Joining bonus</div>
              <div style={{ fontSize: 12, color: '#888' }}>Upto ₹10,000 weekly earnings</div>
            </div>
            <div style={{ fontSize: 12, color: '#888' }}>7 km</div>
          </div>
        </div>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/vehicle-selection')}>Continue</button>
      </div>
    </div>
  );
} 