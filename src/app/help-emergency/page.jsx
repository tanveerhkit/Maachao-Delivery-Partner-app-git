export default function HelpEmergency() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Emergency</div>
      <div style={{ padding: 24 }}>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16, marginBottom: 16 }}>Call Swiggy helpline</button>
        <button style={{ width: '100%', padding: 16, background: '#f7f7fa', color: '#000', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16, marginBottom: 16 }}>Call Police</button>
        <button style={{ width: '100%', padding: 16, background: '#f7f7fa', color: '#000', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16, marginBottom: 16 }}>Call an ambulance</button>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Emergency Details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Insurance Details</div>
      </div>
    </div>
  );
} 