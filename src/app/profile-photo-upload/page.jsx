'use client';
import { useRouter } from 'next/navigation';

export default function ProfilePhotoUpload() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: 32 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 24 }}>Let's click a selfie</h3>
        <div style={{ width: 120, height: 120, background: '#eee', borderRadius: '50%', margin: '0 auto 24px auto' }} />
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16, marginBottom: 24 }}>Open Camera</button>
        <button style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }} onClick={() => router.push('/aadhar-otp-verification')}>Continue</button>
      </div>
    </div>
  );
} 