export default function WrongAction() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Wrong Action Details</div>
      <div style={{ padding: 24 }}>
        <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 16, fontWeight: 'bold', color: '#FFA500' }}>15 Wrong actions in last 30 days</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>T-Shirt / Bag Non-Compliance: 12</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Order Rejections: 2</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Others: 1</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Bag Non-Compliance - Did Not Carry Swiggy Bag (MG-7.1) - ₹50 deducted</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>Order Rejections - Many Rejections/Unassignments (MG-15.6) - Warning issued</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 8 }}>T-Shirt Non-Compliance - Did Not Wear Swiggy T-shirt (MG-6.1) - Warning issued</div>
      </div>
    </div>
  );
} 