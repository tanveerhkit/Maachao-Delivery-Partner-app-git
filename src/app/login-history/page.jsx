export default function LoginHistory() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Login History</div>
      <div style={{ padding: 24 }}>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Today so far: 0h 0m</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Past login details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>This Week: Mar 17 - Mar 23</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Previous Week: Mar 10 - Mar 16</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Week 10: Mar 03 - Mar 09</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Week 9: Feb 24 - Mar 02</div>
        <div style={{ fontWeight: 'bold', margin: '16px 0 8px 0' }}>Weekly login details</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Friday, Mar 21: 4h 15m</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Thursday, Mar 20: 0h 19m</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Wednesday, Mar 19: 4h 58m</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Tuesday, Mar 18: 5h 22m</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Monday, Mar 17: 6h 29m</div>
      </div>
    </div>
  );
} 