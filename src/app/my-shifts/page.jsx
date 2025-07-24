'use client';
import { useRouter } from 'next/navigation';

export default function MyShifts() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>My Shifts</div>
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {['Today', 'Sun', 'Mon', 'Tue', 'Wed'].map((d, i) => (
            <div key={i} style={{ flex: 1, background: i === 0 ? '#FFA500' : '#f7f7fa', color: i === 0 ? '#fff' : '#000', borderRadius: 8, padding: 8, textAlign: 'center', fontWeight: 'bold' }}>{d}</div>
          ))}
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Breakfast</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 16 }}>9:00 AM - 12:00 PM <span style={{ color: '#1ca672', fontWeight: 'bold' }}>Booked</span></div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Lunch</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>12:00 PM - 4:00 PM <span style={{ color: '#FFA500' }}>High</span></div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>1:00 PM - 3:00 PM <span style={{ color: '#FFA500' }}>High</span></div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>3:00 PM - 4:00 PM</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Snacks</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>4:00 PM - 7:00 PM</div>
      </div>
    </div>
  );
} 