'use client';
import { useRouter } from 'next/navigation';

export default function Earnings() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Earnings</div>
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, background: '#f7f7fa', borderRadius: 12, padding: 16, textAlign: 'center', cursor: 'pointer' }}>Incentives & Guarantees</div>
          <div style={{ flex: 1, background: '#f7f7fa', borderRadius: 12, padding: 16, textAlign: 'center', cursor: 'pointer' }}>Rate Card</div>
        </div>
        <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 16, fontWeight: 'bold', color: '#FFA500' }}>Total earnings: ₹503</div>
        <div style={{ background: '#f7f7fa', borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <div style={{ fontWeight: 'bold' }}>Yesterday's payout: Fri, 21 Mar</div>
          <div>Payout adjusted with floating cash</div>
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Payout history</div>
        <div style={{ background: '#f7f7fa', borderRadius: 12, padding: 16 }}>
          <div>Fri, 21 Mar: ₹210</div>
          <div>Thu, 20 Mar: ₹27</div>
          <div>Wed, 19 Mar: ₹163</div>
          <div>Tue, 18 Mar: ₹129</div>
          <div>Mon, 17 Mar: ₹184</div>
        </div>
      </div>
    </div>
  );
} 