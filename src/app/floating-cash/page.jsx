export default function FloatingCash() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Floating Cash</div>
      <div style={{ padding: 24 }}>
        <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 16, fontWeight: 'bold', color: '#FFA500' }}>₹1,842 Current balance</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Deposit Cash</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>ICICI Cash Deposit Machine</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Novopay Deposit Center</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Airtel Payment Bank</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Transfer Cash</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>UPI Transfer to Swiggy Account</div>
      </div>
    </div>
  );
} 