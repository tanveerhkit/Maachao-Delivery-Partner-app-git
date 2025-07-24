export default function Profile() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Profile</div>
      <div style={{ padding: 24 }}>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Your ratings: ★ 5</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Insurance details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Emergency details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Bank details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>App language: English</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Preferred Language: English</div>
      </div>
    </div>
  );
} 