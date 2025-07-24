export default function OfferZone() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Offer Zone</div>
      <div style={{ padding: 24 }}>
        <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 16, fontWeight: 'bold', color: '#FFA500' }}>Daily Incentive (1 of 3)</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Deliver 18 more orders to get ₹145 Incentive</div>
        <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12, marginBottom: 16 }}>
          <div>Trips Count: 0</div>
          <div>Validity: Today</div>
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Conditions</div>
        <ul style={{ color: '#888', marginBottom: 16 }}>
          <li>Login 3hrs 30mins during 12:00 PM to 4:00 PM, valid for: all days</li>
          <li>Login 3hrs 30mins during 7:00 PM to 11:00 PM, valid for: all days</li>
          <li>Do not cancel and skip more than 1 booked slots</li>
          <li>Do not leave more than 1 shift incomplete</li>
          <li>Do not reject more than 1 orders in the day</li>
        </ul>
        <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 16, fontWeight: 'bold', color: '#FFA500' }}>Daily Incentive (2 of 3)</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Deliver 15 more orders to get ₹120 Incentive</div>
      </div>
    </div>
  );
} 