export default function Notifications() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Notifications</div>
      <div style={{ padding: 24 }}>
        <div style={{ fontWeight: 'bold', marginBottom: 16 }}>All</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Not getting order? Go to popular restaurants? <span style={{ color: '#FFA500' }}>View details</span></div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Now Refer Friends to a Different Zone! <span style={{ color: '#FFA500' }}>View details</span></div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Alert: Wrong Action Reported <span style={{ color: '#FFA500' }}>View details</span></div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Daily Incentive: Congratulations! You’ve earned your daily incentive of Rs.45 <span style={{ color: '#FFA500' }}>View details</span></div>
      </div>
    </div>
  );
} 