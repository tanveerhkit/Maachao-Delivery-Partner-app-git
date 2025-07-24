'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{ background: '#FFA500', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={{ background: '#fff', border: 'none', borderRadius: 16, padding: '4px 16px', fontWeight: 'bold', color: '#FFA500' }}>Online</button>
          <span style={{ color: '#fff', fontWeight: 'bold' }}>Refer Friend & Earn</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span role="img" aria-label="notifications">🔔</span>
          <span role="img" aria-label="help">🛎️</span>
        </div>
      </div>
      {/* Progress Summary */}
      <div style={{ padding: 24, background: '#fff' }}>
        <h2 style={{ margin: 0 }}>Attention User!</h2>
        <div style={{ margin: '16px 0', background: '#fffbe6', borderRadius: 12, padding: 16, fontWeight: 'bold', color: '#FFA500' }}>20% extra per order!<br/>Paltan Bazaar | Food orders</div>
        <div style={{ background: '#f7f7fa', borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <div style={{ fontWeight: 'bold' }}>Next Order Near</div>
          <div style={{ fontSize: 18, margin: '8px 0' }}>Kiranshree Sweets & Snacks</div>
          <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 'bold' }}>Get directions</button>
        </div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <div style={{ flex: 1, background: '#f7f7fa', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold' }}>Today</div>
            <div>₹0 Earnings</div>
            <div>0:00 hrs Login hours</div>
            <div>0 Orders</div>
          </div>
          <div style={{ flex: 1, background: '#f7f7fa', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold' }}>This Week</div>
            <div>₹0 Earnings</div>
            <div>0:00 hrs Login hours</div>
            <div>0 Orders</div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#fff', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', padding: '8px 0' }}>
        <button onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', color: '#FFA500', fontWeight: 'bold' }}>Home</button>
        <button onClick={() => router.push('/earnings')} style={{ background: 'none', border: 'none' }}>Earnings</button>
        <button onClick={() => router.push('/my-shifts')} style={{ background: 'none', border: 'none' }}>My Shifts</button>
        <button onClick={() => router.push('/notifications')} style={{ background: 'none', border: 'none' }}>Notifications</button>
        <button onClick={() => router.push('/more')} style={{ background: 'none', border: 'none' }}>More</button>
      </div>
    </div>
  );
} 