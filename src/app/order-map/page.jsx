export default function OrderMap() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Order Map</div>
      <div style={{ padding: 24 }}>
        <div style={{ width: '100%', height: 300, background: '#eee', borderRadius: 12, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#888' }}>
          [Map Placeholder]
        </div>
        <div style={{ background: '#ffdddd', color: '#d32f2f', borderRadius: 8, padding: 16, textAlign: 'center' }}>
          Please get back in your zone to get your next order.
        </div>
      </div>
    </div>
  );
} 